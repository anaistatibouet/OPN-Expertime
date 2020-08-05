<template>
    <div class="discover-cocktails">
        <h2>
            Redécouvrez le plaisir d’une soirée cocktails à la maison
        </h2>
        <div class="discover-container">
            <div class="discover-items left">
                <div class="content-item">
                    <img src="@/assets/icons/cocktail.svg" alt="cocktail" />
                    <p class="content-text">
                        Des recettes à découvrir et personnaliser en fonction de vos goûts
                    </p>
                </div>
                <div class="content-item">
                    <img src="@/assets/icons/jigger.png" alt="jigger" />
                    <p class="content-text">
                        Des dosages précis pour réaliser vos cocktails favoris
                    </p>
                </div>
                <div class="content-item">
                    <img src="@/assets/icons/world.svg" alt="world" />
                    <p class="content-text">
                        Des alcools reconnus mondialement
                    </p>
                </div>
            </div>
            <div class="content-video">
                <img src="@/assets/img/player.jpg" alt="imageplayer" class="video" />
                <span><img src="@/assets/icons/play.svg" alt="play"/></span>
            </div>
            <div class="discover-items right">
                <div class="content-item">
                    <img src="@/assets/icons/refill.svg" alt="refill" />
                    <p class="content-text">
                        Une gestion et un réapprovisionnement facilité de votre bar
                    </p>
                </div>
                <div class="content-item">
                    <img src="@/assets/icons/shield.svg" alt="shield" />
                    <p class="content-text">
                        Un accès contrôlé et sécurisé à vos alcools préférés
                    </p>
                </div>
                <div class="content-item">
                    <img src="@/assets/icons/interior.svg" alt="interior" />
                    <p class="content-text">
                        Un design moderne et élégant s’intégrant dans votre quotidien
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DiscoverCocktails',
}
</script>

<style lang="scss" scoped>
.discover-cocktails {
    display: block;
    margin: 0 auto;
    width: 80vw;
    position: relative;
    top: -15vh;
    background: var(--white);
    padding: 50px 30px 0;

    h2 {
        text-align: center;
    }

    .discover-container {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;

        .left,
        .right {
            width: 20vw;
            margin: 20px;

            .content-item:first-child {
                margin-top: 0;
            }

            .content-item {
                margin-top: 50px;
            }
        }

        .content-video {
            position: relative;

            .video {
                width: 40vw;
            }

            span img {
                position: absolute;
                top: 20vh;
                left: 15vw;
                width: 12vw;
                height: 12vh;
            }
        }
    }
}
</style>
