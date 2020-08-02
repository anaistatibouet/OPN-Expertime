<template>
    <div class="navbar-mobile">
        <div class="left">
            <button>
                <img src="../assets/icons/menu.svg" alt="menu" />
            </button>
            <router-link to="/" exact> <img src="../assets/img/logo.png" alt="logo" class="logo"/></router-link>
        </div>
        <div class="right">
            <ul>
                <li>
                    <a href="#"><img src="../assets/icons/search.svg" alt="search" class="icon"/></a>
                </li>
                <li>
                    <a href="#"><img src="../assets/icons/user.svg" alt="user" class="icon"/></a>
                </li>
                <li>
                    <a href="#"><img src="../assets/icons/basket.svg" alt="basket" class="icon"/></a>
                </li>
                <li>
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
    padding: 15px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    .left {
        width: 40vw;
        .logo {
            width: 65px;
            margin-left: 20px;
        }
    }

    .right {
        width: 60vw;

        ul {
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: flex-end;
        }

        ul > li {
            width: 24px;
            margin: 3%;
        }

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
            }
        }
    }
}

@media screen and (min-width: 1024px) {
    .navbar-mobile {
        display: none;
    }
}
</style>
