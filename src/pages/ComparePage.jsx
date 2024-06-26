// import React, { useEffect, useState } from 'react'
// import Header from '../components/Common/Header'
// import SelectCoins from '../components/Compare/SelectCoins'
// import SelectDays from '../Coins/SelectDays';
// import { getCoinPrices } from '../functions/getCoinPrices';
// import Loader from '../components/Dashboard/Loading';
// import List from '../components/Dashboard/List';
// import CoinInfo from '../Coins/CoinInfo';
// import { settingChartData } from '../functions/settingChartData';
// import LineChart from '../Coins/LineChart/LineChart';
// import { getCoinData } from '../functions/getCoinData';
// import { coinObject } from '../functions/convertObject';

// function ComparePage() {
//     const [crypto1, setCrypto1] = useState("bitcoin");
//     const [crypto2, setCrypto2] = useState("ethereum");
//     const [crypto1Data, setCrypto1Data] = useState({});
//     const [crypto2Data, setCrypto2Data] = useState({});
//     const [isLoading, setIsLoading] = useState(true);
//     const [days, setDays] = useState(30);
//     const [priceType, setPriceType] = useState("prices");
//     const [chartData, setChartData] = useState({});

//     const handleDayChange = (event) => {
//         setDays(event.target.value)
//     }

//     useEffect(() => {
//     //    if (crypto1 && crypto2) {
//     //     console.log("crypto1 and crypto2", crypto1, crypto2)
//     //         getData();
//     //     }
//     getData();
//     },[])
 
//     async function getData(){
//         setIsLoading(true);
//         const data1 = await getCoinData( crypto1 );
//         if(data1){
//         const data2 = await getCoinData( crypto2 );
//             coinObject(setCrypto1Data, data1);
//         if(data2){
//             coinObject(setCrypto1Data, data2);
//             const prices1 = await getCoinPrices(crypto1, days, priceType)
//             const prices2 = await getCoinPrices(crypto2, days, priceType)
//             settingChartData(setChartData, prices1, prices2)
//             console.log("both the price fetched", prices1, prices2)
//             setIsLoading(false);
//         }
//     }

//     const handleCoinChange = async (event, isCoin2) => {
//         setIsLoading(true);
//         if(isCoin2){
//             setCrypto2(event.target.value);
//             const data = await getCoinData( event.target.value );
//             coinObject(setCrypto2Data, data);
//          const prices1 = await getCoinPrices(crypto1, days, priceType );
//          const prices2 = await getCoinPrices( crypto2, days, priceType );
//          if(prices1.length > 0 && prices2.length > 0){
//             console.log("both the data", prices1, prices2);
//             setIsLoading(false);
//          }
//         }else{
//             setCrypto1(event.target.value);
//             const data = await getCoinPrices( event.target.value, days, priceType );
//             coinObject(setCrypto1Data, data);
//         }
//     }

//   return (
//     <>
//     <Header/>
//     {!isLoading ? (
//         <Loader/>
//     ) :  (
//         <>
//         <div>ComparePage</div>
//         <div className='coin-day-flex'>
//         <SelectCoins crypto1={crypto1} crypto2={crypto2} handleCoinChange={handleCoinChange}/>
//         <SelectDays days={days} handleDayChange={handleDayChange} noPTag={true}/>

//         </div>
//         <div className='grey-wrapper'>
//         <List coin={crypto1Data} />
//         </div>
//         <div className='grey-wrapper'>
//         <List coin={crypto2Data} />
//         </div>
//         <div>
//             <LineChart chartData={chartData} priceType={priceType} multiAxis={true}/>
//         </div>
//         <CoinInfo heading={crypto1Data.name} description={crypto1Data.description} />
//         <CoinInfo heading={crypto2Data.name} description={crypto2Data.description} />
//         </>
//     )}
//     </>
//   )
// }
// }

// export default ComparePage;


import React, { useEffect, useState } from 'react';
import Header from '../components/Common/Header';
import SelectCoins from '../components/Compare/SelectCoins';
import SelectDays from '../Coins/SelectDays';
import { getCoinPrices } from '../functions/getCoinPrices';
import Loader from '../components/Dashboard/Loading';
import List from '../components/Dashboard/List';
import CoinInfo from '../Coins/CoinInfo';
import { settingChartData } from '../functions/settingChartData';
import LineChart from '../Coins/LineChart/LineChart';
import { getCoinData } from '../functions/getCoinData';
import { coinObject } from '../functions/convertObject';
import TogglePriceType from '../Coins/PriceType';

function ComparePage() {
    const [crypto1, setCrypto1] = useState("bitcoin");
    const [crypto2, setCrypto2] = useState("ethereum");
    const [crypto1Data, setCrypto1Data] = useState({});
    const [crypto2Data, setCrypto2Data] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [days, setDays] = useState(30);
    const [priceType, setPriceType] = useState("prices");
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        getData();
    }, [crypto1, crypto2, days, priceType]);

    async function getData() {
        setIsLoading(true);
        const data1 = await getCoinData(crypto1);
        const data2 = await getCoinData(crypto2);

        if (data1) {
            coinObject(setCrypto1Data, data1);
        }

        if (data2) {
            coinObject(setCrypto2Data, data2);
        }

        if (data1 && data2) {
            const prices1 = await getCoinPrices(crypto1, days, priceType);
            const prices2 = await getCoinPrices(crypto2, days, priceType);
            settingChartData(setChartData, prices1, prices2);
            console.log("both the price fetched", prices1, prices2);
            setIsLoading(false);
        }
    }

    const handleCoinChange = async (event, isCoin2) => {
        setIsLoading(true);
        if (isCoin2) {
            setCrypto2(event.target.value);
            const data = await getCoinData(event.target.value);
            coinObject(setCrypto2Data, data);
        } else {
            setCrypto1(event.target.value);
            const data = await getCoinData(event.target.value);
            coinObject(setCrypto1Data, data);
        }
        getData(); // Fetch new data when the coin changes
    };

    const handleDayChange = async (event) => {
        setIsLoading(true);
        setDays(event.target.value);
        const prices1 = await getCoinPrices(crypto1, event.target.value, priceType);
        const prices2 = await getCoinPrices(crypto2, event.target.value, priceType);
        settingChartData(setChartData, prices1, prices2);
        setIsLoading(false);
    };

    const handlePriceTypeChange = async (event, newType) => {
        setIsLoading(true);
        setPriceType(newType);
        const prices1 = await getCoinPrices(crypto1, days, newType);
        const prices2 = await getCoinPrices(crypto2, days, newType);
        settingChartData(setChartData, prices1, prices2);
        setIsLoading(false);
    };

    return (
        <>
            <Header />
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <div>ComparePage</div>
                    <div className='coin-day-flex'>
                        <SelectCoins crypto1={crypto1} crypto2={crypto2} handleCoinChange={handleCoinChange} />
                        <SelectDays days={days} handleDayChange={handleDayChange} noPTag={true} />
                    </div>
                    <div className='grey-wrapper'>
                        <List coin={crypto1Data} />
                    </div>
                    <div className='grey-wrapper'>
                        <List coin={crypto2Data} />
                    </div>
                    <div className='grey-wrapper'>
                        <TogglePriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
                        <LineChart chartData={chartData} priceType={priceType} handleDayChange={handleDayChange} multiAxis={true} />
                    </div>
                    <CoinInfo heading={crypto1Data.name} description={crypto1Data.description} />
                    <CoinInfo heading={crypto2Data.name} description={crypto2Data.description} />
                </>
            )}
        </>
    );
}

export default ComparePage;
