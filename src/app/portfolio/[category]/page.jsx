import React from 'react'
import styles from "./page.module.css";
import { items } from './data'
import Image from 'next/image';
import Button from '@/components/Button/Button';


const getData = (category) => {
  const data = items[category] // เหมือน items.category
  // console.log('Result --> ', items['websites'])
  if (data) {
    return data;
  }
}

const Category = ({ params }) => {

  const data = getData(params.category)

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src={item.image}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Category