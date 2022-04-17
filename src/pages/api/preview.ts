import axios from "axios";
import {NextApiRequest, NextApiResponse} from 'next'

import getToken from "@/script/get_token";
import baseSetting from "@/setting/baseSetting";


const apiPreview = async (req: NextApiRequest, res: NextApiResponse) => {
    const {user, id} = req.query
    const url = await getItemPreviewUrl(user as string, id as string)
    res.redirect(307, url)
}
export default apiPreview

async function getItemPreviewUrl(user: string, id: string) {
    const accessToken = await getToken()
    const url = encodeURI(`${baseSetting.endpoints.graph_endpoint}/users/${user}/drive/items/${id}/preview`)
    try {
        const res = await axios.post(url, {}, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
        })
        return res.data.getUrl
    } catch (e) {
        return {status: 233}
    }
}