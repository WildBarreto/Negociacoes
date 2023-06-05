var campos = [
  document.querySelector("#data"),
  document.querySelector("#valor"),
  document.querySelector("#quantidade"),
];

console.log(campos);
var tbody = document.querySelector("table	tbody");

console.log(tbody);
document.querySelector(".form").addEventListener("submit", function (event) {
  //cancelando a submissão do formulário
  event.preventDefault();

  var tr = document.createElement("tr");

  campos.forEach(function (campo) {
    //cria uma td sem informções
    var td = document.createElement("td");
    //atribui o valor do à td
    td.textContent = campo.value;
    //adiciona a td a tr
    tr.appendChild(td);
  });

  //Nova td que armazenará o volume da negociações
  var tdVolume = document.createElement("td");
  // as posições de 1 e 2 do array armazenam os campos de quantidade e valor, respectivamente
  tdVolume.textContent = campos[1].value * campos[2].value;
  //adiciona a td que faltava à tr
  tr.appendChild(tdVolume);
  //Adicionar a tr
  tbody.appendChild(tr);

  //linmpa campo da data
  campos[0].value = "";
  //linmpa campo da quantidade
  campos[1].value = 1;
  //linmpa campo do valor
  campos[2].value = 0;
  //foca no campo da data
  campos[0].focus();
});
