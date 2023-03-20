import React from 'react'
// import {Todoitem } from ".src/MyComponents/Todoitem";   // not work
import TodolistItem from './TodolistItem'

const Todos = (props) => {   //  props can access the obj and function using . operator (props.todos)

  return (
    <>
      <div className='container ' >
        <h3 className=' my-2'>Todo lists</h3> { /* className= 'text-center' makes the text center and my-3 makes size smaller from bootstraps property */}
        {
          props.todos.length === 0 ? "NO TODO LIST AVALIBALE" :
            props.todos.map((todos) => {
              return (<>
                < TodolistItem todos={todos} key={todos.sno} onDelete={props.onDelete} />
                <hr style={{ color: "white" }} />
              </>
              )
            }
            )
        }
        {/*
        1) here map it used to pass the each and every element 
        2) return one by one to Todolistitem.js
        */
        }
      </div>
    </>
  )
}

export default Todos
