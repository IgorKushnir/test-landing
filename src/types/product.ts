import {CategoryType} from './category'

export type ProductType = {
    id: number
    title: string
    price: number
    description: string
    images: string[]
    creationAt: string,
    updatedAt: string
    category: CategoryType
}