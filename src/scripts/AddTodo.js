export default function AddTodo(e, textTag, parent) {
  e.preventDefault();
  const parentDiv = document.getElementById(parent);
  const textValue = document.getElementById(textTag).value;

  const cardDiv = document.createElement("div");
  cardDiv.classList = "p-2 bg-white shadow-md/10 shadow-[#30332E] my-2";

  const fragment = document.createDocumentFragment();

  const textDescription = document.createElement("p");
  textDescription.textContent = textValue;

  fragment.appendChild(textDescription);
  cardDiv.appendChild(fragment);
  parentDiv.appendChild(cardDiv);
}
