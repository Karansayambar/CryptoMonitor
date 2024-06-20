import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import './style.css'

const Loader = () => {
  return (
    <div className='loader-container'>
        <CircularProgress style={{color: "var(--orange)", marginTop : "20rem"}}/>
    </div>
  )
}

export default Loader;

