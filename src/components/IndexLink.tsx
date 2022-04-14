import customSetting from "@/setting/customSetting";


export default function IndexLink() {
    const link = customSetting.link
    return (
        <>
            {link.mail.enable && <button className={"btn btn-ghost btn-square hover:text-info"}>
                <a href={`mailto:${link.mail.link}`} target={'_blank'} className={'w-8 h-8'} rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="fill-current">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                </a>
            </button>}

            {link.twitter.enable && <button className={"btn btn-ghost btn-square hover:text-info"}>
                <a href={link.twitter.link} target={'_blank'} className={'w-8 h-8'} rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current">
                        <path
                            d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                </a>
            </button>}

            {link.bilibili.enable && <button className={"btn btn-ghost btn-square hover:text-info"}>
                <a href={link.bilibili.link} target={'_blank'} className={'w-8 h-8'} rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" className="fill-current">
                        <path
                            d="M801 237l-51 .002 44-45c10-10 15-22.667 15-38s-5-28-15-38-22.667-15-38-15-28.333 5-39 15l-128 121H436l-129-121c-10-10-22.667-15-38-15s-28 5-38 15-15 22.667-15 38 5 28 15 38l44 45h-51c-46 1.333-83.833 17-113.5 47s-45.167 67.667-46.5 113v346c1.333 49.333 16.833 89.166 46.5 119.499S178 908.667 224 910h570c46-1.333 84-16.833 114-46.5S953.333 796 954 750V397c2-45.333-11.5-83-40.5-113S847 238.333 801 237zm45 506.002c-.667 16-6.504 29.667-17.504 41s-24.5 17-40.5 17h-557c-16 0-29.667-5.667-41-17s-17-25-17-41v-339c.667-16.667 6.334-30.334 17.001-41.001s24.334-16.334 41.001-17.001h557c16.667.667 30.334 6.334 41.001 17.001s16.334 24.334 17.001 41.001v339zm-500.004-282c-16 .667-29.504 6.5-40.504 17.5s-16.833 24.5-17.5 40.5v58c.667 16 6.334 29.5 17.001 40.5s24.334 16.5 41.001 16.5 30.334-5.5 41.001-16.5 16.334-24.5 17.001-40.5v-58c-.667-16-6.5-29.5-17.5-40.5s-24.5-16.833-40.5-17.5zm332.996 0c-16 .667-29.504 6.5-40.504 17.5s-16.833 24.5-17.5 40.5v58c.667 16 6.334 29.5 17.001 40.5s24.334 16.5 41.001 16.5 30.334-5.5 41.001-16.5 16.334-24.5 17.001-40.5v-58c-.667-16-6.5-29.5-17.5-40.5s-24.5-16.833-40.5-17.5z"/>
                    </svg>
                </a>
            </button>}

            {link.youtube.enable && <button className={"btn btn-ghost btn-square hover:text-info"}>
                <a href={link.youtube.link} target={'_blank'} className={'w-8 h-8'} rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current">
                        <path
                            d="M23.499 6.203a3.008 3.008 0 00-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 00-2.088 2.09A31.258 31.26 0 000 12.01a31.258 31.26 0 00.523 5.785 3.008 3.008 0 002.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 002.089-2.09 31.258 31.26 0 00.5-5.784 31.258 31.26 0 00-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z"/>
                    </svg>
                </a>
            </button>}

            {link.github && <button className={"btn btn-ghost btn-square hover:text-info"}>
                <a href={link.github} target={'_blank'} className={'w-8 h-8'} rel="noreferrer">
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-current">
                        <path
                            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                </a>
            </button>}
        </>
    )
}