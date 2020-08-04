<template>
    <div class="wrapper-mobile">
        <section>
            <article>
                <header>
                    <p class="title-wrap" v-bind:class="{ changeColor: showFirstElement }">
                        Des idées selon vos envies
                    </p>
                    <img
                        v-if="showFirstElement"
                        src="@/assets/icons/minus.svg"
                        alt="moins"
                        v-bind:class="{ active: showFirstElement }"
                        v-on:click="WrapFirstElement"
                    />
                    <img
                        v-else
                        src="@/assets/icons/plus.svg"
                        alt="moins"
                        v-bind:class="{ active: showFirstElement }"
                        v-on:click="WrapFirstElement"
                    />
                </header>
                <main v-if="showFirstElement" v-bind:class="{ showContent: showFirstElement }">
                    <div class="illustration">
                        <img src="@/assets/img/mobile_idea.jpg" alt="image cocktail" class="cocktail" />
                        <img src="@/assets/img/mobile.png" alt="mobile" class="mobile" />
                    </div>
                    <div class="content-text">
                        <h4>
                            Trouvez les cocktails<br />réalisables<br />avec les ingredients<br />disponibles chez vous
                        </h4>
                        <p>
                            Nous nous sommes tous déjà retrouvés à la maison avec l’envie de prendre un verre sans la
                            motivation pour faire des courses. Avec la fonctionnalité « Frigo », il suffit de rentrer
                            les ingrédients disponibles chez vous et l’application vous trouvera tous les cocktails
                            réalisables sans sortir de chez vous ! Pour aller plus loin, l’app vous recommandera aussi
                            les ingrédients qui vous manquent pour débloquer toujours plus de recettes.
                        </p>
                    </div>
                </main>
            </article>
            <article>
                <header>
                    <p class="title-wrap" v-bind:class="{ changeColor: showSecondElement }">
                        Des recommandations personnalisées
                    </p>
                    <img
                        v-if="showSecondElement"
                        src="@/assets/icons/minus.svg"
                        alt="moins"
                        v-bind:class="{ active: showSecondElement }"
                        v-on:click="WrapSecondElement"
                    />
                    <img
                        v-else
                        src="@/assets/icons/plus.svg"
                        alt="moins"
                        v-bind:class="{ active: showSecondElement }"
                        v-on:click="WrapSecondElement"
                    />
                </header>
                <main v-if="showSecondElement" v-bind:class="{ showContent: showSecondElement }">
                    <div class="illustration">
                        <img src="@/assets/img/mobile_idea.jpg" alt="image cocktail" class="cocktail" />
                        <img src="@/assets/img/mobile.png" alt="mobile" class="mobile" />
                    </div>
                    <div class="content-text">
                        <h4>
                            Title article
                        </h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eius aliquid repudiandae
                            dolorem, dolore placeat at dolor. Unde, perspiciatis inventore. Minima pariatur vero officia
                            eos dolorem nam sit excepturi debitis.
                        </p>
                    </div>
                </main>
            </article>
            <article>
                <header>
                    <p class="title-wrap" v-bind:class="{ changeColor: showThridElement }">+ 300 recettes exclusives</p>
                    <img
                        v-if="showThridElement"
                        src="@/assets/icons/minus.svg"
                        alt="moins"
                        v-bind:class="{ active: showThridElement }"
                        v-on:click="WrapThridElement"
                    />
                    <img
                        v-else
                        src="@/assets/icons/plus.svg"
                        alt="moins"
                        v-bind:class="{ active: showThridElement }"
                        v-on:click="WrapThridElement"
                    />
                </header>
                <main v-if="showThridElement" v-bind:class="{ showContent: showThridElement }">
                    <div class="illustration">
                        <img src="@/assets/img/mobile_idea.jpg" alt="image cocktail" class="cocktail" />
                        <img src="@/assets/img/mobile.png" alt="mobile" class="mobile" />
                    </div>
                    <div class="content-text">
                        <h4>
                            Title article
                        </h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eius aliquid repudiandae
                            dolorem, dolore placeat at dolor. Unde, perspiciatis inventore. Minima pariatur vero officia
                            eos dolorem nam sit excepturi debitis.
                        </p>
                    </div>
                </main>
            </article>
            <article>
                <header>
                    <p class="title-wrap" v-bind:class="{ changeColor: showFourthElement }">Des recettes pas à pas</p>
                    <img
                        v-if="showFourthElement"
                        src="@/assets/icons/minus.svg"
                        alt="moins"
                        v-bind:class="{ active: showFourthElement }"
                        v-on:click="WrapFourthElement"
                    />
                    <img
                        v-else
                        src="@/assets/icons/plus.svg"
                        alt="moins"
                        v-bind:class="{ active: showFourthElement }"
                        v-on:click="WrapFourthElement"
                    />
                </header>
                <main v-if="showFourthElement" v-bind:class="{ showContent: showFourthElement }">
                    <div class="illustration">
                        <img src="@/assets/img/mobile_idea.jpg" alt="image cocktail" class="cocktail" />
                        <img src="@/assets/img/mobile.png" alt="mobile" class="mobile" />
                    </div>
                    <div class="content-text">
                        <h4>
                            Title article
                        </h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eius aliquid repudiandae
                            dolorem, dolore placeat at dolor. Unde, perspiciatis inventore. Minima pariatur vero officia
                            eos dolorem nam sit excepturi debitis.
                        </p>
                    </div>
                </main>
            </article>
        </section>
    </div>
