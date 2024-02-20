import React from 'react'

function Cardslide() {
  return (
    <div>
    <a>
    <p>
    <img  src="logo1.png"/>
    <span>MIL</span>
    </p>
    <p>
    <img  src="logo5.png"/>
    <span>WAS</span>
    </p>
    <span>Wed, 1:00a</span>
   </a> 
   <style jsx>{`
        a{
            padding: 5px 5px;
            border: 1px solid #747474;
            display: block;
        }
       p{
        padding: 3px 3px 3px 30px;
        position: relative;    
        margin-bottom: 2px;
       }
       p span{
        font-size: 12px;
       }
       p img{
        position: absolute;
        left: 0;
        width: 1.5em;
        height: 1.5em;
       }
      p + span{
        color: #ccc;
        font-size: 12px;
        text-align: center;
        display: block;
       }
       a:hover{
        color:#fff;
       }
      `}</style>
   </div>
  )
}

export default Cardslide