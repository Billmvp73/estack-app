import React from 'react'
import './secondSection.css'
import Mission from './pictures/mission.png'

function secondSection() {
    return (
        <div>
            <div className="missionContainer">
                <p className="missionText">The Agency’s mission is to modernize and progress the experience 
                    of buying and selling real estate by cultivating a spirit of collaboration, 
                    innovation, and integrity. 
                </p>
                <p className="missionPic"><img src={Mission} alt="Mission Pic" /></p>
            </div>
            <div className="SRBContainer">
                <ul className="SRBBox" id="sell">Sell</ul>
                <ul className="SRBBox" id="rent">Rent</ul>
                <ul className="SRBBox" id="buy">Buy</ul>
            </div>
        </div>
    )
}

export default secondSection