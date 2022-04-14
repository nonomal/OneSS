import {useRouter} from 'next/router'

import ItemList from "@/components/ItemList/ItemList";
import Menu from "@/components/Menu/Menu";
import userList from "@/setting/userList";
import PrivateItemList from "@/components/ItemList/PrivateItemList";


export default function UserRoute() {
    const {user, route} = useRouter().query
    const userName = user as string

    return (
        <>
            <Menu userName={userList.nickname[userName] || userName}/>

            <div className={'flex justify-center mb-14'}>
                <PrivateItemList user={user as string} route={route as string[]}/>
            </div>
        </>
    )
}
