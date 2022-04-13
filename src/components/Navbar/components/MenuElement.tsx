import React              from 'react';
import {Portal}           from 'react-portal';
import {MenuElementProps} from '../../../interfaces/MenuElementProps';

export const MenuElement = (props: MenuElementProps) => {
	
	const img = require(`../assets/img/${props.icon}.png`);
	const [clicked, setClicked] = React.useState(false);
	
	const handleClick = () => {
		setClicked(true);
		console.log('coucou');
	};
	
	return (
	  <>
		  <div className="menu--item" onClick={() => handleClick()}>
			  <img src={img} alt={props.name}/>
			  <h5>{props.name}</h5>
		  </div>
		  
		  {clicked && <Portal node={document.getElementsByTagName('main')[0]}>
			  {props.children}
          </Portal>}
	  </>);
};