<template>
    <div class="articles">
        <h3>Besoin d’inspiration pour votre prochaine soirée maison ?</h3>
        <h2>Besoin d’inspiration pour votre prochaine soirée maison ?</h2>
        <p class="description">
            Des centaines de recettes ou idées à découvrir sur notre application ou sur notre magazine
        </p>
        <section>
            <h5>Les derniers articles</h5>
            <div class="articles-container">
                <article v-for="item in Array(3)" :key="item">
                    <div class="illustration">
                        <img src="@/assets/img/article_img.jpg" alt="illustration article" />
                    </div>
                    <div class="box">
                        <p class="tag">Cocktails</p>
                        <h6>Une histoire amère (qui finit bien)</h6>
                    </div>
                </article>
            </div>
        </section>
        <div class="link">
            <a href="#">Voir plus de publications</a>
        </div>
        <hr />
    </div>
</template>

<script>
export default {
    name: 'Articles',
}
</script>

<style lang="scss" scoped>
.articles {
    padding: 15px 15px 0;

    h3 {
        margin: 0 auto 10px;
        text-align: center;
        display: block;
    }

    h2 {
        display: none;
    }

    .description {
        font-size: 15px;
        line-height: 22px;
        text-align: center;
        color: var(--dark-gray);
    }

    section {
        article {
            display: flex;
            flex-flow: column wrap;
            justify-content: center;

            .illustration {
                img {
                    width: 90vw;
                }
                margin: auto;
            }

            .box {
                position: relative;
                top: -40px;
                width: 70vw;
                height: auto;
                margin: auto;
                background-color: var(--white);
                padding: 20px 20px 30px;

                h6 {
                    margin: 0;
                }
                .tag {
                    color: var(--dark-gold);
                }
            }
        }
    }

    .link {
        a {
            padding: 10px 35px;
        }
    }

    hr {
        width: 80vw;
        margin: auto;
        border: 1px solid #e2e2e5;
    }

    @media only screen and (min-width: 720px) and (max-width: 1023px) {
        section {
            .illustration {
                img {
                    width: 80vw !important;
                }
            }
        }
    }

    @media only screen and (min-width: 1023px) {
        h3 {
            display: none;
        }

        h2 {
            text-align: center;
            display: block;
        }

        section {
            h5 {
                text-align: center;
                margin-bottom: 0;
            }
            .articles-container {
                display: flex;
                flex-flow: row nowrap;
                justify-content: center;

                article {
                    width: 30vw;
                    margin: 10px;
                    .illustration {
                        img {
                            width: 30vw !important;
                        }

                        margin: 10px;
                    }

                    .box {
                        width: 20vw;
                    }
                }
            }
        }
    }
}
</style>
