import Modal from "./Modal"
import './trailItem.css'
import kodi from './img/kodi2.jpg'

function TrailItem({onClose, open, name, distance, description}) {

  return (
    <Modal modalLable='Details' onClose={onClose} open={open}>
      <div className='trailItem'>
        <img src={kodi} alt='pup' className="bigboi" />
        <h2>{name}</h2>
        <p>{distance} miles</p>
        <p>This trail is... {description}</p>
      </div>
    </Modal>
  )
}

export default TrailItem
