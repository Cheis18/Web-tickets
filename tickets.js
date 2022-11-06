const resumen = document.getElementById("resumen");

resumen.addEventListener("click", () => {
  let descuento = 0;
  desc = document.getElementById("category").value;
  desc = parseInt(desc);
  if (desc == 1) {
    descuento = 80;
  } else if (desc == 2) {
    descuento = 50;
  } else if (desc == 3) {
    descuento = 15;
  } else {
    descuento = 80;
  }

  valor = document.getElementById("quantity").value;
  valor = parseInt(valor);
  total1 = 0;
  total1 = valor * 200;
  total2 = total1 - (descuento * total1) / 100;

  document.getElementById("total").innerHTML =
    " Total a pagar: $" + total2.toString();
});

const borrar = document.getElementById("borrar");

borrar.addEventListener("click", () => {
  document.getElementById("total").innerHTML = " Total a pagar: $";
});
