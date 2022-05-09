import {useRouter} from 'next/router'

import Menu from "@/components/Menu/Menu";
import ItemList from "@/components/List/ItemList";


export default function UserRoute() {
    const {user, route} = useRouter().query
    const userName = user as string

    return (
        <>
            <Menu userName={userName}/>

            <div className={'flex justify-center mb-14'}>
                <ItemList user={user as string} route={route as string[]} p={true}/>
            </div>
        </>
    )
}
