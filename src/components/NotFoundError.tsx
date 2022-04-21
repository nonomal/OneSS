import Link from "next/link";

export default function NotFoundError() {
    return (
        <div className="hero">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">233</h1>
                    <p className="py-6 text-2xl">Not Found.</p>
                    <Link href={"/"}><a>
                        <button className="btn btn-primary">Return Home</button>
                    </a></Link>
                </div>
            </div>
        </div>
    )
}