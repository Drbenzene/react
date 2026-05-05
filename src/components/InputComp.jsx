import React from 'react'

export default function InputComponent(props) {

    const {userName, age, school, userInfo, label, type}  = props
    console.log(userInfo, "THE USER INFO")
    return (
        <div>
            HELLO {userName} I'm {age} years old and a student of {school}
            <p>
                Email is : {userInfo?.email}
            </p>

            <label>{label}</label>
            <input
            type={type}
            />
        </div>
    )
}



