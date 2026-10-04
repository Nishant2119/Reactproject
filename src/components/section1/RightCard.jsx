 import RightCardContent from './RightCardContent.jsx'

 const RightCard = (props) =>{
    return(
        <div className='overflow-hidden relative h-full w-1/3 rounded-4xl'>
            <RightCardContent {...props}/>
        </div>
    )
 }
 export default RightCard;