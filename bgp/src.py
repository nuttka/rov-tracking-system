import pybgpstream
import pickle
import os
import ipaddress

FILTER = 'prefix exact {}'
PREFIX_LIST = [
        "184.164.224.0/19^19-24",
        "204.9.168.0/22^22-24",
        "138.185.228.0/22^22-24"
    ]
RECORD_TYPE = "updates"

START_DATE = "2023-04-25 02:50:00"
END_DATE = "2023-04-25 22:10:00 UTC"



DATA_DIR = os.getcwd() + '/data'
os.makedirs(DATA_DIR, exist_ok=True)
elems = []


def generate_prefix_list():
    prefixes = []

    for prefix in PREFIX_LIST:
        network_address = prefix.split('^')[0]
        network = ipaddress.IPv4Network(network_address)

        subnets = []
        subnets.extend(network.subnets(prefixlen_diff=24 - network.prefixlen))

        subnets = list(dict.fromkeys(subnets))
        for subnet in subnets:
            prefixes.append(subnet)

    return prefixes


class BGPReader():
    def __init__(self, prefix_list):
        self.prefix_list = prefix_list
        self.cache_dir = os.getcwd() + '/cache'
        os.makedirs(self.cache_dir, exist_ok=True)


    def get_obj(self, elem):
        obj = {
            "record_type": elem.record_type,
            "type": elem.type,
            "time": elem.time,
            "project": elem.project,
            "collector": elem.collector,
            "router": elem.router,
            "router_ip": elem.router_ip,
            "peer_asn": elem.peer_asn,
            "peer_address": elem.peer_address,
            "prefix": elem.fields['prefix'] if "prefix" in elem.fields else None,
            "next-hop": elem.fields['next-hop'] if "next-hop" in elem.fields else None,
            "as-path": elem.fields['as-path'] if "as-path" in elem.fields else None,
            "communities": elem.fields['communities'] if "communities" in elem.fields else None,
            "old-state": elem.fields['old-state'] if "old-state" in elem.fields else None,
            "new-state": elem.fields['new-state'] if "new-state" in elem.fields else None
        }

        return obj



    def read(self):
        stream = pybgpstream.BGPStream(
            from_time=START_DATE, until_time=END_DATE,
            record_type=RECORD_TYPE,
        )
        
        stream.set_data_interface_option("broker", "cache-dir", self.cache_dir)

        for prefix in self.prefix_list:
            stream.stream.parse_filter_string(FILTER.format(prefix))

        for elem in stream:
            obj = self.get_obj(elem)
            elems.append(obj)


if __name__ == "__main__":
    prefix_list = generate_prefix_list()
    bgpReader = BGPReader(prefix_list)
    bgpReader.read()

    # print("saving..")

    print(elems)

    with open(f'{DATA_DIR}/bgp_{START_DATE}_{END_DATE}.pickle', 'wb') as fp:
        pickle.dump(elems, fp)
