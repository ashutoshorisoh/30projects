import React from 'react'

function ImageDisplay({photo}) {
  return (
    <div className='flex bg-blue-600 h-80 w-80 rounded-lg p-5'>
     {photo ? <img src={photo} alt="" className='h-70 w-full object-contain' />: 'No photo'}
    </div>
  )
}

export default ImageDisplay