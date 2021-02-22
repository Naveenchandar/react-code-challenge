import React from 'react';
import '../rockets/rocket.css';
import { useFetch } from '../service';
import { Chrono } from "react-chrono";
import Navbar from '../navbar/index';

export default function History() {
    const res = useFetch("https://api.spacexdata.com/v3/history", {});
    if (!res.response) {
        return <div>Loading...</div>
    }
    const result = res?.response;
    const items = result?.map(item => {
        return ({
            title: new Date(item?.event_date_utc)?.toLocaleDateString(),
            cardTitle: item.title,
            cardSubtitle: item.details,
        })
    });

    return (
        <div>
            <Navbar />
            <Chrono items={items} mode="VERTICAL_ALTERNATING" />
        </div>
    )
}
