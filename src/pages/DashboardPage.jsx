import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header';
import axios from 'axios';
import TabsComponent from '../components/Dashboard/Tab';
import Search from '../components/Dashboard/Search';
import PaginationComponent from '../components/Dashboard/Pagination';
import Loader from '../components/Dashboard/Loading';
import BottomToTop from '../components/Common/BottomToTop';
import { get100Coins } from '../functions/get100Coins';

const DashboardPage = () => {
    const [coins, setCoins] = useState([]);
    const [paginatedcoins, setPaginatedcoins] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const handlePageChange = (event, value) => {
      console.log("dashboard render",value);
      var previousIndex = (value - 1) * 10;
      setPaginatedcoins(coins.slice(previousIndex, previousIndex + 10))
      setPage(value);
    }

    const onSearchChange = (e) => {
      setSearch(e.target.value)
    }

    let filteredCoins = coins.filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase()) || item.symbol.toLowerCase().includes(search.toLowerCase());
    })

    useEffect(() => {
      getData();
    },[])
    const getData = async () => {
      const myCoins = await get100Coins();
      if(myCoins){
        setCoins(myCoins);
        setPaginatedcoins(myCoins.slice(0, 10));
        setIsLoading(false);
      }
    }
  return (
    <>
    <Header/>
    <BottomToTop/>
    {isLoading ? 
    <Loader/> 
    : 
    <div className='dashboard'>
        <Search search={search} onSearchChange={onSearchChange}/>
        <TabsComponent coin={search ? filteredCoins : paginatedcoins}/>
        {!search && <PaginationComponent page={page} handlePageChange={handlePageChange}/>}
    </div>
    }
    </>
  )
}

export default DashboardPage;