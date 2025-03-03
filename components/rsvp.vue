<style lang="scss" scoped>
    .rsvp {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px;
        min-height: 100vh;
        background: url('~/assets/images/clouds.png') no-repeat top center;
        background-size: contain;
    }
    .rsvp-text {
        width: 50%;
        text-align: center;
    }
    .rsvp-form {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        min-height: 100vh;
    }

    .penny {
        position: absolute;
        bottom: 0;
        left: 0;
        img {
            max-width: 250px;
            display: inline-block;
            opacity: 0;
            animation: fadeInBounceUp 1s ease forwards;
        }
    }
    @media (max-width: 768px) {
        .rsvp {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding-bottom: 300px;
        }
        .rsvp-text {
            padding-top: 100px;
            width: 100%;
            img {
                max-width: 150px;
            }
        }
        .rsvp-form {
            width: 100%;
            justify-content: center;
            align-items: flex-end;
            img {
                max-width: 150px;
            }
            .form{
                width: 100%;
                min-width: 400px;
            }
        }
    }
</style>

<template>
    <div class="rsvp section" id="rsvp">
        <div class="rsvp-text">
            <h1>{{ $t('rsvp.title') }}</h1>
            <h2>{{ $t('rsvp.description') }}</h2>
            <a class="arrow-up" href="#hero">⌃</a>
            <div class="penny">
                <img src="~/assets/images/penny.png" alt="">
            </div>
        </div>
        <div class="rsvp-form">
            <div v-html="$t('rsvp.html')" class="form"></div>
        </div>
    </div> 
</template>