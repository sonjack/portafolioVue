<template>
  <div class="Experiencia">
    <div class="title">
      <h2>Historia Laboral</h2>
    </div>
    <Trabajo
      v-for="(trabajo, index) in trabajos"
      :key="index"
      :trabajo="trabajo"
    />

    <AgregarExperiencia />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Trabajo from '@/components/Trabajo.vue';
  import AgregarExperiencia from '@/components/AgregarExperiencia.vue';

  export default {
    name: 'Experiencia',
    components: {
      Trabajo,
      AgregarExperiencia,
    },
    computed: {
      ...mapGetters(['getExperience', 'getUser']),
      usuario() {
        return this.getUser;
      },
      trabajos() {
        return this.getExperience;
      },
    },
  };
</script>

<style scoped>
  .Experiencia {
    padding: 20px;
    width: 100%;
    position: relative;
  }
  .title h2 {
    background-color: #4caf50;
    width: 300px;
    position: absolute;
    top: 0;
    left: 50%;
    color: white;
    border-radius: 0 0 15px 15px;
    transform: translateX(-50%);
  }
</style>
