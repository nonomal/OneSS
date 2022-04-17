import axios from "axios";
import {NextApiRequest, NextApiResponse} from 'next'
import {getSession} from "next-auth/react"

import getToken from "@/script/get_token";
import baseSetting from "@/setting/baseSetting";
import customSetting from "@/setting/customSetting";


const apiPrivateChildren = async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({req})
    if (session?.user?.name === customSetting.siteName && session?.user?.email === customSetting.link.email) {
        const {user, route, skiptoken = ''} = req.query
        const data = await getPrivateChildrenByRoute(user as string, route ? `/${route}` : '', skiptoken as string)
        res.status(200).json(data)
    } else {
        res.status(200).json({status: 233})
    }
}
export default apiPrivateChildren

async function getPrivateChildrenByRoute(user: string, route: string = '', skiptoken?: string) {
    const accessToken = await getToken()
    const url = encodeURI(`${baseSetting.endpoints.graph_endpoint}/users/${user}/drive/root:${baseSetting.private_folder}${route}:/children`)

    try {
        const res = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            params: {
                top: 120,
                expand: 'thumbnails',
                select: 'name,size,id,folder,file,image,video',
                skiptoken: `${skiptoken && skiptoken}`
            },
        })
        return res.data
    } catch (e) {
        return {status: 233}
    }
}