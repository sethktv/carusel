import React from 'react'
import { useDispatch } from 'react-redux'
import { profileActionCreator } from '../../store/profile'

export const LoginForm = () => {
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget
        
        const profile = {
            name: form['name'].value,
            lastName: form['lastname'].value
        }
        dispatch(profileActionCreator.setProfile(profile))
    }

    return (
        <form  className="form login-form" onSubmit={handleSubmit}>
            <div className="field">
                <input type="text" name='name' placeholder='Имя' />
            </div>
            <div className="field">
                <input type="text" name='lastname' placeholder='Фамилия' />
            </div>
            <div>
                <button type='submit'> Отправить </button>
            </div>
        </form>
    )
}