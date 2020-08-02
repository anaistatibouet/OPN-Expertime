<template>
    <div id="app">
        <NavbarMobile />
        <router-view />
    </div>
</template>
<script>
import NavbarMobile from '@/components/NavbarMobile.vue'

export default {
    components: {
        NavbarMobile,
    },
    data() {
        return {}
    },
}
</script>

<style lang="scss">
// _____________DECLARATION FONTS_____________
// Titles
@font-face {
    font-family: Styrene;
    src: url('assets/fonts/BurberryStyreneBCyrWebBD-Regular/BurberryStyreneBCyrWebBD-Regular.eot'),
        /* IE9 Compat Modes */
            url('assets/fonts/BurberryStyreneBCyrWebBD-Regular/BurberryStyreneBCyrWebBD-Regular.woff2') format('woff2'),
        /* Super Modern Browsers */
            url('assets/fonts/BurberryStyreneBCyrWebBD-Regular/BurberryStyreneBCyrWebBD-Regular.woff') format('woff'),
        /* Pretty Modern Browsers */
            url('assets/fonts/BurberryStyreneBCyrWebBD-Regular/BurberryStyreneBCyrWebBD-Regular.ttf') format('truetype'); /* Safari, Android, iOS */
}
// Texts, links, etc
@font-face {
    font-family: Canela;
    src: url('assets/fonts/Canela-Regular/Canela-Regular.eot'),
        /* IE9 Compat Modes */ url('assets/fonts/Canela-Regular/Canela-Regular.woff2') format('woff2'),
        /* Super Modern Browsers */ url('assets/fonts/Canela-Regular/Canela-Regular.woff') format('woff'),
        /* Pretty Modern Browsers */ url('assets/fonts/Canela-Regular/Canela-Regular.ttf') format('truetype'); /* Safari, Android, iOS */
}

// _____________MAIN RULES_____________

:root {
    // Colors
    --dark-gold: #dfb57b;
    --darker-gold: #cba36c;
    --white: #ffffff;
    --dark-gray: #8d8e93;
    --darker-gray: #6c6d72;
    --black: #000000;

    --border-radius-large: 24px;
    --border-radius-medium: 15px;
    --border-radius-small: 3px;

    --big-title-text: 44px;
    --medium-title-text: 32px;
    --small-title-text: 24px;

    --big-text: 24px;
    --large-text: 18px;
    --medium-text: 15px;
    --normal-text: 12px;
}

#app {
    font-family: Styrene, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #000000;
}

body {
    margin: 0;
    padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: Canela, Helvetica, Arial, serif;
}

h2 {
    font-size: 32px;
    line-height: 38px;
}

h5 {
    font-size: 18px;
    line-height: 22px;
}

p,
a {
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
}

li {
    list-style-type: none;
}

.bold {
    font-weight: bold;
}

.uppercase {
    text-transform: uppercase;
}

button {
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
}

.icon {
    width: 24px;
    height: 24px;
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
