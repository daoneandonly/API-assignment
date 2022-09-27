// API
import { getAllProducts } from '@/api/products'
import { getAllCategories } from '@/api/categories'

// Styles
import styles from '@/styles/Page.module.scss'
import { Footer } from '@/components/organisms/Footer'
import { Nav } from '@/components/organisms/Nav'
import { ProductItem } from '@/components/molecules/ProductItem'
import { GetServerSideProps } from 'next'


// Types\
interface HomeProps {
  data: {
    products: ProductItemProps[]
    categories: string[]
  }
}

const Home = ({
  data
}: HomeProps) => {
  const { 
    products, 
    categories 
  } = data
  
  return (
    <div className={styles.home}>
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

export default Home


export  const getServerSideProps: GetServerSideProps = async (context) => {
  const products = await getAllProducts()
  const categories = await getAllCategories()
  const data = {
    products,
    categories
  }

  console.log(context.params )
  
  return {
    props: { data }
  }
}