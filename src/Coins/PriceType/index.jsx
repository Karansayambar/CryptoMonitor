import { useState } from "react";
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import './style.css';

export default function TogglePriceType({priceType, handlePriceTypeChange}){

    return (
        <div className="toggle-prices">
        <ToggleButtonGroup
        value = {priceType}
        exclusive
        onChange={handlePriceTypeChange}
        aria-label="text alignment"
        sx={{
            "& .Mui-selected" : {
                color : "var(--orange)",
            },
            borderColor : "var(--orange)",
            border : "unset !important",
            "&.MuiToggleButtonGroup-grouped" : {
                border : "1px solid",
                borderColor : "unset",
                color : "var(--orange)"
            },
                "& .MuiToggleButton-standard":{
                    color : "var(--orange)"
                },
          }}
        >
            <ToggleButton value="price" >Price</ToggleButton>
            <ToggleButton value="market_caps" >Market cap</ToggleButton>
            <ToggleButton value="total_volumes" >Total volume</ToggleButton>

        </ToggleButtonGroup>
        </div>
    )
}