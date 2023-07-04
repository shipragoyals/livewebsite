const Sdata = [
  {type:'text',placeholder:'Name'},
  {type:'email',placeholder:'Email'},
  {type:'Phone no',placeholder:'Phone'},
];
export const Contact = () => {
  return (
    <div className='contact'>
    <h2>Contact Us Now</h2>
    {Sdata.map((item)=>(
    <>
      <input type={item.type} placeholder={item.placeholder}></input><br></br>
    </>
        ))} 
        <button className='btn'>Submit</button> 
        </div>


        
 )
 } 
 