import React, { useEffect } from 'react';
import '../styles/ET.css';

import Header from '../componenets/header';
import Footer from '../componenets/footer';
import { useLocation } from 'react-router-dom';

const Etpage: React.FC = () => {
        const location = useLocation();
    
        useEffect(() => {
          // Check if there's a hash in the URL
          if (location.hash) {
            // Extract the hash from the URL
            const targetSection = document.getElementById(location.hash.substring(1));
    
            // Scroll to the target section
            if (targetSection) {
              targetSection.scrollIntoView({ behavior: "smooth" });
            }
          }
        }, [location.hash]);
  return (
    <>

        <Header />

        <div className="main">
        <h2 className="ET--title">EVANGELISTIC TEAMS</h2>


        <div className="ET-section" id='rivet'>

            <div className="ET-section--flex">
                <h3 className="ET-name">RIVET</h3>
                <p className="ET-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cupiditate, sequi quis ducimus rem, quidem obcaecati illum odit nostrum sed omnis libero, dolore optio porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deleniti consectetur dolor velit expedita, doloremque quibusdam temporibus consequatur. Ut, sed?</p>
            </div>

            <div className="ET-img">
                <img src="" alt="" />
            </div>


        </div>

        <div className="hr-et"></div>


        <div className="ET-section ET-section--reverse" id='net'>

            <div className="ET-section--flex">
                <h3 className="ET-name">NET</h3>
                <p className="ET-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cupiditate, sequi quis ducimus rem, quidem obcaecati illum odit nostrum sed omnis libero, dolore optio porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deleniti consectetur dolor velit expedita, doloremque quibusdam temporibus consequatur. Ut, sed?</p>
            </div>

            <div className="ET-img">
                <img src="" alt="" />
            </div>


        </div>

        <div className="hr-et"></div>


        <div className="ET-section" id='eset'>

            <div className="ET-section--flex">
                <h3 className="ET-name">ESET</h3>
                <p className="ET-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cupiditate, sequi quis ducimus rem, quidem obcaecati illum odit nostrum sed omnis libero, dolore optio porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deleniti consectetur dolor velit expedita, doloremque quibusdam temporibus consequatur. Ut, sed?</p>
            </div>

            <div className="ET-img">
                <img src="" alt="" />
            </div>


        </div>

        <div className="hr-et"></div>


        <div className="ET-section ET-section--reverse" id='weso'>

            <div className="ET-section--flex">
                <h3 className="ET-name">WESO</h3>
                <p className="ET-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cupiditate, sequi quis ducimus rem, quidem obcaecati illum odit nostrum sed omnis libero, dolore optio porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deleniti consectetur dolor velit expedita, doloremque quibusdam temporibus consequatur. Ut, sed?</p>
            </div>

            <div className="ET-img">
                <img src="" alt="" />
            </div>


        </div>

        <div className="hr-et"></div>


        <div className="ET-section" id='cet'>

            <div className="ET-section--flex">
                <h3 className="ET-name">CET</h3>
                <p className="ET-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cupiditate, sequi quis ducimus rem, quidem obcaecati illum odit nostrum sed omnis libero, dolore optio porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deleniti consectetur dolor velit expedita, doloremque quibusdam temporibus consequatur. Ut, sed?</p>
            </div>

            <div className="ET-img">
                <img src="" alt="" />
            </div>


        </div>


    </div>

        <Footer />

    </>
  );
};


export default Etpage;
