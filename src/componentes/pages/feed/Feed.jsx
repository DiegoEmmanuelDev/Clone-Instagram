import React from 'react';
import './Feed.css';
import Post from '../post/Post';
import Imagem from '../assets/post.jpg';
import Stories from '../../pages/stories/Stories';
import Perfil1 from '../assets/perfil1.jpg';
import Perfil2 from '../assets/perfil2.jpg';
import Perfil3 from '../assets/perfil3.jpg';
import Perfil4 from '../assets/perfil4.jpg';
import Perfil5 from '../assets/perfil5.jpg';
import Perfil6 from '../assets/perfil6.jpg';
import Perfil7 from '../assets/perfil7.jpg';
import Perfil8 from '../assets/logomercedes.jpg';
import Perfil9 from '../assets/furia.png';
import Perfil10 from '../assets/capperfil.png';
import Perfil11 from '../assets/mbappeperfil.jpg';
import Perfil12 from '../assets/amorperfil.jpg';
import cap from '../assets/pc.jpg';

import Mercedes from '../assets/mercedesamg.jpg';
import FuriaPost from '../assets/shazan.jpg';
import Mbappee from '../assets/mbappe.jpg';
import Amor from '../assets/comamor.jpeg';

var posts = [
    {
        post_imagem: Mercedes,
        perfil_imagem: Perfil8,
        descricao: "Conhecimento e Luxo",
        likes: 724.169,
        perfil: "Mercedes",
        status: "Original imagem",
        periodo: "2 sem"
    },
    {
        post_imagem: FuriaPost,
        perfil_imagem: Perfil9,
        descricao: "Novo integrante do Time",
        likes: 171.569,
        perfil: "Furia",
        status: "New Player",
        periodo: "1 m"
    },
    {
        post_imagem: Mbappee,
        perfil_imagem: Perfil11,
        descricao: "Titulos",
        likes:  979.527,
        perfil: "Kylian Mbappe",
        status: "2022 World Cup top scorer",
        periodo: "20h"
    },
    {
        post_imagem: cap,
        perfil_imagem: Perfil10,
        descricao: "Novo brinquedo",
        likes: 75.388,
        perfil: "Capjoga",
        periodo: "1d"
    },
    {
        post_imagem: Amor,
        perfil_imagem: Perfil12,
        descricao: "Com momo",
        likes: 1.663,
        perfil: "LaisRamos",
        periodo: "5d"
    }
]

export default function Feed(){
    return(
        <div className='container_feed'>
            <Stories></Stories>
            {
                posts.map((post) => {
                    return <Post post_imagem={post.post_imagem} descricao={post.descricao} likes={post.likes} perfil={post.perfil} status={post.status} perfil_imagem={post.perfil_imagem} periodo={post.periodo}></Post>
                })
            }
        </div>
    );
}