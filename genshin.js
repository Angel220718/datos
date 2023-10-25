
function hacerTransparentess() {
  // Obtén las celdas por su clase
  var celdasf = document.getElementsByClassName("fila");
  var celdasc = document.getElementsByClassName("columna");

  for (var i = 0; i < celdasf.length; i++) {
    celdasf[i].classList.add("transparent-cell");
  }

  for (var i = 0; i < celdasc.length; i++) {
    celdasc[i].classList.add("transparent-cell");
  }
}

function mostrar() {
  // Obtén las celdas por su clase
  var celdasf = document.getElementsByClassName("fila");
  var celdasc = document.getElementsByClassName("columna");

  for (var i = 0; i < celdasf.length; i++) {
    celdasf[i].classList.remove("transparent-cell");
  }

  for (var i = 0; i < celdasc.length; i++) {
    celdasc[i].classList.remove("transparent-cell");
  }
}

function calcular() {
  // Obtener los valores de las celdas
  var b2 = parseFloat(document.getElementById("B2").innerText);
  var c2 = parseFloat(document.getElementById("C2").innerText);
  var d2 = parseFloat(document.getElementById("D2").innerText);
  var e2 = parseFloat(document.getElementById("E2").innerText);

  var b3 = parseFloat(document.getElementById("B3").innerText);
  var c3 = parseFloat(document.getElementById("C3").innerText);
  var d3 = parseFloat(document.getElementById("D3").innerText);
  var e3 = parseFloat(document.getElementById("E3").innerText);

  var b4 = parseFloat(document.getElementById("B4").innerText);
  var c4 = parseFloat(document.getElementById("C4").innerText);
  var d4 = parseFloat(document.getElementById("D4").innerText);
  var e4 = parseFloat(document.getElementById("E4").innerText);

  var b5 = parseFloat(document.getElementById("B5").innerText);
  var c5 = parseFloat(document.getElementById("C5").innerText);
  var d5 = parseFloat(document.getElementById("D5").innerText);
  var e5 = parseFloat(document.getElementById("E5").innerText);

  var b6 = parseFloat(document.getElementById("B6").innerText);
  var c6 = parseFloat(document.getElementById("C6").innerText);
  var d6 = parseFloat(document.getElementById("D6").innerText);
  var e6 = parseFloat(document.getElementById("E6").innerText);

  var b7 = parseFloat(document.getElementById("B7").innerText);
  var c7 = parseFloat(document.getElementById("C7").innerText);
  var d7 = parseFloat(document.getElementById("D7").innerText);
  var e7 = parseFloat(document.getElementById("E7").innerText);

  var c5 = c4 === c2 ? 0 : c4 > c2 ? 6 : c2 - c4;
  var c5 = c4 === c2 ? 0 : c4 > c2 ? 6 : c2 - c4;
  var d5 = d4 === d2 ? 0 : d4 > d2 ? 0 : d2 - d4;
  var e5 = e4 === e2 ? 0 : e4 > e2 ? 0 : e2 - e4;

  document.getElementById("C5").innerText = c5;
  document.getElementById("D5").innerText = d5;
  document.getElementById("E5").innerText = e5;

  var c3 = c5 === 0 ? 0 : c5;
  var d3 = c3 === 0 ? d5 : c3 * 3 + d2;
  var e3 = d3 === 0 ? 0 : d3 * 3;

  document.getElementById("C3").innerText = c3;
  document.getElementById("D3").innerText = d3;
  document.getElementById("E3").innerText = e3;

  var d6 = Math.floor(e4 / 3);
  var e6 = e4 / 3;

  document.getElementById("D6").innerText = d6;
  document.getElementById("E6").innerText = e6.toFixed(1);

  var d7 = d4 + d6;

  document.getElementById("D7").innerText = d7.toFixed(0);

  var c6 = Math.floor(d7 / 3);

  document.getElementById("C6").innerText = c6;

  var c7 = c4 + c6;
  var e7 = e4;

  document.getElementById("C7").innerText = c7.toFixed(0);
  document.getElementById("E7").innerText = e7;
}

