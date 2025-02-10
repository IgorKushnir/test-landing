import {typographyClasses} from '@/lib/typography'
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
        {pagesArray.map(pageNumber => <Link href={`${basicPath}?page=${pageNumber}`}><li className={`w-sm h-sm flex justify-center items-center bg-white hover:bg-grey-200 ${pageNumber === currentPage ? 'bg-grey-200' : ''}`}><span className={pageNumber === currentPage ? typographyClasses.p2 : typographyClasses.t2}>{pageNumber}</span></li></Link>)}
    </ul>
}