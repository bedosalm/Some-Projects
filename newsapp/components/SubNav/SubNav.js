import Link from 'next/link'
import React from 'react'
import styles from "styles/Subnav.module.scss";

function SubNav() {
  return (
    <div className={styles.Subnav}>
      <ul>
        <li>
        <Link href="/news">News</Link>
        </li>
        <li>
        <Link href="/scores">Scroes</Link>
        </li>
        <li>
        <Link href="/schedule">Schedule</Link>
        </li>
        <li>
        <Link href="/standings">Standings</Link>
        </li>
      </ul>
    </div>
  )
}

export default SubNav