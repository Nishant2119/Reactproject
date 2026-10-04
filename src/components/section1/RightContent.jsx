import React from 'react'
import RightCard from './RightCard.jsx'
import data from '../section2/professional.js'
import 'remixicon/fonts/remixicon.css'
const App = () =>{
    return (
        <div className='h-full w-2/3 p-6 flex flex-nowrap gap-2'>
            {data.map((item, index) => (
                <RightCard key={index} {...item} />
            ))}
        </div>
    )
}

export default App;