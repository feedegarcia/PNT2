<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<style>

html, body {
  margin: 0;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column; /* Apila los elementos verticalmente */
  min-height: 100vh; /* Asegura que #app ocupe al menos toda la altura de la ventana */
}

/* Estilo para el footer */
footer {
  margin-top: auto; /* Esto empuja el footer hacia abajo */
}
</style>