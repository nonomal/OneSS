import useSWR from "swr";

import {VscCloudDownload, VscSync} from "react-icons/vsc";

import {fetcher} from "@/script/swr_get";
import convertB from "@/script/convert_bit";
import NotFoundError from "@/components/NotFoundError";

export default function LimitKeyItem({encryptKey}: { encryptKey: string }) {
    const {data, error} = useSWR(`/api/resolveKey?key=${encryptKey}`, fetcher)

    if (!data) return (
        <div className="hero min-h-screen bg-base-200 overflow-x-auto">
            <div className="animate-pulse hero-content flex-col lg:flex-row">
                <VscSync className={"animate-spin w-20 h-20"}/>
                <div className="text-4xl h-16 font-bold">Loading...</div>
            </div>
        </div>
    )

    if (error || data.status == 233) return <NotFoundError/>


    return (
        <div className={"w-full lg:max-w-7xl px-2 flex flex-col"}>
            {data['thumbnails']["0"] && <div className={'w-full h-40 bg-cover bg-center rounded-xl'} style={{backgroundImage: `url(${data['thumbnails']["0"].large.url})`}}/>}
            <div className=" flex-col lg:flex-row">
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <tbody>
                        <tr>
                            <td>Name</td>
                            <td className={'text-2xl font-bold w-full'}>{data['name']}</td>
                        </tr>
                        <tr>
                            <td>Size</td>
                            <td>{convertB(data['size'])}</td>
                        </tr>
                        {data['file'].hashes && <tr>
                            <td>Quick Xor Hash</td>
                            <td>{data['file'].hashes.quickXorHash}</td>
                        </tr>}
                        <tr>
                            <td>Actions</td>
                            <td>
                                <button className={'btn'}>
                                    <a target={'_blank'} href={data['@microsoft.graph.downloadUrl']} rel="noreferrer"><VscCloudDownload className={"w-6 h-6"}/></a>
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}