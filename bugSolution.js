function foo(x){
  if(x == 1) {
    return true;
  }
  else if(x == 2){
    return false; 
  }
  else if (x > 0 && x % 2 !== 0){
    return foo(x -1);
  }
  else{
    return foo(x-2)
  }
}
