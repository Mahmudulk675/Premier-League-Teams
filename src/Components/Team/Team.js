
import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight,faFacebook } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';

const Team = (props) => {
    const { strTeam, strCountry ,strTeamBadge,strStadium,idTeam} = props.team;
    const history = useHistory();
    const teamDetail = id => {
        const url = `team/${id}`;
        history.push(url);
    }
    return (
        
        <div className="teamContainer col-md-3 ">
            <Card className="teams " style={{ backgroundColor: 'gray'}}>
                <Card.Img variant="top" src={strTeamBadge} />
                <Card.Body>
                    <Card.Title>{strTeam}</Card.Title>
                    <h5>Country : {strCountry}</h5>
                    <Card.Text>
                        Stadium :- {strStadium}
                    </Card.Text>
                    <Button onClick={() => teamDetail(idTeam)} variant="primary" >Explore <FontAwesomeIcon icon={faArrowAltCircleRight} /></Button>
                </Card.Body>
            </Card>
        </div>
     
    );
};

export default Team;