import React, { useState } from 'react'
import './css/transactionSlider.css'
import ArrowLeftIcon  from "./icons/ArrowLeftIcon";
import ArrowRightIcon  from "./icons/ArrowRightIcon";

const TransactionSlider = () => {

    const [data] = useState([
        {
            title: "All Transactions",
            transactionTotal: '3.560',
            transactionCurrency: 'USD',
            transactionTrend: {
                up: '1.460', 
                down: '2.100'
            },
            transactionList: [
                {
                service: 'Netflix', 
                description: 'Streaming Service',
                charge: '1.450',
                trending: true,
                image: require('../assets/images/netflix_103235.svg')    
            },
                {
                service: 'Spotify', 
                description: 'Music Platform',
                charge: '1.450',
                trending: false,
                image: require('../assets/images/netflix_103235.svg')    
            },
                {
                service: 'Kristen & Thomas', 
                description: 'Your Friends',
                charge: '1.450',
                trending: false,
                image: require('../assets/images/netflix_103235.svg')    
            },
            ]
        }
    ])

    return (
        <div className="transbox">
            {
                data.map(slide => <div className={"slide-1"}>
                                    <div className="header">
                                        <div className="title-bar">
                                            <h1>{slide.title}</h1>
                                            <div className="controls">
                                                <button id="prev-trans"><ArrowLeftIcon /></button>
                                                <button id="next-trans"><ArrowRightIcon /></button>
                                            </div>
                                        </div>
                                    </div>
                                 </div>
            )
            }
        </div>
    )
}

export default TransactionSlider
