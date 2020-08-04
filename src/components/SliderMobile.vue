<template>
    <div class="slider-mobile">
        <carousel
            :per-page="1"
            :mouse-drag="false"
            class="slides"
            paginationActiveColor="#DFB57B"
            pagingActiveColor="#E2E2E5"
            :spacePadding="25"
            easing="ease-in"
        >
            <slide class="slide">
                <div class="content-slide">
                    <img src="@/assets/icons/cocktail.svg" alt="" />
                    <p class="content-text">
                        Des recettes à découvrir et personnaliser en fonction de vos goûts
                    </p>
                </div>
            </slide>
            <slide class="slide">
                <div class="content-slide">
                    <img src="@/assets/icons/jigger.svg" alt="" />
                    <p class="content-text">
                        Des dosages précis pour réaliser vos cocktails favoris
                    </p>
                </div>
            </slide>
            <slide class="slide">
                <div class="content-slide">
                    <img src="@/assets/icons/world.svg" alt="" />
                    <p class="content-text">
                        Des alcools reconnus mondialement
                    </p>
                </div>
            </slide>
            <slide class="slide">
                <div class="content-slide">
                    <img src="@/assets/icons/refill.svg" alt="" />
                    <p class="content-text">
                        Une gestion et un réapprovisionnement facilité de votre bar
                    </p>
                </div>
            </slide>
            <slide class="slide">
                <div class="content-slide">
                    <img src="@/assets/icons/shield.svg" alt="" />
                    <p class="content-text">
                        Un accès contrôlé et sécurisé à vos alcools préférés
                    </p>
                </div>
            </slide>
            <slide class="slide">
                <div class="content-slide">
                    <img src="@/assets/icons/interior.svg" alt="" />
                    <p class="content-text">
                        Un design moderne et élégant s’intégrant dans votre quotidien
                    </p>
                </div>
            </slide>
        </carousel>
        <div class="bg-white"></div>
    </div>
</template>

<script>
export default {
    name: 'SliderMobile',
}
</script>

<style lang="scss" scoped>
.slider-mobile {
    position: relative;
    margin-top: 30px;
    .slides {
        width: 100vw;
        .slide {
            .content-slide {
                .content-text {
                    width: 60vw;
                    font-size: 15px;
                    line-height: 22px;
                    color: #8d8e93;
                }
            }
        }
    }

    .bg-white {
        opacity: 0.4;
        height: 25vh;
        width: 8vw;
        position: absolute;
        top: 0;
        left: 92vw;
        background-color: var(--white);
    }
}
</style>
