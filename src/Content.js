import React, { useState } from 'react'
import ItemsList from "./ItemsList"

const Content = ({items, handleCheck, handleDelete}) => {

 
// Mapping all the required objects in our format

    return(
        <main>
          {(items.length) ? (
           <ItemsList
              items ={items}
              handleCheck = {handleCheck}
              handleDelete = {handleDelete}
           />
      ) : (
      <p style={{color: "red"}}>Your List is empty !!</p>)
      }
      </main>
    )
}

export default Content;
