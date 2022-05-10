import axios from "axios";
import {NextApiRequest, NextApiResponse} from 'next'

import {decrypt} from "@/script/crypto";
import getToken from "@/script/get_token";
import baseSetting from "@/setting/baseSetting";


const apiResolveKey = async (req: NextApiRequest, res: NextApiResponse) => {
    const {key} = req.query
    const encrypted = decrypt(key as string, process.env.PRIVATE_TOKEN!).split('*')

    if ((new Date()).getTime() - parseInt(encrypted[2]) <= parseInt(encrypted[3]) * 86400000) {
        const data = await getContent(encrypted[0], encrypted[1])
        res.status(200).json(data)
    } else {
        res.status(200).json({status: 233})
    }
}
export default apiResolveKey

async function getContent(user: string, id: string) {
    const accessToken = await getToken()
    const url = encodeURI(`${baseSetting.endpoints.graph_endpoint}/users/${user}/drive/items/${id}`)
    try {
        const res = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            params: {
                expand: 'thumbnails',
                select: 'name,size,file,id,@microsoft.graph.downloadUrl'
            },
        })
        const tmp = res.data
        delete tmp.id
        return tmp
    } catch (e) {
        return {status: 233}
    }
}