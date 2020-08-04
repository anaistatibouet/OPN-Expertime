<template>
    <div class="videoplayer">
        <section>
            <h3>
                Redécouvrez le plaisir d’une soirée cocktails à la maison
            </h3>
            <article>
                <img src="@/assets/img/player.jpg" alt="imageplayer" class="video" />
                <span><img src="@/assets/icons/play.svg" alt="play"/></span>
            </article>
        </section>
    </div>
</template>

<script>
export default {
    name: 'VideoPlayer',
}
</script>

<style lang="scss" scoped>
.videoplayer {
    section {
        h3 {
            margin: 0 30px 30px;
            text-align: center;
        }

        article {
            position: relative;
            .video {
                width: 90vw;
                margin: 0 5vw;
            }

            span img {
                position: absolute;
                top: 30vw;
                left: 45vw;
                width: 15vw;
                height: 15vw;
            }
        }
    }
}
</style>
