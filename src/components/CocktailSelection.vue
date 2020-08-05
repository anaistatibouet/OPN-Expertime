<template>
    <div class="cocktail-selection">
        <h6>Notre sélection de cocktails</h6>
        <h5>Notre sélection de cocktails</h5>
        <section>
            <article>
                <img src="@/assets/img/martinez.png" alt="Martinez" />
                <p>Martinez</p>
                <div class="type-cocktail">
                    <ul>
                        <li><img src="@/assets/icons/alcohol.svg" class="icon" alt="Alcohol" /></li>
                        <li><img src="@/assets/icons/sugar.svg" class="icon" alt="Sugar" /></li>
                        <li><img src="@/assets/icons/herbaceous.svg" class="icon" alt="Herbaceous" /></li>
                    </ul>
                </div>
            </article>
            <article>
                <img src="@/assets/img/martinez_2.png" alt="Martinez" />
                <p>Martinez</p>
                <div class="type-cocktail">
                    <ul>
                        <li><img src="@/assets/icons/alcohol.svg" class="icon" alt="Alcohol" /></li>
                        <li><img src="@/assets/icons/sugar.svg" class="icon" alt="Sugar" /></li>
                        <li><img src="@/assets/icons/herbaceous.svg" class="icon" alt="Herbaceous" /></li>
                    </ul>
                </div>
            </article>
            <article>
                <img src="@/assets/img/martinez_3.png" alt="Martinez" />
                <p>Martinez</p>
                <div class="type-cocktail">
                    <ul>
                        <li><img src="@/assets/icons/alcohol.svg" class="icon" alt="Alcohol" /></li>
                        <li><img src="@/assets/icons/sugar.svg" class="icon" alt="Sugar" /></li>
                        <li><img src="@/assets/icons/herbaceous.svg" class="icon" alt="Herbaceous" /></li>
                    </ul>
                </div>
            </article>
            <article>
                <img src="@/assets/img/martinez_4.png" alt="Martinez" />
                <p>Martinez</p>
                <div class="type-cocktail">
                    <ul>
                        <li><img src="@/assets/icons/alcohol.svg" class="icon" alt="Alcohol" /></li>
                        <li><img src="@/assets/icons/sugar.svg" class="icon" alt="Sugar" /></li>
                        <li><img src="@/assets/icons/herbaceous.svg" class="icon" alt="Herbaceous" /></li>
                    </ul>
                </div>
            </article>
        </section>
        <div class="link">
            <a href="#">Voir plus de recettes</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CocktailSelection',
}
</script>

<style lang="scss" scoped>
.cocktail-selection {
    padding: 0 15px 30px;

    h5 {
        display: none;
    }

    h6 {
        display: block;
    }

    section {
        display: flex;
        width: 90vw;
        flex-direction: row;
        flex-wrap: wrap;

        padding-bottom: 50px;

        article {
            width: 35vw;
            margin: 0 auto;

            .type-cocktail {
                display: none;
            }

            img {
                width: 35vw;
            }

            p {
                font-size: 15px;
                line-height: 22px;
                text-align: center;
            }
        }
    }

    .link {
        a {
            padding: 10px 50px;
        }
    }

    @media only screen and (min-width: 720px) and (max-width: 1023px) {
        section {
            article {
                width: 20vw;
                img {
                    width: 20vw !important;
                }
            }
        }
    }

    @media screen and (min-width: 1024px) {
        h6 {
            display: none;
        }

        h5 {
            display: block;
            text-align: center;
        }

        section {
            justify-content: center;
            width: 100vw;

            .martinez {
                display: none;
            }

            article {
                width: 8vw;
                margin: 0 50px;

                .type-cocktail {
                    display: block;

                    ul {
                        padding: 0;
                        display: flex;
                        flex-flow: row nowrap;
                        justify-content: center;

                        .icon {
                            width: 50px;
                        }
                    }
                }
                img {
                    width: 8vw;
                }

                p {
                    font-size: 15px;
                    line-height: 22px;
                    text-align: center;
                }
            }
        }
    }
}
</style>
