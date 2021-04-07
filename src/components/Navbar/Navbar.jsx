import React from 'react'
import { paths } from '../../constants'
import { useHistory } from 'react-router-dom'
import './style.css'
import { useDispatch } from 'react-redux'
import { animateActions } from '../../store/animate'

export const Navbar = () => {

    const history = useHistory()
    const dispatch = useDispatch()
    const hendleClickLink = (path) => (event) => {
        event.preventDefault()
        dispatch(animateActions.setStartAnimate(true))
        
        const animateTimeout = setTimeout(() => {
            history.push(path)
            dispatch(animateActions.setStartAnimate(false))
            clearTimeout(animateTimeout)
        },1000)
    }

    return (
        <div className="navbar">
            <a href='/' className='navbar-link' onClick={hendleClickLink(paths.network)}> 1 </a>
            <a href='/' className='navbar-link' onClick={hendleClickLink(paths.main)}> 2 </a>
            <a href='/' className='navbar-link' onClick={hendleClickLink(paths.about)}> 3 </a>
        </div>
    )
}