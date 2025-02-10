import {MenuLinkType} from '@/types/menuLink';
import Link from 'next/link';

import {typographyClasses} from '@/lib/typography';

type Props = {} & MenuLinkType

export const MenuItem = ({title, link}: Props) => (
    <li className='py-4 px-8'>
        <Link href={link} className="text-white hover:font-semibold hover:text-white hover:decoration-none">
        <span className={typographyClasses.p1} >{title}</span>
        </Link>
    </li>
)