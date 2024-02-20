import React from 'react'

function Social({title , home}) {
  return (
    <div className={home ? 'social-media-sidebar' : 'social-media-sidebar NoBorder'}>
        {home ? <h5>Follow Sporting news</h5> : null}
      <div className='icons'>
        <div className='social-media-logo facebook'>
            <a href='/'></a>
        </div>
        <div className="social-media-logo instagram">
                <a href="https://www.instagram.com/sportingnews/" target="_blank"></a>
        </div>
        <div className="social-media-logo youtube">
                <a href="https://www.youtube.com/user/sportingnewsgplus" target="_blank"></a>
        </div>
        <div className="social-media-logo twitter">
                <a href="https://twitter.com/sportingnews" target="_blank"></a>
            </div>
            <div className="social-media-logo tiktok">
                <a href="https://www.tiktok.com/@thesportingnews" target="_blank"></a>
            </div>
    </div>
      <style jsx>{`
      .social-media-sidebar{
        text-align: center;
        padding: 10px 15px;
        margin-top: 20px;
        border: 1px solid #ccc;
      }
      .NoBorder{
        border:none;
        margin-top: 0px;
      }
      .social-media-sidebar h5{
        text-indent: -30px;
      }
       .social-media-sidebar .icons .social-media-logo {
        position: relative;
        margin-right: 20px;
        display: inline-block;
        height: 32px;
        width: 32px;
        background-repeat: no-repeat;
        background-size: 32px auto;
        background-position: center center;
    }
    .social-media-sidebar .icons {
        display: flex;
        margin: 0.625rem 0rem;
        justify-content: center;
    }
    .social-media-sidebar .icons .social-media-logo.facebook {
        background-image: url(https://static.sportingnews.com/1.26.1.3/themes/custom/tsn/dist/./images/social-media/logo-facebook.svg);
        filter: invert(32%) sepia(15%) saturate(2234%) hue-rotate(183deg) brightness(99%) contrast(89%);
    }
    .social-media-sidebar .icons .social-media-logo.instagram {
        background-image: url(https://static.sportingnews.com/1.26.1.3/themes/custom/tsn/dist/./images/social-media/logo-instagram.svg);
    }
    .social-media-sidebar .icons .social-media-logo.youtube {
        background-image: url(https://static.sportingnews.com/1.26.1.3/themes/custom/tsn/dist/./images/social-media/logo-youtube.svg);
    }
    .social-media-sidebar .icons .social-media-logo.twitter {
        background-image: url(https://static.sportingnews.com/1.26.1.3/themes/custom/tsn/dist/./images/social-media/logo-twitter.svg);
        filter: invert(49%) sepia(98%) saturate(1833%) hue-rotate(166deg) brightness(98%) contrast(98%);
    }
    .social-media-sidebar .icons .social-media-logo.tiktok {
        background-image: url(https://static.sportingnews.com/1.26.1.3/themes/custom/tsn/dist/./images/social-media/logo-tiktok.svg);
    }
      `}</style>
    </div>
  )
}

export default Social