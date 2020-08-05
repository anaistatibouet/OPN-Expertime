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
            <main>
                <div class="discover">
                    <DiscoverCocktails />
                </div>
                <span class="slash"></span>
                <div class="slider">
                    <SliderDesktop />
                </div>
            </main>
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
import VideoPlayer from '@/components/VideoPlayer'

// Components shared
import CocktailSelection from '@/components/CocktailSelection'
// import Footer from '@/components/Footer'
// import LegalMentions from '@/components/LegalMentions'

// Components Desktop
import CoverDesktop from '@/components/CoverDesktop'
import DiscoverCocktails from '@/components/DiscoverCocktails'
import SliderDesktop from '@/components/SliderDesktop'

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
        DiscoverCocktails,
        SliderDesktop,
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

.desktop-device {
    header {
        height: 70vh;
    }
}

.mobile-device {
    header {
        height: 100vh;
    }
}
</style>
