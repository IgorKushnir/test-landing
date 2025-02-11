import {CategoryType} from '@/types/category'
import {ProductType} from '@/types/product'

class ApiService {
PRODUCTS_LIMIT = 10

    async getProducts(page: number, categoryId?: string): Promise<ProductType[]> {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?offset=${(page - 1) * this.PRODUCTS_LIMIT}&limit=${this.PRODUCTS_LIMIT}${categoryId ? `&categoryId=${categoryId}` : ''}`)
        const products = await response.json()

        return products
     }

     async getProductById(productId: string): Promise<ProductType> {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`)
        const product = await response.json()

        return product
     }

     async getCategories(): Promise<CategoryType[]> {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`)
        const categories = await response.json()

        return categories
     }
 }

export  const apiService = new ApiService()