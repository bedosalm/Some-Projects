import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from "styles/NewsHead.module.scss"
import FieldItem from '../FieldItem/FieldItem';

function NewsHead({img}) {
  return (
    <div className={styles.top_News}>
      <div className={styles.imgContent}>
        <img src={img}/>
      </div>
      <div>
       <FieldItem link="/2" text="ncaa-basketball" />
        <h3>
          <Link href="/1">
          No. 1 Purdue deals with shock of suffering historic upset
          </Link>
        </h3>
      </div>
      <div className={styles.Divider}></div>
    </div>
  )
}



   

export default NewsHead