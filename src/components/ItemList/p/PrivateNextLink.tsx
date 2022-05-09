import useSWR from "swr";
import {useState} from "react";

import {fetcher} from "@/script/swr_get";
import {itemType} from "@/script/data_type";
import PrivateFolderItem from "@/components/ItemList/p/PrivateFolderItem";
import PrivateFileItem from "@/components/ItemList/p/PrivateFileItem";
import NotFoundError from "@/components/NotFoundError";
import customSetting from "@/setting/customSetting";


export default function PrivateNextLink({user, route, skiptoken, i}: { user: string, route?: string[], skiptoken: string, i: number }) {
    let [nextLoading, setNextLoading] = useState(true)
    const {data, error} = useSWR(`/api/p/children?skiptoken=${skiptoken}&user=${user}&route=${route ? route.join('/') : ''}`, fetcher)

    if (nextLoading) {
        return (
            <tr>
                <th></th>
                <div className={'btn btn-outline'} onClick={() => setNextLoading(false)}>Load Next Item</div>
            </tr>
        )
    }


    if (!data) return (
        <tr>
            <th></th>
            <div className={'btn btn-outline loading'} onClick={() => setNextLoading(false)}>Loading...</div>
        </tr>
    )

    if (error || data.status == 233) return (
        <div className={'w-full lg:max-w-7xl px-2 flex flex-col'}>
            <NotFoundError/>
        </div>
    )
    return (
        <>
            {data.value.map(({name, size, id, folder, image, video}: itemType, index: number) => {
                return (
                    folder
                        ?
                        <PrivateFolderItem key={index + customSetting.top * i} user={user} route={route} name={name} size={size} index={index + customSetting.top * i}/>
                        :
                        <PrivateFileItem key={index + customSetting.top * i} user={user} name={name} size={size} id={id} index={index + customSetting.top * i}/>
                )
            })}
            {data['@odata.nextLink'] &&
                <PrivateNextLink user={user} route={route} skiptoken={data['@odata.nextLink'].split('&$skiptoken=')[1]} i={i + 1}/>
            }
        </>

    )

}