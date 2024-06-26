import React, { useEffect, useState } from 'react'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { get100Coins } from '../../../functions/get100Coins';
import './style.css';

function SelectCoins({crypto1, crypto2, handleCoinChange}) {

    const [allCoins, setAllCoins] = useState([]);

    const styles = {
        height: '2.5rem',
        color: 'var(--white)',
        '.MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--white)',
        },
        '.MuiSvgIcon-root': {
            color: 'var(--white)',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(220, 95, 0, 0.2)',
        },
    };
 
          useEffect(() => {
            getCoinData();
          },[])

          async function getCoinData(){
            const myCoins = await get100Coins();
            setAllCoins(myCoins);
          }

  return (
    <div className='coin-flex'>
        <p>Crypto 1</p>
    <Select 
          sx={styles}
          value={crypto1}
          label="Crypto 1"
          onChange={(event) => handleCoinChange(event, false)}
        >
          {allCoins.filter((item) => item.id != crypto2)
          .map((coin, i) => (
             <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>
          ))}
        </Select>
          <p>Crypto 2</p>
    <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={crypto2}
          label="Crypto 2"
          onChange={(event) => handleCoinChange(event, true)}
          sx={styles}
        >
          {allCoins.filter((item) => item.id != crypto1)
          .map((coin, i) => (
             <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>
          ))}
        </Select>
    </div>
  )
}

export default SelectCoins