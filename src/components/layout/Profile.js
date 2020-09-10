import React from 'react'

const Profile = ({match}) => {
    console.log(match)
    return (
        <div>
            I am profile {match.params.id}
        </div>
    )
}

export default Profile
