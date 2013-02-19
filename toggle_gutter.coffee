
toggle_element = (class_name = 'gutter') ->
  element = document.getElementsByClassName(class_name)[0]

  if !element.style.display
    element.style.display = 'none'
  else
    element.style.display = ''

