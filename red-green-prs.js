let green = document.querySelector('.tabnav #diffstat .text-green');
let red = document.querySelector('.tabnav #diffstat .text-red');

green.className = "text-red";
red.className = "text-green";

var added = document.querySelectorAll('.tabnav #diffstat .diffstat-block-added');
var deleted = document.querySelectorAll('.tabnav #diffstat .diffstat-block-deleted');
// var deletionRows = document.querySelectorAll('.blob-num-deletion');
// var deletionCode = document.querySelectorAll('.blob-code-deletion');
// var additionRows = document.querySelectorAll('.blob-num-addition');
// var additionCode = document.querySelectorAll('.blob-code-addition');


// added.forEach(el => {
//   el.className = 'diffstat-block-deleted';
// });
// deleted.forEach(el => {
//   el.className = 'diffstat-block-added';
// });

// deletionRows.forEach(el => {
//   el.classList.remove('blob-num-deletion')
//   el.classList.add('blob-num-addition')
// });

// additionRows.forEach(el => {
//   el.classList.remove('blob-num-addition')
//   el.classList.add('blob-num-deletion')
// });

// deletionCode.forEach(el => {
//   el.classList.remove('blob-code-deletion')
//   el.classList.add('blob-code-addition')
// });

// additionCode.forEach(el => {
//   el.classList.remove('blob-code-addition')
//   el.classList.add('blob-code-deletion')
// });