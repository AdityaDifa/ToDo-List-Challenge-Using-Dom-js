export default function CounterWords(idInputText, idCounterText) {
  const CounterText = document.getElementById(idCounterText);
  const InputText = document.getElementById(idInputText);

  CounterText.innerHTML = `${InputText.value.length}/200`;
}
