import React from 'react';
import {Bar} from  'react-chartjs-2';


function Countrychart(props){

    const data={
        labels:['INFECTED','RECOVERED','DEATHS'],
        datasets:[{
            label:"POPULATION "+ " '"+props.population+"'" , 
            data:[props.Infected,props.Recovered,props.Death],
            backgroundColor:['#F5DA81','#9FF781','#F5A9A9'], 
            borderWidth: '1',
            borderColor: 'grey',
            hoverBorderWidth: '2',
            hoverBorderColor: ['orange','green','red']
        }]
    }

    const option={
        maintainAspectRatio: false
    }

    return(
        <div className="countrycharts">
            <h2 className="grapheading">Graphical View</h2>
            <Bar data={data} options={option} className="bar"  ></Bar>
        </div>
    );
}

export default Countrychart;