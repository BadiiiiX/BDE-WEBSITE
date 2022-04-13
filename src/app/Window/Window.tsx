import {WindowProps}             from '../../interfaces/WindowProps';
import Draggable                 from 'react-draggable';

import './assets/css/window.scss';
import {CSSProperties, useState} from 'react';
import useOnclickOutside         from 'react-cool-onclickoutside';
import {Portal}                  from 'react-portal';

export const Window = (props: WindowProps) => {
	
	//reading props
	let {height, width, name, icon, children} = props;
	
	const [isActiveIcon, setIsActiveIcon] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [IsActive, setActive] = useState(false);
	const [hasGrid, setGrid] = useState(false);
	
	const img = require(`./assets/img/logo/${icon ?? 'folder_closed'}.png`);
	
	const css: CSSProperties = {backgroundImage: `url(${img})`};
	
	const clearedName = name.split(' ').join('-');
	
	const ref = useOnclickOutside(() => {
		setIsActiveIcon(false);
	});
	
	const handleClickWindow = () => {
		setActive(true);
	};
	
	const handleWidth = () => {
		width = document.documentElement.clientWidth;
		height = document.documentElement.clientHeight;
	}
	
	const handleClick = ({nativeEvent}: any) => {
		switch(nativeEvent.detail) {
			case 1:
				setIsActiveIcon(true);
				break;
			
			case 2:
				setIsOpen(true);
				break;
		}
	};
	
	
	return (
	  <>
		  <Draggable bounds="parent" grid={hasGrid ? [75, 75] : undefined} onMouseDown={(e) => handleClick(e)}>
			  <div ref={ref} className={isActiveIcon ? 'window-icon active' : 'window-icon'} style={css}>
				  <h6>{name}</h6>
			  </div>
		  </Draggable>
		  
		  {<Portal node={document.getElementsByTagName('main')[0]}>
			  <Draggable handle={'#' + clearedName}>
				  <aside onMouseDown={() => handleClickWindow()}
						 className={`window-openable ${isOpen && 'active'}`}
						 style={{height: height, width: width, zIndex: `${IsActive ? 100 : 1}`}}>
					  
					  <div className="window-ctx">
						  
						  <div id={clearedName} className="window-tab">
							  
							  <div className="tab-name"><span style={css}/> {name} </div>
							  
							  <div className="tab-options">
								  
								  <div className="options-min" onClick={() => setIsOpen(false)}/>
								  <div className="options-max" onClick={() => handleWidth()}/>
								  <div className="options-close" onClick={() => setIsOpen(false)}/>
							  
							  </div>
						  </div>
						  
						  <div className="window-content">
							  {children}
						  </div>
					  
					  </div>
				  </aside>
			  </Draggable>
		  </Portal>}
	  </>
	);
	
};