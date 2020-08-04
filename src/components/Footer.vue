<template>
    <div class="footer">
        <div class="top">
            <p class="title-footer">Des cocktails dans votre boîte mail !</p>
            <p class="description">Nos recettes, nos conseils et nos histoires tous les mois.</p>
            <div class="subscribe">
                <input type="email" placeholder="Votre adresse mail ..." />
                <button type="submit">Je m’inscris</button>
            </div>
        </div>
        <hr />
        <div class="bottom">
            <p class="title-footer">Rejoignez-nous</p>
            <p class="description">Nos recettes, nos conseils et nos histoires tous les mois.</p>
            <div class="social-medias">
                <button>
                    <span><img src="@/assets/icons/facebook.svg" alt="Facebook"/></span> Facebook
                </button>
                <button>
                    <span><img src="@/assets/icons/instagram.svg" alt="Instagram"/></span> Instagram
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
    padding: 15px 0;
    background-color: var(--black);
    color: var(--white);

    p {
        font-size: 15px;
        line-height: 22px;
    }

    .title-footer {
        font-weight: bold;
    }

    .description {
        font-size: 12px;
    }

    .top {
        padding: 15px;

        .subscribe {
            display: flex;
            flex-direction: row nowrap;
            justify-content: space-between;

            input {
                width: 55vw;
                background-color: transparent;
                border: none;
                border-bottom: 1px solid var(--light-gray);
                color: var(--dark-gray);
                font-family: Styrene, Arial, sans-serif;
                padding: 10px 0;
            }

            button {
                font-family: Styrene, Arial, sans-serif;
                width: 30vw;
                padding: 10px;
                background-color: var(--gold);
                border-radius: 20px;
                color: var(--white);
            }
        }
    }

    hr {
        border: 1px solid #6c6d72;
        width: 99vw;
    }

    .bottom {
        padding: 15px;

        button {
            font-size: 15px;
            line-height: 22px;
            font-family: Styrene, Arial, sans-serif;
            color: var(--white);
            border: 1px solid var(--gold);
            box-sizing: border-box;
            border-radius: 3px;
            padding: 10px;
            width: 90vw;
            margin: 5px;
            display: flex;
            flex-direction: row nowrap;
            justify-content: flex-start;
            align-items: center;
        }
        span {
            margin-right: 20px;
        }
    }
}
</style>
