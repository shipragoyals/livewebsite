export const Home = (props) => {
  return(
    <>
     <div className='container'>
    <div className='home'>
        <p>{props.heading}</p>
        <h1>{props.paragrpah}</h1>
        <button className='btn'>{props.button}</button>
    </div>
    

    </div>

    </>
   

  )
}




