document.getElementById('desktop-feat-link').onclick = function() {
  document.getElementById('desktop-feat-link-2').style.display = 'block';
  document.getElementById('desktop-feat-link').style.display = 'none';
  document.getElementById('desktop-feat-li').style.padding = '0';
  document.getElementById('desktop-feat-nav').style.display = 'flex';
}

document.getElementById('desktop-feat-link-2').onclick = function() {
  document.getElementById('desktop-feat-link').style.display = 'block';
  document.getElementById('desktop-feat-link-2').style.display = 'none';
  document.getElementById('desktop-feat-nav').style.display = 'none';
  document.getElementById('desktop-feat-li').style.padding = '20px';
}

document.getElementById('desktop-comp-link').onclick = function() {
  document.getElementById('desktop-comp-link-2').style.display = 'block';
  document.getElementById('desktop-comp-link').style.display = 'none';
  document.getElementById('desktop-comp-li').style.padding = '0';
  document.getElementById('desktop-comp-nav').style.display = 'flex';
}

document.getElementById('desktop-comp-link-2').onclick = function() {
  document.getElementById('desktop-comp-link').style.display = 'block';
  document.getElementById('desktop-comp-link-2').style.display = 'none';
  document.getElementById('desktop-comp-nav').style.display = 'none';
  document.getElementById('desktop-comp-li').style.padding = '20px';
}

document.getElementById('mobile-feat-link').onclick = function() {
  document.getElementById('mobile-feat-link').style.display = 'none';
  document.getElementById('mobile-feat-link-2').style.display = 'block';
  document.getElementById('mobile-feat-nav').style.display = 'block'
}

document.getElementById('mobile-feat-link-2').onclick = function() {
  document.getElementById('mobile-feat-link-2').style.display = 'none';
  document.getElementById('mobile-feat-link').style.display = 'block';
  document.getElementById('mobile-feat-nav').style.display = 'none'
}

document.getElementById('mobile-comp-link').onclick = function() {
  document.getElementById('mobile-comp-link').style.display = 'none';
  document.getElementById('mobile-comp-link-2').style.display = 'block';
  document.getElementById('mobile-comp-nav').style.display = 'block';
}

document.getElementById('mobile-comp-link-2').onclick = function() {
  document.getElementById('mobile-comp-link-2').style.display = 'none';
  document.getElementById('mobile-comp-link').style.display = 'block';
  document.getElementById('mobile-comp-nav').style.display = 'none';
}

document.getElementById('toggle').onclick = function() {
  // document.getElementById('mobile-nav').style.right = '0';
  document.getElementById('mobile-nav').style.display = 'block';
  document.getElementById('mobile-nav').style.width = '65%';
  document.getElementById('model-opacity').style.display = 'block';
}

document.getElementById('close').onclick = function() {
  document.getElementById('mobile-nav').style.display = 'none';
  document.getElementById('model-opacity').style.display = 'none';
}
