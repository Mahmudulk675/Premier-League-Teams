import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Team from '../Team/Team';
import './Home.css'

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
        .then(response => response.json())
        .then(data =>setTeams(data.teams))
    },[])
    console.log(teams);
    return (


        <div>

            <Header></Header>
           <div className="cardContainer row">
           {
                teams.map(team => <Team team ={team} key={team.idTeam}></Team> )
            }
           </div>
        </div>
    );
};

export default Home;