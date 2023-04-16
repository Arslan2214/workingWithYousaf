// getting elements
const e = 2.718;
function getValue(inputId) {
  var input = document.getElementById(inputId);
  let b = input.value;
  return b;
}
function clear() {
  tbody.innerHTML = "";
}
let tbody = document.getElementById("tbody");

function calculation() {
  clear();
  let inp1 = getValue("input1");
  let inp2 = getValue("input2");
  let inp3 = getValue("input3");

  let modalText = document.getElementById("modalText");
  let modalHead = document.getElementById("exampleModalLabel");
  modalHead.innerHTML = "Pass";
  inp1 = Number(inp1);
  inp2 = Number(inp2);
  let f = 1;

  let sequence = 1;
  while (f != "0.000") {
    console.log("flo");
    let x = (Number(inp1) + Number(inp2)) / 2;
    let a = inp3.trim();
    f = eval(a);
    f = f.toFixed(3);
    if (sequence % 2 == 0) {
      type = "table-primary";
    } else {
      type = "table-danger";
    }
    tbody.innerHTML += `<tr class=${type}>
  <th scope="row">${sequence}</th>
  <td>${inp1}</td>
  <td>${inp2}</td>
  <td>${x}</td>
  <td>${f}</td>
  </tr>`;
    if (sequence > 500) {
      alert("There is no root");
      break;
    }
    if (inp1 == inp2) {
      modalHead.innerHTML = "Failed";
      break;
    }
    if (f > 0) {
      inp2 = x;
    } else inp1 = x;
    sequence++;
  }
  modalText.innerHTML = `${sequence - 1} iteration`;
}
// for (let i = 0; i <= 500; i++) {
//     console.log("flo");
//     let x = (Number(inp1) + Number(inp2)) / 2;
//     f = 2.718 ** x - 3 * x;
//     f = f.toFixed(3);
//     tbody.innerHTML += `<tr>
//   <th scope="row">${i + 1}</th>
//   <td>${inp1}</td>
//   <td>${inp2}</td>
//   <td>${x}</td>
//   <td>${f}</td>
//   </tr>`;
//     if (f == "0.000") {
//       break;
//     } else if (f > 0) {
//       inp2 = x;
//     } else inp1 = x;
//   }
