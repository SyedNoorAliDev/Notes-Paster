import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {addToPastes, updateToPastes, resetAllPastes, removeFromPastes} from '../Redux/pasteSlice.jsx';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ViewPaste = () => {

  const {id} = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.filter((p) => p._id === id)[0]; 
  return (
       <>
    <div className='flex flex-row gap-6 m-2 p-2 rounded-2xl shadow-md'>
      <input disabled className='rounded-2xl p-2' type='text' placeholder='enter title here' value={paste.title} onChange={(e)=>settitle(e.target.value)}/>
    </div>
    <div>
      <textarea disabled className='w-10/12 h-36 rounded-2xl p-2 shadow-md' value={paste.content} placeholder='enter content here' onChange={(e)=>setValue(e.target.value)}></textarea>
    </div>
    </>
  )
}

export default ViewPaste