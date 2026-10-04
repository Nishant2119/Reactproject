
const RightCardContent = (props) =>{
    return(
         <div className='overflow-hidden relative h-full w-full rounded-4xl'>
        <img className='h-full w-full object-cover' src={props.image}></img>
        <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
            <h2 className='bg-white h-14 w-14 justify-center rounded-full flex items-center text-2xl font-bold'>{props.id}</h2>
        
        <div>
            <p className='text-lg leading-normal'>
                {props.content}
            </p>
            <div>
                <button className='bg-blue-600 text-white font-medium px-7 py-2 rounded-full text-lg'>
                    {props.status}
                </button>

                <button className='bg-blue-600 text-white font-medium px-4 py-2 rounded-full text-lg'><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
        </div>
        </div>
    )
}
export default RightCardContent;