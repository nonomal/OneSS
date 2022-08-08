import asyncio
import datetime
import requests

from index import c_index
from setting import OneSSApi

if __name__ == '__main__':
    user_list = requests.get('%s/users' % OneSSApi.api).json()['users']
    loop = asyncio.get_event_loop()
    loop.run_until_complete(c_index(user_list))
    loop.close()

    now = datetime.datetime.now()

#     with open('./public/time.txt', 'w') as f:
#         f.write(str(now))

    print(now)
