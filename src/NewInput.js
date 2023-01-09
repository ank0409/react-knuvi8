import React, {useState} from 'react'
import NewSearch from './NewSearch'

const NewInput = () =>{

  const [search, setSearch] = useState('')

  const onchangeHandler = (e) => {
    setSearch(e.target.value)
  }
  return(
    <>
    <input placeholder = "Search for..." onChange = {onchangeHandler}/>
    <NewSearch searchitem = {search}/>
    </>
  )
}

export default NewInput