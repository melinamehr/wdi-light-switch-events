var lightSwitch = document.querySelector('button');
// var on = document.querySelector('.on');
// var off = document.querySelector('.off');
// var light = document.querySelector('.light');
// var dark = document.querySelector('.dark');
var body = document.querySelector('body');
var status = document.querySelector('.status')

lightSwitch.addEventListener('click', function() {
  if ( lightSwitch.className === 'switch on' ) {
    body.className = 'light'
    lightSwitch.className = 'switch off';
  }
  else { ( lightSwitch.className === 'switch off' )
  body.className = 'dark';
  lightSwitch.className = 'switch on';
}


lightSwitch.addEventListener('click', function() {
  if ( lightSwitch.className === 'switch off' )
  status.innerText = 'Hey, who turned off the light?'

})


});
