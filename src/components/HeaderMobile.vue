<template>
    <div>
        <div class="navbar-mobile mobile-device" v-bind:class="{ changeColor: scrollPosition > 60 }">
            <div class="left">
                <div v-if="scrollPosition < 60">
                    <button v-on:click="displayMenu">
                        <img src="@/assets/icons/menu_white.svg" alt="menu" />
                    </button>
                    <router-link to="/" exact> <img src="@/assets/img/logo_white.png" alt="logo" class="logo"/></router-link>
                </div>
                <div v-else>
                    <button v-on:click="displayMenu"><img src="@/assets/icons/menu.svg" alt="menu" /></button>
                    <router-link to="/" exact> <img src="@/assets/img/logo.png" alt="logo" class="logo"/></router-link>
                </div>
            </div>
            <div class="right">
                <ul v-if="scrollPosition < 60">
                    <li>
                        <a href="#"><img src="@/assets/icons/search_white.svg" alt="search" class="icon icon-header"/></a>
                    </li>
                    <li>
                        <a href="#"><img src="@/assets/icons/user_white.svg" alt="user" class="icon icon-header"/></a>
                    </li>
                    <li>
                        <a href="#"><img src="@/assets/icons/basket_white.svg" alt="basket" class="icon icon-header"/></a>
                        <div>
                            <div class="nb-article">
                                <p>1</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul v-else>
                    <li>
                        <a href="#"><img src="@/assets/icons/search.svg" alt="search" class="icon icon-header"/></a>
                    </li>
                    <li>
                        <a href="#"><img src="@/assets/icons/user.svg" alt="user" class="icon icon-header"/></a>
                    </li>
                    <li>
                        <a href="#"><img src="@/assets/icons/basket.svg" alt="basket" class="icon icon-header"/></a>
                        <div>
                            <div class="nb-article">
                                <p>1</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div v-if="showMenu" class="close-btn">
            <button v-on:click="hideMenu" class="close">
                <img src="@/assets/icons/close.svg" class="icon" alt="Close" />
            </button>
        </div>
        <MenuMobile v-bind:class="{ showMenu: showMenu }" class="menu-mobile" v-if="showMenu" />
    </div>
</template>

<script>
import MenuMobile from '@/components/MenuMobile'

export default {
    name: 'NavbarMobile',
    components: {
        MenuMobile,
    },
    data() {
        return {
            scrollPosition: null,
            showMenu: false,
        }
    },
    methods: {
        // Permet de mettre à jour la position du scroll en vertical
        updateScroll() {
            this.scrollPosition = window.scrollY
        },

        // Fonctions relatives à l'affichage du menu
        displayMenu: function() {
            this.showMenu = true
        },
        hideMenu: function() {
            this.showMenu = false
        },
    },
    mounted() {
        // Permet d'écouter l'évèvement scroll et appliquer la fonction pour mettre à jour la position en scroll Y
        window.addEventListener('scroll', this.updateScroll)
    },
}
</script>

<style lang="scss" scoped>
.changeColor {
    background-color: var(--white) !important;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
}

.menu-mobile {
    font-family: Canela, serif;
}

.showMenu {
    animation-duration: 1s;
    animation-name: slideright;
}

@keyframes slideright {
    from {
        opacity: 0;
        width: 0;
    }

    to {
        opacity: 1;
        width: 86vw;
    }
}

.close-btn {
    position: fixed;
    width: 14vw;
    height: 12vh;
    top: 0;
    right: 0;
    background-color: var(--white);

    animation: moveIn 1s ease-in-out 1;

    img {
        position: absolute;
        left: 10px;
    }
}

@keyframes moveIn {
    0% {
        right: -14vw;
    }
    100% {
        right: 0;
    }
}

.navbar-mobile {
    width: 100vw;
    padding: 15px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    transition: 1s all ease-in-out;

    .left {
        width: 40vw;

        .logo {
            width: 65px;
            margin-left: 20px;
        }
    }

    .right {
        width: 50vw;

        ul {
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: flex-end;
            padding: 0 55px;

            li {
                .nb-article {
                    p {
                        width: 14px;
                        height: 14px;
                        padding: 5px;
                        background-color: var(--dark-gold);
                        color: var(--white);
                        text-align: center;
                        border-radius: var(--border-radius-medium);
                        line-height: 14px;
                        margin-left: 5px;
                    }
                }
            }
        }

        ul > li {
            display: flex;
            flex-direction: row;
            width: 24px;
            margin: 5px;
        }
    }
}
</style>
