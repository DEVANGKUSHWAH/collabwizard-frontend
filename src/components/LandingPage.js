import React from 'react'
import styles from "./LandingPage.module.scss";
import img1 from "../assets/images/studying.svg";
import img2 from "../assets/images/teaching.svg";
import img3 from "../assets/images/booklover.svg";
import img4 from "../assets/images/school.svg";
import img5 from "../assets/images/truefriend.svg";

function LandingPage() {
    return (
        <>
        <div className={styles.heroContainer}>
           <div className={styles.heroText}>
            <h1 className={styles.heading}>The standard Lorem Ipsum passage, used since the 1500s</h1>
            <span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </span>
            <div className={styles.heroButtonContainer}>
                    <div className={styles.text}>Learn More</div>
            </div>
           </div>
           <div className={styles.heroImage}>
                <img src={img1} alt="hero"></img>
           </div>
        </div>
        <div className={styles.services}>
            <span className={styles.serviceHeading}>Services</span>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <div className={styles.cardImage}>
                        <img src={img4} alt="card"></img>
                    </div>
                    <div className={styles.cardHeading}>
                        <h2 className={styles.heading}>Lorem ipsum dolor sit amet</h2>
                        <div className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel ligula ut arcu commodo mattis in at velit. Nulla laoreet malesuada odio sit amet euismod. Aenean elementum blandit lacinia. </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardImage}>
                        <img src={img4} alt="card"></img>
                    </div>
                    <div className={styles.cardHeading}>
                        <h2 className={styles.heading}>Lorem ipsum dolor sit amet</h2>
                        <div className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel ligula ut arcu commodo mattis in at velit. Nulla laoreet malesuada odio sit amet euismod. Aenean elementum blandit lacinia. </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardImage}>
                        <img src={img4} alt="card"></img>
                    </div>
                    <div className={styles.cardHeading}>
                        <h2 className={styles.heading}>Lorem ipsum dolor sit amet</h2>
                        <div className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel ligula ut arcu commodo mattis in at velit. Nulla laoreet malesuada odio sit amet euismod. Aenean elementum blandit lacinia. </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.features}>
            <h1 className={styles.featureHeading}>Features</h1>
            <div className={styles.featureContainer}>
                <div className={styles.featureImage}>
                        <img src={img2} alt="feature"></img>
                </div> 
                <div className={styles.featureText}>
                    <h1 className={styles.heading}>The standard Lorem Ipsum passage, used since the 1500s</h1>
                    <div className={styles.content}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </div>
                </div>
            </div>
            <div className={styles.featureContainer}>
                <div className={styles.featureText}>
                    <h1 className={styles.heading}>The standard Lorem Ipsum passage, used since the 1500s</h1>
                    <div className={styles.content}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</div>
                </div>
                <div className={styles.featureImage}>
                        <img src={img3} alt="feature"></img>
                </div> 
            </div>
        </div>
        <div className={styles.gettingStarted}>
            <div className={styles.startedHeading}>Getting Started</div>
            <div className={styles.startedImage}>
                <img src={img5} alt="started"></img>
            </div> 
            <div className={styles.startedButtonContainer}>
                <div className={styles.text}>Get Started Now</div>
            </div>
        </div>
        </>
    )
}

export default LandingPage;
