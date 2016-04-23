
//Copyright (c) 2016 Александр Смит (https://github.com/DarkScorpion)
function secretCode(input, funcActions) {
  var keysArr = (typeof input === 'string') ? input.split('').map(stringToKeyArr): input;

  if (Array.isArray(keysArr)) {
    var self = this;
    self.counter = 0;
    self.keysArr = keysArr;
    self.funcActions = funcActions;
    window.addEventListener('keydown', function(e) {
      //console.log(e);
      if (e.keyCode == self.keysArr[self.counter]) {
        if (++self.counter >= self.keysArr.length) {
          self.counter = 0;
          self.funcActions();
        }
      } else {
        self.counter = 0;
      }
      //console.log(self)
    }, false);
  }

  function stringToKeyArr(char) {
    return char.charCodeAt()-32;
  }
}
