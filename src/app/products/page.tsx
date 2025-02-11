import {Filter} from '@/components/molecules/Filter';
import {Pagination} from '@/components/molecules/Pagination';
import {ProductItem} from '@/components/molecules/ProductItem';

import {apiService} from '@/services/apiService';

//API does not have pages count info
const PAGES_COUNT = 3

export default async function Products(props: {searchParams: Promise<{[key: string]: string | string[] | undefined}>})
{
    const searchParams = await props.searchParams
    const category = searchParams.category
    const page = searchParams.page ? Number(searchParams.page) : 1

    const products = await apiService.getProducts(page, typeof category === 'string' ? category : undefined)
    const categories = await apiService.getCategories()

    return (
        <section>
            <h1 className='text-2xl font-bold mb-16 text-center'>Our products</h1>
            <div className='block md:flex gap-4'>
                <Filter categories={categories.slice(0, 6)} />
                <div className='basis-65%'>
                    <ul className='pl-0 list-none flex gap-8 justify-between flex-wrap mb-8'>
                        {products.map(product => <ProductItem product={product} key={product.id} />)}
                    </ul>
                    <div className='m-auto mb-4'>
                        <Pagination currentPage={page} pagesCount={PAGES_COUNT} basicPath={`/products${category ? `?category=${category}` : ''}`} />
                    </div>
                </div>
            </div>
        </section>
    )
}