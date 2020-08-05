<template>
    <div class="house-cocktail-mobile">
        <h3>Vos cocktails favoris à réaliser à la maison grâce à l’app Cocktails/Opn !</h3>
        <div class="download-application">
            <a href="#"><img src="@/assets/img/badge_googleplay.png" alt="google play"/></a>
            <a href="#"><img src="@/assets/img/badge_appstore.png" alt="app store" /> </a>
        </div>
        <WrapperMobile />
    </div>
</template>

<script>
import WrapperMobile from '@/components/WrapperMobile'
export default {
    name: 'HouseCocktailsMobile',
    components: {
        WrapperMobile,
    },
}
</script>

<style lang="scss" scoped>
.house-cocktail-mobile {
    background-color: var(--lighter-gray);
    padding: 30px 20px;

    h3 {
        text-align: center;
    }
    .download-application {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;

        img {
            width: 40vw;
        }
    }

    @media only screen and (min-width: 720px) and (max-width: 1023px) {
        .download-application {
            justify-content: center;
            img {
                width: 25vw;
                margin: 25px;
            }
        }
    }
}
</style>
