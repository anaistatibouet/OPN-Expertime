<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
// _____________DECLARATIONS FONTS_____________
// Titres
@font-face {
  font-family: Styrene;
  src: url('assets/fonts/BurberryStyreneBCyrWebBD-Regular/BurberryStyreneBCyrWebBD-Regular.eot'),
    /* IE9 Compat Modes */ url('assets/fonts/BurberryStyreneBCyrWebBD-Regular/BurberryStyreneBCyrWebBD-Regular.woff2')
      format('woff2'),
    /* Super Modern Browsers */
      url('assets/fonts/BurberryStyreneBCyrWebBD-Regular/BurberryStyreneBCyrWebBD-Regular.woff') format('woff'),
    /* Pretty Modern Browsers */
      url('assets/fonts/BurberryStyreneBCyrWebBD-Regular/BurberryStyreneBCyrWebBD-Regular.ttf') format('truetype'); /* Safari, Android, iOS */
}
// Paragraphes, liens
@font-face {
  font-family: Canela;
  src: url('assets/fonts/Canela-Regular/Canela-Regular.eot'),
    /* IE9 Compat Modes */ url('assets/fonts/Canela-Regular/Canela-Regular.woff2') format('woff2'),
    /* Super Modern Browsers */ url('assets/fonts/Canela-Regular/Canela-Regular.woff') format('woff'),
    /* Pretty Modern Browsers */ url('assets/fonts/Canela-Regular/Canela-Regular.ttf') format('truetype'); /* Safari, Android, iOS */
}

// _____________RÈGLES GÉNÉRALES_____________
#app {
  font-family: Styrene, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: Canela, Helvetica, Arial, serif;
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
