import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';


//import Component
import Progressbar from './Progressbar';

function Worldchart() {

    //useState
    let [dailydata, setDailydata] = useState([]);

    const data = {
        labels: dailydata.map((objdata, index) => { return (objdata.reportDate) }),
        datasets: [{
            label: 'active',
            data: dailydata.map((objdata, index) => { return (objdata.totalConfirmed) }),
            backgroundColor: ['#F5DA81'],
            borderColor: 'orange',
            fill: true,
            pointRadius: 1,
            pointHitRadius: 10,
            pointHoverBorderWidth: 2,
            pointBorderWidth: 1,

        }, {
            label: 'deaths',
            data: dailydata.map((objdata, index) => { return (objdata.deaths.total) }),
            backgroundColor: ['#F5A9A9'],
            borderColor: 'red',
            fill: true,
            pointRadius: 1,
            pointHitRadius: 10,
            pointHoverBorderWidth: 2,
            pointBorderWidth: 1,

        }],

    }

    const option = {
        maintainAspectRatio: false
    }

    //use Effect
    useEffect(() => {
        async function Fetchalldata() {
            let response = await fetch('https://covid19.mathdro.id/api/daily');
            let data = await response.json();
            setDailydata(data)

        }
        Fetchalldata();
    }, [])

    //if data is not fetched
    if (dailydata === '') {
        return (
            <div className="worldcharts">
                <h2 className="grapheading">Graphical View
                <br/>
                <Progressbar />
                </h2>   
            </div>
        )
    }


    return (
        <div className="worldcharts">
            <h2 className="grapheading">Graphical View</h2>
            <Line data={data} options={option} className="line"  ></Line>
        </div>

    );
}
export default Worldchart;