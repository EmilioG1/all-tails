import Modal from "./Modal"
import {useState} from 'react'
import './editTrail.css'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from './firebase'

function EditTrail({open, onClose, toEditName, toEditDescription, toEditDistance, id}) {

  const [name, setName] = useState(toEditName)
  const [description, setDescription] = useState(toEditDescription)
  const [distance, setDistance] = useState(toEditDistance)

  const handleUpdate = async (e) => {
    e.preventDefault()
    const trailDocRef = doc(db, 'trails', id)
    try {
      await updateDoc(trailDocRef, {
        name: name,
        description: description,
        distance: distance
      })
      onClose()
    } catch (err) {
      alert(err)
    }
  }

  return (
    <Modal modalLable='Edit Trail' onClose={onClose} open={open}>
      <form onSubmit={handleUpdate} className='editTrail' name='updateTask'>
        <input 
          type='text' 
          name='name' 
          onChange={(e) => setName(e.target.value)} 
          value={name}
          placeholder='Name'/>
        <input 
          type='number' 
          name='distance' 
          onChange={(e) => setDistance(e.target.value)} 
          value={distance}
          placeholder='Distance'/>
        <textarea onChange={(e) => setDescription(e.target.value)} value={description} placeholder='Description'></textarea>
        <button type='submit'>Edit</button>
      </form> 
    </Modal>
  )
}

export default EditTrail
