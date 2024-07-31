import React from 'react'

const Screen = ({output, input}) => {
  return (
    <div className='h-[6rem] w-full bg-[#7A7B88] rounded text-4xl text-white font-bold flex justify-end items-end' >
        <p>{output ? output : input}</p>
    </div>
  )
}

export default Screen