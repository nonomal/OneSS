import useSWR from "swr";
import Link from "next/link";
import {useState} from "react";

import {fetcher} from "@/script/swr_get";
import {itemType} from "@/script/data_type";
import FolderItem from "@/components/ItemList/FolderItem";
import FileItem from "@/components/ItemList/FileItem";


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
            <div className="hero">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">233</h1>
                        <p className="py-6 text-2xl">failed to load or not found.</p>
                        <Link href={"/"}><a>
                            <button className="btn btn-primary">Return Home</button>
                        </a></Link>
                    </div>
                </div>
            </div>
        </div>
    )
    return (
        <>
            {data.value.map(({name, size, id, folder, image, video}: itemType, index: number) => {
                return (
                    folder
                        ?
                        <FolderItem key={index + 120 * i} user={user} route={route} name={name} size={size} index={index + 120 * i}/>
                        :
                        <FileItem key={index + 120 * i} user={user} name={name} size={size} id={id} index={index + 120 * i}/>
                )
            })}
            {data['@odata.nextLink'] &&
                <PrivateNextLink user={user} route={route} skiptoken={data['@odata.nextLink'].split('&$skiptoken=')[1]} i={i + 1}/>
            }
        </>

    )

}