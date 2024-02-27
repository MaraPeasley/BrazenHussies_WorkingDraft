/* 
PUT IN SCRIPT SECTION OF HTML TO PRINT ELEMENT 
THAT'S CAUSING THE HORIZONTAL SCROLL TO THE CONSOLE
*/

var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);