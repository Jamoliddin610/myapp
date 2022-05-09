import '../global.css';
import '../column.css';
import Header from './header';
import shs from '../imgs/student-hero-section.png'
import zmdiLamp from '../imgs/zmdi_lamp.svg'
import emcb from '../imgs/emojione-monotone_closed-book.svg'
import fs from '../imgs/first-student-img.png'
import ss from '../imgs/second-student-img.png'
import ths from '../imgs/third-student-img.png'
import fos from '../imgs/fourth-student-img.png'
import dr from '../imgs/dot-red.svg'
import dy from '../imgs/dot-yellow.svg'





function Hero() {
    return (
        <>
        <section id="site-hero">
            <Header/>
            <div className="hero-box">
                <div className="container">
                    <div className="row middle ">
                        <div className="hero-img-box">
                                <img className="hero-img" src={shs} alt="student-logo"></img>
                                    <div className="lamp-box"><img src={zmdiLamp} alt="lamp"></img></div>
                                    <div className="book-box"><img src={emcb} alt="book"></img></div>
                                <div className="student-add-box row middle">
                                        <img src={fs} alt="student-imgs" className="students-imgs"></img>
                                            <img src={ss} alt="student-imgs" className="students-imgs"></img>
                                                <img src={ths} alt="student-imgs" className="students-imgs"></img>
                                                    <img src={fos} alt="student-imgs" className="students-imgs"></img>
                                                    <button className="add-btn">
                                                        <i className="bx bx-plus"></i>
                                                        </button>
                                                    <p className="add-text">More than 80k+
                                                        Students <span className="join">joined!</span></p>

                                                </div>
                                                <img src={dr} alt="dot-red" className="dot-red"></img>
                                                    <img src={dy} alt="dot-yellow" className="dot-yellow"></img>
                                                    </div>
                                                    <div className="hero-title-box">
                                                        <p className="hero-title-about">Grow Your Skills To Advance Your Career Path.</p>
                                                        <p className="hero-title-parag">We have something big for you who want to level up!</p>
                                                        <div className="search-laern-bow">
                                                            <input type="text" placeholder="What do you want to learn..."></input>
                                                                <button className="search-btn">
                                                                    <i className="bx bx-search"></i>
                                                                    </button>
                                                        </div>
                                                        <span className="suggestion">Suggestions</span>
                                                        <ul className="suggestion-list row middle">
                                                            <li className="sug-items"><a href="#" className="sug-link">UI UX Design</a></li>
                                                            <li className="sug-items"><a href="#" className="sug-link">CSS Fundamental</a></li>
                                                            <li className="sug-items"><a href="#" className="sug-link">3D Design Illustration</a></li>
                                                            <li className="sug-items"><a href="#" className="sug-link">Website Development</a></li>
                                                            <li className="sug-items"><a href="#" className="sug-link">Logo Design</a></li>
                                                            <li className="sug-items"><a href="#" className="sug-link">Icon Design</a></li>

                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
     </>
    );
}

export default Hero;
