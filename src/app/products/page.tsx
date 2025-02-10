import {Pagination} from '@/components/molecules/Pagination';
import {ProductItem} from '@/components/molecules/ProductItem';
import {typographyClasses} from '@/lib/typography';
import {apiService} from '@/services/apiService';
import Link from 'next/link';

//API does not have pages count info
const PAGES_COUNT = 10

export default async function Products(props: {searchParams: Promise<{[key: string]: string | string[] | undefined}>})
{
    const searchParams = await props.searchParams
    const query = searchParams.query
    console.log(query)
    const page = 1

    const products = await apiService.getProducts(page)
    const categories = await apiService.getCategories()

    return (
        <section>
            <h1 className={`${typographyClasses.h1} mb-16`}>Our products</h1>
            <div className='flex'>
                <aside className='basis-35%'>
                    <h3 className={typographyClasses.p2}>Filter by category</h3>
                    <ul className='pl-0 list-none flex flex-col gap-4'>
                        {categories.map(category => <Link href={`?category=${category.id}`}>
                            <span className={typographyClasses.t2}>{category.name}</span>
                        </Link>)}
                    </ul>
                </aside>
                <div className='basis-65%'>
                    <ul className='pl-0 list-none flex gap-4 justify-between flex-wrap'>
                        {products.map(product => <ProductItem product={product} key={product.id} />)}
                    </ul>
                    <div className='m-auto'>
                        <Pagination currentPage={page} pagesCount={PAGES_COUNT} basicPath='/products' />
                    </div>
                </div>
            </div>
        </section>
    )
}