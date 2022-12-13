import React, { useState } from 'react'

const SearchFiled = (props) => {
 
  const [ val, setVal ] = useState('')
 
  const addButton = () => {
    console.log(val);
    props.setSearchInput(val)
  }
console.log(props.searchInput);
  return (
    <div>
      <label htmlFor='search'>
         <input type='text' placeholder='search names...' 
         onChange={(e) =>setVal(e.target.value)} value={val}
         />  
      </label>&nbsp;
      <button onClick={addButton}>Search</button>
     
    </div>
  )
}

export default SearchFiled