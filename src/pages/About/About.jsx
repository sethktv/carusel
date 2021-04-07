import React from 'react'
import { PageAnimated } from '../../components'
import './style.css'
import img_1_1 from './images/4/1.jpg'
import img_1_2 from './images/4/2.jpg'
import img_2_1 from './images/4/3.jpg'
import img_2_2 from './images/4/4.jpg'
import img_2_3 from './images/5/1.jpg'
import img_2_4 from './images/5/2.jpg'

export const About = () => {
    return (

        <PageAnimated>
            <div className="about">
                <div className="row">
                    <div className="block block-left"> <img src={img_1_1} alt="img" /></div>
                    <div className="block block-right"><img src={img_1_2} alt="img" /></div>
                </div>
                <div className="row">
                    <div className="block block-left"><img src={img_2_1} alt="img" /></div>
                    <div className="block block-left"><img src={img_2_2} alt="img" /></div>
                    <div className="block block-right"><img src={img_2_3} alt="img" /></div>
                    <div className="block block-right"><img src={img_2_4} alt="img" /></div>
                </div>
            </div>
        </PageAnimated>
    )
}