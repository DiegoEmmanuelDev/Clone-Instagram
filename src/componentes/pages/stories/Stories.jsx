import React from 'react';
import StoryFeed from '../story_feed/StoryFeed';
import Perfil1 from '../assets/perfil1.jpg';
import Perfil2 from '../assets/perfil2.jpg';
import Perfil3 from '../assets/perfil3.jpg';
import Perfil4 from '../assets/perfil4.jpg';
import Perfil5 from '../assets/perfil5.jpg';
import Perfil6 from '../assets/perfil6.jpg';
import Perfil7 from '../assets/perfil7.jpg';

import './Stories.css';

var stories = [
    {
        imagem: Perfil1,
        nome: "Neymar"
    },
    {
        imagem: Perfil2,
        nome: "Alanzoka"
    },
    {
        imagem: Perfil3,
        nome: "Aspas"
    },
    {
        imagem: Perfil4,
        nome: "brtt"
    },
    {
        imagem: Perfil5,
        nome: "Messi"
    },
    {
        imagem: Perfil6,
        nome: "GamesEdu"
    },
    {
        imagem: Perfil7,
        nome: "Gaules"
    }
];

export default function Stories(){
    return(
        <div className='container_stories'>
           {
                stories.map((story) => {
                    return <StoryFeed imagem={story.imagem} nome={story.nome}></StoryFeed>
                })
           }
        </div>
    );
}