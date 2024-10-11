<template>
  <div class="consumirapi">
    <h2>Listado de pokemones</h2>
    <div class="botonesBusqueda">
      <a v-if="previous" @click="fetchData(1)">{{ '<' }}</a>
      <a @click="fetchData(3)">Cargar Datos</a>
      <a v-if="next" @click="fetchData(2)">></a>
    </div>
    <div v-if="loading">Cargando...</div>
    <div v-if="!loading && details.length" class="containerApi">
      <span v-for="item in details" :key="item.id">
        <h4>{{ item.name }}</h4>
        <img :src="item.sprite" />
      </span>
    </div>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'consumirApi',
    data() {
      return {
        data: [],
        next: null,
        previous: null,
        details: [],
        loading: false,
        error: null,
      };
    },
    methods: {
      async fetchData(valor) {
        this.loading = true;
        this.error = null;
        try {
          let response;
          switch (valor) {
            case 1:
              response = await axios.get(this.previous);
              break;
            case 2:
              response = await axios.get(this.next);
              break;
            case 3:
              response = await axios.get('https://pokeapi.co/api/v2/pokemon');
          }
          this.previous = response.data.previous;
          this.next = response.data.next;
          this.data = response.data.results;

          this.data = await this.fetchDetails();
        } catch (err) {
          this.error = 'Error al cargar los datos: ' + err.message;
        } finally {
          this.loading = false;
        }
      },

      async fetchDetails() {
        const detallesPromesa = this.data.map(async (item) => {
          try {
            const detalleResponse = await axios.get(item.url);
            const detallePokemon = await axios.get(
              detalleResponse.data.forms[0].url
            );

            return {
              name: item.name,
              sprite: detallePokemon.data.sprites.front_default,
            };
          } catch (err) {
            this.error = 'Error al cargar los datos: ' + err.message;
            return {
              name: item.name,
              sprite: null,
            };
          }
        });

        this.details = await Promise.all(detallesPromesa);
      },
    },
  };
</script>

<style scoped>
  .consumirapi {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 20px;
  }

  .error {
  }
  .containerApi {
    display: flex;
    flex-wrap: wrap;
    background-color: #42b983;
    color: white;
    border-radius: 15px;
    padding-top: 30px;
  }

  a {
    display: inline-block;
    margin: 10px;
    padding: 10px 20px;
    background-color: #42b983;
    color: white;
    border-radius: 5px;
    text-decoration: none;
    border: 0px;
    cursor: pointer;
  }
  a:hover {
    background-color: #358a6b;
  }

  .botonesBusqueda {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
  }
</style>
