import {useRouter} from "next/router";

import Menu from "@/components/Menu/Menu";
import EncryptKeyItem from "@/components/EncryptKeyItem";


export default function EncryptKey() {
    const {encryptKey} = useRouter().query
    return (
        <>
            <Menu userName={'EncryptKeyItem'}/>

            <div className={'flex justify-center'}>
                <EncryptKeyItem encryptKey={encodeURIComponent(encryptKey as string)}/>
            </div>
        </>
    )
}