function calcularP() {
  // Obtener los valores de las celdas
  var g2 = parseFloat(document.getElementById("G2").innerText);
  var h2 = parseFloat(document.getElementById("H2").innerText);
  var i2 = parseFloat(document.getElementById("I2").innerText);
  var j2 = parseFloat(document.getElementById("J2").innerText);

  var g3 = parseFloat(document.getElementById("G3").innerText);
  var h3 = parseFloat(document.getElementById("H3").innerText);
  var i3 = parseFloat(document.getElementById("I3").innerText);
  var j3 = parseFloat(document.getElementById("J3").innerText);

  var g4 = parseFloat(document.getElementById("G4").innerText);
  var h4 = parseFloat(document.getElementById("H4").innerText);
  var i4 = parseFloat(document.getElementById("I4").innerText);
  var j4 = parseFloat(document.getElementById("J4").innerText);

  var g5 = parseFloat(document.getElementById("G5").innerText);
  var h5 = parseFloat(document.getElementById("H5").innerText);
  var i5 = parseFloat(document.getElementById("I5").innerText);
  var j5 = parseFloat(document.getElementById("J5").innerText);

  var g6 = parseFloat(document.getElementById("G6").innerText);
  var h6 = parseFloat(document.getElementById("H6").innerText);
  var i6 = parseFloat(document.getElementById("I6").innerText);
  var j6 = parseFloat(document.getElementById("J6").innerText);

  var g7 = parseFloat(document.getElementById("G7").innerText);
  var h7 = parseFloat(document.getElementById("H7").innerText);
  var i7 = parseFloat(document.getElementById("I7").innerText);
  var j7 = parseFloat(document.getElementById("J7").innerText);

  var g5 = g4 === g2 ? 0 : g4 > g2 ? 0 : g2 - g4;
  var g3 = g5 === 0 ? 0 : g5;
  var h5 = h4 === h2 ? 0 : h4 > h2 ? 0 : h2 - h4;
  var h3 = g3 === 0 ? h5 : g3 * 3 + h2;
  var i5 = i4 === i2 ? 0 : i4 > i2 ? 0 : i2 - i4;
  var i3 = h3 === 0 ? i5 : h3 * 3 + i2;
  var j3 = i3 === 0 ? 0 : i3 * 3;

  document.getElementById("G5").innerText = g5;
  document.getElementById("G3").innerText = g3;
  document.getElementById("H3").innerText = h3;
  document.getElementById("H5").innerText = h5;
  document.getElementById("I3").innerText = i3;
  document.getElementById("I5").innerText = i5;
  document.getElementById("J3").innerText = j3;

  var j7 = j4;
  var j6 = j7 / 3;
  var i6 = Math.floor(j7 / 3);
  var i7 = i4 + i6;
  var h6 = i7 / 3;
  var h7 = Math.floor(h4 + h6);
  var g6 = h7 / 3;
  var g7 = g4 + g6;

  document.getElementById("J7").innerText = j7;
  document.getElementById("J6").innerText = j6.toFixed(1);
  document.getElementById("I6").innerText = i6;
  document.getElementById("I7").innerText = i7.toFixed(0);
  document.getElementById("H6").innerText = h6.toFixed(1);
  document.getElementById("H7").innerText = h7.toFixed(0);
  document.getElementById("G6").innerText = g6.toFixed(1);
  document.getElementById("G7").innerText = g7.toFixed(0);
}

function calcularR() {
  // Obtener los valores de las celdas
  var l2 = parseFloat(document.getElementById("L2").innerText);
  var m2 = parseFloat(document.getElementById("M2").innerText);
  var n2 = parseFloat(document.getElementById("N2").innerText);
  var o2 = parseFloat(document.getElementById("O2").innerText);

  var l3 = parseFloat(document.getElementById("L3").innerText);
  var m3 = parseFloat(document.getElementById("M3").innerText);
  var n3 = parseFloat(document.getElementById("N3").innerText);
  var o3 = parseFloat(document.getElementById("O3").innerText);

  var l4 = parseFloat(document.getElementById("L4").innerText);
  var m4 = parseFloat(document.getElementById("M4").innerText);
  var n4 = parseFloat(document.getElementById("N4").innerText);
  var o4 = parseFloat(document.getElementById("O4").innerText);

  var l5 = parseFloat(document.getElementById("L5").innerText);
  var m5 = parseFloat(document.getElementById("M5").innerText);
  var n5 = parseFloat(document.getElementById("N5").innerText);
  var o5 = parseFloat(document.getElementById("O5").innerText);

  var l4 = l2 - l3 === 0 ? 0 : l2 - l3 > 0 ? l2 - l3 : 0;
  var resul = l4.toLocaleString("es-ES");
  var m4 = m2 - m3 === 0 ? 0 : m2 - m3 > 0 ? m2 - m3 : 0;
  var re = m4.toLocaleString("es-ES");
  var n4 = n2 - n3 === 0 ? 0 : n2 - n3 > 0 ? n2 - n3 : 0;
  var res = n4.toLocaleString("es-ES");
  var o4 = o2 - o3 === 0 ? 0 : o2 - o3 > 0 ? o2 - o3 : 0;
  var resu = o4.toLocaleString("es-ES");

  document.getElementById("L4").innerText = resul;
  document.getElementById("M4").innerText = re;
  document.getElementById("N4").innerText = res;
  document.getElementById("O4").innerText = resu;
}

