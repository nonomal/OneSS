import {useRouter} from 'next/router'

import ItemList from "@/components/List/ItemList";
import Menu from "@/components/Menu/Menu";


export default function UserIndex() {
    const {user} = useRouter().query
    const userName = user as string

    return (
        <>
            <Menu userName={userName}/>

            <div className={'flex justify-center mb-14'}>
                <ItemList user={user as string}/>
            </div>
        </>
    )
}
