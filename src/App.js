import React, { useState, Fragment } from 'react'
import './App.css'
import { nanoid } from 'nanoid'
import data from './moke-data.json'
import EditableRow from './compontents/EditableRow'
import ReadOnlyRow from './compontents/ReadOnlyRow'
import SearchFiled from './compontents/SearchFiled'

const  App = () => {
  const [contacts, setContacts] = useState(data);
  const [searchInput,setSearchInput] = useState('');
  
  const [addFormData, setAddFormData] = useState({
    name: '',
    email: '',
    address: ''
  })

  const [editFormData, setEditFormData] = useState({
    name: "",
    email: "",
    address: ""
  })

  const [editContactId, setEditContactId] = useState(null);


  const handleAddFormChange = (event) => {
    event.preventDefault()

    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData}
    newFormData[fieldName] = fieldValue

    setAddFormData(newFormData)
  }

    const handleAddFormSubmit = (event) => {
      event.preventDefault();
  
      const newContact = {
        id: nanoid(),
        name: addFormData.name,
        address: addFormData.address,
        email: addFormData.email,
      };
  
      const newContacts = [...contacts, newContact];
      setContacts(newContacts);
    };
  
  const handleEditFormChange = (event) => {
    event.preventDefault();
    
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    
    setEditFormData(newFormData);
  };
  
  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      name: contact.name,
      email: contact.email,
      address: contact.address
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

const list = contacts.filter(contact => contact.name.includes(searchInput))
 console.log(list);
 
  return (
    <div className='app-container'>
 <SearchFiled setSearchInput={setSearchInput} searchInput={searchInput} />
  <center><h1>Contact Details</h1></center>
      <table>
         <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
         </thead>
         <tbody>
          {list.map((contact) => (
            <Fragment>
            {editContactId === contact.id ? (
              <EditableRow
                editFormData={editFormData}
                handleEditFormChange={handleEditFormChange}
                handleCancelClick={handleCancelClick}
              />
            ) : (
              <ReadOnlyRow
                contact={contact}
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeleteClick}
              />
            )}
          </Fragment>
          ))}
         </tbody>
      </table>
      
      <h2>Add a Contact</h2>

      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="name"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
         />
        <input
        type="email"
        name="email"
        required="required"
        placeholder="Enter an email..."
        onChange={handleAddFormChange}
       />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an addres..."
          onChange={handleAddFormChange}
         />
        <button type="submit">Add</button>
     </form>
      </div>
  )
}

export default App