function HexMixer(hex1, hex2, percent){
	if(hex1[0] == '#'){
		var red1 = parseInt(hex1.substring(1, 3), 16);
		var green1 = parseInt(hex1.substring(3, 5), 16);
		var blue1 = parseInt(hex1.substring(5, 7), 16);
	}else if(hex1.length == 6){
		var red1 = parseInt(hex1.substring(0, 2), 16);
		var green1 = parseInt(hex1.substring(2, 4), 16);
		var blue1 = parseInt(hex1.substring(4, 6), 16);
	}else{
		return false;
	}
	if(hex2[0] == '#'){
		var red2 = parseInt(hex2.substring(1, 3), 16);
		var green2 = parseInt(hex2.substring(3, 5), 16);
		var blue2 = parseInt(hex2.substring(5, 7), 16);
	}else if(hex2.length == 6){
		var red2 = parseInt(hex2.substring(0, 2), 16);
		var green2 = parseInt(hex2.substring(2, 4), 16);
		var blue2 = parseInt(hex2.substring(4, 6), 16);
	}else{
		return false;
	}
	percent = percent/100;
	var redMixed = Math.floor(red1*percent+red2*(1-percent)).toString(16);
	var greenMixed = Math.floor(green1*percent+green2*(1-percent)).toString(16);
	var blueMixed = Math.floor(blue1*percent+blue2*(1-percent)).toString(16);
	if(redMixed.length == 1){
		redMixed = "0"+redMixed;
	}
	if(greenMixed.length == 1){
		greenMixed = "0"+greenMixed;
	}
	if(blueMixed.length == 1){
		blueMixed = "0"+blueMixed;
	}
	return "#"+redMixed+greenMixed+blueMixed;
}