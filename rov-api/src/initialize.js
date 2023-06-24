const bgpRepository = require('./repositories/bgp.repository');
const asRepository = require('./repositories/autonomous.system.repository');
const experimentRepository = require('./repositories/experiment');


async function initialize() {
    // for (var i=0; i<100; i++) {
    //     params = {
    //         asn: i,
    //         name: "teste"
    //     }
    //     asRepository.create(params)
    // }

    
    for (var i=100; i<100000; i++) {
        params = {
            id: i,
            record_type: 'update',
            type: 'teste',
            time: 'teste',
            project: 'teste',
            collector: 'teste',
            router: 'teste',
            router_ip: 'teste',
            peer_asn: 'teste',
            peer_address: "94.101.60.146",
            prefix: "147.28.241.0/24",
            next_hop: 'teste',
            as_path: 'teste',
            communities: 'teste',
            old_state: 'teste',
            new_state: 'teste'
        }

        await bgpRepository.create(params)
    }
    
    for (var i=100; i<100000; i++) {
        params = {
            id: i,
            day: "2017-09-01",
            peer_asn: 'teste',
            peer_address: "147.28.7.1",
            anchor_prefix: "147.28.248.0/24",
            experiment_prefix: "147.28.248.0/24",
        }
        await experimentRepository.create(params)
    }
}



module.exports = {
    initialize
}; 