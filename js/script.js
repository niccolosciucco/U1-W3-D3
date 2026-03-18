const crossOut = (e) => {
  // Al click sul singolo elemento
  // quell'elemento viene barrato
  // lo barro aggiungendogli una classe
  e.target.classList.add("crossText");
};

const changeCursor = (e) => {
  // cambia la forma del cursore quando il mouse va sopra il testo
  e.target.classList.add("pointerCursor");
};

const removeTask = (e) => {
  // elimina la riga
  e.target.parentElement.parentElement.remove();
};

const submitForm = (e) => {
  // elimina il comportamento di default dell'invio del form
  e.preventDefault();

  // prendo il valore dell'input che è stato scritto nel form
  const task = document.getElementById("inputTask").value;

  // l'obietto è inserire ogni task che arriva in una list
  // la lista è già stata creata nell'html
  // qui dobbiamo creare il singolo elemento della lista e riempirlo con la task
  const rowList = document.createElement("li"); // <li></li>
  rowList.innerText = task; //<li>task</li>

  // è stata riempita la riga con la task corrente
  // ora bisogna aggiungerla alla lista già creata in html

  const list = document.querySelector("ul");
  list.appendChild(rowList);

  // chiamata alle funzioni che gestiscono gli eventi sulle righe inserite
  rowList.addEventListener("mouseover", changeCursor);
  rowList.addEventListener("click", crossOut);

  // creazione button e inserimento sulla riga della list
  // il button lo inserisco dentro un div, così che va sempre sotto la task
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Elimina task";
  deleteButton.classList.add("deleteButton");
  deleteButton.classList.add("button");
  const divButton = document.createElement("div");
  divButton.appendChild(deleteButton);
  rowList.appendChild(divButton);

  // chiamata alla funzione che gestisce il click sul button
  deleteButton.addEventListener("click", removeTask);

  // reset del form
  form.reset();
};

const form = document.querySelector("form");
// nel submit del form, chiama la funzione submitForm
// non viene invocata con (), perchè viene chiamata solo al submit
// anche se non viene specificato, passa in automatico il parametro e
form.addEventListener("submit", submitForm);
