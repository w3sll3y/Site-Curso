(function(){
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('#'+burger.dataset.target);

  burger.addEventListener('click', function(){
    burger.classList.toggle('is-active');
    nav.classList.toggle('is-active');
  });
})();


// ----------------- Modal Programação------------------

var pbutton = document.getElementById('button');
var pbutton2 = document.getElementById('button2');
var pbutton3 = document.getElementById('button3');
var pbutton4 = document.getElementById('button4');

var pmodal = document.getElementById('page-modal');
var pmodal2 = document.getElementById('page-modal2');
var pmodal3 = document.getElementById('page-modal3');
var pmodal4 = document.getElementById('page-modal4');

var pclose = document.getElementsByClassName('modal-close')[0];

pbutton.onclick = function(){
    pmodal.style.display = 'block';
}
pclose.onclick = function(){
    pmodal.style.display = 'none';
}

pbutton2.onclick = function(){
  pmodal2.style.display = 'block';
}
pclose2.onclick = function(){
  pmodal2.style.display = 'none';
}

pbutton3.onclick = function(){
  pmodal3.style.display = 'block';
}
pclose3.onclick = function(){
  pmodal3.style.display = 'none';
}

pbutton4.onclick = function(){
  pmodal4.style.display = 'block';
}
pclose4.onclick = function(){
  pmodal4.style.display = 'none'
}

// ----------- Modal Games ---------------

var gbutton = document.getElementById('gbutton');
var gbutton2 = document.getElementById('gbutton2');
var gbutton3 = document.getElementById('gbutton3');
var gbutton4 = document.getElementById('gbutton4');

var gmodal = document.getElementById('gpage-modal');
var gmodal2 = document.getElementById('gpage-modal2');
var gmodal3 = document.getElementById('gpage-modal3');
var gmodal4 = document.getElementById('gpage-modal4');

gbutton.onclick = function(){
    gmodal.style.display = 'block';
}
gclose.onclick = function(){
    gmodal.style.display = 'none';
}

gbutton2.onclick = function(){
  gmodal2.style.display = 'block';
}
gclose2.onclick = function(){
  gmodal2.style.display = 'none';
}

gbutton3.onclick = function(){
  gmodal3.style.display = 'block';
}
gclose3.onclick = function(){
  gmodal3.style.display = 'none';
}

gbutton4.onclick = function(){
  gmodal4.style.display = 'block';
}
gclose4.onclick = function(){
  gmodal4.style.display = 'none'
}

//---------------- Modal Investimentos ---------
var ibutton = document.getElementById('ibutton');
var ibutton2 = document.getElementById('ibutton2');
var ibutton3 = document.getElementById('ibutton3');
var ibutton4 = document.getElementById('ibutton4');

var imodal = document.getElementById('ipage-modal');
var imodal2 = document.getElementById('ipage-modal2');
var imodal3 = document.getElementById('ipage-modal3');
var imodal4 = document.getElementById('ipage-modal4');

ibutton.onclick = function(){
  imodal.style.display = 'block';
}
iclose.onclick = function(){
  imodal.style.display = 'none';
}

ibutton2.onclick = function(){
  imodal2.style.display = 'block';
}
iclose2.onclick = function(){
  imodal2.style.display = 'none';
}

ibutton3.onclick = function(){
  imodal3.style.display = 'block';
}
iclose3.onclick = function(){
  imodal3.style.display = 'none';
}

ibutton4.onclick = function(){
  imodal4.style.display = 'block';
}
iclose4.onclick = function(){
  imodal4.style.display = 'none'
}

//----------Modal Alimentação -------------
var abutton = document.getElementById('abutton');
var abutton2 = document.getElementById('abutton2');
var abutton3 = document.getElementById('abutton3');
var abutton4 = document.getElementById('abutton4');

var amodal = document.getElementById('apage-modal');
var amodal2 = document.getElementById('apage-modal2');
var amodal3 = document.getElementById('apage-modal3');
var amodal4 = document.getElementById('apage-modal4');

abutton.onclick = function(){
  amodal.style.display = 'block';
}
aclose.onclick = function(){
  amodal.style.display = 'none';
}

abutton2.onclick = function(){
  amodal2.style.display = 'block';
}
aclose2.onclick = function(){
  amodal2.style.display = 'none';
}

abutton3.onclick = function(){
  amodal3.style.display = 'block';
}
aclose3.onclick = function(){
  amodal3.style.display = 'none';
}

abutton4.onclick = function(){
  amodal4.style.display = 'block';
}
aclose4.onclick = function(){
  amodal4.style.display = 'none'
}

//----------- Modal Saúde -------------
var sbutton = document.getElementById('sbutton');
var sbutton2 = document.getElementById('sbutton2');
var sbutton3 = document.getElementById('sbutton3');
var sbutton4 = document.getElementById('sbutton4');

var smodal = document.getElementById('spage-modal');
var smodal2 = document.getElementById('spage-modal2');
var smodal3 = document.getElementById('spage-modal3');
var smodal4 = document.getElementById('spage-modal4');

sbutton.onclick = function(){
  smodal.style.display = 'block';
}
sclose.onclick = function(){
  smodal.style.display = 'none';
}

sbutton2.onclick = function(){
  smodal2.style.display = 'block';
}
sclose2.onclick = function(){
  smodal2.style.display = 'none';
}

sbutton3.onclick = function(){
  smodal3.style.display = 'block';
}
sclose3.onclick = function(){
  smodal3.style.display = 'none';
}

sbutton4.onclick = function(){
  smodal4.style.display = 'block';
}
sclose4.onclick = function(){
  smodal4.style.display = 'none'
}

