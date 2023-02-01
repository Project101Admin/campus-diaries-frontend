import image from '../../../assets/images/image 2.svg';
import polygon from '../../../assets/images/Polygon 2.svg';
import ellipse from '../../../assets/images/Ellipse 464.svg';

import { FunctionComponent } from 'react';
import Button from '../../Common/Button';

const Body: FunctionComponent = () => {
  return (
    <div className="flex justify-between container py-8">
      <div className="flex flex-col">
        <h1 className="mr-1 py-4 font-bold text-4xl ">
          Empowering Colleges <br></br>with <span className="text-violet-500">Efficient Management</span>
        </h1>
        <p className="text-sm">
          Empower your college with campus diaries. Streamline<br></br> processes, connect students with fellow seniors or <br></br> batchmates to sell and buy items through our marketplace,<br></br>
          access real-time data. An all-in-one solution for admission<br></br> to graduation success.
        </p>
        <div className="flex justify-between  mt-7">
          <Button title={'Explore MarketPlace'} />
          <Button title={'Explore Academia'} />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 content-center absolute inset-y-1 right-80  m-12 p-20">
        <img className="w-1 m-3" src={ellipse} alt="Ellipse" />
        <img className="w-1 m-3" src={polygon} alt="Poygon" />
        <img className="w-1 m-3" src={ellipse} alt="Ellipse" />
        <img className="w-1 m-3" src={polygon} alt="Poygon" />
        <img className="w-1 m-3" src={ellipse} alt="Ellipse" />
        <img className="w-1 m-3" src={polygon} alt="Poygon" />
        <img className="w-1 m-3" src={ellipse} alt="Ellipse" />
        <img className="w-1 m-3" src={polygon} alt="Poygon" />
        <img className="w-1 m-3" src={ellipse} alt="Ellipse" />
        <img className="w-1 m-3" src={polygon} alt="Poygon" />
        <img className="w-1 m-3" src={ellipse} alt="Ellipse" />
        <img className="w-1 m-3" src={polygon} alt="Poygon" />
        <img className="w-0 m-3" src={ellipse} alt="Ellipse" />
        <img className="w-0 m-3" src={polygon} alt="Poygon" />
        <img className="w-1 m-3" src={ellipse} alt="Ellipse" />
        <img className="w-1 m-3" src={polygon} alt="Poygon" />
      </div>

      <div className="w-100  h-160 m-1 p-1 shadow-xl rounded-3xl">
        <img className="max-w-sm" src={image} alt="THIS IS OK" />
        <div className="p-6 m-1 flex flex-row content-around space-x-8">
          <div className="py-9 m-5">
            50+<br></br>
            Colleges
          </div>
          <div className="py-9 m-5">
            8.2k+<br></br>
            Items
          </div>
          <div className="py-9 m-5">
            32k+<br></br>
            Students
          </div>
        </div>
      </div>
    </div>
  );
};
export default Body;
