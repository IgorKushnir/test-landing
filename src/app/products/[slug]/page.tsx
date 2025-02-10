import {typographyClasses} from '@/lib/typography'
import {apiService} from '@/services/apiService'
import {notFound} from 'next/navigation'
import Image from 'next/image'

export default async function Product({params}: {
    params: Promise<{slug: string}>
})
{
    const slug = (await params).slug
    const product = await apiService.getProductById(slug)

    if (!product)
    {
        return notFound()
    }

    return (
        <section>
            <h1 className={typographyClasses.h1}>{product.title}</h1>
            <div className='grid grid-cols-[400px_1fr] gap-8'>
                <div className='flex flex-col gap-4'>
                    {product.images.map((image, index) => <Image src={image} alt={`${product.title}-${index}`} key={index} />)}
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <p className={typographyClasses.p2}>Price:</p>
                    <p className={typographyClasses.t2}>$ {product.price}</p>
                    <p className={typographyClasses.p2}>Category:</p>
                    <p className={typographyClasses.t2}>{product.category.name}</p>
                    <p className={typographyClasses.p2}>Description:</p>
                    <p className={typographyClasses.t2}>{product.description}</p>
                </div>
            </div>
        </section>
    )

}