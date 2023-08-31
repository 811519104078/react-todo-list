import { FaPlus } from "react-icons/fa"
import React from 'react'
import { useRef } from "react"

const AddList = ({newItem,setNewItem,handleSubmit}) => {
   const inputRef = useRef()
    return(
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">
         Add item
      </label>
      <input type="text"
      autoFocus
      ref={inputRef}
       placeholder="items to be add"
       id="text"
       required
       value= {newItem}
       onChange={(e)=> setNewItem(e.target.value)}/>
       <button type="submit" onClick={()=>inputRef.current.focus()}><FaPlus /></button>
      
      
    </form>
    )
   }
   export default AddList;