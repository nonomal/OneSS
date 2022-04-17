import axios from "axios";
import {NextApiRequest, NextApiResponse} from "next";

import getToken from "@/script/get_token";
import baseSetting from "@/setting/baseSetting";


const apiItem = async (req: NextApiRequest, res: NextApiResponse) => {
    const {user, id} = req.query
    const data = await getItemById(user as string, id as string)
    res.status(200).json(data)
}
export default apiItem

async function getItemById(user: string, id: string) {
    const accessToken = await getToken()
    const url = encodeURI(`${baseSetting.endpoints.graph_endpoint}/users/${user}/drive/items/${id}`)
    try {
        const res = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            params: {
                expand: 'thumbnails',
                select: 'name,size,id,file,createdDateTime,lastModifiedDateTime'
            },
        })
        return res.data
    } catch (e) {
        return {status: 233}
    }
}