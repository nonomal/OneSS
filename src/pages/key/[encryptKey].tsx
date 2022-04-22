import {useRouter} from "next/router";

import Menu from "@/components/Menu/Menu";
import LimitKeyItem from "@/components/LimitKeyItem";


export default function EncryptKey() {
    const {encryptKey} = useRouter().query
    return (
        <>
            <Menu userName={'Limit Key Item'}/>

            <div className={'flex justify-center'}>
                <LimitKeyItem encryptKey={encodeURIComponent(encryptKey as string)}/>
            </div>
        </>
    )
}