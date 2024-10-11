<template>
  <div class="Trabajo">
    <div
      v-if="
        trabajo.empresa == 'Enterdev'
          ? true
          : trabajo.empresa == 'Alianza Diagnostica S.A'
          ? true
          : false
      "
    >
      <img
        :src="'/' + trabajo.empresa + '.png'"
        alt="Foto Empresa"
        class="fotoEmpresaBasic"
      />
    </div>
    <div v-else class="empresa">
      <img
        :src="'/' + trabajo.empresa + '.png'"
        alt="Foto Empresa"
        class="fotoEmpresa"
      />
    </div>
    <div class="info">
      <h2>{{ trabajo.empresa }}</h2>
      <hr />
      <h3>{{ trabajo.titulo }}</h3>

      <p class="descripcion">{{ trabajo.descripcion }}</p>
      <p><strong>Años de experiencia:</strong> {{ trabajo.anos }}</p>
      <button @click="editarExperiencia">Editar</button>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  export default {
    name: 'Trabajo',
    props: {
      trabajo: {
        type: Object,
        required: true,
      },
    },
    methods: {
      ...mapActions(['setExperienceToEdit']),
      editarExperiencia() {
        this.setExperienceToEdit(this.trabajo);
      },
    },
  };
</script>

<style scoped>
  .Trabajo {
    margin-bottom: 20px;
    margin: 5px;
    border-radius: 10px;
    flex: content;
    flex-direction: column;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
  }
  h2 {
    color: green;
  }

  h4 {
    font-weight: bold;
  }
  .empresa {
    background: #ececec;
  }

  .descripcion {
    padding: 15px;
    text-align: justify;
  }

  button {
    margin-top: 10px;
    padding: 5px 10px;
    background-color: #2196f3;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #1976d2;
  }

  .fotoEmpresa {
    width: 100%;
    height: 250px;
    object-fit: fill;
    border-radius: 20px 20px 0 0;

    margin-left: auto;
    margin-right: auto;
  }
  .fotoEmpresaBasic {
    width: 250px;
    height: 250px;
    border-radius: 20px 20px 0 0;
    object-fit: cover;
    margin-left: auto;
    margin-right: auto;
  }

  .effect1 {
    width: 100%;
    height: 30px;
    background: linear-gradient(to bottom, #ffffff 0%, #000000 100%);
  }

  .info {
    background: #ececec;
  }
</style>
