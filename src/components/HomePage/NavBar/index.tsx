import { FunctionComponent } from 'react';
import logo from '../../../assets/images/logo-icon.svg';
import Samaan from '../../../assets/images/Samaan Becho.svg';

const NavBar: FunctionComponent = () => {
  return (
    <nav className='m-11  my-1 flex' >
        
      <img src={logo} />
      <img src={Samaan} />
    </nav>
  );
};
export default NavBar;
