import {typographyClasses} from '@/lib/typography'
import {ProductType} from '@/types/product'
import Image from 'next/image'
import Link from 'next/link'

type Props = {product: ProductType}

export const ProductItem = ({product: {title, price, images, category, id}}: Props) => (
    <li className='rounded-lg basis-30% flex flex-col gap-4'>
        <Image src={images[0]} alt={title} />
        <h3 className={`${typographyClasses.p1} block`}>{title}</h3>
        <div className='grid grid-cols-2 gap-4'>
            <p className={typographyClasses.p2}>Price:</p>
            <p className={typographyClasses.t2}>$ {price}</p>
            <p className={typographyClasses.p2}>Category:</p>
            <p className={typographyClasses.t2}>{category.name}</p>
        </div>
        <Link href={id.toString()}><button
        className='border-x outline-none border-grey-900 rounded-sm py-4 px-6 '
        >Learn more</button></Link>
    </li>
)