'use client'
import { usePathname } from 'next/navigation'

import {MenuLinkType} from '@/types/menuLink';
import Link from 'next/link';

type Props = {} & MenuLinkType

export const MenuItem = ({title, link}: Props) => {
    const pathname = usePathname()

    return (
    <li className='py-4 px-8'>
        <Link href={link} className="text-white">
        <span className={`text-base font-medium ${link === pathname ? 'underline' : ''}`}>{title}</span>
        </Link>
    </li>
)}