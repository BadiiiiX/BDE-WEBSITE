export const RightMenu = () => {
	
	setTimeout(() => {
		const el = document.getElementById("timer");
		if(!el) return;
		
		const time = new Date();
		el.innerHTML = `${time.getHours()}:${time.getMinutes()}`;
		
	}, 1000);
	
	
	return (
	  
	  <div className="time-ctx">
		  
		  <div id="timer" className="time-elm">
			 00:00
		  </div>
		  
	  </div>
	
	);
	
};