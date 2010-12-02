
function getBrowserWidth()
{
    if ( window.innerWidth )
  return window.innerWidth;

  else if ( document.documentElement && document.documentElement.clientWidth != 0 )
  return document.documentElement.clientWidth;

  else if ( document.body )
  return document.body.clientWidth;

return 0;
}

if ( getBrowserWidth() >= 750 )
{
  if ( ( navigator.appName ).toLowerCase() == 'microsoft internet explorer')
  {
    document.write('<link title="Style" type="text/css" rel="stylesheet" href="styles/ie.css" />');
  }
  else
  {
    document.write('<link title="Style" type="text/css" rel="stylesheet" href="styles/classique.css" />');
  }
  var browser=1;
}
else
{
  document.write('<link title="Style" type="text/css" rel="stylesheet" href="styles/mobile.css" />');
  var browser=0;
}


function windowresize()
{
  if ( browser==1 )
  {
    if ( getBrowserWidth() < 750 )
    {
       location.href = location.pathname;
    }
  }

  if ( browser==0 )
  {
    if ( getBrowserWidth() >= 750 )
    {
       location.href = location.pathname;
    }
  }
}

// Au chargement de la page

function load()
{
}