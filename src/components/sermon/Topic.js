import React from 'react';
import Container from 'react-bootstrap/Container';
import Style from './sermon.module.css';
import Row from 'react-bootstrap/Row';

import { TopicPost } from '../TopicPost/Topic';
export const TopicContent = () => {
    return (
        <div className={Style.Container}>
                <TopicPost
                    title="Title"
                    content={1}                    img='/recent/image.jpg'
                />
               
                <TopicPost
                    title="Title"
                    content={2}                    img='/recent/image.jpg'
                />
               
                <TopicPost
                    title="Title"
                    content={20}                    img='/recent/image.jpg'
                />
               
                <TopicPost
                    title="Title"
                    content={1}                    img='/recent/image.jpg'
                />
               
                <TopicPost
                    title="Title"
                    content={1}                    img='/recent/image.jpg'
                />
               




          
        </div>
    )
}
