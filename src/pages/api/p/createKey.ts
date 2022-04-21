import {NextApiRequest, NextApiResponse} from 'next'
import {getSession} from "next-auth/react"

import {encrypt, nameHmacSHA512} from "@/script/crypto";


const apiPrivateCreateKey = async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({req})
    if (session?.user?.name === nameHmacSHA512) {
        const {user, id, time, limit} = req.query
        const DESKey = encrypt(`${user}...${id}...${time}...${limit}`, process.env.PRIVATE_TOKEN!)
        res.status(200).json({key: DESKey})
    } else {
        res.status(200).json({status: 233})
    }
}
export default apiPrivateCreateKey
