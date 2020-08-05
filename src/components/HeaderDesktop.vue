<template>
    <div class="header-desktop">
        <div class="header-menu">
            <div class="return-home">
                <router-link to="/" exact> <img src="@/assets/icons/home_white.svg" alt="home" class="icon icon-header"/></router-link>
            </div>
            <div class="menu-content-1">
                <ul>
                    <li>
                        <a href="#"><router-link to="Bar">Le bar connecté</router-link></a>
                    </li>
                    <li>
                        <a href="#"><router-link to="Cartridge">Cartouches</router-link></a>
                    </li>
                    <li>
                        <a href="#"><router-link to="Accessoires">Accessoires</router-link></a>
                    </li>
                </ul>
            </div>
            <div class="menu-content-2">
                <ul>
                    <li>
                        <a href="#"><router-link to="Recevoir">Recevoir</router-link></a>
                    </li>
                    <li>
                        <a href="#"><router-link to="Food">Food</router-link></a>
                    </li>
                    <li>
                        <a href="#"><router-link to="Cocktails">Cocktails</router-link></a>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <a href="#"><img src="@/assets/icons/search_white.svg" alt="search" class="icon icon-header"/></a>
                    </li>
                    <li>
                        <a href="#"><img src="@/assets/icons/user_white.svg" alt="user" class="icon icon-header"/></a>
                    </li>
                    <li class="basket">
                        <a href="#"><img src="@/assets/icons/basket_white.svg" alt="basket" class="icon icon-header"/></a>
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
            <h1>
                <router-link to="/" exact> <img src="@/assets/img/logo_white.png" alt="logo" class="logo"/></router-link>
            </h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderDesktop',
}
</script>

<style lang="scss" scoped>
.header-desktop {
    .header-menu {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: baseline;
        padding: 15px 30px;

        .return-home {
            .icon-header {
                -webkit-transition: all 0.5s ease-in-out;
                -moz-transition: all 0.5s ease-in-out;
                -o-transition: all 0.5s ease-in-out;
                transition: all 0.5s ease-in-out;
            }
            .icon-header:hover {
                filter: invert(1);
            }
        }

        .menu-content-1 {
            margin-right: 100px;
        }

        .menu-content-2 {
            margin-left: 100px;
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

                    .icon-header {
                        -webkit-transition: all 0.5s ease-in-out;
                        -moz-transition: all 0.5s ease-in-out;
                        -o-transition: all 0.5s ease-in-out;
                        transition: all 0.5s ease-in-out;
                    }

                    .icon-header:hover {
                        filter: invert(1);
                    }
                }
                a:active {
                    text-decoration: underline white;
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
        top: 10px;
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
