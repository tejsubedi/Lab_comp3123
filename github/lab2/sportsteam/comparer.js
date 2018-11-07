exports.AreNumberEqual = function(x,y){
    if(!isInteger(x) || !isInteger(y)){
        throw new Error();
        
    }
    else if(x >y){
        console.log('x is greater than y');
    }
    else if(x < y){
        console.log('y is greater than x');
    }
    else{
        console.log('x is equal to y');
    }
}