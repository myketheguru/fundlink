import React, { useState } from 'react'
import './css/transactionSlider.css'
import ArrowLeftIcon  from "./icons/ArrowLeftIcon";
import ArrowRightIcon  from "./icons/ArrowRightIcon";
import ArrowUpIcon  from "./icons/ArrowUpIcon";
import ArrowDownIcon  from "./icons/ArrowDownIcon";
import usaFlag from '../assets/images/usa-flag.png';    
import NetflixIcon from './icons/NetflixIcon';
import SpotifyIcon from './icons/SpotifyIcon';
import AppSwitchButton from './AppSwitchButton';

const TransactionSlider = () => {

    const [data] = useState([
        {
            id: "234",
            title: "All Transactions",
            transactionTotal: '3.560',
            transactionCurrency: 'USD',
            transactionCurrencyIcon: 'usa',
            transactionTrend: {
                up: '1.460', 
                down: '2.100'
            },
            transactionList: [
                {
                service: 'Netflix', 
                description: 'Streaming Service',
                charge: '-1.450',
                trending: true,
                iconType: "netflix"
            },
                {
                service: 'Spotify', 
                description: 'Music Platform',
                charge: '-1.450',
                trending: false,
                iconType: "spotify"    
            },
                {
                service: 'Kristen & Thomas', 
                description: 'Your Friends',
                charge: '-1.450',
                trending: true,
                iconType: ""    
            },
            ]
        }
    ])

    return (
        <div className="transbox">
            {
                data.map(slide => <div className={"slide-1"} key={slide.id}>
                                    <div className="header">
                                        <div className="title-bar">
                                            <h1>{slide.title}</h1>
                                            <div className="controls">
                                                <button id="prev-trans"><ArrowLeftIcon /></button>
                                                <button id="next-trans"><ArrowRightIcon /></button>
                                            </div>
                                        </div>
                                        <div className="info-bar">
                                            <p>Recent Expenses</p>
                                            <div className="info">
                                                <div className="currency-img">
                                                    { slide.transactionCurrencyIcon && <img src={usaFlag} alt="" /> }
                                                </div>
                                                <h1 className="total">{slide.transactionTotal}</h1>
                                                <div className="currency">{slide.transactionCurrency}</div>
                                                <div className="trend-info">
                                                    <span className="up"><ArrowUpIcon /> {slide.transactionTrend.up} <strong>{slide.transactionCurrency}</strong></span>
                                                    <span className="down"><ArrowDownIcon /> {slide.transactionTrend.down} <strong>{slide.transactionCurrency}</strong></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content">
                                        {slide.transactionList.map((transaction, index) => <div className="transaction" key={transaction.service + index}>
                                                                                    <div className="icon-box">
                                                                                        {
                                                                                             (transaction.iconType === 'netflix') ? <NetflixIcon /> : 
                                                                                             (transaction.iconType === 'spotify') ? <SpotifyIcon /> : <h1>F</h1>
                                                                                        }
                                                                                    </div>
                                                                                    <div className="trans-info">
                                                                                        <p className="service">{ transaction.service }</p>
                                                                                        <p className="desc">{ transaction.description }</p>
                                                                                    </div>
                                                                                    <div className="amount">
                                                                                        {transaction?.charge || transaction?.credit}
                                                                                    </div>
                                                                                    <AppSwitchButton position={index} />
                                                                                </div>)}
                                    </div>
                                 </div>
            )
            }

        </div>
    )
}

export default TransactionSlider
