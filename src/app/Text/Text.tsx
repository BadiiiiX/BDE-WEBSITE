import './assets/css/text.scss';

import {WindowProps} from '../../interfaces/WindowProps';
import {Window}      from '../Window/Window';


export const Text = (props: WindowProps) => {
	
	const clearedName = props.name.split(' ').join('-');
	
	return (<>
		<Window name={clearedName} width={props.width} height={props.height}>
			
			<div className="text-options">
				
				<div className="option-element"> Options </div>
			
			</div>
			<textarea className="text-txtarea" name={clearedName} id={props.name}>
			
				{props.children}
			
			</textarea>
		
		</Window>
	</>);
	
};