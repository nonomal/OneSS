import {useRouter} from "next/router";

import Item from "@/components/Item";
import Menu from "@/components/Menu/Menu";
import userList from "@/setting/userList";


export default function ItemUserId() {
    const {user, id} = useRouter().query
    const userName = user as string

    return (
        <>
            <Menu userName={userName}/>

            <Item user={user as string} id={id as string}/>
        </>
    )
}