function calcularPR() {
  // Obtener los valores de las celdas
  var q4 = parseFloat(document.getElementById("Q4").innerText);
  var p4 = parseFloat(document.getElementById("P4").innerText);
  var st4 = parseFloat(document.getElementById("ST4").innerText);
  var s5 = parseFloat(document.getElementById("S5").innerText);
  var s3 = parseFloat(document.getElementById("S3").innerText);
  var t3 = parseFloat(document.getElementById("T3").innerText);
  var s6 = parseFloat(document.getElementById("S6").innerText);
  var pqr6 = parseFloat(document.getElementById("PQR6").innerText);
  var pqr5 = parseFloat(document.getElementById("PQR5").innerText);
  var t5 = parseFloat(document.getElementById("T5").innerText);
  var t6 = parseFloat(document.getElementById("T6").innerText);
  var o4 = parseFloat(document.getElementById("O4").innerText);

  var q4 = p4 * 160;
  var r4 = q4 - st4 < 0 ? 0 : q4 - st4;
  var s5 = Math.floor(st4 / 160);
  var s6 = s3 + s5;
  var t5 = Math.floor(st4 / 160);
  var t6 = t3 + t5;
  var jefe = Math.floor(o4 / 2);
  var pqr5 = o4 + " / 2 =" + jefe;
  var pqr6 = " Hay que matar al Boos " + jefe + " veces ";

  document.getElementById("Q4").innerText = q4;
  document.getElementById("R4").innerText = r4;
  document.getElementById("S5").innerText = s5;
  document.getElementById("S6").innerText = s6;
  document.getElementById("PQR5").innerText = pqr5;
  document.getElementById("PQR6").innerText = pqr6;
  document.getElementById("T5").innerText = t5;
  document.getElementById("T6").innerText = t6;
}

function guardarE() {
  var c2 = document.getElementById("C2").innerText;
  localStorage.setItem("C2", c2);
  var d2 = document.getElementById("D2").innerText;
  localStorage.setItem("D2", d2);
  var e2 = document.getElementById("E2").innerText;
  localStorage.setItem("E2", e2);
  var c4 = document.getElementById("C4").innerText;
  localStorage.setItem("C4", c4);
  var e4 = document.getElementById("E4").innerText;
  localStorage.setItem("E4", e4);
  var d4 = document.getElementById("D4").innerText;
  localStorage.setItem("D4", d4);
}

function recuperarE() {
  document.getElementById("C2").innerText = localStorage.getItem("C2");
  document.getElementById("D2").innerText = localStorage.getItem("D2");
  document.getElementById("E2").innerText = localStorage.getItem("E2");
  document.getElementById("C4").innerText = localStorage.getItem("C4");
  document.getElementById("E4").innerText = localStorage.getItem("E4");
  document.getElementById("D4").innerText = localStorage.getItem("D4");
}

function guardarP() {
  var g2 = document.getElementById("G2").innerText;
  localStorage.setItem("G2", g2);
  var g4 = document.getElementById("G4").innerText;
  localStorage.setItem("G4", g4);
  var h2 = document.getElementById("H2").innerText;
  localStorage.setItem("H2", h2);
  var h4 = document.getElementById("H4").innerText;
  localStorage.setItem("H4", h4);
  var i2 = document.getElementById("I2").innerText;
  localStorage.setItem("I2", i2);
  var i4 = document.getElementById("I4").innerText;
  localStorage.setItem("I4", i4);
  var j2 = document.getElementById("J2").innerText;
  localStorage.setItem("J2", j2);
  var j4 = document.getElementById("J4").innerText;
  localStorage.setItem("J4", j4);
}

