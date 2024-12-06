import React from 'react';
import Card from './Card'; // Replace with your actual Card component
import hacker from '../../assets/hacker.png';
import Nabar from '../Menu/NavBar';
import '../../App.css';
const InfoCards = () => {

    const infoData = [
        { Quest: "Qu’est-ce qu’une attaque par flooding ?",resp:"En cybersécurité, le flooding sature un système de requêtes. Cela rappelle les tsunamis, qui inondent littéralement des régions entières.", image: hacker },
        { Quest: "À quoi sert un pare-feu (firewall) ?",resp:"Un pare-feu protège contre les accès non autorisés, agissant comme une barrière contre les menaces extérieures.", image: hacker },
        { Quest: "Qu’est-ce qu’un ransomware ?",resp:"Un ransomware est un logiciel malveillant qui bloque un système et demande une rançon pour le débloquer.", image: hacker },
        { Quest: "Qu’est-ce qu’une attaque par flooding ?",resp:"En cybersécurité, le flooding sature un système de requêtes. Cela rappelle les tsunamis, qui inondent littéralement des régions entières.", image: hacker },
        { Quest: "À quoi sert un pare-feu (firewall) ?",resp:"Un pare-feu protège contre les accès non autorisés, agissant comme une barrière contre les menaces extérieures", image: hacker },
        {Quest:"Qu’est-ce qu’un ransomware ?",resp:"Un ransomware est un logiciel malveillant qui bloque un système et demande une rançon pour le débloquer",image:hacker}
        // Add more speakers as needed
      ];

  return (
 
    <section style={{ paddingTop: '120px' }}>
        
        <Nabar/>
      <div className="container mt-4">
                <div className="row">
                {infoData.map((info, index) => (
                <div className="col-md-4 mb-4" key={index}>
                <Card 
                    quest={info.Quest} 
                    image={info.image} 
                    resp={info.resp} 
                    
                />
                </div>
                ))}
                </div>
            </div>
           
    </section>

  );
};

export default InfoCards;
