var lightSwitch = document.querySelector('button');
var on = document.querySelector('.on');
var off= document.querySelector('.off');

lightSwitch.addEventListener('click', function() {
  if ( lightSwitch.className === 'switch on' ) {
    lightSwitch.className = 'switch off';
  }
  else { ( lightSwitch.className === 'switch off' )
  lightSwitch.className = 'switch on';
}


});
