import {menuService} from '@/services/menuService';
import {MenuItem} from '../atoms/MenuItem';

export const Header = async () => {
    return (
    <header className='bg-gray-900'>
        <nav className='py-2 px-4 md:px-16 max-w-7xl m-auto'>
            <ul className='pl-0 list-none flex justify-center items-center gap-4 flex-wrap'>
                {
                    menuService().map(({title, link}) => <MenuItem key={link} title={title} link={link} />)
                }
            </ul>
        </nav>
    </header>
)}