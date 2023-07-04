import {House,Overstock,Propay} from '../asset/images/index';
const Sdata = [
    {title: 'Dark', parag: 'Dark Dark Dark Dark Dark', button: 'Watch Now',Image:House},
    {title: 'Snow', parag: 'Snow Snow Snow Snow Snow', button: 'Watch Now',Image:Overstock},
    {title: 'White', parag: 'White White White White White', button: 'Watch Now',Image:Propay},
    
];
export const Card = () => {
    return(
        <>
        <div className='card'>
    
          {Sdata.map((item)=>(
            <>
            
            <div className='card1'>
                <img src={item.Image} />
                <h1 className='card_title'>{item.title}</h1>
                <p className='card_parag'>{item.parag}</p>
                <button>{item.button}</button>
            </div>   
            </>
      
          ))}  
          </div>
       
    </>
    );

    
};

