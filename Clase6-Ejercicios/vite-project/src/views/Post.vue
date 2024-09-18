<template>
  <div class="container">
    <h1 class="mt-4">Pokémon</h1>
    <div id="type-buttons" class="mt-3">
      <button class="btn btn-primary" @click="fetchPokemonsByType('fire')">Fuego</button>
      <button class="btn btn-primary" @click="fetchPokemonsByType('water')">Agua</button>
      <button class="btn btn-primary" @click="fetchPokemonsByType('grass')">Planta</button>
      <button class="btn btn-primary" @click="fetchPokemons">Todos</button>
    </div>
    <div class="row mt-3">
      <div v-for="pokemon in paginatedPokemons" :key="pokemon.id" class="col-md-4 mb-4">
        <div class="card h-100">
          <img :src="pokemon.sprites.front_default" class="card-img-top" alt="pokemon.name">
          <div class="card-body">
            <h2 class="card-title">{{ pokemon.name }}</h2>
            <p class="card-text">Tipo: {{ pokemon.types.map(type => type.type.name).join(', ') }}</p>
            <button class="btn btn-info" @click="showDetails(pokemon)">Detalle</button>
            <div v-if="selectedPokemon && selectedPokemon.id === pokemon.id" class="mt-2">
              <h3>Detalles de {{ selectedPokemon.name }}</h3>
              <p>Altura: {{ selectedPokemon.height }}</p>
              <p>Peso: {{ selectedPokemon.weight }}</p>
              <button class="btn btn-secondary" @click="selectedPokemon = null">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4">
      <button class="btn btn-secondary" @click="previousPage" :disabled="currentPage === 1">Anterior</button>
      <button class="btn btn-secondary" @click="nextPage" :disabled="currentPage === totalPages">Siguiente</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pokemons: [],
      selectedPokemon: null,
      currentPage: 1,
      pokemonsPerPage: 9,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.pokemons.length / this.pokemonsPerPage);
    },
    paginatedPokemons() {
      const start = (this.currentPage - 1) * this.pokemonsPerPage;
      const end = start + this.pokemonsPerPage;
      return this.pokemons.slice(start, end);
    },
  },
  methods: {
    async fetchPokemons() {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
        const data = await response.json();
        this.pokemons = await Promise.all(
          data.results.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            return await response.json();
          })
        );
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
      }
    },
    async fetchPokemonsByType(type) {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
        const data = await response.json();
        this.pokemons = await Promise.all(
          data.pokemon.map(async (poke) => {
            const response = await fetch(poke.pokemon.url);
            return await response.json();
          })
        );
      } catch (error) {
        console.error('Error fetching Pokémon by type:', error);
      }
    },
    showDetails(pokemon) {
      this.selectedPokemon = pokemon;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
  mounted() {
    this.fetchPokemons();
  },
};
</script>

<style scoped>
/* Agrega tus estilos aquí si es necesario */
</style>
