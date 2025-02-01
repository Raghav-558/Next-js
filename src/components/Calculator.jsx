'use client'
import React, { useState } from 'react'

const Calculator = () => {
  const [value, setValue] = useState('')

  const handleClick = e => {
    setValue(value + e.target.value)
  }

  const handleClear = () => {
    setValue('')
  }

  const handleDelete = () => {
    setValue(value.slice(0, -1))
  }

  const handleEvaluate = () => {
    try {
      setValue(eval(value).toString())
    } catch {
      setValue('Error')
    }
  }

  return (
    <div className='bg-black max-w-[1172px] px-4 mx-auto flex items-center justify-center min-h-screen'>
      <div className='calculator p-4 rounded-xl bg-white'>
        <div className='flex justify-end m-[5px_0px_15px_0px]'>
          <input
            className='text-right px-4 text-xl border-none outline-none size-[60px] font-semibold rounded-xl w-full bg-gray-400'
            type='text'
            value={value}
            readOnly
          />
        </div>
        <div>
          <input
            className='border-none outline-none size-[60px] text-base font-semibold m-[2px] cursor-pointer rounded-xl bg-gray-400 hover:bg-gray-600 transition-all duration-300 hover:text-white'
            type='button'
            value='AC'
            onClick={handleClear}
          />
          <input
            className='border-none outline-none size-[60px] text-base font-semibold m-[2px] cursor-pointer rounded-xl bg-gray-400 hover:bg-gray-600 transition-all duration-300 hover:text-white'
            type='button'
            value='DE'
            onClick={handleDelete}
          />
          <input
            className='border-none outline-none size-[60px] text-base font-semibold m-[2px] cursor-pointer rounded-xl bg-gray-400 hover:bg-gray-600 transition-all duration-300 hover:text-white'
            type='button'
            value='.'
            onClick={handleClick}
          />
          <input
            className='border-none outline-none size-[60px] text-base font-semibold m-[2px] cursor-pointer rounded-xl bg-gray-400 hover:bg-gray-600 transition-all duration-300 hover:text-white'
            type='button'
            value='/'
            onClick={handleClick}
          />
        </div>
        <div>
          <input
            className='border-none outline-none size-[60px] text-base font-semibold m-[2px] cursor-pointer rounded-xl bg-gray-400 hover:bg-gray-600 transition-all duration-300 hover:text-white'
            type='button'
            value='7'
            onClick={handleClick}
          />
          <input
            className='border-none outline-none size-[60px] text-base font-semibold m-[2px] cursor-pointer rounded-xl bg-gray-400 hover:bg-gray-600 transition-all duration-300 hover:text-white'
            type='button'
            value='8'
            onClick={handleClick}
          />
          <input
            className='border-none outline-none size-[60px] text-base font-semibold m-[2px] cursor-pointer rounded-xl bg-gray-400 hover:bg-gray-600 transition-all duration-300 hover:text-white'
            type='button'
            value='9'
            onClick={handleClick}
          />
          <input
            className='border-none outline-none size-[60px] text-base font-semibold m-[2px] cursor-pointer rounded-xl bg-gray-400 hover:bg-gray-600 transition-all duration-300 hover:text-white'
            type='button'
            value='*'
            onClick={handleClick}
          />
        </div>
        <div>
          <input
            className='border-none outline-none size-[60px] text-base font-semibold m-[2px] cursor-pointer rounded-xl bg-gray-400 hover:bg-gray-600 transition-all duration-300 hover:text-white'
            type='button'
            value='4'
            onClick={handleClick}
          />
          <input
            className='border-none outline-none size-[60px] text-base font-semibold m-[2px] cursor-pointer rounded-xl bg-gray-400 hover:bg-gray-600 transition-all duration-300 hover:text-white'
            type='button'
            value='5'
            onClick={handleClick}
          />
          <input
            className='border-none outline-none size-[60px] text-base font-semibold m-[2px] cursor-pointer rounded-xl bg-gray-400 hover:bg-gray-600 transition-all duration-300 hover:text-white'
            type='button'
            value='6'
            onClick={handleClick}
          />
          <input
            className='border-none outline-none size-[60px] text-base font-semibold m-[2px] cursor-pointer rounded-xl bg-gray-400 hover:bg-gray-600 transition-all duration-300 hover:text-white'
            type='button'
            value='+'
            onClick={handleClick}
          />
        </div>
        <div>
          <input
            className='border-none outline-none size-[60px] text-base font-semibold m-[2px] cursor-pointer rounded-xl bg-gray-400 hover:bg-gray-600 transition-all duration-300 hover:text-white'
            type='button'
            value='1'
            onClick={handleClick}
          />
          <input
            className='border-none outline-none size-[60px] text-base font-semibold m-[2px] cursor-pointer rounded-xl bg-gray-400 hover:bg-gray-600 transition-all duration-300 hover:text-white'
            type='button'
            value='2'
            onClick={handleClick}
          />
          <input
            className='border-none outline-none size-[60px] text-base font-semibold m-[2px] cursor-pointer rounded-xl bg-gray-400 hover:bg-gray-600 transition-all duration-300 hover:text-white'
            type='button'
            value='3'
            onClick={handleClick}
          />
          <input
            className='border-none outline-none size-[60px] text-base font-semibold m-[2px] cursor-pointer rounded-xl bg-gray-400 hover:bg-gray-600 transition-all duration-300 hover:text-white'
            type='button'
            value='-'
            onClick={handleClick}
          />
        </div>
        <div>
          <input
            className='border-none outline-none size-[60px] text-base font-semibold m-[2px] cursor-pointer rounded-xl bg-gray-400 hover:bg-gray-600 transition-all duration-300 hover:text-white'
            type='button'
            value='00'
            onClick={handleClick}
          />
          <input
            className='border-none outline-none size-[60px] text-base font-semibold m-[2px] cursor-pointer rounded-xl bg-gray-400 hover:bg-gray-600 transition-all duration-300 hover:text-white'
            type='button'
            value='0'
            onClick={handleClick}
          />
          <input
            className='w-[125px] h-[60px] border-none outline-none text-base font-semibold m-[2px] cursor-pointer rounded-xl bg-gray-400 hover:bg-gray-600 transition-all duration-300 hover:text-white'
            type='button'
            value='='
            onClick={handleEvaluate}
          />
        </div>
      </div>
    </div>
  )
}

export default Calculator
