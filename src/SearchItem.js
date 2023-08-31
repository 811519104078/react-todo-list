import React from 'react'

function SearchItem({search,setSearch}) {
  return (
   
    <form className='searchForm'onSubmit={(e)=> e.preventDefault()}>
        <label htmlFor='search'>search</label>
        <input type='text' id='search' role='searchItems' placeholder='searchItems' 
         value={search}
         onChange={(e)=> setSearch(e.target.value)}/>
    </form>
  )
}

export default SearchItem