// Styles
import { Search } from '@/components/atoms/Search'
import styles from '@/styles/Nav.module.scss'
import React from 'react'


function Nav(){
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <h1>
          <span>🛒</span>
          Steven&apos;s Webshop
        </h1>

        <Search />
      </nav>
    </div>
  )
}

export default Nav