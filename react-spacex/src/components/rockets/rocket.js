import React from 'react';
import './rocket.css';
import Rocket1 from '../../assets/rocket1.png';
import Rocket2 from '../../assets/rocket2.png';
import Rocket3 from '../../assets/rocket3.png';
import { useFetch } from '../service';
import Navbar from '../navbar/index';
import { useParams } from 'react-router-dom';

export default function Rocket() {
    let { rocketId } = useParams();
    const res = useFetch(`https://api.spacexdata.com/v3/rockets/${encodeURIComponent(rocketId)}`, {});
    if (!res.response) {
        return <div>Loading...</div>
    }
    const result = res.response;
    const { rocket_name, description, country, cost_per_launch, diameter, height, first_stage, second_stage } = result;
    return (
        <>
            <Navbar />
            <section className="rocket container">
                <div className="left-block">
                    <div className="block">
                        <h1 className="with-underline">{rocket_name}</h1>
                        <p>{description}</p>
                    </div>
                    <div className="block country">
                        <h2 className="with-underline">Country</h2>
                        <p>{country}</p>
                    </div>
                    <div className="block cost">
                        <h2 className="with-underline">COST PER LAUNCH</h2>
                        <p>{cost_per_launch}</p>
                        <div className="block capacity">
                            <div>
                                <h4 className="with-underline">DIAMETER (ft)</h4>
                                <h6>{diameter?.feet}</h6>
                            </div>
                            <div>
                                <h4 className="with-underline">HEIGHT(ft)</h4>
                                <h6>{height?.feet}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="block first-stage">
                        <h2 className="with-underline">FIRST STAGE</h2>
                        <p>Falcon 9’s first stage incorporates {first_stage?.engines > 1 ? `${first_stage?.engines} engines` : `${first_stage?.engines} engine`} and has fuel amount of {first_stage?.fuel_amount_tons}</p>
                    </div>
                    <div className="block capacity">
                        <div>
                            <h4 className="with-underline">ENGINE</h4>
                            <h6>{first_stage?.engines}</h6>
                        </div>
                        <div>
                            <h4 className="with-underline">BURNTIME</h4>
                            <h6>{first_stage?.burn_time_sec} <small>SEC</small></h6>
                        </div>
                    </div>
                    <div className="block capacity">
                        <div>
                            <h4 className="with-underline">Thrust At Sea Level</h4>
                            <h6>{first_stage?.thrust_sea_level?.kN}kN</h6>
                        </div>
                    </div>
                </div>
                <div className="rocket-body">
                    <span className="first"><img src={Rocket1} alt="" /></span>
                    <span className="second"><img src={Rocket2} alt="" /></span>
                    <span className="third"><img src={Rocket3} alt="" /></span>
                </div>
                <div className="right-block">
                    <div className="floating-graphics">
                        <img src="./img/bus.png" alt="" />
                    </div>
                    <div className="block payload">
                        <h2>PAYLOAD</h2>
                        <p>{rocket_name} delivers payloads to space aboard the Dragon spacecraft or inside a composite fairing.</p>
                    </div>
                    <div className="block second-stage">
                        <h2 className="with-underline">SECOND STAGE</h2>
                        <p>Falcon 9’s second stage incorporates {second_stage?.engines > 1 ? `${second_stage?.engines} engines` : `${second_stage?.engines} engine`} and has fuel amount of {second_stage?.fuel_amount_tons}</p>
                    </div>
                    <div className="block capacity">
                        <div>
                            <h4 className="with-underline">ENGINE</h4>
                            <h6>9</h6>
                        </div>
                        <div>
                            <h4 className="with-underline">BURNTIME</h4>
                            <h6>162 <small>SEC</small></h6>
                        </div>
                    </div>
                    <div className="block capacity single">
                        <div>
                            <h4 className="with-underline">Thrust At Sea Level</h4>
                            <h6>7,607kN1</h6>
                        </div>
                    </div>
                    <div className="block engines">
                        <img src="./img/engines.png" alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}
