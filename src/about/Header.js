import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo  from '../assets/images/logo.png';

function Header() {

    return(
        <header class="header">
            {/*  Top Bar  */}
            <div class="top_bar">
                <div class="bar__info">
                    <div class="phone">+84 123 456 789</div>  
                    <div class="social">
                        <ul class="social_list">
                            <li class="social_list_item"><a href="#"><FontAwesomeIcon size="2x" icon={['fab', 'facebook']} /></a></li>
                            <li class="social_list_item"><a href="#"><FontAwesomeIcon size="2x" icon={['fab', 'instagram']} /></a></li>
                            <li class="social_list_item"><a href="#"><FontAwesomeIcon size="2x" icon={['fab', 'youtube']} /></a></li>
                        </ul>
                    </div>

                </div>              
            </div>

            <div class="main_nav">
                <div class="main_nav__logo"><a href="index.html"><img src={logo} alt="logo"/>
                        DULICHVIET</a></div>
                <div class="main_nav__menu">
                    <ul class="main_nav__list">
                        <li class="main_nav__item"><a href="index.html">TRANG CHỦ</a></li>
                        <li class="main_nav__item"><a href="about.html">GIỚI THIỆU</a></li>
                        <li class="main_nav__item"><a href="offers.html">ƯU ĐÃI</a></li>
                        <li class="main_nav__item"><a href="blog.html">TIN TỨC</a></li>
                        <li class="main_nav__item"><a href="contact.html">LIÊN HỆ</a></li>
                    </ul>
                </div>
                <div class="main_nav__search">
                    <form action=""><input class="input_search" type="text"/></form>
                    <div class="search__item"><i class="fas fa-search"></i></div>
                </div>
            </div>
        </header>
    )
}

export default Header;  