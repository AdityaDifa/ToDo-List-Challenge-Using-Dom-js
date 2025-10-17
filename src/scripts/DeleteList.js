export default function DeleteList() {
  const listCards = document.getElementById("listCards");

  while (listCards.firstChild) {
    listCards.removeChild(listCards.firstChild);
  }
}
