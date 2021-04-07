import React from 'react'
import { useSelector } from 'react-redux'

export const Profile = () => {

    const { profile } = useSelector((state) => state.profile)

    const profileName = !!profile && profile.name.length > 0
        ? profile.name : 'Имя не указано'

    const profileLastName = !!profile && profile.lastName.length > 0
        ? profile.lastName : 'Фамилия не указана'

    return (
        <div className="profile">
            {!!profile ? <h1>{profileName} {profileLastName}</h1> : <h1>данных нет</h1>}
        </div>
    )
}