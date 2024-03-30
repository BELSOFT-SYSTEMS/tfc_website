import React from 'react';
import Container from 'react-bootstrap/Container';
import Style from './sermon.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TopicPost = ({ title, content, img }) => {
    return (
        <Col className={Style.topicPoint}>
            
            <div className={Style.pointText}>
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
        </Col>
    )
}
export const TopicContent = () => {
    return (
        <Container className={Style.Container}>
            <Row>
                <TopicPost
                title="Title"
                    content="stuff"
                    img='/recent/image.jpg'
                />
                <TopicPost
                    content="Mary God's indwelling"
                    img='/recent/image.jpg'
                />
                <TopicPost
                    content="The book of Acts
                    "
                    img='/recent/image.jpg'
                />




            </Row>
            
        </Container>
    )
}
