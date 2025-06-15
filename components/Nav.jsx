"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: 'home',
        path: '/',
    },
    {
        name: 'experience',
        path: '/experience',
    },
    {
        name: 'research interests',
        path: '/research_interests',
    },
    {
        name: 'education',
        path: '/education',
    },
    {
        name: 'publications',
        path: '/publications',
    },
    {
        name: 'projects',
        path: '/projects',
    },

];

const Nav = () => {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <nav className="flex gap-6">
            {links.map((link, index)=>{
                return <Link href={link.path} key={index} 
                className={`${link.path === pathname && "text-accent border-b-2 border-accent"

                } capitalize font-medium hover:text-accent transition-all`} 
                > 
                {link.name}</Link>
            })}
        </nav>
    )
}

export default Nav