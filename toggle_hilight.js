function toggle_gutter() {
  toggle_element('gutter');
}

function toggle_element(class_name) {
  var element = document.getElementsByClassName(class_name)[0];
  if (element.style.display === '')
  {
    element.style.display='none';
  } else
  {
    element.style.display='';
  }
}
function toggle_hilight() {
  toggle_gutter();
  toggle_element('toolbar');
  for (var i=0;i<document.styleSheets.length;i++)
  {
    if (document.styleSheets[i].disabled)
    {
      document.styleSheets[i].disabled = false;
    } else
    {
      document.styleSheets[i].disabled = true;
    }

  }

}
toggle_hilight();
