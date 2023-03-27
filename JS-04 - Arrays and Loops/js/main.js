const alerta = document.getElementById("Fila");

let fila = ["Sofia","David","Juan"];
alerta.innerHTML = fila.length +" elementos<ul>"
+ "<ol><li>"+fila[0]+"</li>"
+ "<li>"+fila[1]+"</li>"
+ "<li>"+fila[2]+"</li>"
console.log(fila); 
console.log(fila.push("Sara"));
