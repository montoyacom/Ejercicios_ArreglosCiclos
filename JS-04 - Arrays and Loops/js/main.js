const alerta = document.getElementById("Fila");

let fila = [
    "Sofia",
    "David",
    "Juan"
];
alerta.innerHTML = fila.length +" elementos<ul>"
+ "<ol><li>"+fila[0]+"</li>"
+ "<li>"+fila[1]+"</li>"
+ "<li>"+fila[2]+"</li>"
console.log(fila); 
fila.push("Sara","Agusto");
console.log(fila); 
fila.shift();
console.log(fila);
fila.splice(1,0,"Renata");
console.log(fila);
fila.push("Elena");
console.log(fila);

