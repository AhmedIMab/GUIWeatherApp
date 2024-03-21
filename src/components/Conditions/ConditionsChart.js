import React from "react";
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import "./style.css";


export const ConditionsChart = (props) => {
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

    // sets the weekdays of the graph axis to the subsequent 4 weekdays
    var days = [];
    let counter = Number(current_day_num)
    for (let i=0; i<4; i++) {
        days[i] = week[counter % 7];
        counter += 1;
    }

    console.log("TEST: !", props.forecastData)

    const future_data = determineData(props.Name, props.forecastData);


    const data = {
        labels: days,
        datasets: [
            {
                backgroundColor: "rgb(0,0,0)",
                borderColor: "rgb(55,95,255)",
                /* Replace with API call */
                data: future_data,
            }
        ],
    };

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
                            text: props.Name + " for the next 4 days",
                            color: '#000000',
                            font: {
                                size: 15
                            },
                            padding: {
                                bottom: 18
                            }
                        },
                        legend: {
                            display: false
                        },
                    },
                    scales: {
                        y: {
                            grid: {
                            },
                            ticks: {
                                color: '#000000',
                                font: {
                                    size: 15
                                }
                            }
                        },
                        x: {
                            ticks: {
                                color: '#000000',
                                font: {
                                    size: 15
                                }
                            }
                        }
                    }
                }}
            />
        </div>
    )
}


function determineData(name, forecastData) {
    if (name === "Humidity") {
        let data = [];
        // As only 4 days needed
        data = forecastData.dailyData.humidity.slice(0,4);

        return data;
    }
    else if (name === "Pollen") {
        let data = forecastData.dailyData.pollenData[0];
        return data
    }
    else if (name === "UVI") {
        let data = forecastData.dailyData.uvIndex.slice(0,4);
        return data;
    }
    else if (name === "AQI") {
        let data = forecastData.hourlyData.aqi;
        var daily_data = [];

        // As the data for aqi is hourly, there are 96 array elements
        // The following nested for loop will split it into the average of each day
        // And use that value as the data for the next days
        for (let i=0; i<4; i++) {
            let offset = i * 24;
            let day_data = 0;
            for (let j=offset; j<offset+24; j++) {
                let hour_aqi = data[j].main.aqi;
                day_data += hour_aqi;
            }
            // Rounds to 2 decimal places
            daily_data.push(Math.round((day_data/24) * 100) / 100);
        }

        return daily_data;
    }
}



export default ConditionsChart;

