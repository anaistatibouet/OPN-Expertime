<template>
    <div class="home">
        <HeaderMobile />
    </div>
</template>

<script>
// @ is an alias to /src
import HeaderMobile from '@/components/HeaderMobile'

export default {
    name: 'Home',
    components: {
        HeaderMobile,
    },
    data() {
        return {}
    },
}
</script>

<style scoped></style>
