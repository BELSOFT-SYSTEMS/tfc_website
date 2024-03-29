import React from 'react';
import Container from 'react-bootstrap/Container';
import Style from './sermon.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Recent = ({ title, content, img }) => {
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
        <Container>
            <Row>
                <Recent
                    title="Firm Faith"
                />
                    
                
            </Row>
        </Container>
    )
}
