import { GetServerSideProps } from 'next'

// API
import { getAllProducts } from '@/api/products'
import { getAllCategories } from '@/api/categories'

// Styles
import styles from '@/styles/Page.module.scss'

// Components
import { Footer } from '../components/organisms/Footer'
import { Nav } from '@/components/organisms/Nav'
import { ProductItem } from '@/components/molecules/ProductItem'


// Types
interface HomePageProps {
  data: {
    products: ProductItemProps[]
    categories: string[]
  }
}

const HomePage = ({
  data
}: HomePageProps) => {
  const { 
    products, 
    categories 
  } = data
  
  return (
    <div className={styles.page}>
      <header>
        <Nav categories={categories} />
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

export default HomePage


export const getServerSideProps: GetServerSideProps = async () => {
  const products = await getAllProducts()
  const categories = await getAllCategories()
  const data = {
    products,
    categories
  }
  
  return {
    props: { data }
  }
}