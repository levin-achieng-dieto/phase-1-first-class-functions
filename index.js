function receivesAFunction(callback){
  return callback();
}
receivesAFunction(function(spy) {
  return 4+5;
});
 


function returnsANamedFunction(){
  const add = (num1, num2) => num1 +num2;
  return add;
}


function returnsAnAnonymousFunction(){
  return function(){
    
  }
}
