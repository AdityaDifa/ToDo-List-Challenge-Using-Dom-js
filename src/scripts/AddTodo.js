export default function AddTodo(e, textTag, parent) {
  e.preventDefault();
  let status = "on progress";

  const parentDiv = document.getElementById(parent);
  const textValue = document.getElementById(textTag).value;

  const cardDiv = document.createElement("div");
  cardDiv.classList =
    "w-max-full p-2 bg-white shadow-md/10 shadow-[#30332E] my-2 flex";

  const divText = document.createElement("div");
  divText.classList = "basis-4/5";

  const divStatus = document.createElement("div");
  divStatus.classList = "basis-1/5 flex flex-col justify-center";

  const textDescription = document.createElement("p");
  textDescription.innerHTML = textValue;
  textDescription.classList = "break-all";

  const buttonStatus = document.createElement("button");
  buttonStatus.classList =
    "p-1 text-white font-bold rounded-md bg-yellow-400 m-1";
  buttonStatus.type = "button";
  buttonStatus.textContent = status;
  buttonStatus.addEventListener("click", () => {
    if (status === "on progress") {
      status = "done";
      buttonStatus.classList =
        "p-1 text-white font-bold rounded-md bg-green-400 m-1";
    } else if (status === "done") {
      status = "on progress";
      buttonStatus.classList =
        "p-1 text-white font-bold rounded-md bg-yellow-400 m-1";
    }
    buttonStatus.textContent = status;
  });

  const buttonDelete = document.createElement("button");
  buttonDelete.classList = "p-1 text-white font-bold rounded-md bg-red-400 m-1";
  buttonDelete.type = "button";
  buttonDelete.textContent = "Delete";
  buttonDelete.addEventListener("click", () => {
    cardDiv.remove();
  });

  divText.appendChild(textDescription);
  divStatus.appendChild(buttonStatus);
  divStatus.appendChild(buttonDelete);

  cardDiv.appendChild(divText);
  cardDiv.appendChild(divStatus);

  parentDiv.appendChild(cardDiv);
}
