import { FunctionComponent } from 'react';
const Footer: FunctionComponent = () => {
  return (
    <div className='flex justify-between container py-8'>
      <div  >
  <button className='bg-violet-500 rounded-lg text-white m-10 p-3'>Explore MarketPlace</button>
  <button className='bg-violet-500 rounded-lg text-white m-10 p-3'>Explore Academia</button>
  </div>
  <div className='m-5 p-5 flex space-x-16'>
    <div>
    50+<br></br>
    Colleges

    </div>
    <div>
    8.2k+<br></br>
    Items

    </div>
    <div>
    32k+<br></br>
    Students

    </div>
    
  
  </div>
  
  
    </div>
  
  )
}
export default Footer;
