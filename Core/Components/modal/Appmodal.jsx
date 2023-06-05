import React, { useState } from 'react'
import { MyModal } from './MyModal'


export const Appmodal = () => {

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false)
    }

  return (
    
        <div className="bg-blue-400 bg-opacity-30">
        <div className="max-w-3xl mx-auto">
            <div className="text-center py-3">
            <button onClick={() => setShowModal(true)}className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                Open Modal
            </button>
            </div>
            </div>

            <MyModal onClose={handleClose} visible={showModal}/>
        </div>
    
  )
}
