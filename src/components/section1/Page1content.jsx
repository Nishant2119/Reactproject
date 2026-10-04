import React from 'react'
import LeftContent from './LeftContent.jsx'
import RightContent from './RightContent.jsx'
const App = () =>{
    return (
        <div className = 'py-10 flex gap-10 items-center  px-18 h-[90vh] '>
        <LeftContent/>
        <RightContent />
        </div>
    )
}

export default App;