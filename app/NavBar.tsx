'use client';

import Link from 'next/link';
import React from 'react';
import { MdOutlineEventNote } from "react-icons/md";

const NavBar = () => {

    const links = [
        { label: "Home", href: "/" },
        { label: "Your To Do's", href: "/to_dos/list" },
        { label: "New To Do", href: "/to_dos" }
    ]

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href='/'><MdOutlineEventNote/></Link>
        <ul className='flex space-x-6'>
            {links.map(link =>
                <Link
                    key={link.href}
                    className='text-zinc-800 hover:text-zinc-500 transition-colors: true'
                    href={link.href}>{link.label}
                </Link>
            )}
        </ul>
    </nav>
  )
}

export default NavBar