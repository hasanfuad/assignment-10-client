import React, { useEffect, useState } from 'react';
import AddProduct from '../AddProducts/AddProduct';

const Home = () => {

    const [displayData, showDisplayData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/displayProduct')
        .then(res => res.json())
        .then(data => showDisplayData(data));
    },[])
    return (
        <div>
            <h1>This is Home</h1>
            {
                displayData.map(data => <li key={data._id}>{data.name}</li>)
            }
            <AddProduct/>
        </div>
    );
};

export default Home;