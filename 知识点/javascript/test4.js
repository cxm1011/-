function _loop(i) {
    console.log(i);
    setTimeout(function () {
      console.log(i);
    });
  };
  
  for (var i = 0; i < 5; i++) {
    
    _loop(i);
    
  }