import React from 'react'

const ChildToParent = (prop) => {
    // let user = "Tovino"
    // let user = ["George", "gm@gmail.com", 154]
     let user = {name: "Basil", email: "gm@gmail.com", contact: 12345}
  return (
    <>
      {/* <h2>Name: {prop.item}</h2> */}
      <button onClick={() => prop.item(user)}>Click</button>
    </>
  )
}

export default ChildToParent
