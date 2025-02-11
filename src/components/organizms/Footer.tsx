import {menuService} from '@/services/menuService';
import {MenuItem} from '../atoms/MenuItem';


export const Footer = () => (
    <footer className='bg-gray-900 py-8 px-4 md:px-16  flex justify-between gap-8 flex-wrap'>
        <nav>
            <ul className='pl-0 flex justify-between flex-wrap md:grid md:grid-cols-2 gap-4'>
                {
                    menuService().map(({title, link}) => <MenuItem key={link} title={title} link={link} />)
                }
            </ul>
        </nav>
        <p className="text-base font-light text-white">Since 2024</p>
    </footer>
)