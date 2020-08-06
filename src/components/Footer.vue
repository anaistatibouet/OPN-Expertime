<template>
    <div class="footer">
        <div class="footer-container">
            <div class="top">
                <p class="title-footer">Des cocktails dans votre boîte mail !</p>
                <p class="description">Nos recettes, nos conseils et nos histoires tous les mois.</p>
                <div class="subscribe">
                    <form id="app" method="post">
                        <input type="email" id="mail" v-model="mail" name="mail" placeholder="Votre adresse mail ..." />
                        <button type="submit">Je m’inscris</button>
                    </form>
                </div>
            </div>
            <hr />
            <div class="bottom">
                <p class="title-footer">Rejoignez-nous</p>
                <p class="description">Nos recettes, nos conseils et nos histoires tous les mois.</p>
                <div class="social-medias">
                    <button @mouseover="hoverFacebook = true" @mouseleave="hoverFacebook = false">
                        <span>
                            <img v-if="hoverFacebook" src="@/assets/icons/facebook_black.svg" alt="Facebook" class="rs"/>
                            <img v-else src="@/assets/icons/facebook.svg" alt="Facebook" class="rs"
                        /></span>
                        Facebook
                    </button>
                    <button @mouseover="hoverInstagram = true" @mouseleave="hoverInstagram = false">
                        <span>
                            <img v-if="hoverInstagram" src="@/assets/icons/instagram_black.svg" alt="Instagram" class="rs" />
                            <img v-else src="@/assets/icons/instagram.svg" alt="Instagram" class="rs" />
                        </span>
                        Instagram
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            mail: null,
            hoverFacebook: false,
            hoverInstagram: false,
        }
    },
}
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
            flex-flow: row nowrap;
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
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: center;
        }
        span {
            margin-right: 20px;
        }
    }
}
@media screen and (min-width: 1024px) {
    .footer {
        padding: 0;
        .footer-container {
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;

            hr {
                display: none;
            }

            .top {
                width: 30vw;
                padding: 40px;
                border-right: 1px solid var(--light-gray);

                .description {
                    margin-bottom: 30px;
                }

                .subscribe {
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: space-between;

                    input {
                        width: 15vw;
                    }

                    button {
                        cursor: pointer;
                        margin-left: 15px;
                        width: 10vw;
                        -webkit-transition: all 0.2s ease-in;
                        -webkit-transform: scale(1);
                        -ms-transition: all 0.2s ease-in;
                        -ms-transform: scale(1);
                        -moz-transition: all 0.2s ease-in;
                        -moz-transform: scale(1);
                        transition: all 0.2s ease-in;
                        transform: scale(1);
                    }

                    button:hover {
                        -webkit-transform: scale(1.3);
                        -ms-transform: scale(1.3);
                        -moz-transform: scale(1.3);
                        transform: scale(1.3);
                        background-color: #fff;
                        color: var(--dark-gold);

                        img {
                            background: #000;
                        }
                    }
                }
            }
            .bottom {
                width: 30vw;
                padding: 40px;

                .description {
                    margin-bottom: 20px;
                }

                .social-medias {
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: space-between;
                    width: 40vw;

                    button {
                        cursor: pointer;
                        width: 22vw;
                        -webkit-transition: all 0.2s ease;
                        -ms-transition: all 0.2s ease;
                        -moz-transition: all 0.2s ease;
                        transition: all 0.2s ease;

                        .rs {
                            opacity: 1;
                        }
                    }

                    button:hover {
                        background-color: var(--gold);
                        color: black;
                    }
                }
            }
        }
    }
}
</style>
