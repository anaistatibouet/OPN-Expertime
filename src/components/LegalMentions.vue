<template>
    <div class="legal-mentions">
        <a href="#">CGU</a>
        <a href="#">Mentions légales</a>
        <a href="#">Cookies</a>
    </div>
</template>

<script>
export default {
    name: 'LegalMentions',
}
</script>

<style lang="scss" scoped>
.legal-mentions {
    background-color: var(--darker-gray);
    padding: 15px;
    display: flex;
    flex-wrap: row nowrap;
    justify-content: center;

    a {
        text-transform: uppercase;
        color: var(--white);
        font-size: 11px;
        line-height: 16px;
        text-align: center;
        letter-spacing: 0.06em;
        text-decoration-line: underline;
        text-transform: uppercase;
        margin: 10px;
    }
}
</style>