</template>

<script>
export default {
    name: 'WrapperMobile',
    data() {
        return {
            showFirstElement: true,
            showSecondElement: false,
            showThridElement: false,
            showFourthElement: false,
        }
    },
    methods: {
        WrapFirstElement: function() {
            this.showFirstElement = !this.showFirstElement
        },
        WrapSecondElement: function() {
            this.showSecondElement = !this.showSecondElement
            this.showFirstElement = false
            this.showThridElement = false
            this.showFourthElement = false
        },
        WrapThridElement: function() {
            this.showThridElement = !this.showThridElement
            this.showFirstElement = false
            this.showSecondElement = false
            this.showFourthElement = false
        },
        WrapFourthElement: function() {
            this.showFourthElement = !this.showFourthElement
            this.showFirstElement = false
            this.showSecondElement = false
            this.showThridElement = false
        },
    },
}
</script>

<style lang="scss" scoped>
.wrapper-mobile {
    margin-top: 30px;

    article {
        width: 90vw;
        margin-top: 10px;

        header {
            display: flex;
            flex-direction: row nowrap;
            justify-content: space-between;
            align-items: center;
            background-color: var(--white);
            padding: 10px;

            .title-wrap.changeColor {
                color: var(--darker-gold);
            }
            .title-wrap {
                width: 70vw;
                font-size: 15px;
                line-height: 22px;
            }
        }

        @keyframes opacityChange {
            0% {
                opacity: 0;
            }

            50% {
                opacity: 0.8;
            }

            100% {
                opacity: 1;
            }
        }

        main.showContent {
            animation-duration: 3s;
            animation-name: opacityChange;
        }

        main {
            vertical-align: top;
            .illustration {
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: center;
                .cocktail {
                    width: 90vw;
                    position: relative;
                }

                .mobile {
                    position: absolute;
                    width: 50vw;
                    left: 22%;
                    bottom: 0;
                }
            }
            .content-text {
                padding: 20px 20px 30px;
                background-color: #fff;

                h4 {
                    text-transform: uppercase;
                    letter-spacing: 0.04em;
                }

                p {
                    width: 70vw;
                    font-size: 15px;
                    line-height: 22px;
                    color: var(--darker-gray);
                }
            }
        }
    }
}
</style>
