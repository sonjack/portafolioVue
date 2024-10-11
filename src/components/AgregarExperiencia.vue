<template>
  <div class="agregarExperiencia">
    <h2>Agregar Experiencia Laboral</h2>
    <form @submit.prevent="submitExperience">
      <input v-model="titulo" placeholder="Cargo" required />
      <input v-model="empresa" placeholder="Empresa" required />
      <input v-model.number="anos" placeholder="Años" type="number" required />
      <textarea
        v-model="descripcion"
        placeholder="Descripción"
        required
      ></textarea>
      <button type="submit">Agregar</button>
    </form>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'AgregarExperiencia',
    data() {
      return {
        titulo: '',
        empresa: '',
        anos: 0,
        descripcion: '',
      };
    },
    computed: {
      ...mapGetters(['getExperienceToEdit']),
      experienceToEdit() {
        return this.getExperienceToEdit;
      },
    },
    watch: {
      experienceToEdit: {
        immediate: true,
        handler(newVal) {
          if (newVal) {
            this.titulo = newVal.titulo;
            this.empresa = newVal.empresa;
            this.anos = newVal.anos;
            this.descripcion = newVal.descripcion;
          }
        },
      },
    },
    methods: {
      ...mapActions(['addUserExperience', 'updateUserExperience']),
      submitExperience() {
        const experience = {
          titulo: this.titulo,
          empresa: this.empresa,
          anos: this.anos,
          descripcion: this.descripcion,
        };
        if (this.experienceToEdit) {
          this.updateUserExperience(experience);
        } else {
          this.addUserExperience(experience);
        }
        this.titulo = '';
        this.empresa = '';
        this.anos = 0;
        this.descripcion = '';
      },
    },
  };
</script>

<style scoped>
  .agregarExperiencia {
    padding: 20px;
  }

  .agregarExperiencia form {
    display: flex;
    flex-direction: column;
  }

  .agregarExperiencia input,
  .agregarExperiencia textarea {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .agregarExperiencia button {
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .agregarExperiencia button:hover {
    background-color: #45a049;
  }
</style>
