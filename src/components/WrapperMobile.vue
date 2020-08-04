<template>
    <div class="wrapper-mobile">
        <section>
            <article>
                <header>
                    <p class="title-wrap active">Des idées selon vos envies</p>
                    <a href="#"><img src="../assets/icons/minus.svg" alt="moins"/></a>
                </header>
                <main>
                    <div class="illustration">
                        <img src="../assets/img/mobile_idea.jpg" alt="image cocktail" class="cocktail" />
                        <img src="../assets/img/mobile.png" alt="mobile" class="mobile" />
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
                    <p class="title-wrap">Des recommandations personnalisées</p>
                    <a href="#"><img src="../assets/icons/plus.svg" alt="plus"/></a>
                </header>
                <main>
                    <div class="illustration">
                        <img src="../assets/img/mobile_idea.jpg" alt="image cocktail" class="cocktail" />
                        <img src="../assets/img/mobile.png" alt="mobile" class="mobile" />
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
                    <p class="title-wrap">+ 300 recettes exclusives</p>
                    <a href="#"><img src="../assets/icons/plus.svg" alt="plus"/></a>
                </header>
                <main>
                    <div class="illustration">
                        <img src="../assets/img/mobile_idea.jpg" alt="image cocktail" class="cocktail" />
                        <img src="../assets/img/mobile.png" alt="mobile" class="mobile" />
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
                    <p class="title-wrap">Des recettes pas à pas</p>
                    <a href="#"><img src="../assets/icons/plus.svg" alt="plus"/></a>
                </header>
                <main>
                    <div class="illustration">
                        <img src="../assets/img/mobile_idea.jpg" alt="image cocktail" class="cocktail" />
                        <img src="../assets/img/mobile.png" alt="mobile" class="mobile" />
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

            .title-wrap.active {
                color: var(--darker-gold);
            }
            .title-wrap {
                font-size: 15px;
                line-height: 22px;
            }
        }

        main {
            .illustration {
                .cocktail {
                    width: 90vw;
                    position: absolute;
                }

                .mobile {
                    position: relative;
                    bottom: -48px;
                    left: 20vw;
                }
            }
            .content-text {
                padding: 50px 20px 30px;
                background-color: #fff;

                h4 {
                    font-size: 16px;
                    line-height: 24px;
                    letter-spacing: 0.04em;
                    text-transform: uppercase;
                }

                p {
                    width: 65vw;
                    font-size: 15px;
                    line-height: 22px;
                    color: var(--darker-gray);
                }
            }
        }
    }
}
</style>
