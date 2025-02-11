
import Link from 'next/link'

type Props = {
    pagesCount: number
    currentPage: number
    basicPath: string
}

export const Pagination = ({pagesCount, currentPage, basicPath}: Props) =>
{
    const pagesArray = new Array(pagesCount).fill(' ').map((_, index) => index + 1)

    return <ul className='flex justify-center items-center gap-4'>
        {pagesArray.map(pageNumber => 
        <Link href={`${basicPath}${basicPath.includes('?') ? '&' : '?'}page=${pageNumber}`} key={pageNumber}>
            <li className={`w-[24px] h-[24px] flex justify-center items-center bg-white border hover:bg-gray-200 ${pageNumber === currentPage ? 'bg-gray-200' : ''}`}>
                    <span 
                    className={pageNumber === currentPage ? 'text-sm font-medium' : "text-sm font-light"}>{pageNumber}
                    </span>
            </li>
        </Link>)}
    </ul>
}