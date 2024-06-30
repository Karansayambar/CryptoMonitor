import React from 'react';
import {Link} from 'react-router-dom'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import './style.css';

const List = ({ coin }) => {
    return (
        <Link to={`/coin/${coin.id}`}>
        <tr className={coin.price_change_percentage_24h < 0 ? 'list-container grid-red' : 'list-container grid-green'}>
            <td className='head-flex'>
                <img className='icon-img' src={coin.image} alt={`${coin.name} icon`} />
                <td>
                <div className='coin-info'>
                   <td><p>{coin.symbol}</p></td>
                   <td><p>{coin.name}</p></td>
                </div>
                </td>
            </td>
            <td className='chip-flex'>
                {coin.price_change_percentage_24h > 0 ? (
                    <React.Fragment>
                        <div className='chip-green'>
                            {coin.price_change_percentage_24h.toFixed(2)}%
                        </div>
                        <div className='trendup'>
                            <TrendingUpRoundedIcon />
                        </div>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <div className='chip-red'>
                            {coin.price_change_percentage_24h.toFixed(2)}%
                        </div>
                        <div className='trenddown'>
                            <TrendingDownRoundedIcon />
                        </div>
                    </React.Fragment>
                )}
            </td>
            <td className='coin-price'>
                <h3 style={{ color: coin.price_change_percentage_24h < 0 ? "var(--red)" : 'var(--green)' }}>
                    ${coin.current_price.toLocaleString()}
                </h3>
            </td>
            {/* <td className='volume-cap'> */}
            <td className='total_vol'>
                <p>Total Volume: {coin.total_volume.toLocaleString()}</p>
            </td>
            <td className='market_cap'>
                <p>Market Cap: $ {coin.market_cap.toLocaleString()}</p>
            </td>
            {/* </td> */}
        </tr>
        </Link>
    );
};

export default List;
