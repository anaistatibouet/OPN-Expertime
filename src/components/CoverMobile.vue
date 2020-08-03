<template>
    <div class="cover-mobile">
        <div class="cover-image">
            <div class="bg-img"></div>
        </div>
        <section class="cover-text">
            <h2>L'expérience cocktail<br />à la maison</h2>
            <h5>Opn, votre bar connecté à domicile</h5>
            <article>
                <a href="#" class="discover-starter">Découvrir le starter pack</a>
                <p class="already-user">Déjà opner ? Rechargez votre bar.</p>
            </article>
        </section>
    </div>
</template>

<script>
export default {
    name: 'CoverMobile',
}
</script>

<style lang="scss" scoped>
.cover-mobile {
    .cover-image {
        .bg-img {
            position: absolute;
            top: 0;
            background-image: url('../assets/img/home_bg_mobile.png');
            background-size: cover;
            background-repeat: no-repeat;
            height: 100vh;
            width: 100vw;
            z-index: -10;
        }
    }

    .cover-text {
        position: absolute;
        top: 225px;
        width: 100vw;

        h2,
        h5 {
            padding-left: 18px;
            color: var(--white);
            text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.12);
        }

        article {
            text-align: center;
            a {
                font-size: 15px;
                color: var(--black);
                padding: 20px 60px;
                background-color: var(--white);
                border-radius: 40px;
            }

            p {
                margin-top: 50px;
                font-size: 11px;
                line-height: 16px;
                letter-spacing: 0.06em;
                text-decoration-line: underline;
                text-transform: uppercase;
                color: var(--white);
                text-align: center;
            }
        }
    }
}
</style>
