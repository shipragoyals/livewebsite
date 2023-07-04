const Sdata = [
  {h3:'ABOUT LITHO WEB AGENCY',p:'A creative agency specialized in web strategy creation customize tools.'},
  {h3:'ABOUT LITHO WEB AGENCY',p:'With years of experience in the website design and development industry pride ourselves on creating unique, creative and quality designs that are developed upon the latest modern coding and developing techniques.'},
  
];
export const Blog = () => {
  return (
    <div className='card'>
  
        {Sdata.map((item)=>(
          <>
          <div className='blog'>
            <div className='blog1'>
              <h3>{item.h3}</h3>
              <p>{item.p} </p>
            </div>
          </div>
            
          </>
    
        ))}  
        </div>
     

   
    
  )
}



