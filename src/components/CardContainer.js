import React, { useEffect, useState } from 'react';
import Card from './Card';

const CardContainer = () => {
    // creation de la variable data qui va recevoir les données du fetch
    const [data, setData] = useState([]);

    // fetch sur le fichier json contenant la liste de nos logements
    useEffect(() => {
        fetch('../../dbLogements.json')
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            })
    }, []);



    return (
        <div className='.container'>
            <div className='flex'>
             {/* on parcours nos logements, on donne un id, on passe 
             la props logement a notre composant card logement={logement} */}
                {data.map((logement) => (
                   <Card key={logement.id} logement ={logement}/>
                ))}
            </div>
        </div>
    );
};

export default CardContainer;