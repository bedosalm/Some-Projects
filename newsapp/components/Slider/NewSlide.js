import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cardslide from "../Cardslide/Cardslide";
import Dropdown from "react-bootstrap/Dropdown";
import { BiCaretDown } from "react-icons/bi";

function NewSlide() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 4,
    },
  };
  return (
    <div className="Slider container">
      <Carousel responsive={responsive}>
        <Cardslide />
        <Cardslide />
        <Cardslide />
        <Cardslide />
        <Cardslide />
        <Cardslide />
        <Cardslide />
        <Cardslide />
        <Cardslide />
        <Cardslide />
        <Cardslide />
        <Cardslide />
        <Cardslide />
        <Cardslide />
        <Cardslide />
        <Cardslide />
        <Cardslide />
      </Carousel>
      <style global jsx>{`
    .Slider{
    box-sizing:border-box;
    width:100%;
    margin-bottom:20px
    }
   .DropContent{
    float: left;
    padding: 27.2px 25px;
    border: 1px solid #747474;
    }
    .DropContent .dropdown button {
    background-color: #000;
    margin: auto;
    display: block;
    box-shadow: none;
    padding-right: 45px;
    border: 1px solid #fff;
    border-radius: 0;
}
.btn-check:checked+.btn, .btn.active, .btn.show, .btn:first-child:active, :not(.btn-check)+.btn:active{
  background-color: red;
  border: 1px solid #fff;
}
.DropContent .dropdown button:hover{
  background-color:red;
}
    
    .dropdown button span{
      position: absolute;
      right: 10px;
      top: 5px;
    }
    .dropdown-menu.show {
      display: block;
      z-index: 9999;
  }
      .react-multiple-carousel__arrow--right{
        right: 0;
      }
      .react-multiple-carousel__arrow--left {
        left: 0;d
    }
      .react-multiple-carousel__arrow{
        min-height: 100%;
        background:rgba(0,0,0,3);
        border-radius:0;
        border:1px solid #ccc;
      }
      .react-multiple-carousel__arrow:hover {
        background: red;
    }
    .react-multi-carousel-item{
        opacity:05;
        transform: scale(.8) !important;
    }

    .react-multi-carousel-item--active{
        transform: scale(1)!important;
        background: blue;
        opacity: 1;
        left: -200;
        max-width: 4%;
        
    }

  

      `}</style>
    </div>
  );
}

export default NewSlide;
