import React from 'react'

const Card = ({ imageUrl, title, description, rating, onClickEvent }) => {
  return (
    <div className='border rounded-lg shadow-md pb-4 hover:cursor-pointer' onClick={onClickEvent}>
      <img className='rounded-t-lg' src={imageUrl} alt={title} />
      <span className='flex px-1 '><h3 className='font-bold w-3/4 text-stone-700'>{title}</h3><p className='w-1/4 flex justify-end text-stone-500'>({rating})</p></span>
      <p className='px-1'>Description: {description.split(' ').slice(0, 8).join(' ')}...</p>
    </div>
  )
}

export default Card