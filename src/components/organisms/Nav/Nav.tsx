import Link from 'next/link'

// Components
import { Search } from '@/components/atoms/Search'

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
              <a>
                <span>🛒</span>
                Steven&apos;s Webshop
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
          <Search />
        </> 
      </nav>
    </div>
  )
}

export default Nav