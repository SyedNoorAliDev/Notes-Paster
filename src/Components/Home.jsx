import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {addToPastes, updateToPastes, resetAllPastes, removeFromPastes} from '../Redux/pasteSlice.jsx';
import { useSelector } from 'react-redux';

const Home = () => {
  const [title, settitle] = useState('');
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get('pasteId');
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(
    () => {
      if (pasteId){
        const paste = allPastes.find((p) => p._id === pasteId);
        settitle(paste.title);
        setValue(paste.content);
      }
    }, [pasteId]
  )


  function createPaste(){
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    }
    if (pasteId){
      //Updation
      dispatch(updateToPastes(paste));
    } else {
      //creation
      dispatch (addToPastes(paste))
    }
    //after create/update
    settitle('');
    setValue('');
    setSearchParams({});
  }

  return (
    <>
    <div className='flex flex-row gap-6 m-2 p-2 rounded-2xl shadow-md'>
      <input className='rounded-2xl p-2' type='text' placeholder='enter title here' value={title} onChange={(e)=>settitle(e.target.value)}/>
      <button onClick={createPaste} className='rounded-2xl p-2'>{
        pasteId ? "Update Paste" : "Create Paste"}
        </button>
    </div>
    <div>
      <textarea className='w-10/12 h-36 rounded-2xl p-2 shadow-md' value={value} placeholder='enter content here' onChange={(e)=>setValue(e.target.value)}></textarea>
    </div>
    </>
  )
}

export default Home