import React, { useEffect, useState } from 'react'
import { PageAnimated } from '../../components'
import './style.css'
import img_1_1 from './images/1/1.jpg'
import img_1_2 from './images/1/2.jpg'
import img_1_3 from './images/1/3.jpg'
import img_1_4 from './images/1/4.jpg'
import img_2_1 from './images/2/1.jpg'
import img_2_2 from './images/2/2.jpg'
import img_2_3 from './images/2/3.jpg'
import img_3_1 from './images/3/1.jpg'
import img_3_2 from './images/3/2.jpg'
import img_3_3 from './images/3/3.jpg'
import img_3_4 from './images/3/3.jpg'



const images_1 = [
    <img className='carusel' src={img_1_1} alt='' />,
    <img className='carusel_l' src={img_1_2} alt='' />,
    <img className='carusel_r' src={img_1_3} alt='' />,
]
const images_2 = [
    <img className='carusel' src={img_2_1} alt='' />,
    <img className='carusel_l' src={img_2_2} alt='' />,
    <img className='carusel_r' src={img_2_3} alt='' />,
]
const images_3 = [
    <img className='carusel' src={img_3_1} alt='' />,
    <img className='carusel_l' src={img_3_2} alt='' />,
    <img className='carusel_r' src={img_3_3} alt='' />,
]

export const Main = () => {
    const [ActiveIndex, setActiveIndex] = useState(0)
    useEffect(() => {
        setInterval(() => {
            setActiveIndex((current) =>
                current === [images_1, images_2, images_3].length - 1 ? 0 : current + 1
            )
        }, 5000)
        return () => setActiveIndex()
    }, [])
    
    const PrevImageIndex = ActiveIndex ? ActiveIndex - 1 : [images_1, images_2, images_3].length - 1
    const NextImageIndex = ActiveIndex === [images_1, images_2, images_3].length - 1 ? 0 : ActiveIndex + 1

    return (
        <PageAnimated>
            <div className="main">
                <div className="row">

                    <div className="block block-left">
                        <a href='/'>
                                {images_1[PrevImageIndex] && images_1[ActiveIndex] && images_1[NextImageIndex]}
                        </a>
                    </div>

                    <div className="block block-left">
                        <a href='/' >
                            {images_2[PrevImageIndex] && images_2[ActiveIndex] && images_2[NextImageIndex]}
                        </a>
                    </div>

                    <div className="block block-left">
                        <a href='/'  >
                            {images_3[PrevImageIndex] && images_3[ActiveIndex] && images_3[NextImageIndex]}
                        </a>
                    </div>
                </div>

                <div className="row">
                    <div className="block block-right"><img src={img_1_4} alt="img" /></div>
                    <div className="block block-right"><img src={img_3_4} alt="img" /></div>
                </div>
            </div>
        </PageAnimated >
    )
}