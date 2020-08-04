<template>
    <div class="articles">
        <h3>Besoin d’inspiration pour votre prochaine soirée maison ?</h3>
        <p class="description">
            Des centaines de recettes ou idées à découvrir sur notre application ou sur notre magazine
        </p>
        <section>
            <h5>Les derniers articles</h5>
            <article v-for="item in Array(3)" :key="item">
                <img src="@/assets/img/article_img.jpg" alt="illustration article" />
                <div class="box">
                    <p class="tag">Cocktails</p>
                    <h6>Une histoire amère (qui finit bien)</h6>
                </div>
            </article>
        </section>
        <div class="link">
            <a href="#">Voir plus de publications</a>
        </div>
        <hr />
    </div>
</template>

<script>
export default {
    name: 'ArticlesMobile',
}
</script>

<style lang="scss" scoped>
.articles {
    padding: 15px 15px 0;

    h3 {
        margin: 0 auto 10px;
        text-align: center;
    }

    .description {
        font-size: 15px;
        line-height: 22px;
        text-align: center;
        color: var(--dark-gray);
    }

    section {
        img {
            width: 90vw;
        }

        .box {
            position: relative;
            top: -40px;
            width: 70vw;
            height: auto;
            margin: auto;
            background-color: var(--white);
            padding: 20px 20px 30px;

            h6 {
                margin: 0;
            }
            .tag {
                color: var(--dark-gold);
            }
        }
    }

    .link {
        a {
            padding: 10px 35px;
        }
    }

    hr {
        width: 80vw;
        margin: auto;
        border: 1px solid #e2e2e5;
    }
}
</style>
