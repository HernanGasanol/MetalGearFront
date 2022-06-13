import React, { useContext, createContext, useState, useEffect } from 'react';




export const Context=createContext()



export const ContextProvider=({children})=>{
    const [openMenu, setOpenMenu]=useState(false)
   
  const states=[openMenu,setOpenMenu]

    return(
       <Context.Provider value={states}>
           {children}
       </Context.Provider>
   )
}
