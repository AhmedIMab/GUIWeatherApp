import React from "react";
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import "./style.css";


export const ConditionsChart = (props) => {
    // Replace with API Data!

    var event = new Date();
    var options = { weekday: 'long' };
    var current_day = event.toLocaleDateString('en-UK', options);
    var current_day_num;

    const week = {
        0: "Monday",
        1: "Tuesday",
        2: "Wednesday",
        3: "Thursday",
        4: "Friday",
        5: "Saturday",
        6: "Sunday"
    };

    // Finds the current day as a number relative to the week dictionary
    for (var daynum in week) {
        let day = week[daynum];
        if (day === current_day) {
            current_day_num = daynum;
        }
    }

    // Adds to the labels of the week days the subsequent weeks 5 weekdays
    var days = [];
    let counter = Number(current_day_num)
    for (let i=0; i<5; i++) {
        days[i] = week[counter % 7];
        counter += 1;
    }

    const data = {
        labels: days,
        datasets: [
            {
                backgroundColor: "rgb(0,0,0)",
                borderColor: "rgb(55,95,255)",
                /* Replace with API call */
                data: [0, 40, 25, 60, 2, null, null],
            }
        ],
    };

    // The ... mean a spread operator. This is used to pass into the Max function arguments
    // as it doesn't take in a whole array
    let max_value = Math.max(...data.datasets[0].data);

    return (
        <div className="conditions-chart-container">
            <Line
                data={data}
                width="100%"
                height="100%"
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: props.Name + " for the next 5 days"
                        },
                        legend: {
                            display: false
                        },
                    },
                    scales: {
                        y: {
                            min: 0,
                            max: max_value+15,
                            ticks: {
                                stepSize: 15
                            }
                        }
                    }
                }}
            />
        </div>
    )
}

export default ConditionsChart;