import { createStore } from 'vuex';

const store = createStore({
  state: {
    usuario: {
      nombre: 'Jackson',
      experiencia: [
        {
          titulo: 'Desarrollador',
          empresa: 'Coraltech',
          anos: 1,
          descripcion:
            'Dar mantenimientos RPA a automatización que ya se encuentran en producción en diferentes clientes, adicionalmente desarrollar mediante tecnologías com o Python, selenim automatizaciones',
        },
        {
          titulo: 'Analista RPA',
          empresa: 'Enterdev',
          anos: 3,
          descripcion:
            'como Analista RPA, me encargué del mantenimiento y modificación de automatizaciones existentes, adaptándolas a las especificaciones del cliente (Bancolombia). También desarrollé nuevas automatizaciones desde cero, elaboré documentación técnica detallada y colaboré en el análisis de requisitos para la creación de procesos automatizados, garantizando que las soluciones fueran eficaces y cumplieran con las necesidades del cliente',
        },
        {
          titulo: 'Programador júnior',
          empresa: 'Systemico',
          anos: 1,
          descripcion:
            'Desarrollador full stack, con lenguajes com laravel, vue.js, react, javascript, php',
        },
        {
          titulo: 'Líder de desarrollo, innovación e investigacion',
          empresa: 'Alianza Diagnostica S.A',
          anos: 5,
          descripcion:
            'Analista, Programador, Diseñador y Soporte a Usuario Actualmente con 13 Proyectos realizados en la empresa',
        },
      ],
    },
    experienciaToEdit: null,
  },
  mutations: {
    setUser(state, user) {
      state.usuario = user;
    },
    addExperience(state, experiencia) {
      state.usuario.experiencia.push(experiencia);
    },
    setExperienceToEdit(state, experiencia) {
      state.experienciaToEdit = experiencia;
    },
    updateExperience(state, experiencia) {
      const index = state.usuario.experiencia.findIndex(
        (exp) => exp.empresa === experiencia.empresa
      );
      if (index !== -1) {
        state.usuario.experiencia.splice(index, 1, experiencia);
      }
      state.experienciaToEdit = null;
    },
  },
  actions: {
    updateUser({ commit }, user) {
      commit('setUser', user);
    },
    addUserExperience({ commit }, experiencia) {
      commit('addExperience', experiencia);
    },
    setExperienceToEdit({ commit }, experiencia) {
      commit('setExperienceToEdit', experiencia);
    },
    updateUserExperience({ commit }, experiencia) {
      commit('updateExperience', experiencia);
    },
  },
  getters: {
    getUser(state) {
      return state.usuario;
    },
    getExperience(state) {
      return state.usuario.experiencia;
    },
    getExperienceToEdit(state) {
      return state.experienciaToEdit;
    },
  },
});

export default store;
