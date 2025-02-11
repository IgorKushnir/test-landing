import {CategoryType} from '@/types/category'
import Link from 'next/link'

type Props = {
    categories: CategoryType[]
}

export const Filter = ({categories}: Props) => {
    return (
        <aside className='basis-35% bg-gray-100 p-8 mb-8 md:mb-0'>
        <h3 className="text-sm font-medium mb-4">Filter by category</h3>
        <ul className='pl-0 list-none grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-col gap-4 '>
            {categories.map(category => <Link href={`?category=${category.id}`} key={category.id}>
                <span className="text-sm font-light hover:underline" key={category.id}>{category.name}</span>
            </Link>)}
        </ul>
    </aside>
    )
}