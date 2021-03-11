import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import DetailInfo from '../DetailInfo/DetailInfo';

const TeamDetail = () => {
    const {id}= useParams();
    const [details, setDetails]= useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
        fetch(url)
        .then(response => response.json())
        .then(data =>setDetails(data.teams))
    },[])
    console.log(details);
    return (
        <div>
            <h1></h1>
            {
                details.map(detail => <DetailInfo detail={detail} key={detail.idTeam}></DetailInfo> )
            }
        </div>
    );
};

export default TeamDetail;