import './trail.css'
import {useState} from 'react'
import TrailItem from './TrailItem'
import EditTrail from './EditTrail'
import { doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { db } from './firebase'
import tree from './img/tree.png'

function Trail({id, name, description, distance, completed}) {

  const [checked, setChecked] = useState(completed)
  const [open, setOpen] = useState({edit:false, view:false})

  const handleClose = () => {
    setOpen({edit:false, view:false})
  }

  const handleCheckedChange = async () => {
    const trailDocRef = doc(db, 'trails', id)
    try {
      await updateDoc(trailDocRef, {
        completed: checked
      })
    } catch (err) {
      alert(err)
    }
  }
  
  // function to delete a document from firstore
  const handleDelete = async () => {
    const trailDocRef = doc(db, 'trails', id)
    try {
      await deleteDoc(trailDocRef)
    } catch (err) {
      alert(err)
    }
  }

  return (
    <div className={`trail ${checked && 'trail-borderColor'}`}>
      <div>
        <input 
          id={`checkbox-${id}`} 
          className='checkbox-custom'
          name="checkbox" 
          checked={checked}
          onChange={handleCheckedChange}
          type="checkbox" />
        <label 
          htmlFor={`checkbox-${id}`} 
          className="checkbox-custom-label" 
          onClick={() => setChecked(!checked)} ></label>
      </div>
      <img src={tree} alt='tree' />
      <div className='trail-body'>
        <h2>{name}</h2>
        <p>{distance} miles</p>
        <div className='trail-buttons'>
          <div className='trail-deleteNedit'>
            <button 
              className='trail-editButton' 
              onClick={() => setOpen({...open, edit: true})}>
              Edit
            </button>
            <button className='trail-deleteButton' onClick={handleDelete}>Delete</button>
          </div>
          <button 
            onClick={() => setOpen({...open, view: true})}>
            View
          </button>
        </div>
      </div>

      {open.view &&
        <TrailItem 
          onClose={handleClose} 
          name={name} 
          distance={distance}
          description={description} 
          open={open.view} />
      }

      {open.edit &&
        <EditTrail
          onClose={handleClose} 
          toEditTitle={name}
          toEditDistance={distance}
          toEditDescription={description} 
          open={open.edit}
          id={id} />
      }

    </div>
  )
}

export default Trail