import React from 'react';
import './index.css';
import Navbar from '../navbar/index';
import { useFetch } from '../service';

export default function Rocketlist(props) {
    const res = useFetch("https://api.spacexdata.com/v3/rockets", {});
    if (!res.response) {
        return <div>Loading...</div>
    }
    const result = res.response;

    const navToRocket = (rocketId) => {
        props.history.push(`/rocket/${rocketId}`)
    }
    return (
        <>
            <Navbar />
            <section class="allrockets section">
                <div class="container">
                    <div class="allrockets-inner section-inner">
                        <div class="allrockets-wrap">
                            {
                                result?.map(item => {
                                    return (
                                        <div class="rocket-item text-center is-revealing" onClick={() => navToRocket(item.rocket_id)}>
                                            <div class="rocket-item-inner">
                                                <div class="rocket-item-image">
                                                    <img src={item.flickr_images[0]} alt={`rocket_image_${item.id}`} />
                                                </div>
                                                <h4 class="rocket-item-title h3-mobile mb-8">{item.rocket_name}</h4>
                                                <p class="text-sm">{item.description}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
