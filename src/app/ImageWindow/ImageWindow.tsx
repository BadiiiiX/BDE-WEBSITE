import './assets/css/imageWindow.scss';

import {WindowImageProps} from '../../interfaces/WindowImageProps';
import {Window} from '../Window/Window';

export const ImageWindow = (props: WindowImageProps) => {
	
	const image = require(`./assets/img/${props.imageName}.png`);
	
	
	const clearedName = props.name.split(' ').join('-');
	
	return (<>
	
		<Window name={clearedName} height={props.height} width={props.width}>
		
			<div className="image-ctx">
				
				<img src={""+image} alt={props.name}/>
				
			</div>
		
		</Window>
		
	</>);
	
};