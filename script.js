document.body.addEventListener("click", (e) => {
  let div = document.createElement("div");
  div.className = "circle";

  //Giving content to circle.
  const messages = [
    "Hi",
    "Hey there",
    "Hello",
    "Ciao",
    "Bonjour",
    "Olá",
    "Hola",
    "Hallo",
    "Hej",
    "Jambo",
    "Hei",
  ];
  div.textContent = messages[Math.floor(Math.random() * messages.length)];

  //Giving color to circles.
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  div.style.backgroundColor = `rgb(${red},${green},${blue})`;

  //Selecting position where circle is to be created.
  let x = e.clientX;
  let y = e.clientY;

  //Without the -25 , circle gets created at some distance from where the pointer was clicked.
  //so as per height and width of circle , we can bring the circle's origin is brought at
  // pointer's click position
  div.style.left = `${x - 25}px`; //-25 done to center the circle
  div.style.top = `${y - 25}px`; //-25 done to center the circle

  document.body.appendChild(div);

  //Removing circles from body after 5 sec.
  setTimeout(() => {
    div.remove();
  }, 5000);
});
