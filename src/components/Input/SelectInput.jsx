import { useState, useRef } from "react"


export default function SelectInputField(props) {

    const email = useRef()
    const firstName = useRef(null)
    const lastName = useRef()


    const [values, setValues] = useState({})

    const { options, label, onChangeHandler } = props

    const handleChangeValue = (e) => {
        console.log(e, "THE EVENTS")

        const { value, type, checked, name } = e.target

        switch (type) {
            case 'checkbox':
                setValues({
                    ...values,
                    [name]: checked
                })
                break;
            case 'radio':
                setValues({
                    ...values,
                    [name]: checked
                })
                break;
            case 'file':
                setValues({
                    ...values,
                    [name]: e.target.files[0]
                })
                break;
            default:
                setValues({
                    ...values,
                    [name]: value
                })
        }
    }

    // ALGORITHM 
// Write a function reverseWords(str) that reverses the order of words in a sentence.

// Given a string of words separated by spaces, return a new string with the words in reverse order. 
// The letters inside each word stay the same — only the word order flips.
// Input
// reverseWords("hello world")

// Output
// "world hello"

    // FORM  

    console.log(values, "THE VALUESSSSS")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('nAME', firstName.current.value)
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
            <input
            ref={firstName}
            />

            <button  type="submit" >Submit FirstName</button>

            </form>


            <label>{label} </label>
            <select

                onChange={(e) => {
                    return e.target.value
                }}

                onBlur={((e) => {
                    console.log(e.target.value)

                })}

                className="text-black">
                <option>Select {label}</option>
                {options && options.map((op, i) => (
                    <option className="text-black">{op.state}</option>
                ))}
            </select>


            {/* REACT FORMS */}
            <div className="grid grid-cols-1 gap-5 ">
                <input
                    id="firstName"
                    name="firstName"
                    placeholder=""
                    type="text"
                    onChange={(e) => handleChangeValue(e)}
                />

                <p>Helooosososo</p>
                <input
                    id="firstName"
                    name="firstName"
                    placeholder=""
                    type="text"
                    onChange={(e) => handleChangeValue(e)}
                />

                <input
                    id="lastName"
                    name="lastName"
                    placeholder=""
                    type="text"
                    onChange={(e) => handleChangeValue(e)}
                />
                <input
                    id="email"
                    name="email"
                    placeholder=""
                    type="text"
                    onChange={(e) => handleChangeValue(e)}
                />

                <input
                    id="isMaried"
                    name="isMaried"
                    placeholder=""
                    type="checkbox"
                    onChange={(e) => handleChangeValue(e)}
                />

                <input
                    id="telPhone"
                    name="telPhone"
                    placeholder=""
                    type="tel"
                    onChange={(e) => handleChangeValue(e)}
                />

                    <input
                    id="gender"
                    name="gender"
                    placeholder=""
                    type='radio'
                    onChange={(e) => handleChangeValue(e)}
                />

                                   <input
                    id="profilePicture"
                    name="profilePicture"
                    placeholder=""
                    type='file'
                    onChange={(e) => handleChangeValue(e)}
                />
            </div>

        </div>
    )
}