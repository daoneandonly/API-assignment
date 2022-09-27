import Link from 'next/link'

// Components
import { SearchInput } from '@/components/atoms/SearchInput'

// Styles
import styles from '@/styles/Nav.module.scss'

// Types

interface NavProps {
  categories: string[]
  activeCategory?: string
}

function Nav({
  categories,
  activeCategory
}: NavProps) {

  function capitalizeFirstLetter (word: string) {
    return word.charAt(0).toUpperCase()  + word.slice(1)
  }

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <>
          <h1>
            <Link href="/">
              <a className={styles.title}>
                <p>🛒</p>
                <p>Steven&apos;s Webshop</p>
              </a>
            </Link>
          </h1>

          {categories.map((category, idx) => (
              <Link href={`/category/${encodeURIComponent(category)}`} key={idx}>
                <a className={`
                  ${styles.link}
                  ${activeCategory === category ? styles.active : ''}`}
                >
                  {capitalizeFirstLetter(category)}
                </a>
              </Link>
            )
          )}
          <SearchInput />
        </> 
      </nav>
    </div>
  )
}

export default Nav