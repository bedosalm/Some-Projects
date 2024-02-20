import Link from 'next/link'
import React from 'react'
import styles from "styles/Cards.module.scss"

function Cards({text,link,img}) {
  return (
    <div className='col-sm-12 col-md-4 col-lg-4'>
    <Link href={link}>
      <div className={styles.cardContent}>
        <div className={styles.imgContent}>
          <img src={img} />
        </div>
        <h5>{text}</h5>
      </div>
    </Link>
    </div>
  )
}

export default Cards