import {StartMenu}   from './components/StartMenu';
import {QuickLaunch} from './components/QuickLaunch';
import {RightMenu}   from './components/RightMenu';

import './assets/css/navbar.scss';

export const Navbar = () => {
	
	return (
	  
	  <nav>
		  
		  <StartMenu/>
		  <div className="big-pipe"/>
		  <QuickLaunch/>
		  <div className="big-pipe left"/>
		  <RightMenu/>
	  
	  </nav>
	
	);
	
};