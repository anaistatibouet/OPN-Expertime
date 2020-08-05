<template>
    <div class="home mask">
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
                </div>
                <span class="slash section-separator"></span>
                <div class="house-cocktail">
                    <HouseCocktailsMobile />
                </div>
                <span class="slash"></span>
                <div class="inspiration-article">
                    <ArticlesMobile />
                </div>
                <div class="cocktail-selection">
                    <CocktailSelection />
                </div>
            </main>
        </div>
        <div class="desktop-device">
            <header>
                <CoverDesktop />
            </header>
        </div>
        <footer>
            <!-- <Footer />
            <LegalMentions /> -->
        </footer>
    </div>
</template>

<script>
// @ is an alias to /src

// Components Mobile
import CoverMobile from '@/components/CoverMobile'
import SliderMobile from '@/components/SliderMobile'
import HouseCocktailsMobile from '@/components/HouseCocktailsMobile'
import ArticlesMobile from '@/components/ArticlesMobile'

// Components shared
import VideoPlayer from '@/components/VideoPlayer'
import CocktailSelection from '@/components/CocktailSelection'
// import Footer from '@/components/Footer'
// import LegalMentions from '@/components/LegalMentions'

// Components Desktop
import CoverDesktop from '@/components/CoverDesktop'

export default {
    name: 'Home',
    components: {
        CoverMobile,
        VideoPlayer,
        SliderMobile,
        HouseCocktailsMobile,
        ArticlesMobile,
        CocktailSelection,
        CoverDesktop,
        // Footer,
        // LegalMentions,
    },
    data() {
        return {}
    },
}
</script>

<style lang="scss" scoped>
.section-separator {
    bottom: -18px;
}

// .mask {
//     opacity: 0.25;
//     background-color: var(--black);
// }

.mobile-device {
    header {
        height: 100vh;
    }
}
</style>
