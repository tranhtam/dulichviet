import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

import post from '../assets/images/post.png';
import compass from '../assets/images/compass.png';
import bicycle from '../assets/images/bicycle.png';
import sailboat from '../assets/images/sailboat.png';
import hotel_1 from '../assets/images/hotel_1.jpg';
import hotel_2 from '../assets/images/hotel_2.jpg';
import hotel_3 from '../assets/images/hotel_3.jpg';
import hotel_4 from '../assets/images/hotel_4.jpg';
import offers_1 from '../assets/images/offers_1.jpg';
import offers_2 from '../assets/images/offers_2.jpg';
import offers_3 from '../assets/images/offers_3.jpg';
import offers_4 from '../assets/images/offers_4.jpg';
import intro_1 from '../assets/images/intro_1.jpg';
import cta from '../assets/images/cta.jpg';
import banahill from '../assets/images/banahill.jpg';
import hoian from '../assets/images/hoian.jpg';
import phuquoc from '../assets/images/phuquoc.jpg';
function Banner() {

    const [intros, setIntros] = useState([]);

    const fetchIntros = () => {
        fetch('http://149.28.153.73/api/tours')
            .then(res => res.json())
            .then(data => setIntros(data))

    }

    useEffect(() => {
        fetchIntros();
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <>
            <div className="main">
                {/* <!--slider--> */}
                <Slider {...settings}>
                    <div className="main__slide">
                        <div>
                            <div className="home_slide__background" style={{ backgroundImage: `url(${banahill})` }}></div>
                            {/* <div className="home_slide__background" style="background-image: "url(styles/images/banahill.jpg)"></div> */}
                            <div className="home_slider__content">
                                <div className="home_slider_content_inner animated bounceInLeft">
                                    <h1>tour</h1>
                                    <h1>Bana Hill</h1>
                                    <div className="button home_slider__button">
                                        <div className="button_bcg"></div>
                                        <a href="offers.html">Xem ngay<span></span><span></span><span></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="home_slide__item">
                            <div className="home_slide__background" style={{ background: `url(${hoian})` }}>
                            </div>
                            <div className="home_slider__content">
                                <div className="home_slider_content_inner animated bounceInRight">
                                    <h1>tour</h1>
                                    <h1>Hội An</h1>
                                    <div className="button home_slider__button">
                                        <div className="button_bcg"></div>
                                        <a href="offers.html">Xem ngay<span></span><span></span><span></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="home_slide__item">
                            <div className="home_slide__background" style={{ background: `url(${phuquoc})` }}>
                            </div>
                            <div className="home_slider__content">
                                <div className="home_slider_content_inner animated bounceInDown">
                                    <h1>tour</h1>
                                    <h1>Phú Quốc</h1>
                                    <div className="button home_slider__button">
                                        <div className="button_bcg"></div>
                                        <a href="offers.html">Xem ngay<span></span><span></span><span></span></a>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="main_slide__nav nav__prev"><i onClick={plusSlides(-1)}
                            className="fas fa-chevron-circle-left"></i>
                        </div>
                        <div className="main_slide__nav nav__next"><i onClick={plusSlides(1)}
                            className="fas fa-chevron-circle-right"></i>
                        </div>
                        <div className="main_slide__dots">
                            <ul className="customs_dots">
                                <li className="customs_dot active" onClick={currentSlide(1)}>01.</li>
                                <li className="customs_dot" onClick={currentSlide(2)}>02.</li>
                                <li className="customs_dot" onClick={currentSlide(3)}>03.</li>
                            </ul>
                        </div> */}
                    </div>
                </Slider>
                <div className="main_search">
                    <div id="tabs" className="main_search__tabs">
                        <ul className="search_tabs__list">

                            <li className="search_tabs__item"><a href="#tabs-1">
                                <i className="fas fa-umbrella-beach"></i><span>Trips</span></a>
                            </li>
                        </ul>
                        <div id="tabs-1" className="tabs_content animated fadeIn">
                            <form action="" className="search_content">
                                <div className="search_content__item">
                                    <div>Địa điểm</div>
                                    <input type="text" className="search_content__input" />
                                </div>
                                <div className="search_content__item">
                                    <div>Bắt đầu</div>
                                    <input type="date" className="search_content__input" placeholder="DD-MM-YYYY" />
                                </div>
                                <div className="search_content__item">
                                    <div>Kết thúc</div>
                                    <input type="date" className="search_content__input" placeholder="DD-MM-YYYY" />
                                </div>
                                <div className="search_content__item">
                                    <div>Người lớn</div>
                                    <select name="adults" className="search_content__input">
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                        <option>04</option>
                                        <option>05</option>
                                        <option>06</option>
                                    </select>
                                </div>
                                <div className="search_content__item">
                                    <div>Trẻ em</div>
                                    <select name="children" className="search_content__input">
                                        <option>0</option>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                        <option>04</option>
                                        <option>05</option>
                                        <option>06</option>
                                    </select>
                                </div>
                                <button className="button search_content__button">Tìm kiếm
                                    <span></span><span></span><span></span>
                                </button>
                            </form>
                        </div>

                    </div>
                </div>


                {/* <!--        Intro--> */}
                <div className="main_intro">
                    <h2>Những tour du lịch tốt nhất</h2>
                    <p>Đây là những tour du lịch tốt nhất hiện nay của chúng tôi.</p>
                    <p>Sẽ làm bạn hài lòng khi đăng ký những tour dưới đây.</p>
                    <div className="main_intro__items" id="main_intro_items_id">
                        {
                            intros.map((item, index) => {
                                console.log(item)
                                if (index < 3) {
                                    return (<>
                                        <div key={index} className="intro_item">
                                            <div className="intro_item__backgroud" style={{ backgroundImage: `url(${item.image})` }}>
                                            </div>
                                            <div className="intro_item__content">
                                                <div className="intro_date">Từ 15/04 - 15/05</div>
                                                <div className="intro_text">
                                                    <h1>{item.name}</h1>
                                                    <div className="intro_price">{item.price}</div>
                                                    <div className="rating rating_4">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                    </div>
                                                </div>
                                                <div className="button intro_button">
                                                    <div className="button_bcg"></div>
                                                    <a href="#">Xem ngay<span></span><span></span><span></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </>)
                                }

                            })
                        }

                    </div>
                </div>
                {/* <!--        CTA--> */}
                <div className="main_cta" style={{ backgroundImage: `url(${cta})` }}>
                    <div className="box main_cta__box">
                        <div className="slider" id="single_item">
                            <div>
                                <div className="cta_item">
                                    <div className="cta_item__title">Gói tour Đà Nẵng san trọng</div>
                                    <div className="cta_item__text">Tour du lịch Đà Nẵng 4 ngày 3 đêm đưa du khách đến với một
                                        thành
                                        phố thuộc vùng Nam Trung Bộ, Việt Nam. Đây là trung tâm kinh tế, văn hoá, giáo dục,
                                        khoa
                                        học và công nghệ lớn của khu vực miền Trung - Tây Nguyên. Đà Nẵng hiện là một trong
                                        13
                                        đô thị loại 1 đồng thời là một trong 5 thành phố trực thuộc Trung ương ở Việt Nam.
                                        Nguồn
                                        gốc từ "Đà Nẵng" là biến dạng của từ Chăm cổ "DAKNAN", nghĩa là vùng nước rộng lớn
                                        hay
                                        "sông lớn", "cửa sông cái". Năm 1835, với chỉ dụ của vua Minh Mạng, Cửa Hàn (tên gọi
                                        Đà
                                        Nẵng khi đó) trở thành thương cảng lớn nhất Miền Trung.
                                    </div>
                                    <div className="button cta_button">
                                        <div className="button_bcg"></div>
                                        <a href="#">Xem thêm <span></span> <span></span> <span></span> <span></span></a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="cta_item">
                                    <div className="cta_item__title">Gói tour Phú Quốc san trọng</div>
                                    <div className="cta_item__text">Khám phá đảo ngọc phú quốc với tour Phú Quốc 4 ngày 3 đêm
                                        của Phú Quốc Xanh . Chỉ với 4 ngày 3 đêm tại Phú Quốc , quý khách đã có thể thả mình
                                        với thiên nhiên , hòa mình vào làn nước trong xanh với những bờ cát thẳng dài ,
                                        những con suối yên bình , ẩn mình trong những cánh rừng xanh ngát …. Quý khách sẽ
                                        được tận hưởng 1 kỳ nghỉ thật ý nghĩa và nhiều niềm vui.
                                    </div>
                                    <div className="button cta_button">
                                        <div className="button_bcg"></div>
                                        <a href="#">Xem thêm <span></span> <span></span> <span></span> <span></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <!--        Offers--> */}
                <div className="main_offers">
                    <div className="box main_offers__box">
                        <h2 className="offers_title">Các ưu đãi tối nhất</h2>
                        <div className="offers_items">
                            {
                                intros.map((item, index) => {
                                    if (index < 4) {
                                        return (<>
                                            <div key={index} className="offers_item">
                                                <div className="offers_image">
                                                    <div className="offers_image_background"

                                                        style={{ backgroundImage: `url(${item.image})` }}></div>
                                                    <div className="offers_name"><a href="#">{item.name}</a></div>
                                                </div>
                                                <div className="offers_content">
                                                    <div className="offers_price">{item.price}</div>
                                                    <div className="rating rating_4 offers_rating">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                    </div>
                                                    <p className="offers_text">{item.description}</p>
                                                    <div className="offers_icons">
                                                        <ul className="offers_icons_list">
                                                            <li className="offers_icons_item"><img src={post} alt="" /></li>
                                                            <li className="offers_icons_item"><img src={compass} alt="" /></li>
                                                            <li className="offers_icons_item"><img src={bicycle} alt="" /></li>
                                                            <li className="offers_icons_item"><img src={sailboat} alt="" /></li>
                                                        </ul>
                                                    </div>
                                                    <div className="offers_link"><a href="/offers">Đọc thêm</a></div>
                                                </div>
                                            </div>
                                        </>)
                                    }
                                })
                            }

                        </div>
                    </div>
                </div>
                <div className="main_hotel">
                    <div className="box main_hotel__box">
                        <h2 className="main_hotel_title">Khách sạn được ưa thích nhất</h2>
                        <div className="hotel_items">
                            <div className="hotel_item">
                                <div className="hotel_image">
                                    <img src={hotel_1} alt="" />
                                </div>
                                <div className="hotel_content">
                                    <div className="hotel_title"><a href="#">Green Plaza Hotel</a></div>
                                    <div className="hotel_price">1,000,000đ</div>
                                    <div className="hotel_location">Hải Châu, Đà Nẵng</div>
                                </div>
                            </div>
                            <div className="hotel_item">
                                <div className="hotel_image">
                                    <img src={hotel_2} alt="" />
                                </div>
                                <div className="hotel_content">
                                    <div className="hotel_title"><a href="#">Hilton Đà Nẵng</a></div>
                                    <div className="hotel_price">3,000,000đ</div>
                                    <div className="hotel_location">Hải Châu, Đà Nẵng</div>
                                </div>
                            </div>
                            <div className="hotel_item">
                                <div className="hotel_image">
                                    <img src={hotel_3} alt="" />
                                </div>
                                <div className="hotel_content">
                                    <div className="hotel_title"><a href="#">Hanoi Hotel</a></div>
                                    <div className="hotel_price">1,900,00đ</div>
                                    <div className="hotel_location">Hà Nội</div>
                                </div>
                            </div>
                            <div className="hotel_item">
                                <div className="hotel_image">
                                    <img src={hotel_4} alt="" />
                                </div>
                                <div className="hotel_content">
                                    <div className="hotel_title"><a href="#">Sofitel Sài Gòn</a></div>
                                    <div className="hotel_price">4,100,000đ</div>
                                    <div className="hotel_location">Quận 1, HCM</div>
                                </div>
                            </div>
                            <div className="hotel_item">
                                <div className="hotel_image">
                                    <img src={hotel_1} alt="" />
                                </div>
                                <div className="hotel_content">
                                    <div className="hotel_title"><a href="#">Green Plaza Hotel</a></div>
                                    <div className="hotel_price">1,000,000đ</div>
                                    <div className="hotel_location">Hải Châu, Đà Nẵng</div>
                                </div>
                            </div>
                            <div className="hotel_item">
                                <div className="hotel_image">
                                    <img src={hotel_2} alt="" />
                                </div>
                                <div className="hotel_content">
                                    <div className="hotel_title"><a href="#">Hilton Đà Nẵng</a></div>
                                    <div className="hotel_price">3,000,000đ</div>
                                    <div className="hotel_location">Hải Châu, Đà Nẵng</div>
                                </div>
                            </div>
                            <div className="hotel_item">
                                <div className="hotel_image">
                                    <img src={hotel_3} alt="" />
                                </div>
                                <div className="hotel_content">
                                    <div className="hotel_title"><a href="#">Hanoi Hotel</a></div>
                                    <div className="hotel_price">1,900,00đ</div>
                                    <div className="hotel_location">Hà Nội</div>
                                </div>
                            </div>
                            <div className="hotel_item">
                                <div className="hotel_image">
                                    <img src={hotel_4} alt="" />
                                </div>
                                <div className="hotel_content">
                                    <div className="hotel_title"><a href="#">Sofitel Sài Gòn</a></div>
                                    <div className="hotel_price">4,100,000đ</div>
                                    <div className="hotel_location">Quận 1, HCM</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;