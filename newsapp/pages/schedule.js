import React,{useState , useEffect} from 'react'
import Head from 'next/head';
import Divider from '@/components/Divider/Divider'
import SubNav from '@/components/SubNav/SubNav'
import { FaCalendarAlt } from "react-icons/fa";
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';


function schedule() {
    const [date , setDate]= useState(new Date())
    const [show , setShow]= useState(false)

    const onChange = data => {
        setDate(data)
    }
    const showDate = () => {
        setShow(true)
    }
    useEffect(() => {
        window.addEventListener('dblclick', () => {
            setShow(false)
        })
    })
  return (
    <>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
    <div className='container'>
    <SubNav />
    <Divider title={"NBA SCORES"}/>
    <div className='Date'>
            <p>{date.toDateString()}
            <span onClick={showDate}><FaCalendarAlt /></span>
            </p>
            <div className='Calendar'>
            {show ? (
                    <Calendar onChange={onChange} value={date}/>
            ) : null}
            </div>
    </div>
     
    <table className="table">
    <thead>
      <tr>
        <th scope="col">Away</th>
        <th scope="col">Home</th>
        <th scope="col">Time</th>
        <th scope="col">Live Streaming</th>
        <th scope="col">Venue</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
        <a href="/mlb/teams/7070">
            <img src="logo1.png" />
            <span className="">Royals</span>
        </a>
        </td>
        <td>
        <a href="/mlb/teams/7070">
            <img src="logo2.png" />
            <span className="">Rangers</span>
        </a>
        </td>
        <td>
            <a>
             2:15
            </a>
        </td>
        <td>@mdo</td>
        <td>Angel Stadium</td>
      </tr>
      <tr>
        <td>
        <a href="/mlb/teams/7070">
            <img src="logo1.png" />
            <span className="">Royals</span>
        </a>
        </td>
        <td>
        <a href="/mlb/teams/7070">
            <img src="logo2.png" />
            <span className="">Rangers</span>
        </a>
        </td>
        <td>
            <a>
             2:15
            </a>
        </td>
        <td>@mdo</td>
        <td>Angel Stadium</td>
      </tr>
      <tr>
        <td>
        <a href="/mlb/teams/7070">
            <img src="logo3.png" />
            <span className="">Royals</span>
        </a>
        </td>
        <td>
        <a href="/mlb/teams/7070">
            <img src="logo4.png" />
            <span className="">Rangers</span>
        </a>
        </td>
        <td>
            <a>
             2:15
            </a>
        </td>
        <td>@mdo</td>
        <td>Angel Stadium</td>
      </tr>
      <tr>
        <td>
        <a href="/mlb/teams/7070">
            <img src="logo5.png" />
            <span className="">Royals</span>
        </a>
        </td>
        <td>
        <a href="/mlb/teams/7070">
            <img src="logo6.png" />
            <span className="">Rangers</span>
        </a>
        </td>
        <td>
            <a>
             2:15
            </a>
        </td>
        <td>@mdo</td>
        <td>Angel Stadium</td>
      </tr>
    </tbody>
  </table>

  <div classNameName='Date'>
            <p>{date.toDateString()}</p>
    </div>
     
    <table className="table">
    <thead>
      <tr>
        <th scope="col">Away</th>
        <th scope="col">Home</th>
        <th scope="col">Time</th>
        <th scope="col">Live Streaming</th>
        <th scope="col">Venue</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
        <a href="/mlb/teams/7070">
            <img src="logo1.png" />
            <span className="">Royals</span>
        </a>
        </td>
        <td>
        <a href="/mlb/teams/7070">
            <img src="logo2.png" />
            <span className="">Rangers</span>
        </a>
        </td>
        <td>
            <a>
             2:15
            </a>
        </td>
        <td>@mdo</td>
        <td>Angel Stadium</td>
      </tr>
      <tr>
        <td>
        <a href="/mlb/teams/7070">
            <img src="logo1.png" />
            <span className="">Royals</span>
        </a>
        </td>
        <td>
        <a href="/mlb/teams/7070">
            <img src="logo2.png" />
            <span className="">Rangers</span>
        </a>
        </td>
        <td>
            <a>
             2:15
            </a>
        </td>
        <td>@mdo</td>
        <td>Angel Stadium</td>
      </tr>
      <tr>
        <td>
        <a href="/mlb/teams/7070">
            <img src="logo3.png" />
            <span className="">Royals</span>
        </a>
        </td>
        <td>
        <a href="/mlb/teams/7070">
            <img src="logo4.png" />
            <span className="">Rangers</span>
        </a>
        </td>
        <td>
            <a>
             2:15
            </a>
        </td>
        <td>@mdo</td>
        <td>Angel Stadium</td>
      </tr>
      <tr>
        <td>
        <a href="/mlb/teams/7070">
            <img src="logo5.png" />
            <span className="">Royals</span>
        </a>
        </td>
        <td>
        <a href="/mlb/teams/7070">
            <img src="logo6.png" />
            <span className="">Rangers</span>
        </a>
        </td>
        <td>
            <a>
             2:15
            </a>
        </td>
        <td>@mdo</td>
        <td>Angel Stadium</td>
      </tr>
    </tbody>
  </table>

  <div classNameName='Date'>
            <p>{date.toDateString()}</p>
    </div>
     
    <table className="table">
    <thead>
      <tr>
        <th scope="col">Away</th>
        <th scope="col">Home</th>
        <th scope="col">Time</th>
        <th scope="col">Live Streaming</th>
        <th scope="col">Venue</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
        <a href="/mlb/teams/7070">
            <img src="logo1.png" />
            <span className="">Royals</span>
        </a>
        </td>
        <td>
        <a href="/mlb/teams/7070">
            <img src="logo2.png" />
            <span className="">Rangers</span>
        </a>
        </td>
        <td>
            <a>
             2:15
            </a>
        </td>
        <td>@mdo</td>
        <td>Angel Stadium</td>
      </tr>
      <tr>
        <td>
        <a href="/mlb/teams/7070">
            <img src="logo1.png" />
            <span className="">Royals</span>
        </a>
        </td>
        <td>
        <a href="/mlb/teams/7070">
            <img src="logo2.png" />
            <span className="">Rangers</span>
        </a>
        </td>
        <td>
            <a>
             2:15
            </a>
        </td>
        <td>@mdo</td>
        <td>Angel Stadium</td>
      </tr>
      <tr>
        <td>
        <a href="/mlb/teams/7070">
            <img src="logo3.png" />
            <span className="">Royals</span>
        </a>
        </td>
        <td>
        <a href="/mlb/teams/7070">
            <img src="logo4.png" />
            <span className="">Rangers</span>
        </a>
        </td>
        <td>
            <a>
             2:15
            </a>
        </td>
        <td>@mdo</td>
        <td>Angel Stadium</td>
      </tr>
      <tr>
        <td>
        <a href="/mlb/teams/7070">
            <img src="logo5.png" />
            <span className="">Royals</span>
        </a>
        </td>
        <td>
        <a href="/mlb/teams/7070">
            <img src="logo6.png" />
            <span className="">Rangers</span>
        </a>
        </td>
        <td>
            <a>
             2:15
            </a>
        </td>
        <td>@mdo</td>
        <td>Angel Stadium</td>
      </tr>
    </tbody>
  </table>
 </div>
    </main>
    <style jsx>{`
        td,th{
            padding-left:0;
        }
        td img{
            margin-right:5px;
            top: -1px;
            position: relative;
            width:20px;
            height:20px;
        }
        table a:hover{
            color:red !important;
        }
        .Date .Calendar{
            display: inline-block;
            width: 277px;
            margin-left: 50px;
            position: absolute;
            z-index: 999;
    
        }
        .Date p {
            display:inline-block;
            position:relative;
            padding: 10px 40px 10px 5px;
            font-size: 19px;
            font-weight: 700;
        }
        .Date span{
            position: absolute;
            right: 0;
            top: 3px;
            font-size: 25px;
        }
      `}</style>
    </>

  )
}

export default schedule