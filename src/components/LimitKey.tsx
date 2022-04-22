import useSWR from "swr";
import {useState} from "react";
import {useSession} from "next-auth/react"

import {VscKey} from "react-icons/vsc";

import {fetcher} from "@/script/swr_get";
import customSetting from "@/setting/customSetting";
import CopyButton from "@/components/CopyModal/CopyButton";


export default function LimitKey({user, id}: { user: string, id: string }) {
    const [limitTime, setLimitTime] = useState(0);
    const {data: session} = useSession()
    if (session?.user?.email === customSetting.link.email) {
        return (
            <tr>
                <td>Limit Key(day)</td>
                <td>
                    <div className="form-control">
                        <div className={'input-group'}>
                            <input type="text" placeholder="day" className={'input input-bordered'} onChange={(e) => {
                                setLimitTime(parseInt(e.target.value));
                            }}/>
                            <GetEncryptKey user={user} id={id} limit={limitTime}/>
                        </div>
                    </div>
                </td>
            </tr>
        )
    } else {
        return <></>
    }
}

function GetEncryptKey({user, id, limit}: { user: string, id: string, limit: number }) {
    const {data, error} = useSWR(`/api/p/createKey?user=${user}&id=${id}&limit=${limit}`, fetcher)

    if (!data) return <div>Loading...</div>


    if (error || data.status == 233) return <div>Error...</div>

    return (
        <>
            <CopyButton className={'btn'} name={'Limit Key'} text={data.key}>
                <VscKey className={"w-6 h-6"}/>
            </CopyButton>
            <CopyButton className={'btn'} name={'Limit Key Url'} text={`https://${window.location.host}/key/${data.key}`}>
                <div>Url</div>
            </CopyButton>
        </>
    )
}