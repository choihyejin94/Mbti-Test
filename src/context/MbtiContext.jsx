import { useState } from 'react';
import { createContext } from 'react'

const MbtiContext = createContext(null);

export const MbtiProvider = ({children}) => {
  const [user, setUser] = useState({});
  
  return (
    <MbtiContext.Provider value={{ user, setUser }}>
      { children }
    </MbtiContext.Provider>
  )
}

export default MbtiContext