import React from 'react';
import './StoryFeed.css';

export default function StoryFeed(props){
    return(
        <div className='container_story story_feed'>
            <div className='borda'>
                <figure className='imagem_story'>
                    <img src={props.imagem} alt="Imagem do perfil" />
                </figure>
            </div>
            <div className='nome'>
                <p>{props.nome}</p>
            </div>
        </div>
    );
}