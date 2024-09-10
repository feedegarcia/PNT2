const nuevosPersonajes = [
  { nombre: "Apu", edad: 40, rol: "Tendero" },
  { nombre: "Krusty", edad: 45, rol: "Payaso" }
];

const todosLosPersonajes = [];

for (let i = 0; i < personajesSimpsons.length; i++) {
  todosLosPersonajes.push(personajesSimpsons[i]);
}

for (let i = 0; i < nuevosPersonajes.length; i++) {
  todosLosPersonajes.push(nuevosPersonajes[i]);
}

console.log(todosLosPersonajes);
