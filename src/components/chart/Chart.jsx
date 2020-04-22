import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const chart = () => {
    //using hooks, not component style with state setting
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async() => {
            setDailyData(await fetchDailyData());
        }

        
        fetchAPI();
    });

    //for global chart type
    const lineChart = (
        dailyData.length //array 0 is default false, then if other num then show
        ? (
            <Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{ 
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Confirmed cases today',
                        borderColor: '#3333ff',
                        fill: true,
                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Deaths today',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0 , 0.5)',
                        fill: true,
                    }],
                }}
            />) : null
    );

    //for specific countries chart mode method
    //const barChart

    return (
        <div className={styles.container}>
            {lineChart}
        </div>

    )
}

export default chart;