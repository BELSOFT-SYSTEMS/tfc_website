import React from 'react';
import Style from './baptism.module.css';
import { Button } from '../Button/Button';

const BaptismPoint = ({ title, content, img }) => {
    return (
        <div className={Style.baptismPoint}>
            <img src={img} alt={title} />
            <div className={Style.pointText}>
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
        </div>
    )
}

export const Baptismcontent = () => {
    return (
        <div className={Style.baptism}>
            <div className={Style.Hero}>
                <div className={Style.Herotext}>
                    <h1>Get Baptized.</h1>
                    <h4>AN OUTWARD SYMBOL OF AN INWARD DECISION</h4>
                </div>
                <img src='/baptisms/baptism1.png' className={Style.Heroimg} />
            </div>
            <div className={Style.baptisminfo}>
                <h1>What Is Baptism?</h1>
                <h4>BAPTISM IS A PUBLIC DEMONSTRATION OF YOUR FAITH IN JESUS CHRIST.</h4>
                <div className={Style.Points}>
                    <BaptismPoint
                        title="IT'S LIKE A WEDDING RING"
                        content="A wedding ring doesn't make you married, but is an
                         outward symbol of a decision you have made. The same is true of baptism. 
                         Baptism doesn't save you, but is an outward symbol of your salvation."
                        img='/baptisms/baptism-icon1.jpeg'
                    />
                    <BaptismPoint
                        title="IT'S FULL IMMERSION"
                        content="Just like Jesus went down into death, and came up to life - full immersion baptism is the best representation what Jesus did for us. It demonstrations us dying to our old self, and rising in life with Christ."
                        img='/baptisms/baptism-icon3.jpeg'
                    />
                    <BaptismPoint
                        title="IT'S PUBLIC"
                        content="We have dedicated services throughout the year to celebrate
                        together the public baptisms of people in our congregation. Some share 
                        their testimonies as well! It is a great Sunday to see what Jesus is doing."
                        img='/baptisms/baptism-icon2.jpeg'
                    />

                    <BaptismPoint
                        title="IT'S AFTER CONVERSION"
                        content="We practice baptism whereby people are able to consent
                         and understand its significance - have crossed the line of faith. 
                         We do not baptize young children who cannot yet proclaim their personal 
                         faith; but we do offer child dedications."
                        img='/baptisms/baptism-icon4.jpeg'
                    />
                </div>
                <div className={Style.button}>
                    <Button>I WANT TO BE BAPTIZED</Button>
                    <Button>I WANT TO DEDICATE MY CHILD</Button>
                </div>
            </div>
        </div>
    );
}
