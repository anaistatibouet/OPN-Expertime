<template>
    <div class="slider-desktop">
        <h2>Vos cocktails favoris à réaliser à la maison grâce à l’app Cocktails/Opn !</h2>
        <div class="navslider">
            <ul>
                <li v-bind:class="{ active: currentTitle == titles[0] }">Des idées selon vos envies</li>
                <li v-bind:class="{ active: currentTitle == titles[1] }">Des recommandations personnalisées</li>
                <li v-bind:class="{ active: currentTitle == titles[2] }">+ 300 recettes exclusives</li>
                <li v-bind:class="{ active: currentTitle == titles[3] }">Des recettes pas à pas</li>
            </ul>
        </div>
        <div class="slider">
            <button id="prev" @click="prev" @mouseover="hoverPrevious = true" @mouseleave="hoverPrevious = false">
                <img v-if="hoverPrevious" src="@/assets/icons/arrow_left_gold.svg" alt="Previous" class="icon" />
                <img v-else src="@/assets/icons/arrow_left.svg" alt="Previous" class="icon" />
            </button>
            <div class="content-slider">
                <div v-for="i in [currentIndex]" :key="i">
                    <div class="content-text">
                        <h4>{{ currentTitle }}</h4>
                        <p>{{ currentDescription }}</p>
                        <div class="download-application">
                            <a href="#"><img src="@/assets/img/badge_googleplay.png" alt="Download google play"/></a>
                            <a href="#"><img src="@/assets/img/badge_appstore.png" alt="Download app store"/></a>
                        </div>
                    </div>
                </div>
                <div class="content-img">
                    <a href="#"></a> <img src="@/assets/img/desktop_idea.jpg" alt="Cocktail background" /> <a href="#"></a>
                    <img src="@/assets/img/mobile.png" alt="mobile" class="mobile-background" />
                </div>
            </div>
            <button id="next" @click="next" @mouseover="hoverNext = true" @mouseleave="hoverNext = false">
                <img v-if="hoverNext" src="@/assets/icons/arrow_right_gold.svg" alt="Next" class="icon" />
                <img v-else src="@/assets/icons/arrow_right.svg" alt="Next" class="icon" />
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SliderDesktop',
    data() {
        return {
            titles: [
                'Trouvez les cocktails réalisables avec les ingredients disponibles chez vous',
                'Des recommandations personnalisées',
                '+ 300 recettes exclusives ',
                'Des recettes pas à pas',
            ],
            descriptions: [
                'Nous nous sommes tous déjà retrouvés à la maison avec l’envie de prendre un verre sans la motivation pour faire des courses. Avec la fonctionnalité « Frigo », il suffit de rentrer les ingrédients disponibles chez vous et l’application vous trouvera tous les cocktails réalisables sans sortir de chez vous ! Pour aller plus loin, l’app vous recommandera aussi les ingrédients qui vous manquent pour débloquer toujours plus de recettes.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum exercitationem officiis dicta, illum est dignissimos repellendus, autem labore delectus expedita atque id soluta laboriosam quisquam veritatis nihil. Asperiores, reiciendis possimus.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum exercitationem officiis dicta, illum est dignissimos repellendus, autem labore delectus expedita atque id soluta laboriosam quisquam veritatis nihil. Asperiores, reiciendis possimus.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum exercitationem officiis dicta, illum est dignissimos repellendus, autem labore delectus expedita atque id soluta laboriosam quisquam veritatis nihil. Asperiores, reiciendis possimus.',
            ],
            currentIndex: 0,
            hoverPrevious: false,
            hoverNext: false,
        }
    },

    methods: {
        // Permet de décrémenter l'index au click du bouton Previous
        prev: function() {
            this.currentIndex -= 1
        },
        // Permet d'incrémenter l'index au click du bouton Next
        next: function() {
            this.currentIndex += 1
        },
    },

    computed: {
        // Fonctions qui permettent de changer le titre et la description.
        // Déclenchement au click des boutons Previous et Next
        currentTitle: function() {
            return this.titles[Math.abs(this.currentIndex) % this.titles.length]
        },
        currentDescription: function() {
            return this.descriptions[Math.abs(this.currentIndex) % this.descriptions.length]
        },
    },
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
            margin: 0;

            li:first-child {
                margin-left: 0;
            }

            li {
                padding-bottom: 10px;
                margin-left: 20px;
                color: var(--darker-gray);
                transition: all 0.5 ease;
            }

            .active {
                border-bottom: 3px solid var(--gold);
            }
        }
    }

    .slider {
        padding: 50px;
        display: flex;
        justify-content: center;

        .content-slider {
            cursor: pointer;
            margin: 0;
            position: relative;
            width: 60vw;
            background-color: #fff;

            -webkit-transform: scale(1);
            transform: scale(1);
            -webkit-transition: 0.1s ease-in-out;
            transition: 0.1s ease-in-out;

            .content-text {
                position: absolute;
                top: 10px;
                right: 30px;
                width: 35vw;
                z-index: 20;

                h4 {
                    margin-bottom: 10px;
                }

                p {
                    font-size: 15px;
                    color: var(--darker-gray);
                }

                .download-application > a img {
                    width: 10vw;
                    margin: 20px 10px 20px 0;
                }
            }

            .mobile-background {
                position: absolute;
                left: 50px;
                top: -20px;
            }
        }

        .content-slider:hover {
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
        }

        #prev,
        #next {
            position: relative;
            z-index: 20;
            transition: all 0.2s ease-in-out;
            cursor: pointer;
            img {
                width: 50px;
                height: 50px;
            }
        }

        #prev {
            left: 20px;
        }

        #next {
            right: 20px;
        }
    }
}
</style>
