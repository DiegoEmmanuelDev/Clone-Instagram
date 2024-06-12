import React from 'react';
import './Post.css';
import StoryProfile from '../story_profile/StoryProfile';
import { SlPaperPlane } from "react-icons/sl";
import { SlHeart } from "react-icons/sl";
import { SlBubble } from "react-icons/sl";
import { VscBookmark } from "react-icons/vsc";
import { BsThreeDots } from "react-icons/bs";

export default function Post(props){
    return(
        <div className='container_post'>
            <div className='post_profile'>
                <StoryProfile perfil_imagem={props.perfil_imagem} nome={props.perfil} status={props.status} periodo={props.periodo}></StoryProfile>
                <BsThreeDots
                    style={{
                        width: '1.8em',
                        height: '1.8em'
                    }}
                />
            </div>
            <figure className='imagem'>
                <img src={props.post_imagem} alt="Imagem do Post" />
            </figure>
            <div className='post_content'>
                <div className='icons'>
                    <div className='like_share_comment'>
                        <div className='like'>
                            <SlHeart 
                                style={{
                                    width: '1.8em',
                                    height: '1.7em'
                                }} 
                            />
                        </div>
                        <div className='comments'>
                            <SlBubble style={{
                                    width: '1.8em',
                                    height: '1.7em',
                                    transform: 'scaleX(-1)'
                                }} />
                        </div>
                        <div className='send'>
                            <SlPaperPlane style={{
                                    width: '1.8em',
                                    height: '1.7em'
                                }} />
                        </div>
                    </div>
                    <div className='save'>
                        <VscBookmark style={{
                                width: '1.9em',
                                height: '1.8em'
                            }} />
                    </div>
                </div>
                <div className='likes'>
                    <p>{props.likes} curtidas</p>
                </div>
                <div className='description'>
                    <p><span>{props.perfil}</span> {props.descricao}</p>
                </div>
                <div className='view_comments'>
                    <a href="#">Ver todos os 850 comentários</a>
                </div>
                <div className='add_comments'>
                    <input type="text" placeholder='Adicione um comentário'/>
                </div>
            </div>  
        </div>
    );
}