<template>
    <div class="home">
        <div class="mobile-device">
            <header>
                <CoverMobile />
                <span class="slash"></span>
            </header>
            <main>
                <div class="video">
                    <VideoPlayer />
                </div>
                <div class="slider"></div>
            </main>
            <footer></footer>
        </div>
        <div class="desktop-device"></div>
    </div>
</template>

<script>
// @ is an alias to /src
import CoverMobile from '@/components/CoverMobile'
import VideoPlayer from '@/components/VideoPlayer'

export default {
    name: 'Home',
    components: {
        CoverMobile,
        VideoPlayer,
    },
    data() {
        return {}
    },
}
</script>

<style lang="scss" scoped>
.mobile-device {
    header {
        height: 100vh;
    }
}
</style>
