import React from 'react'


function TheHigherFunction (NewComponent) {
return function NewComponentFunc (props) {
    return (
        <div className='bg-green-500'>
            <NewComponent {...props} />
        </div>
    )
}
}


function GreeetMeooo ({name}) {
    return (
        <div>
            <h1>Helloooo {name}</h1>
        </div>
    )
}

const TheGreetRender = TheHigherFunction(GreeetMeooo)

function HigherOrderComp() {
  return (
    <div>
        <GreeetMeooo name='Adewale'/>
        <TheGreetRender name='ebenezer' />
    </div>
  )
}

export default HigherOrderComp