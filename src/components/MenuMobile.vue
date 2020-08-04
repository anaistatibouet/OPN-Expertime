<template>
    <div class="menu">
        <header>
            <router-link to="/" exact> <img src="@/assets/img/logo.png" alt="logo" class="logo"/></router-link>
        </header>
        <main>
            <ul>
                <li class="title-submenu">
                    La boutique
                    <span><img src="@/assets/icons/slash.svg" alt="slash" class="decoration"/></span>
                </li>
                <ul class="content-submenu">
                    <li><a href="#">Cartouches</a></li>
                    <li><a href="#">Le bar connecté</a></li>
                    <li><a href="#">Accessoires</a></li>
                </ul>
            </ul>
            <hr class="separator" />
            <ul>
                <li class="title-submenu">
                    Le Média
                    <span><img src="@/assets/icons/slash.svg" alt="slash" class="decoration"/></span>
                </li>
                <ul class="content-submenu">
                    <li><a href="#">Recevoir</a></li>
                    <li><a href="#">Food</a></li>
                    <li><a href="#">Cocktails</a></li>
                </ul>
            </ul>
        </main>
    </div>
</template>

<script>
export default {
    name: 'MenuMobile',
}
</script>

<style lang="scss" scoped>
.menu {
    position: fixed;
    width: 86vw;
    height: 100vh;
    left: 0;
    top: 0;
    background-color: var(--lighter-gray);
    z-index: 1000;

    animation-duration: 1s;
    animation-name: slideleft;

    @keyframes slideleft {
        from {
            opacity: 1;
            width: 86vw;
        }

        to {
            opacity: 0;
            width: 0;
        }
    }

    header {
        padding: 20px 30px;
        border-bottom: 1px solid var(--light-gray);

        .logo {
            width: 20vw;
        }
    }
    main {
        ul {
            padding: 0;
            min-width: 100vw;

            .title-submenu {
                font-size: 16px;
                line-height: 24px;
                text-transform: uppercase;
                margin-left: 30px;
                min-width: 100vw;

                .decoration {
                    width: 16px;
                    position: relative;
                    top: 8px;
                    left: -5px;
                }
            }

            .content-submenu {
                margin: 10px 30px;
                min-width: 100vw;

                li {
                    margin: 20px 0;
                    min-width: 100vw;

                    a {
                        font-family: Canela, serif;
                        color: var(--darker-gray) !important;
                    }
                }
            }
        }

        hr {
            border: 1px solid var(--light-gray);
            margin: 20px 30px;
        }
    }
}
</style>