function recuperarP() {
  document.getElementById("G2").innerText = localStorage.getItem("G2");
  document.getElementById("G4").innerText = localStorage.getItem("G4");
  document.getElementById("H2").innerText = localStorage.getItem("H2");
  document.getElementById("H4").innerText = localStorage.getItem("H4");
  document.getElementById("I2").innerText = localStorage.getItem("I2");
  document.getElementById("I4").innerText = localStorage.getItem("I4");
  document.getElementById("J2").innerText = localStorage.getItem("J2");
  document.getElementById("J4").innerText = localStorage.getItem("J4");
}

function guardarR() {
  var l2 = document.getElementById("L2").innerText;
  localStorage.setItem("L2", l2);
  var l3 = document.getElementById("L3").innerText;
  localStorage.setItem("L3", l3);
  var m2 = document.getElementById("M2").innerText;
  localStorage.setItem("M2", m2);
  var m3 = document.getElementById("M3").innerText;
  localStorage.setItem("M3", m3);
  var n2 = document.getElementById("N2").innerText;
  localStorage.setItem("N2", n2);
  var n3 = document.getElementById("N3").innerText;
  localStorage.setItem("N3", n3);
  var o2 = document.getElementById("O2").innerText;
  localStorage.setItem("O2", o2);
  var o3 = document.getElementById("O3").innerText;
  localStorage.setItem("O3", o3);
}

function recuperarR() {
  document.getElementById("L2").innerText = localStorage.getItem("L2");
  document.getElementById("L3").innerText = localStorage.getItem("L3");
  document.getElementById("M2").innerText = localStorage.getItem("M2");
  document.getElementById("M3").innerText = localStorage.getItem("M3");
  document.getElementById("N2").innerText = localStorage.getItem("N2");
  document.getElementById("N3").innerText = localStorage.getItem("N3");
  document.getElementById("O2").innerText = localStorage.getItem("O2");
  document.getElementById("O3").innerText = localStorage.getItem("O3");
}

function guardarPR() {
  var s3 = document.getElementById("S3").innerText;
  localStorage.setItem("S3", s3);
  var t3 = document.getElementById("T3").innerText;
  localStorage.setItem("T3", t3);
  var p4 = document.getElementById("P4").innerText;
  localStorage.setItem("P4", p4);
  var st4 = document.getElementById("ST4").innerText;
  localStorage.setItem("ST4", st4);
}

function recuperarPR() {
  document.getElementById("S3").innerText = localStorage.getItem("S3");
  document.getElementById("T3").innerText = localStorage.getItem("T3");
  document.getElementById("P4").innerText = localStorage.getItem("P4");
  document.getElementById("ST4").innerText = localStorage.getItem("ST4");
}

function borrarEnemigos() {
  localStorage.removeItem("C2");
  localStorage.removeItem("D2");
  localStorage.removeItem("E2");
  localStorage.removeItem("C4");
  localStorage.removeItem("E4");
  localStorage.removeItem("D4");
}

function borrar_celda_enemigo() {
  // También puedes restablecer los campos de la tabla
  document.getElementById("C2").innerText = "";
  document.getElementById("D2").innerText = "";
  document.getElementById("E2").innerText = "";
  document.getElementById("C4").innerText = "";
  document.getElementById("E4").innerText = "";
  document.getElementById("D4").innerText = "";
}

function borrarPiedras() {
  localStorage.removeItem("G2");
  localStorage.removeItem("G4");
  localStorage.removeItem("H2");
  localStorage.removeItem("H4");
  localStorage.removeItem("I2");
  localStorage.removeItem("I4");
  localStorage.removeItem("J2");
  localStorage.removeItem("J4");
}

function borrar_celda_piedras() {
  document.getElementById("G2").innerText = "";
  document.getElementById("G4").innerText = "";
  document.getElementById("H2").innerText = "";
  document.getElementById("H4").innerText = "";
  document.getElementById("I2").innerText = "";
  document.getElementById("I4").innerText = "";
  document.getElementById("J2").innerText = "";
  document.getElementById("J4").innerText = "";
}

function borrarRecursos() {
  localStorage.removeItem("L2");
  localStorage.removeItem("L3");
  localStorage.removeItem("M2");
  localStorage.removeItem("M3");
  localStorage.removeItem("N2");
  localStorage.removeItem("N3");
  localStorage.removeItem("O2");
  localStorage.removeItem("O3");
}

