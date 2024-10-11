<template>
  <div class="datosPersonales">
    <h2>Mis Datos Personales</h2>
    <DatoPersonal etiqueta="Nombre" valor="Jackson Fernando Ramirez Ardila" />
    <DatoPersonal etiqueta="Edad" valor="31 años" />
    <DatoPersonal etiqueta="Ubicación" valor="Piedecuesta - Santander" />
    <DatoPersonal etiqueta="Profesión" valor="Desarrollador de Software" />
    <DatoPersonal etiqueta="Experiencia" valor="Más de 10 años" />
    <DatoPersonal etiqueta="Correo" valor="jucker93@gmail.com" />
    <DatoPersonal
      etiqueta="Descripción"
      valor="Desarrollador con gran experiencia en frontend y backend, especializado en Vue.js, Node.js y otras tecnologías."
    />
  </div>
</template>

<script>
  import DatoPersonal from '@/components/DatoPersonal.vue';

  export default {
    name: 'DatosPersonales',
    components: {
      DatoPersonal,
    },
  };
</script>

<style scoped>
  .datosPersonales {
    padding: 20px;
  }
</style>
