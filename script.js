function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar tag image
  const img = document.querySelector("#profile img")

  //subistituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode adicionar imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Maik Brito sorrindo, usando óculos e jaqueta preta, barba e fundo azul."
    )
  } else {
    //se tiver se light mode manter imagen original
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Maik Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo."
    )
  }
}
