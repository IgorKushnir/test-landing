
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
            <h1 className="text-2xl font-bold text-center mb-8">{product.title}</h1>
            <div className='grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8'>
                <div className='flex flex-wrap sm:flex-nowrap lg:flex-col gap-4'>
                    {product.images.map((image, index) => <div className='w-[400px] h-[250px] relative' key={index}><Image src={image} alt={`${product.title}-${index}`} fill key={index} style={{objectFit: "cover"}} /></div>)}
                </div>
                <div className='flex flex-col gap-4 w-full'>
                    <div className='grid grid-cols-2 gap-4'>
                        <p className="text-sm font-medium">Price:</p>
                        <p className="text-sm font-light">$ {product.price}</p>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                    <p className="text-sm font-medium">Category:</p>
                    <p className="text-sm font-light">{product.category.name}</p>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                    <p className="text-sm font-medium">Description:</p>
                    <p className="text-sm font-light">{product.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )

}