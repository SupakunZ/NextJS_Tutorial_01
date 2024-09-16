import React from 'react'
import styles from './page.module.css'

const Layout = ({ children }) => {
  return (
    <div>
      <h1 className={styles.mainTitle}>Our Works</h1>
      {children}
    </div>
    //layout ที่แสดงทุกหน้า ใน portfolio
  )
}

export default Layout
