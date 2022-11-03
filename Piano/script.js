

var audioCtx = new(window.AudioContext || window.webkitAudioContext)();
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

init();


function init(){

	var keys = [];
	var notes = ['C4',
				'C#4',
				'D4',
				'D#4',
				'E4',
				'F4',
				'F#4',
				'G4',
				'G#4',
				'A4',
				'A#4',
				'B4',
				'C5',
				'C#5',
				'D5',
				'D#5',
				'E5',
				'F5',
				'F#5',
				'G5',
				'G#5',
				'A5',
				'A#5',
				'B5',
				'C6'];
	
	var pos = 30;
	var key;
	
	for(var i = 0; i < notes.length; i++){
		if (notes[i].includes("#")) { 
			var key = {
				freq: notes[i],
				color: "black",
				left: pos - 7.5,
				width: 15,
				height: 50,
				top: 20,
			
			
				play: function() {
					playTone(tone[this.freq]);
				}
				
			};
			
		}
		else{
			var key = {
				freq: notes[i],
				color: "white",
				left:  pos,
				width: 30,
				height: 50,
				top: 70,
		
			
				play: function() {
					playTone(tone[this.freq]);
				}
				
			};
			pos += 30;
			
		} 

		ctx.beginPath();
		if (key.color == "black"){
			ctx.fillRect(key.left, key.top, key.width, key.height);
		}
		else{
			ctx.rect(key.left, 20, key.width, 100);
		}
		
		ctx.stroke();
		
		keys.push(key);
		
	}



	canvas.addEventListener('click', function(event) {
	    var x = event.pageX -7;
		var y = event.pageY -7;

		console.log(x, y);
	
	    // Collision detection between clicked offset and element.
	    keys.forEach(function(key) {
	        if (y >= key.top && y <= key.top + key.height 
	            && x >= key.left && x <= key.left + key.width) {
	            console.log(key);
				key.play();
	        }
    	});

	}, false);
	
	
}


