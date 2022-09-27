import Image from 'next/image'

// Styles
import styles from '@/styles/ProductItem.module.scss'

// Types

declare global {
  interface ProductItemProps {
    id: number
    title: string
    category: string
    description: string
    image: string
    price: number
    rating: {
      count: number
      rate: number
    }
  }
}

function ProductItem({
  id,
  title,
  category,
  description,
  image,
  price,
  rating,
}: ProductItemProps){
  return (
      <a href={`product/${id}`} className={styles.product}>
        <div className={styles['product-image']}>
          <img alt={title} src={image} />
        </div>
        <h2 className={styles.title}>
          {title}
        </h2>
        <p className={styles['product-description']}>
          {description}
        </p>
      </a>
  )
}

export default ProductItem