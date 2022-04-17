import {NextApiRequest, NextApiResponse} from "next";

import userList from "@/setting/userList";


const apiUsers = async (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(userList)
}
export default apiUsers