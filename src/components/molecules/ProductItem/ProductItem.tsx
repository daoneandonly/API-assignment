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

  function formatPrice(price: number) {
    const priceWithoutDecimals = price * 100
    const string =  priceWithoutDecimals.toString().slice(0, -2) + ',' + priceWithoutDecimals.toString().slice(-3, -1)
    return string
  }

  return (
      <a href={`product/${id}`} className={styles.product}>
        <div className={styles['product-image']}>
          <img alt={title} src={image} />
        </div>
        <div className={styles.details}>
          <h2 className={styles.title}>
            {title}
          </h2>
          <div className={styles.information}>
            <div className={styles.rating}>{rating.rate}</div>
            <div className={styles.price}>€{formatPrice(price)}</div>
          </div>
          <p className={styles['product-description']}>
            {description}
          </p>
        </div>
      </a>
  )
}

export default ProductItem