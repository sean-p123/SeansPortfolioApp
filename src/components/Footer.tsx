import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-[1200px] min-h-[120px] px-6 py-8 flex justify-between items-center mx-auto'>

      <span className='primary-color'>S. Patten</span>

      <div className='flex flex-col items-end gap-2'>
        <p className='text-gray-600'>seanpatten84@gmail.com</p>
        <p className='text-gray-600'>
          <a href='https://github.com/sean-p123'>https://github.com/sean-p123</a>
        </p>
      </div>

    </div>
  )
}

export default Footer