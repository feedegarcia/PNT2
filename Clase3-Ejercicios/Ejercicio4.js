const personajesModificados = [];

for (let i = 0; i < personajesSimpsons.length; i++) {
  const personaje = personajesSimpsons[i];
  if (personaje.edad < 18) {
    personajesModificados.push({ ...personaje, rol: "Estudiante" });
  } else {
    personajesModificados.push(personaje);
  }
}

console.log(personajesModificados);
