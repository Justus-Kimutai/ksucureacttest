import React, { useEffect } from 'react';
import '../styles/ministries.css';

import Header from '../componenets/header';
import Footer from '../componenets/footer';
import { useLocation } from 'react-router-dom';

const MinistriesPage: React.FC = () => {

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

            <h2 className="ministries--title">MINISTRIES</h2>


            <div className="ministry-section"  id='wananzambe'>

                <div className="ministry-section--flex">
                    <h3 className="ministry-name">Wananzambe</h3>
                    <p className="ministry-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cupiditate, sequi quis ducimus rem, quidem obcaecati illum odit nostrum sed omnis libero, dolore optio porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deleniti consectetur dolor velit expedita, doloremque quibusdam temporibus consequatur. Ut, sed?</p>
                </div>

                <div className="ministry-img">
                    <img src="" alt="" />
                </div>


            </div>

            <div className="hr-ministries" ></div>

            <div className="ministry-section ministry-section--reverse" id='compassion'>

                <div className="ministry-section--flex">
                    <h3 className="ministry-name">Compassion</h3>
                    <p className="ministry-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cupiditate, sequi quis ducimus rem, quidem obcaecati illum odit nostrum sed omnis libero, dolore optio porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deleniti consectetur dolor velit expedita, doloremque quibusdam temporibus consequatur. Ut, sed?</p>
                </div>

                <div className="ministry-img">
                    <img src="" alt="" />
                </div>


            </div>

            <div  className="hr-ministries"></div>

            <div className="ministry-section" id='pw'>

                <div className="ministry-section--flex">
                    <h3 className="ministry-name">Praise and Worship</h3>
                    <p className="ministry-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cupiditate, sequi quis ducimus rem, quidem obcaecati illum odit nostrum sed omnis libero, dolore optio porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deleniti consectetur dolor velit expedita, doloremque quibusdam temporibus consequatur. Ut, sed?</p>
                </div>

                <div className="ministry-img">
                    <img src="" alt="" />
                </div>


            </div>

            <div className="hr-ministries" ></div>

            <div className="ministry-section ministry-section--reverse" id='intercessory'>

                <div className="ministry-section--flex">
                    <h3 className="ministry-name">Intercessory</h3>
                    <p className="ministry-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cupiditate, sequi quis ducimus rem, quidem obcaecati illum odit nostrum sed omnis libero, dolore optio porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deleniti consectetur dolor velit expedita, doloremque quibusdam temporibus consequatur. Ut, sed?</p>
                </div>

                <div className="ministry-img">
                    <img src="" alt="" />
                </div>


            </div>

            <div className="hr-ministries" ></div>

            <div className="ministry-section" id='cs'>

                <div className="ministry-section--flex">
                    <h3 className="ministry-name">Church School</h3>
                    <p className="ministry-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cupiditate, sequi quis ducimus rem, quidem obcaecati illum odit nostrum sed omnis libero, dolore optio porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deleniti consectetur dolor velit expedita, doloremque quibusdam temporibus consequatur. Ut, sed?</p>
                </div>

                <div className="ministry-img">
                    <img src="" alt="" />
                </div>


            </div>

            <div className="hr-ministries" ></div>


            <div className="ministry-section ministry-section--reverse" id='hs'>

                <div className="ministry-section--flex">
                    <h3 className="ministry-name">High School</h3>
                    <p className="ministry-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cupiditate, sequi quis ducimus rem, quidem obcaecati illum odit nostrum sed omnis libero, dolore optio porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deleniti consectetur dolor velit expedita, doloremque quibusdam temporibus consequatur. Ut, sed?</p>
                </div>

                <div className="ministry-img">
                    <img src="" alt="" />
                </div>


            </div>

            <div className="hr-ministries" ></div>

            <div className="ministry-section" id='ushering'>

                <div className="ministry-section--flex">
                    <h3 className="ministry-name">Ushering</h3>
                    <p className="ministry-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cupiditate, sequi quis ducimus rem, quidem obcaecati illum odit nostrum sed omnis libero, dolore optio porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deleniti consectetur dolor velit expedita, doloremque quibusdam temporibus consequatur. Ut, sed?</p>
                </div>

                <div className="ministry-img">
                    <img src="" alt="" />
                </div>


            </div>

            <div className="hr-ministries"></div>

            <div className="ministry-section ministry-section--reverse" id="creativity">

                <div className="ministry-section--flex">
                    <h3 className="ministry-name">Creativity</h3>
                    <p className="ministry-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cupiditate, sequi quis ducimus rem, quidem obcaecati illum odit nostrum sed omnis libero, dolore optio porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deleniti consectetur dolor velit expedita, doloremque quibusdam temporibus consequatur. Ut, sed?</p>
                </div>

                <div className="ministry-img">
                    <img src="" alt="" />
                </div>


            </div>

        </div>

        <Footer />

    </>
  );
};


export default MinistriesPage;
