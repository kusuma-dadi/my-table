import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




// const [searchInput,setSearchInput] = useState('');
  
// const list = contacts.filter(contact => contact.name.includes(searchInput))
//  console.log(list);
 
// <SearchFiled setSearchInput={setSearchInput} searchInput={searchInput} />
 
// import React, { useState } from 'react'

// const SearchFiled = (props) => {
 
//   const [ val, setVal ] = useState('')
 
//   const addButton = () => {
//     console.log(val);
//     props.setSearchInput(val)
//   }
// console.log(props.searchInput);
//   return (
//     <div>
//       <label htmlFor='search'>
//          <input type='text' placeholder='search names...' 
//          onChange={(e) =>setVal(e.target.value)} value={val}
//          />  
//       </label>&nbsp;
//       <button onClick={addButton}>Search</button>
     
//     </div>
//   )
// }

// export default SearchFiled





// import React, { useState } from 'react'

// const SearchFiled = (props) => {
 
//   const [ val, setVal ] = useState('')
 
//   const addButton = () => {
//     setVal([props.searchInput,...val])
//     props.setSearchInput("")
//   }

// console.log(props.searchInput);
//   return (
//     <div>
//       <label htmlFor='search'>
//          <input type='text' placeholder='search names...' 
//          onChange={(e) => props.setSearchInput(e.target.value)} value={props.searchInput}
//          />  
//       </label>&nbsp;
//       <button onClick={addButton}>Search</button>
     
//     </div>
//   )
// }

// export default SearchFiled
