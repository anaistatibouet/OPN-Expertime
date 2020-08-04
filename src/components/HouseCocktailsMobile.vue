<template>
    <div class="house-cocktail-mobile">
        <h3>Vos cocktails favoris à réaliser à la maison grâce à l’app Cocktails/Opn !</h3>
        <div class="download-application">
            <img src="../assets/img/badge_googleplay.png" alt="google play" />
            <img src="../assets/img/badge_appstore.png" alt="app store" />
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
    position: relative;
    top: -40px;

    h3 {
        text-align: center;
    }
    .download-application {
        display: flex;
        flex-direction: row nowrap;
        justify-content: space-between;

        img {
            width: 40vw;
        }
    }
}
</style>
