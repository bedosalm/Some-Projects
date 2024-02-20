import React from 'react'

function Divider({title}) {
  return (
    <div className='divider'>
     <div className='divider-line'></div>
     <h5>{title}</h5>
   


<style jsx>{`

.divider{
    margin:15px 0;
}
.divider-line{
    width:100%;
    height:1px;
    position:relative;
    background-color:#ccc;
}
.divider-line:after{
    content:"";
    position:absolute;
    top:-1px;
    right:0;
    height:5px;
    width:55px;
    background-color:red;
}
.divider h5{
    margin:15px 0
}

  `}</style>
    </div>
  )
}

export default Divider