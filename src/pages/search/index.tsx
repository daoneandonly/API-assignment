import { GetServerSideProps } from 'next'

// API
import { getAllProducts } from '@/api/products'
import { getAllCategories } from '@/api/categories'

// Styles
import styles from '@/styles/Page.module.scss'

// Components
import { Footer } from '@/components/organisms/Footer'
import { Nav } from '@/components/organisms/Nav'
import { ProductItem } from '@/components/molecules/ProductItem'


// Types
interface SearchPageProps {
  data: {
    products: ProductItemProps[]
    categories: string[]
    query: string
  }
}

const SearchPage = ({
  data
}: SearchPageProps) => {
  const { 
    products, 
    categories,
    query
  } = data
  
  return (
    <div className={styles.page}>
      <header>
        <Nav categories={categories} />
      </header>

      <main className={styles.main}>
        {/* Products */}
        <div className={styles['product-list']}>
          {products.length > 0 ? (
            products.map((item, idx) => (
              <ProductItem key={idx} {...item} />
            ))
          ) : (
            <p className={styles.error}>{`No Items found when searching for "${query}" 😟`}</p>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default SearchPage


export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context
  const q = query.q?.toString() ?? ''
  const products = await getAllProducts()

  const filteredProducts = products.filter((item: ProductItemProps) => {
    const lowerCaseTitle = item.title.toLowerCase()
    return lowerCaseTitle.includes(q.toLowerCase())
  })

  const categories = await getAllCategories()
  const data = {
    products: filteredProducts,
    categories,
    query: q
  }
  
  return {
    props: { data }
  }
}