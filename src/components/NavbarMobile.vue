<template>
    <div class="navbar-mobile mobile-device">
        <div class="left">
            <button><img src="../assets/icons/menu_white.svg" alt="menu" /></button>
            <router-link to="/" exact> <img src="../assets/img/logo_white.png" alt="logo" class="logo"/></router-link>
        </div>
        <div class="right">
            <ul>
                <li>
                    <a href="#"><img src="../assets/icons/search_white.svg" alt="search" class="icon icon-header"/></a>
                </li>
                <li>
                    <a href="#"><img src="../assets/icons/user_white.svg" alt="user" class="icon icon-header"/></a>
                </li>
                <li>
                    <a href="#"><img src="../assets/icons/basket_white.svg" alt="basket" class="icon icon-header"/></a>
                    <div class="nb-article">
                        <p>1</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavbarMobile',
}
</script>

<style lang="scss" scoped>
.navbar-mobile {
    width: 100vw;
    padding: 15px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    // .testimage {
    //     filter: invert(1);
    // }

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
