module.exports = function check(str, bracketsConfig) {
	const arr = str.split('');	
	let openBracketPosition;   

	for (let i = 0; i < Math.floor(arr.length / 2); i++) {

		 bracketsConfig.forEach((item, index) => {
			  if (item[0] === arr[i]) {
				openBracketPosition = index;                             
			  }            
		 }); 

		 if (!openBracketPosition && openBracketPosition !== 0) {
			  return false;
		 }

		 const closeBracketPosition = arr.indexOf(bracketsConfig[openBracketPosition][1], i + 1);
		 if (closeBracketPosition === -1) {
			  return false;
		 }

		 if (closeBracketPosition === i + 1) {
			  arr.splice(i, 2);
			  
			  return check(arr.join(''), bracketsConfig);            
		 }
	}       
	
	return arr.length === 0;
}
