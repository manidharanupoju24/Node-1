var disc = require('./discriminant'); //method to use module which is written in discriminant.js file

module.exports = function(a,b,c,next){ //next is a paramater which brings in a function and returns the value to te calling javascript code
	if(a == 0){
		next(new Error("a should not be zero"));
	}
	else if(disc(a,b,c) < 0){
		next(new Error("discriminant is less than zero, no real roots"));
	}

	else 
		return next(null,{ //js object 	
			root1:function(){
				return(-b - Math.sqrt(disc(a,b,c)))/(2*a);
			},

			root2:function(){
				return(-b + Math.sqrt(disc(a,b,c)))/(2*a);
			}
		});
}