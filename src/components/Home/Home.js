import React, { useEffect, useState } from 'react';
import Products from './Products/Products';

const Home = () => {

    const [displayData, showDisplayData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            showDisplayData(data)
        });
    },[])
    return (
        <div>
            {
                displayData.map(data => <Products data={data}/>)
            }
        </div>
    );
};

export default Home;