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

const CoinPage = () => {
    const {id} = useParams();
    const [coinData, setCoinData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [days, setDays] = useState(60)
    const [chartData, setChartData] = useState({});
    const [priceType, setPriceType] = useState("left");

        useEffect(() => {
        if (id) {
            getData();
        }
    }, [id]);

    async function getData() {
        try {
            const data = await getCoinData({ id });
            if (data) {
                coinObject(setCoinData, data);
                const prices = await getCoinPrices({ id, days, priceType });
                if (prices.length > 0) {

                    setChartData({
                        labels : prices.map((date) => convertDate(date[0])),
                        datasets : [
                            {
                                label: 'Price',
                                data: prices.map(price => price[1]),
                                borderColor: "#dc5f00",
                                borderWidth: 2,
                                fill: true,
                                tension: 0.25,
                                backgroundColor: "rgba(220, 95, 0, 0.2)",
                                pointRadius: 1,
                            },
                        ],
                    });
                     setIsLoading(false);
                }
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setIsLoading(false); // Set loading to false in case of error
        }
    }
    
    const handleDaysChange = async (event) => {
        setIsLoading(true);
        setDays(event.target.value);
         const prices = await getCoinPrices( id, event.target.value, priceType );
                if (prices.length > 0) {
                    setChartData({setChartData, prices})
                     setIsLoading(false);
                }
    };


    const handlePriceTypeChange = async (event, newType) => {
        setIsLoading(true);
        setPriceType(newType);
        const prices = await getCoinPrices( id, days, newType );
                if (prices.length > 0) {
                    setChartData({setChartData, prices})
                     setIsLoading(false);
                }
    };

    // if(coinData){
    //     console.log("data fetch success",coinData.description)
    // }else{
    //     console.log("cannot fetch data")
    // }



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