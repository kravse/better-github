let green = document.querySelector('.tabnav #diffstat .text-green');
let red = document.querySelector('.tabnav #diffstat .text-red');

green.className = "text-red";
red.className = "text-green";

var added = document.querySelectorAll('.tabnav #diffstat .diffstat-block-added');
var deleted = document.querySelectorAll('.tabnav #diffstat .diffstat-block-deleted');

added.forEach(el => {
  el.className = 'diffstat-block-deleted';
});

deleted.forEach(el => {
  el.className = 'diffstat-block-added';
});