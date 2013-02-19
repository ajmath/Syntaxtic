function toggle_gutter() {
  toggle_element('gutter');
}

function toggle_element(class_name) {
  var element = document.getElementsByClassName(class_name)[0];

  if (typeof element !== "undefined" && element !== null) {
    if (element.style.display === '') {
      element.style.display='none';
    } else {
      element.style.display='';
    }
  }

}

toggle_gutter();
