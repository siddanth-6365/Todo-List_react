import React from 'react'

const TodolistItem = (  {todos,onDelete} ) => {  // getting obj and function as argument. always inside { } brackets if you want to access directly using that name todos.title or we can access through props and props.todos.title or props.onDelete
    return (
        <div >
            <h4 className=''>{todos.title}</h4>    {/* we can access everything of obj using .operator and code should be inside { } brackets  */}
            <p className=''>  {todos.desc}</p>
            <button className='btn btn-danger btn-sm' onClick={ ()=>{ onDelete(todos)} } > Delete </button>   {/* here onclick we are making arrow function and passing the todo name we cant do directly by onDelete because it will pre call function  */}
        </div>
      
    )
}

export default TodolistItem
