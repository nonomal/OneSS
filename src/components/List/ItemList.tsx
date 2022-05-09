import useSWR from "swr";

import {fetcher} from "@/script/swr_get";
import {itemType} from "@/script/data_type";
import FolderItem from "@/components/List/FolderItem";
import FileItem from "@/components/List/FileItem";
import ListHeader from "@/components/List/ListHeader";
import Quota from "@/components/List/Quota";
import ListLoading from "@/components/List/ListLoading";
import NextLink from "@/components/List/NextLink";
import NotFoundError from "@/components/NotFoundError";


export default function ItemList({user, route, p}: { user: string, route?: string[], p?: boolean }) {
    const {data, error} = useSWR(`/api${p ? '/p' : ''}/children?user=${user}&route=${route ? route.join('/') : ''}`, fetcher)

    if (!data) return (
        <div className={'w-full lg:max-w-7xl px-2 flex flex-col'}>
            {user && <ListHeader user={user} route={route}/>}
            <ListLoading/>
        </div>
    )

    if (error || data.status == 233) return (
        <div className={'w-full lg:max-w-7xl px-2 flex flex-col'}>
            {user && <ListHeader user={user} route={route}/>}
            <NotFoundError/>
        </div>
    )

    return (
        <div className={"w-full lg:max-w-7xl px-2 pb-14 flex flex-col"}>
            <ListHeader user={user} route={route} p={p}/>
            {!route && !p && <Quota user={user}/>}

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
                    {data.value.map(({name, size, id, folder, image, video}: itemType, index: number) => {
                        return (
                            folder
                                ?
                                <FolderItem key={index} user={user} route={route} name={name} size={size} index={index} p={p}/>
                                :
                                <FileItem key={index} user={user} name={name} size={size} id={id} index={index}/>
                        )
                    })}
                    {data['@odata.nextLink'] &&
                        <NextLink user={user} route={route} skiptoken={data['@odata.nextLink'].split('&$skiptoken=')[1]} i={1}/>
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}