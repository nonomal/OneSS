import customSetting from "@/setting/customSetting";


export default function IndexLink() {

    function CreateIcon(v: any, i: number) {
        return (
            v.enable &&
            <button key={i} title={v.name} className={"btn btn-ghost btn-square hover:text-info"}>
                <a href={v.link} target={'_blank'} className={'w-8 h-8'} rel="noreferrer">
                    {v.icon}
                </a>
            </button>
        )
    }

    return (
        <>
            <button title={'email'} className={"btn btn-ghost btn-square hover:text-info"}>
                <a href={`mailto:${customSetting.email}`} target={'_blank'} className={'w-8 h-8'} rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="fill-current">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                </a>
            </button>

            {customSetting.socialLink.map((value, index) => {
                return CreateIcon(value, index)
            })}
        </>
    )
}
