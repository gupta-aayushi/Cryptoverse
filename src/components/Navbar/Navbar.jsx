import React, { useContext } from 'react'
import './Navbar.css'
import LOGO from '../../assets/LOGO.png'
import { Link } from 'react-router-dom'
import { CoinContext } from '../../context/CoinContext'

const Navbar = () => {
    const {setCurrency} = useContext(CoinContext)
    const currencyHandler = (event)=>{
        switch(event.target.value){
            case "usd": {
                setCurrency({name: "usd", symbol: "$"});
                break;
            }
            case "eur": {
                setCurrency({name: "eur", symbol: "€"});
                break;
            }
            case "inr": {
                setCurrency({name: "inr", symbol: "₹"}); 
                break;
            }
            default: {
                setCurrency({name: "usd", symbol: "$"});
                break;
            }
        }
    }
  return (
    <div className='navbar'>
        <Link to={'/'}>
            <img className='logo' src={LOGO}></img>
        </Link>
        <ul>
            <Link to={'/'}><li>Home</li></Link>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className='nav-right'>
            <select onChange={currencyHandler}>
                <option value="usd">USD</option>
                <option value="inr">INR</option>
                <option value="eur">EUR</option>
            </select>
        </div>
    </div>
  )
}

export default Navbar