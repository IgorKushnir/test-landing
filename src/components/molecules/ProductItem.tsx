
import {ProductType} from '@/types/product'
import Image from 'next/image'
import Link from 'next/link'

type Props = {product: ProductType}

export const ProductItem = ({product: {title, price, images, category, id}}: Props) => (
    <li className='basis-[45%] lg:basis-[28%] flex flex-col justify-between gap-4 p-4 border'>
        <div className="flex flex-col justify-between gap-4">
            <div className='w-full h-[150px] md:h-[300px] relative'><Image src={images[0]} alt={title} fill style={{objectFit: "cover"}} /></div>
            <h3 className="text-base font-medium block">{title}</h3>
            <div className='grid grid-cols-2 gap-4'>
                <p className="text-sm font-medium">Price:</p>
                <p className="text-sm font-light">$ {price}</p>
                <p className="text-sm font-medium">Category:</p>
                <p className="text-sm font-light">{category.name}</p>
            </div>
        </div>
        <Link href={`/products/${id.toString()}`}><button
        className='border border-gray-900 rounded-sm py-4 px-6 hover:bg-gray-200'
        >Learn more</button></Link>
    </li>
)