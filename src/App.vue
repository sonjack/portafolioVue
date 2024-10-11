<template>
  <div id="container">
    <header>
      <nav>
        <h1>Mi Portafolio</h1>
        <button class="hamburger" @click="toggleMenu">☰</button>
        <ul :class="{ 'show-menu': menuVisible }">
          <router-link to="/">Inicio</router-link>
          <router-link to="/HistoriaLaboral">Historia Laboral</router-link>
          <router-link to="/DatosPersonales">Datos Personales</router-link>
        </ul>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        menuVisible: false,
      };
    },
    methods: {
      toggleMenu() {
        this.menuVisible = !this.menuVisible;
      },
    },
  };
</script>

<style>
  #container {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgb(62, 85, 184);
    padding: 10px 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 10;
    height: 60px;
    color: white;
    font-size: x-large;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 20px;
  }

  h1 {
    margin: 0;
  }

  nav ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;
    margin: 0;
    height: 60px;
  }

  nav li {
    margin: 0 15px;
  }

  nav a {
    text-decoration: none;
    color: #ffffff;
    padding: 10px;
    align-content: center;
  }
  nav a:hover {
    background-color: #221c7e;
  }

  .hamburger {
    display: none;
    background: none;
    border: none;
    font-size: 30px;
    cursor: pointer;
    color: white;
  }
  @media (max-width: 750px) {
    nav ul {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 100%;
      right: 0;
      width: 200px;
      height: auto;
      background: rgb(45, 63, 143);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      font-size: medium;
    }

    nav ul.show-menu {
      display: flex;
    }

    .hamburger {
      display: block;
    }
  }

  main {
    margin-top: 80px;
  }
</style>
