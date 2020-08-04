<template>
    <div id="app">
        <div class="mobile-device">
            <NavbarMobile class="navbar-mobile" />
            <MenuMobile />
        </div>
        <div class="desktop-device"></div>
        <router-view />
    </div>
</template>
<script>
import NavbarMobile from '@/components/NavbarMobile.vue'
import MenuMobile from '@/components/MenuMobile'

export default {
    components: {
        NavbarMobile,
        MenuMobile,
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
    src: 
        /* IE9 Compat Modes */ url('assets/fonts/BurberryStyreneBCyrWebBD-Regular/BurberryStyreneBCyrWebBD-Regular.woff2')
            format('woff2'),
        /* Super Modern Browsers */
            url('assets/fonts/BurberryStyreneBCyrWebBD-Regular/BurberryStyreneBCyrWebBD-Regular.woff') format('woff'),
        /* Pretty Modern Browsers */
            url('assets/fonts/BurberryStyreneBCyrWebBD-Regular/BurberryStyreneBCyrWebBD-Regular.ttf') format('truetype'); /* Safari, Android, iOS */
}
// Texts, links, etc
@font-face {
    font-family: Canela;
    src: 
        /* IE9 Compat Modes */ url('assets/fonts/Canela-Regular/Canela-Regular.woff2') format('woff2'),
        /* Super Modern Browsers */ url('assets/fonts/Canela-Regular/Canela-Regular.woff') format('woff'),
        /* Pretty Modern Browsers */ url('assets/fonts/Canela-Regular/Canela-Regular.ttf') format('truetype'); /* Safari, Android, iOS */
}

// _____________MAIN RULES_____________

:root {
    // Colors
    --gold: #e4c291;
    --dark-gold: #dfb57b;
    --darker-gold: #cba36c;
    --white: #ffffff;
    --light-gray: #e2e2e5;
    --lighter-gray: #f5f6f6;
    --dark-gray: #8d8e93;
    --darker-gray: #6c6d72;
    --black: #231f10;

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
    color: #231f10;

    .mobile-device {
        .navbar-mobile {
            overflow: hidden;
            position: fixed;
            top: 0;
            z-index: 1000;
        }
    }
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

h3 {
    font-size: 24px;
    line-height: 29px;
}

h4 {
    font-size: 16px;
    line-height: 24px;
}

h5 {
    font-size: 18px;
    line-height: 22px;
}

h6 {
    font-size: 16px;
    line-height: 19px;
}

p,
a {
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
    color: black;
}

li {
    list-style-type: none;
}

button {
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
}

.bold {
    font-weight: bold;
}

.uppercase {
    text-transform: uppercase;
}

.icon {
    width: 24px;
    height: 24px;
}
.slash {
    position: relative;
    left: 45vw;
    bottom: 18px;
    z-index: 20;
    content: url('assets/icons/slash.svg');
}

.link {
    text-align: center;
    margin-bottom: 40px;

    a {
        width: 90vw;
        border-radius: 20px;
        border: 1px solid var(--black);
    }
}

@media screen and (min-width: 1024px) {
    .mobile-device {
        display: none;
    }
}

@media screen and (max-width: 1024px) {
    .desktop-device {
        display: none;
    }
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
