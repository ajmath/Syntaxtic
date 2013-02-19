
toggle_element = (class_name = 'gutter') ->
  element = document.getElementsByClassName(class_name)[0]

  if element?
    if element.style.display is ''
      element.style.display = 'none'
    else
      element.style.display = ''

