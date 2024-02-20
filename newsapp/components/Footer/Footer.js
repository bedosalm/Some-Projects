import Link from 'next/link'
import React from 'react'
import Social from '../Social/Social'

function Footer() {
  return (
    <div className='container'>
      <div className='FooterContent'>
       <h1>the sporting news</h1>
       <Social />
       <ul>
        <li>
          <Link href="/">
            about us
          </Link>
        </li>
        <li>
          <Link href="/">
            Contact us
          </Link>
        </li>
        <li>
          <Link href="/">
            careers
          </Link>
        </li>
        <li>
          <Link href="/">
           Privacy policy
          </Link>
        </li>
       </ul>
       <p>Copyright © 2023 Sporting News Holdings Limited. All rights reserved.</p>
      </div>
      <style jsx>{`
        .FooterContent{
          width:50%;
          margin:0 auto;
          text-align:center;
          padding:20px 0;
        }
        .FooterContent h1{
          text-transform:capitalize;
        }
        .FooterContent  ul{
          padding-left:0
        }
        .FooterContent  ul li{
          display:inline-block;
          text-transform:capitalize;
          margin:5px;
        }

      `}</style>
      <style global jsx>{`
        .FooterContent ul li a{
          color:#ccc !important;
          font-size: .8125rem;
        }
        .FooterContent ul li a:hover{
          color:#14328b !important;
        }
      `}</style>
    </div>
  )
}

export default Footer