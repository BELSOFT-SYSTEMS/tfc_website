import React from 'react';
import Container from 'react-bootstrap/Container';
import Style from './sermon.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RecentPost = ({ title, content, img }) => {
    return (
        <Col className={Style.recentPoint}>
            <img src={img} alt={title} />
            <div className={Style.pointText}>
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
        </Col>
    )
}
export const RecentContent = () => {
    return(
        <Container className={Style.Container}>
            <Row>
                <RecentPost
                    content="Firm Faith"
                    img='/recent/image.jpg'
                />
                <RecentPost
                    content="Mary God's indwelling"
                    img='/recent/image.jpg'
                />
                <RecentPost
                    content="The book of Acts
                    "
                    img='/recent/image.jpg'
                />

                
                    
                
            </Row>
            <Row>
                <RecentPost
                    content="Firm Faith"
                    img='/recent/image.jpg'
                />
                <RecentPost
                    content="Mary God's indwelling"
                    img='/recent/image.jpg'
                />
                <RecentPost
                    content="The book of Acts
                    "
                    img='/recent/image.jpg'
                />




            </Row>
        </Container>
    )
}
