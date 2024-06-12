import React from 'react';
import './StoryProfile.css';

export default function StoryProfile(props){
    return(
        <div className='container_story story_profile'>
            <div className='borda'>
                <figure className='imagem_story'>
                    <img src={props.perfil_imagem} alt="Imagem do perfil" />
                </figure>
            </div>
            <div className='container_dados_perfil'>
                <div className='dados_perfil'>
                    <div className='nome'>
                        <p>{props.nome}</p>
                    </div>
                    <div className='pontinho'></div>  
                    <div className='periodo'>
                        <span>{props.periodo}</span>
                    </div>
                    <div className='pontinho'></div>  
                    <div className='seguir'>
                        <span>Seguir</span>
                    </div>
                </div>
                <div className='status'>
                    {props.status}
                </div>
            </div>
        </div>
    );
}