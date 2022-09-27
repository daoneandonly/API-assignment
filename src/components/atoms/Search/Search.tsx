import router from 'next/router'

// Styles
import styles from '@/styles/Search.module.scss'

// Types
import type { FormEvent } from 'react'

function Search () {

  
  function handleSearch(e: FormEvent) {
    e.preventDefault()
    const searchValue = e.currentTarget.querySelector('input')?.value

    router.push(`search?q=${searchValue}`)

  }

  return (
    <form onSubmit={(e) => { handleSearch(e) }}>
        <input 
          className={styles.search} 
          type="text" 
          placeholder='Search' 
          name='search'
        />
      </form>
  )
}

export default Search