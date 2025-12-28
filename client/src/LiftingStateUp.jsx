import React from 'react'
import ChildToParent from './ChildToParent'

const LiftingStateUp = () => {
  // let user = "Alex";

  function sayHello(n){
      // alert("Hello " + n)
      console.log(n)
  }
  return (
    <>
      <h2>This is Lifting State Up in React JS</h2>
      {/* <ChildToParent item={user} /> */}
      <ChildToParent item={sayHello}/>
    </>
  )
}

export default LiftingStateUp
