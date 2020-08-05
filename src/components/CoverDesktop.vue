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
                    Le premier bar connecté qui vous permet de créer des centaines de cocktails à la maison en
                    s’amusant.
                </p>
                <div>
                    <a href="#" class="discover-opn">
                        <span><img src="@/assets/icons/play.svg" alt="play"/></span>
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
        bottom: 35vh;
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
            .discover-opn {
                color: white;
            }

            .discover-starter:hover {
                a {
                    text-align: left;
                    background-color: var(--dark-gold);
                    padding: 15px 60px;
                    border-radius: 15px;
                    font-size: 20px;
                }
            }

            .discover-starter {
                margin: 30px 0;

                a {
                    text-align: left;
                    background-color: white;
                    padding: 10px 50px;
                    border-radius: 20px;

                    -webkit-transition: all 1s ease-out;
                    -moz-transition: all 1s ease-out;
                    -o-transition: all 1s ease-out;
                    transition: all 1s ease-out;
                }
            }
        }
    }
}
</style>
