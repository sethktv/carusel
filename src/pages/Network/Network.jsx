import React from 'react'
import { PageAnimated } from '../../components'
import img_1 from './images/6/1.jpg'
import img_2 from './images/6/2.jpg'
import img_2_1 from './images/6/3.jpg'
import img_2_2 from './images/6/4.jpg'
import img_2_3 from './images/6/5.jpg'


export const Network = () => {
    return (
        <PageAnimated>
            <div className="network">
            <div className="row">
                    <div className="block block-right"><img src={img_1} alt=""/></div>
                    <div className="block block-right"><img src={img_2} alt=""/></div>
                </div>
                <div className="row">
                    <div className="block block-left"><img src={img_2_1} alt=""/></div>
                    <div className="block block-left"><img src={img_2_2} alt=""/></div>
                    <div className="block block-left"><img src={img_2_3} alt=""/></div>
                    <div className="block block-left"><img src={img_1} alt=""/></div>

                </div>
            </div>
        </PageAnimated>
    )
}