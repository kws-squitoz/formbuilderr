function showAnswerInput() {
  const answerType = document.getElementById("answer-type").value;
  const answerInputDiv = document.getElementById("answer-input");
  const answerConditionDiv = document.getElementById("answer-condition");

  // Usunięcie poprzedniego pola odpowiedzi (jeśli istnieje)
  while (answerInputDiv.firstChild) {
    answerInputDiv.removeChild(answerInputDiv.firstChild);
  }
  //Usunięcie poprzedniego pola warunku
  while (answerConditionDiv.firstChild) {
    answerConditionDiv.removeChild(answerConditionDiv.firstChild);
  }

  // Utworzenie nowego pola odpowiedzi na podstawie wybranego typu
  switch (answerType) {
    case "text":
      const textInput = document.createElement("input");
      textInput.type = "text";
      textInput.name = "answer";
      textInput.required = true;
      answerInputDiv.appendChild(textInput);
      break;

      // Dodanie warunku "równy" dla pola tekstowego
      // const equalsInput = document.createElement("input");
      equalsInput.type = "radio";
      equalsInput.name = "condition";
      equalsInput.value = "equals";
      const equalsLabel = document.createElement("label");
      equalsLabel.textContent = "Równy";
      equalsLabel.setAttribute("for", "equals");
      answerConditionDiv.appendChild(equalsInput);
      answerConditionDiv.appendChild(equalsLabel);
      break;
      
    case "number":
      const numberInput = document.createElement("input");
      numberInput.type = "number";
      numberInput.name = "answer";
      numberInput.required = true;
      answerInputDiv.appendChild(numberInput);
      break;

    case "yesno":
      const yesNoInputsDiv = document.createElement("div");
      const yesInput = document.createElement("input");
      const noInput = document.createElement("input");
      const yesLabel = document.createElement("label");
      const noLabel = document.createElement("label");

      yesInput.type = "radio";
      yesInput.name = "answer";
      yesInput.value = "yes";
      yesLabel.textContent = "Tak";
      yesLabel.setAttribute("for", "yes");

      noInput.type = "radio";
      noInput.name = "answer";
      noInput.value = "no";
      noLabel.textContent = "Nie";
      noLabel.setAttribute("for", "no");

      yesNoInputsDiv.appendChild(yesInput);
      yesNoInputsDiv.appendChild(yesLabel);
      yesNoInputsDiv.appendChild(noInput);
      yesNoInputsDiv.appendChild(noLabel);
      answerInputDiv.appendChild(yesNoInputsDiv);
      break;

    default:
      break;
  }
}