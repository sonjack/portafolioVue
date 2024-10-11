<template>
  <div class="portafolio">
    <div class="geometrical-shape"></div>

    <div class="perfil">
      <img src="/fotoJack.jpg" alt="Mi foto" class="foto-perfil" />
    </div>

    <h1>Bienvenido a mi portafolio</h1>
    <p>
      Soy Jackson, un desarrollador con más de 10 años de experiencia en
      tecnologías como Vue.js, Node.js, Python, entre otras.
    </p>
    <p>
      Esta página está diseñada utilizando <strong>Vue.js</strong>, junto con
      Vuex para la gestión de estado con la ayuda de un formulario para cambiar
      estos estados en la seccion de historia laboral para que lo puedan probar
      y Vue Router para la navegación, ademas de usar axios para la consulta de
      api. A continuación, algunos fragmentos de código que hemos utilizado y el
      funcionamiento de la api.
    </p>

    <p>
      Tuve la oportunidad de trabajar con Vue.js en el desarrollo de un
      aplicativo administrativo para Cotrasur, una empresa de transporte. Este
      sistema permitió la gestión integral de conductores, vehículos y rutas.
      Entre sus funcionalidades, se incluían el registro y verificación de
      documentación, alertas, y la asignación detallada de rutas a los vehículos
      de carga. Gracias a este proyecto, se optimizó la operación logística de
      la empresa, mejorando el control y seguimiento de sus procesos.
    </p>

    <h2>Fragmentos de código</h2>
    <div class="code-snippet">
      <h3>Ejemplo de Vuex Store</h3>
      <pre><code>
        export default {
          state: {
            experience: [],
            user: {}
          },
          mutations: {
            setUser(state, user) {
              state.user = user;
            },
            setExperience(state, experience) {
              state.experience = experience;
            }
          },
          actions: {
            fetchUser({ commit }) {
              
            }
          },
          getters: {
            getUser: state => state.user,
            getExperience: state => state.experience
          }
        };
      </code></pre>
    </div>

    <div class="code-snippet">
      <h3>Ejemplo de router</h3>
      <pre><code>
        import { createRouter, createWebHistory } from 'vue-router';

        const routes = [
          {
            path: '/',
            name: 'MiPortafolio',
            component: () => import('@/views/MiPortafolio.vue'), 
          },
          {
            path: '/HistoriaLaboral',
            name: 'HistoriaLaboral',
            component: () => import('@/views/Experiencia.vue'), 
          },
          {
            path: '/DatosPersonales',
            name: 'DatosPersonales',
            component: () => import('@/views/DatosPersonales.vue'), 
          },
        ];

        const router = createRouter({
          history: createWebHistory(), 
          routes,
          scrollBehavior(to, from, savedPosition) {
            if (savedPosition) {
              return savedPosition;
            } else {
              return { top: 0 }; 
            }
          },
        });

        export default router;

      </code></pre>
    </div>

    <div class="code-snippet">
      <h3>Archivo store</h3>
      <pre><code>
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
                    descripcion: 'Dar mantenimientos RPA a automatización que ya se encuentran en producción en diferentes clientes, adicionalmente desarrollar mediante tecnologías com o Python, selenim automatizaciones' 
                },
                { 
                    titulo: 'Analista RPA', 
                    empresa: 'Enterdev', 
                    anos: 3, 
                    descripcion: 'como Analista RPA, me encargué del mantenimiento y modificación de automatizaciones existentes, adaptándolas a las especificaciones del cliente (Bancolombia). También desarrollé nuevas automatizaciones desde cero, elaboré documentación técnica detallada y colaboré en el análisis de requisitos para la creación de procesos automatizados, garantizando que las soluciones fueran eficaces y cumplieran con las necesidades del cliente' 
                },
                { 
                    titulo: 'Programador júnior', 
                    empresa: 'Systemico',
                    anos: 1, 
                    descripcion: 'Desarrollador full stack, con lenguajes com laravel, vue.js, react, javascript, php' 
                },
                { 
                    titulo: 'Líder de desarrollo, innovación e investigacion', 
                    empresa: 'Alianza Diagnostica S.A', 
                    anos: 5, 
                    descripcion: 'Analista, Programador, Diseñador y Soporte a Usuario Actualmente con 13 Proyectos realizados en la empresa' 
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
              const index = state.usuario.experiencia.findIndex(exp => exp.empresa === experiencia.empresa);
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

      

      </code></pre>
    </div>

    <div class="code-snippet">
      <h3>Componente de Trabajo</h3>
      <pre><code>
      &lt;template&gt;
        &lt;div class="Trabajo"&gt;
          &lt;div v-if="trabajo.empresa == 'Enterdev'?true:trabajo.empresa == 'Alianza Diagnostica S.A'?true:false " &gt;
            &lt;img  :src="'/'+trabajo.empresa+'.png'" alt="Foto Empresa"  class="fotoEmpresaBasic"/&gt;
          &lt;/div&gt;
          &lt;div v-else class="empresa"&gt;
            &lt;img  :src="'/'+trabajo.empresa+'.png'" alt="Foto Empresa" class="fotoEmpresa" /&gt;
          &lt;/div&gt;
          &lt;div class="info"&gt;
            &lt;h2&gt;{ trabajo.empresa }&lt;/h2&gt;
            &lt;hr&gt;
            &lt;h3&gt;{ trabajo.titulo }&lt;/h3&gt;
            
            &lt;p class="descripcion"&gt;{ trabajo.descripcion }&lt;/p&gt;
            &lt;p&gt;&lt;strong&gt;Años de experiencia:&lt;/strong&gt; { trabajo.anos }&lt;/p&gt;
            &lt;button @click="editarExperiencia"&gt;Editar&lt;/button&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/template&gt;
      </code></pre>
    </div>

    <h2>Consumo de API</h2>
    <p>
      A continuacion encontrara el funcionamiento de consumo de una api,
      paginacion de esta misma y organizaciond de los datos, ademas se mostrara
      el codigo del componente usado
    </p>
    <ConsumirApi />

    <div class="code-snippet">
      <h3>Consumo de api</h3>
      <pre><code>
        &lt;template&gt;
          &lt;div class="consumirapi"&gt;
            &lt;h2&gt;Listado de pokemones&lt;/h2&gt;
            &lt;div class="botonesBusqueda"&gt;
              &lt;a v-if="previous" @click="fetchData(1)"&gt;<&lt;/a&gt;
              &lt;a @click="fetchData(3)"&gt;Cargar Datos&lt;/a&gt;
              &lt;a v-if="next" @click="fetchData(2)"&gt;>&lt;/a&gt;
            &lt;/div&gt;
            &lt;div v-if="loading"&gt;Cargando...&lt;/div&gt;
            &lt;div v-if="!loading && details.length" class="containerApi"&gt;
              &lt;span v-for="item in details" :key="item.id"&gt;
                &lt;h4&gt;{ item.name }&lt;/h4&gt;
                &lt;img :src="item.sprite" /&gt;
              &lt;/span&gt;
            &lt;/div&gt;
            &lt;div v-if="error" class="error"&gt;{ error }&lt;/div&gt;
          &lt;/div&gt;
        &lt;/template&gt;

        &lt;script&gt;
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
                const detallesPromesa = this.data.map(async (item) =&gt; {
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
        &lt;/script&gt;

      </code></pre>
    </div>

    <p>
      Aquí podrás encontrar información sobre mi historia laboral y mis datos
      personales.
    </p>
    <router-link to="/HistoriaLaboral">Ver mi historia laboral</router-link>
    <router-link to="/DatosPersonales">Ver mis datos personales</router-link>
  </div>
</template>

<script>
  import ConsumirApi from '@/components/ConsumirApi.vue';
  export default {
    name: 'MiPortafolio',
    components: {
      ConsumirApi,
    },
  };
</script>

<style scoped>
  .geometrical-shape {
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 50px;
    background-color: #4caf50;
    clip-path: polygon(0 0, 100% 0, 100% 100%);
  }

  .portafolio {
    position: relative;
    text-align: center;
    padding: 20px;
  }

  .portafolio p {
    margin-bottom: 20px;
  }

  .portafolio a {
    display: inline-block;
    margin: 10px;
    padding: 10px 20px;
    background-color: #42b983;
    color: white;
    text-decoration: none;
    border-radius: 5px;
  }

  .portafolio a:hover {
    background-color: #358a6b;
  }

  .foto-perfil {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
  }

  .code-snippet {
    background-color: #f4f4f4;
    padding: 10px;
    margin-top: 20px;
    border-radius: 5px;
  }

  pre {
    background-color: #272822;
    color: #f8f8f2;
    padding: 15px;
    border-radius: 5px;
    overflow-x: auto;
    text-align: left;
  }

  code {
    font-family: 'Courier New', Courier, monospace;
    font-size: 14px;
  }
</style>
