'use client'
import Link from'next/link'
import {useState} from "react";
import {usePathname} from "next/navigation";

const linkData = [
    {name: 'About', path: '/dashboard/about'},
    {name: 'Settings', path: '/dashboard/setting'}
]

export default function DashboardLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const [ count, setCount ] = useState(0)
    const pathname = usePathname()
    return (
        <div className="border-2 border-dashed border-black p-4 w-1/2 mx-auto mt-4">
            <div className="flex gap-4 font-bold text-lg mb-4">
                {
                    linkData.map((link) => (
                        <Link key={link.path} className={`link ${pathname === link.path ? 'text-purple-500': ''}`} href={link.path}>{link.name}</Link>
                    ))
                }
            </div>
            <h2>Dashboard Layout {count}</h2>
            <button className="bg-black text-white p-2 my-4 rounded-md" onClick={()=> setCount(count + 1)}>Increment</button>
            {children}
        </div>
    );
}
