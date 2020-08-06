<template>
    <div class="cover-desktop">
        <div class="cover-image">
            <div class="bg-img"></div>
        </div>
        <section class="cover-text">
            <div class="cover-titles">
                <h2>L'expérience cocktail<br />à la maison</h2>
            </div>
            <article>
                <h3>Opn, votre bar connecté à domicile</h3>
                <p>
                    Le premier bar connecté qui vous permet de créer des centaines de cocktails à la maison en s’amusant.
                </p>
                <div class="discover-opn">
                    <img src="@/assets/icons/play.svg" alt="play" />
                    <a href="#">
                        Découvrir OPN en détails - 1’40
                    </a>
                </div>
                <div class="discover-starter">
                    <a href="#">Découvrir le starter pack</a>
                </div>
                <p class="already-user">Déjà opner ? Rechargez votre bar.</p>
            </article>
        </section>
    </div>
</template>

<script>
export default {
    name: 'CoverDesktop',
}
</script>

<style lang="scss" scoped>
.cover-desktop {
    color: var(--white);

    .cover-image {
        .bg-img {
            position: absolute;
            top: 0;
            background-image: url('../assets/img/home_bg.jpg');
            background-size: contain;
            background-repeat: no-repeat;
            height: 100vh;
            width: 100vw;
            z-index: -10;
        }
    }

    .cover-text {
        position: absolute;
        bottom: 32vh;
        z-index: 20;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: flex-start;

        width: 100vw;

        h2 {
            font-size: 64px;
            line-height: 77px;
            width: 30vw;
            margin-top: 0;
        }

        article {
            width: 30vw;

            h3 {
                margin-top: 0;
            }

            p {
                margin-bottom: 20px;
            }

            .discover-opn {
                margin-bottom: 50px;

                -webkit-transition: all 0.2s ease-in;
                -moz-transition: all 0.2s ease-in;
                -o-transition: all 0.2s ease-in;
                transition: all 0.2s ease-in;

                a {
                    -webkit-transition: all 0.2s ease-in;
                    -moz-transition: all 0.2s ease-in;
                    -o-transition: all 0.2s ease-in;
                    transition: all 0.2s ease-in;

                    color: white;
                    text-transform: uppercase;
                    text-decoration: underline;
                    margin-left: 12px;
                }
            }

            .discover-opn:hover {
                a {
                    color: var(--black);
                    text-decoration: none;
                }

                img {
                    filter: invert(1);
                }
            }

            .discover-starter:hover {
                a {
                    background-color: var(--dark-gold);
                    border-radius: 5px;
                }
            }

            .discover-starter {
                height: 25px;
                margin: 30px 0;

                a {
                    text-align: left;
                    background-color: white;
                    padding: 10px 50px;
                    border-radius: 20px;

                    -webkit-transition: all 0.2s ease-out;
                    -moz-transition: all 0.2s ease-out;
                    -o-transition: all 0.2s ease-out;
                    transition: all 0.2s ease-out;
                }
            }
        }
    }
}
</style>
