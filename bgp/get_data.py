import pickle
import os
from datetime import datetime, timedelta
# import matplotlib.pyplot as plt
# import numpy as np


START_DATE = "2023-05-25 02:50:00"
END_DATE = "2023-05-25 03:50:00 UTC"
DATA_DIR = os.getcwd() + '/data'


with open(f'{DATA_DIR}/bgp_{START_DATE}_{END_DATE}.pickle', "rb") as f:
    objects = pickle.load(f)

    for obj in objects:
        # if obj["router"] != NULL:
        print(obj)
        exit()
    
    
    # dt_object = datetime.fromtimestamp(objects[0]['time'])
    # print(dt_object)
    # print(dt_object.hour)
    # print(dt_object.minute)

    # Extract the dates from the list of objects
    # dates = [datetime.fromtimestamp(obj['time']) for obj in objects]

    # ypoints = np.zeros(288)
    # # xpoints = np.zeros(288)

    # for date in dates:
    #     hour = date.hour
    #     minute = date.minute
    #     time = int((date.hour*60+minute)/5)
    #     # print(hour)
    #     # print(minute)
    #     print(time)
    #     ypoints[time] = ypoints[time] + 1

    # plt.plot(ypoints)
    # plt.show()