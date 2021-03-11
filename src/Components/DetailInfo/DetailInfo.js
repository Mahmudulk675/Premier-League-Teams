

import React from 'react';
// import { Image } from 'react-bootstrap';
import './DetailInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faMapMarkerAlt, faPlus,faFutbol, faVenusMars } from '@fortawesome/free-solid-svg-icons'

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faFacebookF,faPlus } from '@fortawesome/free-solid-svg-icons'
// library.add(fab, faCheckSquare, faFacebookF)
import male from '../Photo/male.png'
// import bg2 from '../Photo/bg1.jpg';
// import Footer from '../Footer/Footer';



const DetailInfo = (props) => {
    const { strTeam,strTeamBanner,intFormedYear,strCountry,strGender,strDescriptionEN,strTwitter,strFacebook,strYoutube} = props.detail
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
                       <h5><FontAwesomeIcon icon={faFutbol} /> Sports Type: Football</h5>
                       <h5><FontAwesomeIcon icon={faVenusMars} /> Gander : {strGender}</h5>

                    </div>
                    <div className="col-sm-6">
                        <img src={male} alt=""/>
                    </div>
                    </div>
                </div>
            <div className="container mt-5">
                <p className="teamDescription">{strDescriptionEN}</p>
            </div>
            <div className="social container">
                <ul>
                    <a href={`https://${strTwitter}`}><FontAwesomeIcon icon={faPlus} /></a>
                    <a href={`https://${strFacebook}`}><FontAwesomeIcon icon={faPlus} /></a>
                    <a href={`https://${strYoutube}`}><FontAwesomeIcon icon={faPlus} /></a>
                </ul>
            </div>
        </div>
        
        </div>
    );
};

export default DetailInfo;