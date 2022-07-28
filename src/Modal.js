import './modal.css'

function Modal({open, modalLable, children, custom_modal, onClose}) {

  const handleClose = (e) => {
    if(e.target.className === 'modalContainer'){
      onClose()
    }
    return null
  }

  if(open) {
    return (
      <div className='modalContainer' onClick={handleClose}>
        <div className= {`modal ${custom_modal}`}>
          <div className='modal-head'>
            <h2>{modalLable}</h2>
            <span className='modal-close' onClick={onClose}>x</span>
          </div>
          {children}
        </div>
      </div>
    )
  }
  return null
}

export default Modal
