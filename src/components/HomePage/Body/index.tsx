import image from '../../../assets/images/image 2.svg';
import polygon from '../../../assets/images/Polygon 2.svg';
import ellipse from '../../../assets/images/Ellipse 464.svg';



import { FunctionComponent } from 'react';

const Body :FunctionComponent = () =>{
    return (
        // <main className='flex' >
        //     <h1 className='m-5 font-bold text-5xl '>Empowering Colleges with <span className='text-violet-500'>Efficient Management</span></h1>
        //     <p>Empower your college with campus diaries. Streamline processes, connect students with fellow seniors or batchmates to sell and buy items through our marketplace, access real-time data. An all-in-one solution for admission to graduation success.</p>
           
        //     <img src={ellipse}/>
        //     <img src={polygon}/>
        //     <img src={ellipse}/>
        //     <img src={polygon}/>
        //     <img src={ellipse}/>
        //     <img src={polygon}/>
        //     <img src={ellipse}/>
        //     <img src={polygon}/>
        //     <img src={ellipse}/>
        //     <img src={polygon}/>
        //     <img src={ellipse}/>
        //     <img src={polygon}/>
        //     <img src={ellipse}/>
        //     <img src={polygon}/>
            
        //     <img src={image}/>
            
                

        // </main>
        <div className='flex justify-between container py-8'>
            <div className='flex flex-col'>
            <h1 className='mr-1 py-4 font-bold text-4xl '>Empowering Colleges <br></br>with <span className='text-violet-500'>Efficient Management</span></h1>
            <p className='text-sm'>Empower your college with campus diaries. Streamline<br></br> processes, connect students with fellow seniors or <br></br> batchmates to sell and buy items through our marketplace,<br></br>access real-time data. An all-in-one solution for admission<br></br> to graduation success.</p>
            
            
            
            
            
            

                
            </div>
            
            <div >
              <img className='py-2' src={image}/>
                    
            </div>
        </div>
        
    )
}
export default Body
