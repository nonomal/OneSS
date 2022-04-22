import useSWR from "swr";
import {useState} from "react";
import {useSession} from "next-auth/react"

import {VscKey} from "react-icons/vsc";

import {fetcher} from "@/script/swr_get";
import customSetting from "@/setting/customSetting";
import CopyButton from "@/components/CopyModal/CopyButton";


export default function LimitKey({user, id}: { user: string, id: string }) {
    const [limitTime, setLimitTime] = useState(60000);
    const {data: session} = useSession()
    if (session?.user?.email === customSetting.link.email) {
        return (
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Limit Key</span>
                </label>
                <div className={'input-group'}>
                    <input type="text" placeholder="hour" className={'input input-bordered'} onChange={(e) => {
                        setLimitTime(parseInt(e.target.value) * 3600000);
                    }}/>
                    <GetEncryptKey user={user} id={id} limit={limitTime}/>
                </div>
            </div>
        )
    } else {
        return <></>
    }
}

function GetEncryptKey({user, id, limit}: { user: string, id: string, limit: number }) {
    const {data, error} = useSWR(`/api/p/createKey?user=${user}&id=${id}&limit=${limit}`, fetcher)

    if (!data) return <div className="text-4xl h-16 font-bold">Loading...</div>


    if (error || data.status == 233) return <div className="text-4xl h-16 font-bold">Error...</div>

    return (
        <>
            <CopyButton className={'btn'} name={'EncryptKey'} text={data.key}>
                <VscKey className={"w-6 h-6"}/>
            </CopyButton>
            <CopyButton className={'btn'} name={'EncryptKey Url'} text={`https://${window.location.host}/key/${data.key}`}>
                <div>Url</div>
            </CopyButton>
        </>
    )
}