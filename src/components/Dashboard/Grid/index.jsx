import React from 'react'
import {Link} from 'react-router-dom'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import './style.css'

const Grid = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
      <div className={coin.price_change_percentage_24h < 0 ? 'grid-container grid-red' : 'grid-container grid-green'}>
        <div className='head-flex'>
          <img className='icon-img' src={coin.image} alt={`${coin.name} icon`} />
          <div className='coin-info'>
            <p>{coin.symbol.toUpperCase()}</p>
            <p>{coin.name}</p>
          </div>
        </div>
        {coin.price_change_percentage_24h > 0 ? (
          <div className='chip-flex'>
            <div className='chip-green'>
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className='trendup'>
              <TrendingUpRoundedIcon />
            </div>
          </div>
        ) : (
          <div className='chip-flex'>
            <div className='chip-red'>
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className='trenddown'>
              <TrendingDownRoundedIcon />
            </div>
          </div>
        )}
        <div className='coin-price'>
          <h3 style={{ color: coin.price_change_percentage_24h < 0 ? 'var(--red)' : 'var(--green)' }}>
            ${coin.current_price.toLocaleString()}
          </h3>
        </div>
        <div className='volume-cap'>
          <p>Total Volume: {coin.total_volume.toLocaleString()}</p>
          <p>Market Cap: ${coin.market_cap.toLocaleString()}</p>
        </div>
      </div>
    </Link>
  );
};

export default Grid;
