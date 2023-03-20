import React from 'react'
import { useState } from 'react'
import { useRef } from 'react';

const AddTodo = ({ addtodo }) => {


    const [title, setTitle] = useState(""); {/* setting the initial state as nothing*/ }
    const [desc, setDesc] = useState("");
    const onSubmit = (e) => {
        e.preventDefault();
        if (!title || !desc) {     
            alert("Title or Description can't be empty ")
        } else {
            addtodo(title, desc);
            setTitle("");    {/* after adding new Todo make the value empty */ }
            setDesc("")
        }
    }
    return (
        <div className="container py-5">
            <h3>Add new Todo</h3>
            <form onSubmit={onSubmit}> {/* calling onsubmit arrow function when we press button*/}
                <div className="form-group mb-3">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter Title" />
                    {/* when we are trying to type something in input its now allowing because of  value={title} title initial state is empty so we are not able to change we can resolve this by adding onChange and adding a change event   */}
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="desc">Description</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" placeholder="Enter description" />
                </div>
                <button type="submit" className="btn btn-success" >Add</button>
            </form>
        </div>
    )
}

export default AddTodo