function borrar_celda_recursos() {
  // También puedes restablecer los campos de la tabla de recursos
  document.getElementById("L2").innerText = "";
  document.getElementById("L3").innerText = "";
  document.getElementById("M2").innerText = "";
  document.getElementById("M3").innerText = "";
  document.getElementById("N2").innerText = "";
  document.getElementById("N3").innerText = "";
  document.getElementById("O2").innerText = "";
  document.getElementById("O3").innerText = "";
}

function borrarProtogema() {
  localStorage.removeItem("S3");
  localStorage.removeItem("T3");
  localStorage.removeItem("P4");
  localStorage.removeItem("ST4");
}

function borrar_celda_protogema() {
  // También puedes restablecer los campos de la tabla de protogema
  document.getElementById("S3").innerText = "";
  document.getElementById("T3").innerText = "";
  document.getElementById("P4").innerText = "";
  document.getElementById("ST4").innerText = "";
}

function guardar_todo() {
  guardarE();
  guardarP();
  guardarR();
  guardarPR();
}

function recuperar_todo() {
  recuperarE();
  recuperarP();
  recuperarR();
  recuperarPR();
}

function clic() {
  calcular();
  calcularP();
  calcularPR();
  calcularR();
  cambiarCeldas();
}

function borrar_todas_las_celdas() {
  borrar_celda_enemigo();
  borrar_celda_piedras();
  borrar_celda_protogema();
  borrar_celda_recursos();
}

function borrar_todo() {
  borrarProtogema();
  borrarRecursos();
  borrarPiedras();
  borrarRecursos();
}

// Obtener todos los select
var select1 = document.getElementById("selecnivel1");
var select2 = document.getElementById("selecnivel2");
var select3 = document.getElementById("selecnivel3");
var select4 = document.getElementById("selecnivel4");

// Crear una función para actualizar los select
function actualizarSelects(valor) {
  select1.value = valor;
  select2.value = valor;
  select3.value = valor;
  select4.value = valor;

  // Llama a tu función cambiarCeldas para actualizar las celdas según el nuevo valor
  cambiarCeldas(valor);
}

// Configura el evento onchange en cada select
select1.onchange = function () {
  actualizarSelects(select1.value);
};
select2.onchange = function () {
  actualizarSelects(select2.value);
};
select3.onchange = function () {
  actualizarSelects(select3.value);
};
select4.onchange = function () {
  actualizarSelects(select4.value);
};
// Inicializa los select
for (var i = 0; i <= 90; i++) {
  var option = document.createElement("option");
  option.value = i.toString();
  option.text = "Nivel " + i;
  select1.appendChild(option);
  select2.appendChild(option.cloneNode(true));
  select3.appendChild(option.cloneNode(true));
  select4.appendChild(option.cloneNode(true));
}

