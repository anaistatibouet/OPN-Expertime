<template>
    <div class="cocktail-selection">
        <h6>Notre sélection de cocktails</h6>
        <section>
            <article>
                <img src="@/assets/img/martinez.png" alt="Martinez" />
                <p>Martinez</p>
            </article>
            <article>
                <img src="@/assets/img/martinez_2.png" alt="Martinez" />
                <p>Martinez</p>
            </article>
            <article>
                <img src="@/assets/img/martinez_3.png" alt="Martinez" />
                <p>Martinez</p>
            </article>
            <article>
                <img src="@/assets/img/martinez_4.png" alt="Martinez" />
                <p>Martinez</p>
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

    section {
        display: flex;
        width: 90vw;
        flex-direction: row;
        flex-wrap: wrap;

        padding-bottom: 50px;

        article {
            width: 35vw;
            margin: 0 auto;

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
}
</style>
