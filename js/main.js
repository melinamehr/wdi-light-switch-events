var lightSwitch = document.querySelector('button');
var body = document.querySelector('body');
var statustext = document.querySelector('.status')

lightSwitch.addEventListener('click', function() {
  if ( lightSwitch.className === 'switch on' ) {
    body.className = 'light'
    lightSwitch.className = 'switch off';
    statustext.innerText = "It's so bright in here!";
  }
  else { ( lightSwitch.className === 'switch off' )
  body.className = 'dark';
  lightSwitch.className = 'switch on';
  statustext.innerText = 'Hey, who turned off the light?';
}

});
