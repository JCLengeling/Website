function yearDiff(d1, d2) {
	var days = dayDiff(d1, d2);
    return Math.floor(days/365.25);
}
function monthDiff(d1, d2) {
    var days = dayDiff(d1, d2);
    return Math.round(Math.abs(days/30.4375));
}
function weekDiff(d1, d2) {
    var days = dayDiff(d1, d2);	
    return Math.round(Math.abs(days/7));
}
function dayDiff(d1, d2) {
	return Math.round(Math.abs((d1.getTime() - d2.getTime())/(1000*60*60*24)));
}

$(document).ready(function(){
	
	var select = Math.floor((Math.random() * 4) + 1);  
	
	var  birthday = new Date(1993,6,9);
	var  today = new Date();
		
	switch (select){
		case 1:
			$('#age').text( "" + yearDiff(birthday, today) + " Years old ");
			break;
		case 2:
			$('#age').text( "" +monthDiff(birthday, today) + " Months old ");
			break;
		case 3:
			$('#age').text(  "" +weekDiff(birthday, today) + " Weeks old ");
			break;
		case 4:
			$('#age').text(  "" +dayDiff(birthday, today) + " Days old ");
			break;
		default:
			break;	
	}
	
});