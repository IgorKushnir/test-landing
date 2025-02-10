import {menuService} from '@/services/menuService';
import {MenuItem} from '../atoms/MenuItem';


export const Footer = () => (
    <footer className='bg-grey-900 py-8 px-16'>
        <nav>
            <ul className='pl-0 flex justify-center items-center gap-4'>
                {
                    menuService().map(({title, link}) => <MenuItem key={link} title={title} link={link} />)
                }
            </ul>
        </nav>
    </footer>
)