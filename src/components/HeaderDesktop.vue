<template>
    <div class="header-desktop" v-bind:class="{ changeColorNav: scrollPosition > 60 }">
        <div class="header-menu">
            <div>
                <div class="return-home" v-if="scrollPosition < 60">
                    <a href="#">
                        <img src="@/assets/icons/home_white.svg" alt="home" class="icon icon-header filter" />
                    </a>
                </div>
                <!-- Scroll navbar -->
                <div v-else>
                    <a href="#" @mouseover="hoverHome = true" @mouseleave="hoverHome = false">
                        <img src="@/assets/icons/home_gold.svg" alt="home" class="icon icon-header" v-if="hoverHome" />
                        <img src="@/assets/icons/home.svg" alt="home" class="icon icon-header" v-else />
                    </a>
                </div>
            </div>
            <div class="menu-content-1">
                <ul v-bind:class="{ changeColorMenu: scrollPosition > 60 }">
                    <li>
                        <a href="#"><router-link to="/">Le bar connecté</router-link></a>
                    </li>
                    <li>
                        <a href="#"><router-link to="/">Cartouches</router-link></a>
                    </li>
                    <li>
                        <a href="#"><router-link to="/">Accessoires</router-link></a>
                    </li>
                </ul>
            </div>
            <div class="menu-content-2">
                <ul v-bind:class="{ changeColorMenu: scrollPosition > 60 }">
                    <li>
                        <a href="#"><router-link to="/">Recevoir</router-link></a>
                    </li>
                    <li>
                        <a href="#"><router-link to="/">Food</router-link></a>
                    </li>
                    <li>
                        <a href="#"><router-link to="/">Cocktails</router-link></a>
                    </li>
                </ul>
            </div>
            <div>
                <ul v-if="scrollPosition < 60">
                    <li>
                        <a href="#">
                            <img src="@/assets/icons/search_white.svg" alt="search" class="icon icon-header filter" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="@/assets/icons/user_white.svg" alt="user" class="icon icon-header filter" />
                        </a>
                    </li>
                    <li class="basket">
                        <a href="#">
                            <img src="@/assets/icons/basket_white.svg" alt="basket" class="icon icon-header filter" />
                        </a>
                        <div>
                            <div class="nb-article">
                                <p>1</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <!-- Scroll navbar -->
                <ul v-else>
                    <li @mouseover="hoverSearch = true" @mouseleave="hoverSearch = false">
                        <a href="#">
                            <img src="@/assets/icons/search_gold.svg" alt="search" class="icon icon-header" v-if="hoverSearch" />
                            <img src="@/assets/icons/search.svg" alt="search" class="icon icon-header" v-else />
                        </a>
                    </li>
                    <li @mouseover="hoverUser = true" @mouseleave="hoverUser = false">
                        <a href="#">
                            <img src="@/assets/icons/user_gold.svg" alt="user" class="icon icon-header" v-if="hoverUser" />
                            <img src="@/assets/icons/user.svg" alt="user" class="icon icon-header" v-else />
                        </a>
                    </li>
                    <li class="basket" @mouseover="hoverBasket = true" @mouseleave="hoverBasket = false">
                        <a href="#">
                            <img src="@/assets/icons/basket_gold.svg" alt="basket" class="icon icon-header" v-if="hoverBasket" />
                            <img src="@/assets/icons/basket.svg" alt="basket" class="icon icon-header" v-else />
                        </a>
                        <div>
                            <div class="nb-article">
                                <p>1</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="logo-container">
            <h1 v-if="scrollPosition < 60">
                <router-link to="/" exact> <img src="@/assets/img/logo_white.png" alt="logo" class="logo"/></router-link>
            </h1>
            <h1 v-else>
                <router-link to="/" exact> <img src="@/assets/img/logo.png" alt="logo" class="logo"/></router-link>
            </h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderDesktop',
    data() {
        return {
            scrollPosition: null,
            hoverHome: false,
            hoverSearch: false,
            hoverUser: false,
            hoverBasket: false,
        }
    },
    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY
        },
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll)
    },
}
</script>

<style lang="scss" scoped>
.changeColorNav {
    background-color: var(--white) !important;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
}

.header-desktop {
    .header-menu {
        width: 100vw;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        padding: 15px 30px;

        .return-home {
            cursor: pointer;
            .icon-header.filter {
                -webkit-transition: all 0.2s ease-in-out;
                -moz-transition: all 0.2s ease-in-out;
                -o-transition: all 0.2s ease-in-out;
                transition: all 0.2s ease-in-out;
            }
            .icon-header.filter:hover {
                filter: invert(1);
            }
        }

        .menu-content-1 {
            margin-right: 100px;
        }

        .menu-content-2 {
            margin-left: 100px;
        }

        .changeColorMenu {
            a {
                color: var(--black);
            }

            a:hover {
                color: var(--darker-gold);
            }
        }

        ul {
            display: flex;
            flex-flow: row nowrap;

            li {
                margin: 0 10px;
                a {
                    font-family: Canela;
                    font-size: 16px;
                    color: var(--white);

                    -webkit-transition: all 0.5s ease-in-out;
                    -moz-transition: all 0.5s ease-in-out;
                    -o-transition: all 0.5s ease-in-out;
                    transition: all 0.5s ease-in-out;

                    .icon-header.filter {
                        -webkit-transition: all 0.5s ease-in-out;
                        -moz-transition: all 0.5s ease-in-out;
                        -o-transition: all 0.5s ease-in-out;
                        transition: all 0.5s ease-in-out;
                    }

                    .icon-header.filter:hover {
                        filter: invert(1);
                    }
                }
                a:active {
                    text-decoration: underline black;
                }

                a:hover {
                    color: var(--black);
                }
            }

            .basket {
                display: flex;
                flex-flow: row nowrap;

                .nb-article {
                    p {
                        width: 14px;
                        height: 14px;
                        padding: 5px;
                        color: var(--dark-gold);
                        background-color: var(--white);
                        text-align: center;
                        border-radius: var(--border-radius-medium);
                        line-height: 14px;
                        margin-left: 5px;
                    }
                }
            }
        }
    }

    .logo-container {
        position: absolute;
        top: 0;
        width: 100vw;
        margin: 0 auto;
        z-index: -1;

        .logo {
            width: 8vw;
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
    }
}
</style>
