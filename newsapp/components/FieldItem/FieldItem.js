import React from 'react';
import Link from 'next/link';
import { BiCaretRight } from "react-icons/bi";

function Fielditem({link , text}) {
  return (
    <>
    <Link href={link}>
    <p>
      {text}
      <span><BiCaretRight/></span>
    </p>

    </Link>
    <style jsx>{`
     p {
        position: relative;
        width: auto;
        display: inline-block;
        background-color:red;
        padding: 2px 15px 2px 9px;
        margin: 17px 0 0; 
        color:#fff
     }
          span{
            position: absolute;
            font-size: 37px;
            right: -11px;
            line-height: 0px;
            top: -3px;
            transition: all .5s ease-in-out;
            color: red;
            }
           p:hover  span{         
            font-size: 52px;
            right: -32px;
            top: -12px;
            }
      `}</style>
    </>
  )
}

export default Fielditem