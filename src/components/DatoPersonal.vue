<template>
  <div class="datosPersonal">
    <p>
      <strong>{{ etiqueta }}:</strong> {{ valor }}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'DatoPersonal',
    props: {
      etiqueta: {
        type: String,
        required: true,
      },
      valor: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style scoped>
  .datosPersonal {
    margin-bottom: 10px;
  }
</style>
