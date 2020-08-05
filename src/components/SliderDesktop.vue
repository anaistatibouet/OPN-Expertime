<template>
    <div class="slider-desktop">
        <h2>Vos cocktails favoris à réaliser à la maison grâce à l’app Cocktails/Opn !</h2>
        <div class="navslider">
            <ul>
                <li>Des idées selon vos envies</li>
                <li>Des recommandations personnalisées</li>
                <li>+ 300 recettes exclusives</li>
                <li>Des recettes pas à pas</li>
            </ul>
        </div>
        <div class="slider">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SliderDesktop',
}
</script>

<style lang="scss" scoped>
.slider-desktop {
    background-color: var(--lighter-gray);
    padding: 50px;

    h2 {
        text-align: center;
    }

    .navslider {
        border-bottom: 1px solid var(--light-gray);

        ul {
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            padding: 0;

            li:first-child {
                margin-left: 0;
            }

            li {
                margin-left: 20px;
                color: var(--darker-gray);
            }
        }
    }

    .slider {
        padding: 50px;
    }
}
</style>
