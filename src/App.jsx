import { useState } from 'react'

import './App.css'
import Search from './Components/Search'
import FlagCard from './Components/FlagCard'

function App() {
  const [searchString, setSearchString] = useState('');

  return (
    <>
     <Search setSearchString={setSearchString} />
     <FlagCard searchString={searchString} />
    </>
  )
}

export default App
