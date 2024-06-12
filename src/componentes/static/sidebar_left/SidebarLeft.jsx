import React from 'react';
import './SidebarLeft.css';
import { GoHome } from "react-icons/go";
import { IoCompassOutline } from "react-icons/io5";
import Logo from '../assets/logo.png';
import { FiSearch } from "react-icons/fi";
import { MdOutlineMovie } from "react-icons/md";
import { LiaFacebookMessenger } from "react-icons/lia";
import { HiOutlineHeart } from "react-icons/hi";
import { LuPlusSquare } from "react-icons/lu";

export default function SidebarLeft(){
    return (
        <div className='container_sidebar_left'>
            <div className='sidebar_left'>
                <div className='logo'>
                    <h1><img src={Logo} alt="Logo" /></h1>
                </div>
                <nav className='menu'>
                    <ul className='list'>
                        <li className='item'>
                            <GoHome 
                                style={{
                                    width: '1.5em',
                                    height: '1.5em'
                                }}
                            />
                            <span>Página inicial</span>
                        </li>
                        <li className='item'>
                            <FiSearch 
                                style={{
                                    width: '1.5em',
                                    height: '1.5em'
                                }}
                            />
                            <span>Pesquisar</span>
                        </li>
                        <li className='item'>
                            <IoCompassOutline 
                                style={{
                                    width: '1.5em',
                                    height: '1.5em'
                                }}
                            />
                            <span>Explorar</span>
                        </li>
                        <li className='item'>
                            <MdOutlineMovie
                                style={{
                                    width: '1.5em',
                                    height: '1.5em'
                                }}
                            />
                            <span>Reels</span>
                        </li>
                        <li className='item'>
                            <LiaFacebookMessenger 
                                style={{
                                    width: '1.5em',
                                    height: '1.5em'
                                }}
                            />
                            <span>Mensagens</span>
                        </li>
                        <li className='item'>
                            <HiOutlineHeart
                                style={{
                                    width: '1.5em',
                                    height: '1.5em'
                                }}
                            />
                            <span>Notificações</span>
                        </li>
                        <li className='item'>
                            <LuPlusSquare
                                style={{
                                    width: '1.5em',
                                    height: '1.5em'
                                }}
                            />
                            <span>Criar</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}