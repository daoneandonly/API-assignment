// API
import { getProductsByCategory } from '@/api/products'
import { getAllCategories } from '@/api/categories'

// Styles
import styles from '@/styles/Page.module.scss'
import { Footer } from '@/components/organisms/Footer'
import { Nav } from '@/components/organisms/Nav'
import { ProductItem } from '@/components/molecules/ProductItem'
import { GetServerSideProps } from 'next'


// Types
interface CategoryPageProps {
  data: {
    products: ProductItemProps[]
    categories: string[]
    activeCategory: string
  }
}

const CategoryPage = ({
  data
}: CategoryPageProps) => {
  const { 
    products, 
    categories,
    activeCategory 
  } = data
  
  return (
    <div className={styles.home}>
      <header>
        <Nav categories={categories} activeCategory={activeCategory} />
      </header>

      <main className={styles.main}>
        {/* Products */}
        <div className={styles['product-list']}>
          {products.map((item, idx) => (
            <ProductItem key={idx} {...item} />
          ))}
        </div>
      </main>
    
      <Footer />
    </div>
  )
}

export default CategoryPage


export const getServerSideProps: GetServerSideProps = async (context) => {
  const products = await getProductsByCategory(typeof(context.params?.category) === 'string' ? context.params?.category : '')
  const categories = await getAllCategories()
  const data = {
    products,
    categories,
    activeCategory: context.params?.category
  }
  
  return {
    props: { data }
  }
}
