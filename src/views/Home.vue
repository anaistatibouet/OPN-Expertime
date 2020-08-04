<template>
    <div class="home">
        <div class="mobile-device">
            <header>
                <CoverMobile />
            </header>
            <main>
                <span class="slash"></span>
                <div class="video">
                    <VideoPlayer />
                </div>
                <div class="slider">
                    <SliderMobile />
                    <span class="slash section-separator"></span>
                </div>
                <div class="house-cocktail">
                    <HouseCocktailsMobile />
                </div>
            </main>
        </div>
        <div class="desktop-device"></div>
        <footer></footer>
    </div>
</template>

<script>
// @ is an alias to /src
import CoverMobile from '@/components/CoverMobile'
import VideoPlayer from '@/components/VideoPlayer'
import SliderMobile from '@/components/SliderMobile'
import HouseCocktailsMobile from '@/components/HouseCocktailsMobile'

export default {
    name: 'Home',
    components: {
        CoverMobile,
        VideoPlayer,
        SliderMobile,
        HouseCocktailsMobile,
    },
    data() {
        return {}
    },
}
</script>

<style lang="scss" scoped>
.section-separator {
    bottom: 0;
}
.mobile-device {
    header {
        height: 100vh;
    }
}
</style>
