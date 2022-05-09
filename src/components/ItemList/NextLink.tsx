import useSWR from "swr";
import {useState} from "react";

import {fetcher} from "@/script/swr_get";
import {itemType} from "@/script/data_type";
import FolderItem from "@/components/ItemList/FolderItem";
import FileItem from "@/components/ItemList/FileItem";
import customSetting from "@/setting/customSetting";


export default function NextLink({user, route, skiptoken, i}: { user: string, route?: string[], skiptoken: string, i: number }) {
    let [nextLoading, setNextLoading] = useState(true)
    const {data, error} = useSWR(`/api/children?skiptoken=${skiptoken}&user=${user}&route=${route ? route.join('/') : ''}`, fetcher)

    if (nextLoading) {
        return (
            <tr>
                <th></th>
                <div className={'btn btn-outline w-full'} onClick={() => setNextLoading(false)}>Load More</div>
            </tr>
        )
    }


    if (!data) return (
        <tr>
            <th></th>
            <div className={'btn btn-outline loading w-full'} onClick={() => setNextLoading(false)}>Loading...</div>
        </tr>
    )

    if (error || data.status == 233) return (
        <tr>
            <th></th>
            <div className={'btn btn-disabled w-full'} tabIndex={-1} role="button" aria-disabled="true">failed to load or not found.</div>
        </tr>
    )

    return (
        <>
            {data.value.map(({name, size, id, folder, image, video}: itemType, index: number) => {
                return (
                    folder
                        ?
                        <FolderItem key={index + customSetting.top * i} user={user} route={route} name={name} size={size} index={index + customSetting.top * i}/>
                        :
                        <FileItem key={index + customSetting.top * i} user={user} name={name} size={size} id={id} index={index + customSetting.top * i}/>
                )
            })}
            {data['@odata.nextLink'] &&
                <NextLink user={user} route={route} skiptoken={data['@odata.nextLink'].split('&$skiptoken=')[1]} i={i + 1}/>
            }
        </>
    )
}