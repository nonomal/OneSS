import axios from "axios";
import {NextApiRequest, NextApiResponse} from "next";

import getToken from "@/script/get_token";
import baseSetting from "@/setting/baseSetting";


const apiItemContent = async (req: NextApiRequest, res: NextApiResponse) => {
    const {user, id} = req.query
    const url = await getContent(user as string, id as string)
    res.redirect(307, url)
}
export default apiItemContent

async function getContent(user: string, id: string) {
    const accessToken = await getToken()
    const url = encodeURI(`${baseSetting.endpoints.graph_endpoint}/users/${user}/drive/items/${id}`)
    try {
        const res = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            params: {
                select: '@microsoft.graph.downloadUrl'
            },
        })
        return res.data['@microsoft.graph.downloadUrl']
    } catch (e) {
        return {status: 233}
    }
}