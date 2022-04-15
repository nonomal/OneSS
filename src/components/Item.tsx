import useSWR from "swr";
import Link from "next/link";

import {VscCloudDownload, VscCopy, VscLiveShare, VscOpenPreview, VscSync} from "react-icons/vsc";

import {fetcher} from "@/script/swr_get";
import {itemType} from "@/script/data_type";
import convertB from "@/script/convert_bit";
import CopyButton from "@/components/CopyModal/CopyButton";


export default function Item({user, id}: { user: string, id: string }) {

    const {data, error} = useSWR(`/api/item?user=${user}&id=${id}`, fetcher)

    if (!data) return (
        <div className="hero min-h-screen bg-base-200 overflow-x-auto">
            <div className="animate-pulse hero-content flex-col lg:flex-row">
                <VscSync className={"animate-spin w-20 h-20"}/>
                <div className="text-4xl h-16 font-bold">Loading...</div>
            </div>
        </div>
    )

    if (error || data.status == 233) return (
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
    )

    const {name, size, file, createdDateTime, lastModifiedDateTime, thumbnails}: itemType = data

    return (
        <div className="hero min-h-screen bg-base-200 overflow-x-auto">
            <div className="hero-content flex-col lg:flex-row">
                {thumbnails["0"] && <img src={thumbnails["0"].large.url} alt={'thumbnails'} className="max-w-sm rounded-lg shadow-2xl"/>}
                <div className={'space-y-4 flex flex-col items-center'}>
                    <div className="text-5xl h-16 font-bold truncate">{name}</div>
                    <div className="text-xl">Size: {convertB(size)}</div>
                    <div className="text-2xl font-bold">Created Date Time</div>
                    <div className="text-xl">{createdDateTime}</div>
                    <div className="text-2xl font-bold">Last Modified Date Time</div>
                    <div className="text-xl">{lastModifiedDateTime}</div>
                    {file.hashes && <>
                        <div className="text-2xl font-bold">Quick Xor Hash</div>
                        <div className="text-xl">{file.hashes.quickXorHash}</div>
                    </>}

                    <div className={"btn-group inline"}>
                        <button className={'btn'}>
                            <Link href={`/api/preview?user=${user}&id=${id}`}><a target="_blank"><VscOpenPreview className={"w-6 h-6"}/></a></Link>
                        </button>

                        <CopyButton className={'btn'} name={name} text={`https://${window.location.host}/item/${user}/${id}`}>
                            <VscLiveShare className={'w-6 h-6'}/>
                        </CopyButton>

                        <CopyButton className={'btn'} name={name} text={`https://${window.location.host}/api/item/content?user=${user}&id=${id}`}>
                            <VscCopy className={"w-6 h-6"}/>
                        </CopyButton>

                        <button className={'btn'}>
                            <a target={'_blank'} href={`/api/item/content?user=${user}&id=${id}`} rel="noreferrer"><VscCloudDownload className={"w-6 h-6"}/></a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
