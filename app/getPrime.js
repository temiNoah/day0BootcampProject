let getPrime = (testNumber)=>
{
	let primeNumbers = [] ;

   if(typeof(testNumber) !== 'number' )
   {
   	 return "invalid input";
   }
   else if( testNumber < 2)
      return  [];
   
   else if(testNumber > 1){
			for(let eachNumber=0; eachNumber <= testNumber ; eachNumber++)
			{
				 let NoOfFactors=0;

		        for(let count=1 ; count <= eachNumber ; count++)
		        	if( eachNumber % count === 0)
		        		NoOfFactors = NoOfFactors + 1 ;
		        if(NoOfFactors === 2)	
		        	primeNumbers.push(eachNumber);
			}

			return primeNumbers;
   }

   

}
exports.getPrime = getPrime;