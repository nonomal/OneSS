import requests
import json

from setting import OneSSApi

list = []


async def s_i(user, route):
    print(route)

    url = '%s/children?user=%s&route=%s' % (OneSSApi.api, user, route)
    r = requests.get(url).json()

    try:
        r['status']
    except:
        status = 1
    else:
        status = r['status']

    if status == 233:
        return

    for i in r['value']:
        try:
            i['folder']
        except:
            await is_file(user, i, route)
        else:
            await s_i(user, '%s/%s' % (route, i['name']))


async def is_file(user, i, route):
    name = i['name']

    content = '%s/item/content?user=%s&id=%s' % (OneSSApi.api, user, i['id'])

    add_file = {'name': name, "content": content, "route": route}
    list.append(add_file)


async def c_index(user_list):
    for user in user_list:
        await s_i(user, '')

    with open('./public/index.json', 'w', encoding='utf-8') as f:
        f.write(json.dumps(list))


