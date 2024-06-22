import React from 'react'
import MaxMinTable from '../components/MaxMinTable';
import AvgTable from '../components/AvgTable';

const Home = () => {

    return (
      <div>
        <h1>Crop Analytics</h1>
        <h2>Max-Min Production by Year</h2>
        <MaxMinTable />
        <h2>Average Yield and Cultivation Area by Crop</h2>
        <AvgTable/>
      </div>
    );
}

export default Home