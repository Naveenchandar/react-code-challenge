import React from 'react';
import './index.css';
import HeaderImg from '../../assets/astronaut.png';
import Navbar from '../navbar/index';

export default function Home() {
    return (
        <section className='main-header'>
            <header>
                <Navbar />
                <section class="hero">
                    <div class="cta container">
                        <div class="left-section">
                            <h1>Space Exploration Technologies Corp. is an American aerospace manufacturer and space transportation services company headquartered in Hawthorne, California..</h1>
                            <button class="btn btn-primary">Explore Space</button>
                        </div>
                        <div class="right-section">
                            <img src={HeaderImg} alt="astronaut" />
                        </div>
                    </div>
                </section>
            </header>
        </section>
    )
}