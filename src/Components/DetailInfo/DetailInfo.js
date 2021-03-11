

import React from 'react';
// import { Image } from 'react-bootstrap';
import './DetailInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faMapMarkerAlt,faFutbol, faVenusMars } from '@fortawesome/free-solid-svg-icons'
import male from '../Photo/male.png';
import female from '../Photo/female.png'

import { library } from '@fortawesome/fontawesome-svg-core'
import {  faFacebookSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons' 

library.add(faFacebookSquare, faTwitterSquare,faYoutubeSquare); 
// import bg2 from '../Photo/bg1.jpg';
// import Footer from '../Footer/Footer';



const DetailInfo = (props) => {
    let { strTeam,strTeamBanner,intFormedYear,strCountry,strSport,strGender,strDescriptionEN,strTwitter,strFacebook,strYoutube} = props.detail
    return (
        <div className="detailContainer">
            <div className="infoHeader">
               <img  src={strTeamBanner} alt=""/>
            </div>
            
        <div >
            
                <div className="teamInfo container mt-5" >
                    <div className="row">
                    <div className="teamInfoData col-sm-4">
                       <h2>{strTeam}</h2><br/>
                       <h5><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded : {intFormedYear}</h5>
                       <h5><FontAwesomeIcon icon={faFlag} /> Country : {strCountry}</h5>
                       <h5><FontAwesomeIcon icon={faFutbol} /> Sports Type: {strSport}</h5>
                       <h5><FontAwesomeIcon icon={faVenusMars} /> Gander : {strGender}</h5>

                    </div>
                    <div className="col-sm-6">
                        {
                            strGender === 'Male'
                            ? <img src={male} alt=""/>
                            : <img src={female} alt=""/>
                        }

                        
                    </div>
                    </div>
                </div>
            <div className="container mt-5">
                <p className="teamDescription">{strDescriptionEN}</p>
            </div>
            <div className="social container">
                <ul>
                    <a href={`https://${strTwitter}`} target="_blank"><FontAwesomeIcon icon={faTwitterSquare} /></a>
                    <a href={`https://${strFacebook}`} target="_blank"><FontAwesomeIcon icon={faFacebookSquare} /></a>
                    <a href={`https://${strYoutube}`} target="_blank"><FontAwesomeIcon icon={faYoutubeSquare} /></a>
                </ul>
            </div>
        </div>
        
        </div>
    );
};

export default DetailInfo;