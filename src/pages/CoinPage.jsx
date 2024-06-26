import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Loader from '../components/Dashboard/Loading';
import { coinObject } from '../functions/convertObject';
import List from '../components/Dashboard/List';
import CoinInfo from '../Coins/CoinInfo';
import { getCoinData } from '../functions/getCoinData';
import { getCoinPrices } from '../functions/getCoinPrices';
import LineChart from '../Coins/LineChart/LineChart';
import { convertDate } from '../functions/convertDate';
import SelectDays from '../Coins/SelectDays';
import TogglePriceType from '../Coins/PriceType';
import { settingChartData } from '../functions/settingChartData';

const CoinPage = () => {
    const {id} = useParams();
    const [coinData, setCoinData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [days, setDays] = useState(30)
    const [chartData, setChartData] = useState({});
    const [priceType, setPriceType] = useState("prices");

        useEffect(() => {
        if (id) {
            getData();
        }
    }, [id, days, priceType]);

    async function getData() {
            const data = await getCoinData( id );
            if (data) {
                coinObject(setCoinData, data);
                const prices = await getCoinPrices( id, days , priceType);
                if (prices && prices.length > 0) {
                    settingChartData(setChartData, prices);
                    setIsLoading(false);
                }
            }
        }

    
    const handleDaysChange = async (event) => {
        setIsLoading(true);
        setDays(event.target.value);
        console.log(days);
         const prices = await getCoinPrices( id, event.target.value, priceType );
                if (prices && prices.length > 0) {
                    settingChartData(setChartData, prices)
                     setIsLoading(false);
                }
    };


    const handlePriceTypeChange = async (event, newType) => {
        setIsLoading(true);
        setPriceType(newType);
        const prices = await getCoinPrices( id, days, newType );
                if (prices.length > 0) {
                    settingChartData({setChartData, prices})
                     setIsLoading(false);
                }
    };


  return (
    <div>
        {isLoading ? 
        <Loader/> 
        :
        <div>
         <div className='grey-wrapper'>
            <List coin={coinData}/>
        </div>
        <div className='grey-wrapper'>
            <SelectDays days={days} handleDaysChange={handleDaysChange}/>
            <TogglePriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
            <LineChart chartData={chartData}/>
        </div>
        <CoinInfo heading={coinData.name} description={coinData.description}/>
        </div>
        }
    </div>
  )
}

export default CoinPage;