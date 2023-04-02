import { Box } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import CreateNoteContainer from '../components/CreateNoteContainer'
import { ISCLICKED_FALSE, RESET_FORM_DATA, SHOW_COLOR_IMAGE_FALSE } from '../context/actionType'
import { NotesContext } from '../context/NoteContext'
import { NotesLayout } from '../components/NotesLayout';

const Home = () => {
  const [,dispatch,,getNotes]=useContext(NotesContext);

  useEffect(()=>{
    getNotes();
  },[getNotes])


  const hideInputs=(e)=>{
    dispatch({type:ISCLICKED_FALSE});
    dispatch({type:SHOW_COLOR_IMAGE_FALSE});
    dispatch({type:RESET_FORM_DATA});
  }


  return (
    <Box onClick={hideInputs} mt={["10px","15px","20px"]}>
        <CreateNoteContainer />
        <NotesLayout />
    </Box>
  )
}

export default Home