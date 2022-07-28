import './trailManager.css'
import Trail from './Trail'
import AddTrail from './AddTrail'
import { useState, useEffect } from 'react'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import { db } from './firebase'

function TrailManager() {

  const [openAddModal, setOpenAddModal] = useState(false)
  const [trails, setTrails] = useState([])

  useEffect(() => {
    const q = query(collection(db, 'trails'), orderBy('created', 'desc'))
    onSnapshot(q, (querySnapshot) => {
      setTrails(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  }, [])

  return (
    <div className='trailManager'>
      <header>All Tails</header>
      <p className='trailSubHeader'>The Dog-Friendly Hiking Compendium</p>
      <div className='trailManager-container'>
        <button 
          onClick={() => setOpenAddModal(true)}>
          Add Trail
        </button>
        <div className='trailManager-tasks'>
          {trails.map((trail) => (
            <Trail
              id={trail.id}
              key={trail.id}
              completed={trail.data.completed}
              name={trail.data.name}
              description={trail.data.description}
              distance={trail.data.distance}
            />
          ))}
        </div>
      </div>

      {openAddModal &&
        <AddTrail onClose={() => setOpenAddModal(false)} open={openAddModal}/>
      }

    </div>
  )
}

export default TrailManager
