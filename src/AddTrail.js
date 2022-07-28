import Modal from "./Modal"
import {useState} from 'react'
import './addTrail.css'
import { db } from './firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';


function AddTrail({onClose, open}) {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [distance, setDistance] = useState('')
  
  /* function to add new task to firestore */
  const handleSubmit = async (e) => {
   e.preventDefault()
   try {
     await addDoc(collection(db, 'trails'), {
       name: name,
       description: description,
       distance: distance,
       completed: false,
       created: Timestamp.now()
     })
     onClose()
   } catch (err) {
     alert(err)
   }
 }

  return (
    <Modal modalLable='Add Trail' onClose={onClose} open={open}>
      <form onSubmit={handleSubmit} className='addTrail' name='addTrail'>
        <input 
          type='text' 
          name='name' 
          onChange={(e) => setName(e.target.value)} 
          value={name}
          placeholder='Enter trail'/>
        <input 
          type='number' 
          name='distance' 
          onChange={(e) => setDistance(e.target.value)} 
          value={distance}
          placeholder='Enter distance'/>
        <textarea 
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Enter trail decription'
          value={description}></textarea>
        <button type='submit'>Done</button>
      </form> 
    </Modal>
  )
}

export default AddTrail
