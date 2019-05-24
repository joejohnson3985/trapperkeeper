import React from 'react';
import notFoundImg from '../../media/Images/notFound-bg.svg'
import './NotFound.scss'
import { Link } from 'react-router-dom'


const NotFound = () => {
  return(
    <div className='not-found'>
      <img src={notFoundImg} atl='404 Error: page not found' />
      <h1>The page you're looking for either can't be found or does not exist</h1>
      <Link to='/' className='return-home'>Click here to return to Trapper Keeper</Link>
    </div>
  )
}

export default NotFound;