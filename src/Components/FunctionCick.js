import React from 'react'

function FunctionCick() {
  function clickHandler(){
    console.log("button clicked")
  }
  return (
   <button onClick={clickHandler}>Clickme</button>
  )
}

export default FunctionCick