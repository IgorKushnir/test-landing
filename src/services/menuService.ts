import {MenuLinkType} from '@/types/menuLink';

export const menuService = (): MenuLinkType[] => ([
    {
        title: "Home",
        link: '/'
    },
    {
        title: "Products",
        link: "/products",
    },
    {
        title: "About",
        link: "/about"
    },
    {
        title: "Contact",
        link: "/contact"
    }
])