function cambiarCeldas(valor) {
  // Aquí puedes agregar lógica para cambiar las celdas basadas en el nivel seleccionado
  if (valor === "1") {
    document.getElementById("C2").innerText = 36;
    document.getElementById("D2").innerText = 30;
    document.getElementById("E2").innerText = 18;
    document.getElementById("M2").innerText = 168;
    document.getElementById("G2").innerText = 6;
    document.getElementById("H2").innerText = 9;
    document.getElementById("I2").innerText = 9;
    document.getElementById("J2").innerText = 1;
    document.getElementById("O2").innerText = 46;
    document.getElementById("N2").innerText = 419;
  } else if (valor === "2") {
    document.getElementById("C2").innerText = 36;
    document.getElementById("D2").innerText = 30;
    document.getElementById("E2").innerText = 18;
    document.getElementById("M2").innerText = 168;
    document.getElementById("G2").innerText = 6;
    document.getElementById("H2").innerText = 9;
    document.getElementById("I2").innerText = 9;
    document.getElementById("J2").innerText = 1;
    document.getElementById("O2").innerText = 46;
    document.getElementById("N2").innerText = 419;
  } else if (valor === "3") {
    document.getElementById("C2").innerText = 36;
    document.getElementById("D2").innerText = 30;
    document.getElementById("E2").innerText = 18;
    document.getElementById("M2").innerText = 168;
    document.getElementById("G2").innerText = 6;
    document.getElementById("H2").innerText = 9;
    document.getElementById("I2").innerText = 9;
    document.getElementById("J2").innerText = 1;
    document.getElementById("O2").innerText = 46;
    document.getElementById("N2").innerText = 419;
  } else if (valor === "4") {
    document.getElementById("C2").innerText = 36;
    document.getElementById("D2").innerText = 30;
    document.getElementById("E2").innerText = 18;
    document.getElementById("M2").innerText = 168;
    document.getElementById("G2").innerText = 6;
    document.getElementById("H2").innerText = 9;
    document.getElementById("I2").innerText = 9;
    document.getElementById("J2").innerText = 1;
    document.getElementById("O2").innerText = 46;
    document.getElementById("N2").innerText = 418;
  } else if (valor === "5") {
    document.getElementById("C2").innerText = 36;
    document.getElementById("D2").innerText = 30;
    document.getElementById("E2").innerText = 18;
    document.getElementById("M2").innerText = 168;
    document.getElementById("G2").innerText = 6;
    document.getElementById("H2").innerText = 9;
    document.getElementById("I2").innerText = 9;
    document.getElementById("J2").innerText = 1;
    document.getElementById("O2").innerText = 46;
    document.getElementById("N2").innerText = 418;
  } else if (valor === "6") {
    document.getElementById("C2").innerText = 36;
    document.getElementById("D2").innerText = 30;
    document.getElementById("E2").innerText = 18;
    document.getElementById("M2").innerText = 168;
    document.getElementById("G2").innerText = 6;
    document.getElementById("H2").innerText = 9;
    document.getElementById("I2").innerText = 9;
    document.getElementById("J2").innerText = 1;
    document.getElementById("O2").innerText = 46;
    document.getElementById("N2").innerText = 418;
  } else if (valor === "7") {
    document.getElementById("C2").innerText = 36;
    document.getElementById("D2").innerText = 30;
    document.getElementById("E2").innerText = 18;
    document.getElementById("M2").innerText = 168;
    document.getElementById("G2").innerText = 6;
    document.getElementById("H2").innerText = 9;
    document.getElementById("I2").innerText = 9;
    document.getElementById("J2").innerText = 1;
    document.getElementById("O2").innerText = 46;
    document.getElementById("N2").innerText = 418;
  } else if (valor === "8") {
    document.getElementById("C2").innerText = 36;
    document.getElementById("D2").innerText = 30;
    document.getElementById("E2").innerText = 18;
    document.getElementById("M2").innerText = 168;
    document.getElementById("G2").innerText = 6;
    document.getElementById("H2").innerText = 9;
    document.getElementById("I2").innerText = 9;
    document.getElementById("J2").innerText = 1;
    document.getElementById("O2").innerText = 46;
    document.getElementById("N2").innerText = 418;
  } else if (valor === "9") {
    document.getElementById("C2").innerText = 36;
    document.getElementById("D2").innerText = 30;
    document.getElementById("E2").innerText = 18;
    document.getElementById("M2").innerText = 168;
    document.getElementById("G2").innerText = 6;
    document.getElementById("H2").innerText = 9;
    document.getElementById("I2").innerText = 9;
    document.getElementById("J2").innerText = 1;
    document.getElementById("O2").innerText = 46;
    document.getElementById("N2").innerText = 418;
  } else if (valor === "10") {
    document.getElementById("C2").innerText = 36;
    document.getElementById("D2").innerText = 30;
    document.getElementById("E2").innerText = 18;
    document.getElementById("M2").innerText = 168;
    document.getElementById("G2").innerText = 6;
    document.getElementById("H2").innerText = 9;
    document.getElementById("I2").innerText = 9;
    document.getElementById("J2").innerText = 1;
    document.getElementById("O2").innerText = 46;
    document.getElementById("N2").innerText = 417;
  } else if (valor === "11") {
    document.getElementById("C2").innerText = 36;
    document.getElementById("D2").innerText = 30;
    document.getElementById("E2").innerText = 18;
    document.getElementById("M2").innerText = 168;
    document.getElementById("G2").innerText = 6;
    document.getElementById("H2").innerText = 9;
    document.getElementById("I2").innerText = 9;
    document.getElementById("J2").innerText = 1;
    document.getElementById("O2").innerText = 46;
    document.getElementById("N2").innerText = 417;
  } else if (valor === "12") {
    document.getElementById("C2").innerText = 36;
    document.getElementById("D2").innerText = 30;
    document.getElementById("E2").innerText = 18;
    document.getElementById("M2").innerText = 168;
    document.getElementById("G2").innerText = 6;
    document.getElementById("H2").innerText = 9;
    document.getElementById("I2").innerText = 9;
    document.getElementById("J2").innerText = 1;
    document.getElementById("O2").innerText = 46;
    document.getElementById("N2").innerText = 417;
  } else if (valor === "13") {
    document.getElementById("C2").innerText = 36;
    document.getElementById("D2").innerText = 30;
    document.getElementById("E2").innerText = 18;
    document.getElementById("M2").innerText = 168;
    document.getElementById("G2").innerText = 6;
    document.getElementById("H2").innerText = 9;
    document.getElementById("I2").innerText = 9;
    document.getElementById("J2").innerText = 1;
    document.getElementById("O2").innerText = 46;
    document.getElementById("N2").innerText = 416;
  } else if (valor === "14") {
    document.getElementById("C2").innerText = 36;
    document.getElementById("D2").innerText = 30;
    document.getElementById("E2").innerText = 18;
    document.getElementById("M2").innerText = 168;
    document.getElementById("G2").innerText = 6;
    document.getElementById("H2").innerText = 9;
    document.getElementById("I2").innerText = 9;
    document.getElementById("J2").innerText = 1;
    document.getElementById("O2").innerText = 46;
    document.getElementById("N2").innerText = 416;
  } else if (valor === "15") {
    document.getElementById("C2").innerText = 36;
    document.getElementById("D2").innerText = 30;
    document.getElementById("E2").innerText = 18;
    document.getElementById("M2").innerText = 168;
    document.getElementById("G2").innerText = 6;
    document.getElementById("H2").innerText = 9;
    document.getElementById("I2").innerText = 9;
    document.getElementById("J2").innerText = 1;
    document.getElementById("O2").innerText = 46;
    document.getElementById("N2").innerText = 416;
  } else if (valor === "16") {
    document.getElementById("C2").innerText = 36;
    document.getElementById("D2").innerText = 30;
    document.getElementById("E2").innerText = 18;
    document.getElementById("M2").innerText = 168;
    document.getElementById("G2").innerText = 6;
    document.getElementById("H2").innerText = 9;
    document.getElementById("I2").innerText = 9;
    document.getElementById("J2").innerText = 1;
    document.getElementById("O2").innerText = 46;
    document.getElementById("N2").innerText = 415;
  } else if (valor === "17") {
    document.getElementById("C2").innerText = 36;
    document.getElementById("D2").innerText = 30;
    document.getElementById("E2").innerText = 18;
    document.getElementById("M2").innerText = 168;
    document.getElementById("G2").innerText = 6;
    document.getElementById("H2").innerText = 9;
    document.getElementById("I2").innerText = 9;
    document.getElementById("J2").innerText = 1;
    document.getElementById("O2").innerText = 46;
    document.getElementById("N2").innerText = 415;
  } else if (valor === "18") {
    document.getElementById("C2").innerText = 36;
    document.getElementById("D2").innerText = 30;
    document.getElementById("E2").innerText = 18;
    document.getElementById("M2").innerText = 168;
    document.getElementById("G2").innerText = 6;
    document.getElementById("H2").innerText = 9;
    document.getElementById("I2").innerText = 9;
    document.getElementById("J2").innerText = 1;
    document.getElementById("O2").innerText = 46;
    document.getElementById("N2").innerText = 414;
  } else if (valor === "19") {
    document.getElementById("C2").innerText = 36;
    document.getElementById("D2").innerText = 30;
    document.getElementById("E2").innerText = 18;
    document.getElementById("M2").innerText = 168;
    document.getElementById("G2").innerText = 6;
    document.getElementById("H2").innerText = 9;
    document.getElementById("I2").innerText = 9;
    document.getElementById("J2").innerText = 1;
    document.getElementById("O2").innerText = 46;
    document.getElementById("N2").innerText = 413;
  } else if (valor === "20") {
    document.getElementById("C2").innerText = 36;
    document.getElementById("D2").innerText = 30;
    document.getElementById("E2").innerText = 15;
    document.getElementById("M2").innerText = 165;
    document.getElementById("G2").innerText = 6;
    document.getElementById("H2").innerText = 9;
    document.getElementById("I2").innerText = 9;
    document.getElementById("O2").innerText = 46;
    document.getElementById("J2").innerText = 0;
  }
}
var ar = 9;
console.log(ar);
