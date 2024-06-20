import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './style.css';
import { useState } from 'react';

export default function SelectDays({days, handleDaysChange}) {
  
  return (
    <div sx={{ minWidth: 120 }} className='select-days'>
        <p>Price Change In</p>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          label="Days"
          onChange={handleDaysChange}
          sx={{
            height : "2.5rem",
            color : "var(--white)",
            "& .MuiOutlinedInput-notchedOutline" : {
                borderColor : "var(--white)",
            },
            "&.MuiSvgIcon-root" : {
                color : "var(--white)"
            },
            "&:hover" : {
                "&& fieldset":{
                    borderColor : "rgba(220, 95, 0, 0.2)"
                },
            },
          }}
        >
          <MenuItem value={7}>7 days</MenuItem>
          <MenuItem value={30}>30 days</MenuItem>
          <MenuItem value={60}>60 days</MenuItem>
          <MenuItem value={120}>120 days</MenuItem>
          <MenuItem value={365}>1 year</MenuItem>
        </Select>
    </div>
  );
}
