import { SlArrowRight } from 'react-icons/sl';
import Style from './Topic.module.css'
export const TopicPost = ({ title, content,  }) => {
    return (
        <div className={Style.topic}>
            <p>{title}</p>
            <div className={Style.point}>
                <p>{content}</p>
               <SlArrowRight/>

            </div>
        </div>
    )
}