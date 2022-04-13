import React, {useState} from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';
import {MenuElement}     from './MenuElement';
import {Documents}       from '../../Documents/Documents';


export const StartMenu = () => {
	
	const [openMenu, setOpenMenu] = useState(false);
	const ref = useOnclickOutside(() => {
		setOpenMenu(false);
	});
	
	const handleClickBtn = () => {
		setOpenMenu(!openMenu);
	};
	
	return (
	  
	  <>
		  <div id="StartMenu" ref={ref} onMouseDown={() => handleClickBtn()}>
			  <div className="startButton">
				  <h3>Start</h3>
			  </div>
		  </div>
		  <div id="StartMenuCtx" className={`menu--ctx ${openMenu && "active"}`}>
			  
			  <div className="menu--title">
				  <h3>OfflineOS v0.1</h3>
			  </div>
			  <div className="menu--container">
				  
				  <MenuElement icon="documents" name="Documents">
					  <Documents/>
				  </MenuElement>
				  
				  <div className="menu--item">
					  
					  <span>Icon</span>
					  <h5>Paramètres</h5>
				  
				  </div>
				  
				  <div className="menu--item disabled">
					  
					  <span>Icon</span>
					  <h5>Jeux</h5>
				  
				  </div>
				  
				  <div className="menu--item disabled">
					  
					  <span>Icon</span>
					  <h5>Partenaires</h5>
				  
				  </div>
				  
				  
				  <div className="menu--item">
					  
					  <span>Icon</span>
					  <h5>Account: <b>Offline</b></h5>
				  
				  </div>
			  
			  </div>
		  
		  </div>
	  </>
	
	);
	
};