<template>
    <div class="header-desktop">
        <div class="header-menu">
            <div>
                <router-link to="/" exact>
                    <img src="@/assets/icons/home_white.svg" alt="home" class="logo"
                /></router-link>
            </div>
            <div class="menu-content-1">
                <ul>
                    <li>
                        <router-link tag="a" to="/Cartridge">Cartouches</router-link>
                    </li>
                    <li>
                        <router-link tag="a" to="/Bar"> Le bar connecté</router-link>
                    </li>
                    <li>
                        <router-link tag="a" to="/Accessoires">Accessoires</router-link>
                    </li>
                </ul>
            </div>
            <div class="menu-content-2">
                <ul>
                    <li>
                        <router-link tag="a" to="/Recevoir">Recevoir</router-link>
                    </li>
                    <li>
                        <router-link tag="a" to="/Food">Food</router-link>
                    </li>
                    <li>
                        <router-link tag="a" to="/Cocktails">Cocktails</router-link>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <a href="#"
                            ><img src="@/assets/icons/search_white.svg" alt="search" class="icon icon-header"
                        /></a>
                    </li>
                    <li>
                        <a href="#"><img src="@/assets/icons/user_white.svg" alt="user" class="icon icon-header"/></a>
                    </li>
                    <li class="basket">
                        <a href="#"
                            ><img src="@/assets/icons/basket_white.svg" alt="basket" class="icon icon-header"
                        /></a>
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
                <router-link to="/" exact>
                    <img src="@/assets/img/logo_white.png" alt="logo" class="logo"
                /></router-link>
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
                    line-height: 19px;
                    color: var(--white);

                    a:active {
                        text-decoration: underline white;
                    }
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
        .logo {
            width: 8vw;
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
    }
}
</style>
