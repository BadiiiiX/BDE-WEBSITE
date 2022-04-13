import './assets/css/main.scss';
import {Navbar}      from '../../components/Navbar/Navbar';
import {Window}      from '../../app/Window/Window';
import {Text}        from '../../app/Text/Text';
import {ImageWindow} from '../../app/ImageWindow/ImageWindow';
import {Documents}   from '../../components/Documents/Documents';


export const Main = () => {
	return (
	  <main>
		  
		  {/*TODO Variantes Window.*/}
		  <Window name="BDE" height={700} width={450}>
			  
			  <Window name="THEO LE GIGOLO" height={500} width={650}/>
		  
		  </Window>
		  
		  <Window name="Documents" height={600} width={800}>
			  
			  <Documents/>
		  
		  </Window>
		  
		  <Text name="Le fichier de ouf" height={700} width={700}>
			  Coucou, je suis un fichier basique
		  </Text>
		  
		  <ImageWindow height={700} width={700} name="Offline" imageName="logo_one" />
		  
		  <Navbar/>
	  
	  </main>
	);
};