import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import styles from "styles/RightSide.module.scss";

function index() {
  return (
    <div className={styles.RightSideNews}>
      <h4>Latest News</h4>
      <ul>
        <li>
          <span>
            <FaAngleRight />
          </span>
          <Link href="/">
            Arsenal keep rolling, pad Premier League lead with big win vs.
            Palace
          </Link>
        </li>
        <li>
          <span>
            <FaAngleRight />
          </span>
          <Link href="/">
            Arsenal keep rolling, pad Premier League lead with big win vs.
            Palace
          </Link>
        </li>
        <li>
          <span>
            <FaAngleRight />
          </span>
          <Link href="/">
            Arsenal keep rolling, pad Premier League lead with big win vs.
            Palace
          </Link>
        </li>
        <li>
          <span>
            <FaAngleRight />
          </span>
          <Link href="/">
            Arsenal keep rolling, pad Premier League lead with big win vs.
            Palace
          </Link>
        </li>
        <li>
          <span>
            <FaAngleRight />
          </span>
          <Link href="/">
            Arsenal keep rolling, pad Premier League lead with big win vs.
            Palace
          </Link>
        </li>
        <li>
          <span>
            <FaAngleRight />
          </span>
          <Link href="/">
            Arsenal keep rolling, pad Premier League lead with big win vs.
            Palace
          </Link>
        </li>
        <li>
          <span>
            <FaAngleRight />
          </span>
          <Link href="/">
            Arsenal keep rolling, pad Premier League lead with big win vs.
            Palace
          </Link>
        </li>
      </ul>
      <button class="btn">more news</button>
    </div>
  );
}

export default index;
