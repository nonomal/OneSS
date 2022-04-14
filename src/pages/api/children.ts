import axios from "axios";
import type {NextApiRequest, NextApiResponse} from 'next'

import getToken from "@/script/get_token";
import baseSetting from "@/setting/baseSetting";


const children = async (req: NextApiRequest, res: NextApiResponse) => {
    const {user, route} = req.query
    const data = await getChildrenByRoute(user as string, route ? `/${route}` : '')
    res.status(200).json(data)
}
export default children

async function getChildrenByRoute(user: string, route: string = '') {
    const accessToken = await getToken()
    const url = encodeURI(`${baseSetting.endpoints.graph_endpoint}/users/${user}/drive/root:${baseSetting.folder}${route}:/children`)

    try {
        const res = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            params: {
                expand: 'thumbnails',
                select: 'name,size,id,folder,file,image,video',
            },
        })
        return res.data.value
    } catch (e) {
        return {status: 233}
    }
}