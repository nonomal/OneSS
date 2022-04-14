import useSWR from "swr";
import Link from "next/link";

import {fetcher} from "@/script/swr_get";
import {itemType} from "@/script/data_type";
import FolderItem from "@/components/ItemList/FolderItem";
import FileItem from "@/components/ItemList/FileItem";
import ListHeader from "@/components/ItemList/ListHeader";
import Quota from "@/components/ItemList/Quota";
import ListLoading from "@/components/ItemList/ListLoading";


export default function PrivateItemList({user, route}: { user: string, route?: string[] }) {
    const {data, error} = useSWR(`/api/p/children?user=${user}&route=${route ? route.join('/') : ''}`, fetcher)

    if (!data) return (
        <div className={'w-full lg:max-w-7xl px-2 flex flex-col'}>
            {user && <ListHeader user={user} route={route}/>}
            <ListLoading/>
        </div>
    )

    if (error || data.status == 233) return (
        <div className={'w-full lg:max-w-7xl px-2 flex flex-col'}>
            {user && <ListHeader user={user} route={route}/>}
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
        <div className={"w-full lg:max-w-7xl px-2 pb-14 flex flex-col"}>
            <ListHeader user={user} route={route}/>

            <div className="overflow-x-auto w-full">
                <table className="table table-compact w-full">
                    <thead>
                    <tr>
                        <th className={'w-20'}>
                            <label className={'flex items-center justify-end gap-2 text-xl'}>N
                                {/*<input type="checkbox" className="checkbox"/>*/}
                            </label></th>
                        <th className={'text-xl capitalize w-[1000px]'}>name</th>
                        <th className={'text-xl capitalize w-32 text-center'}>size</th>
                        <th className={'text-xl capitalize w-48 text-center'}>action</th>
                    </tr>
                    </thead>

                    <tbody>
                    {data.map(({name, size, id, folder, image, video}: itemType, index: number) => {
                        return (
                            folder
                                ?
                                <FolderItem key={index} user={user} route={route} name={name} size={size} index={index}/>
                                :
                                <FileItem key={index} user={user} name={name} size={size} id={id} index={index}/>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}