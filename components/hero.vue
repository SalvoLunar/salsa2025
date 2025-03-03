<style lang="scss" scoped>    
    .hero {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px;
        height: 100vh;
        background: url('~/assets/images/clouds.png') no-repeat top center;
        background-size: contain;
    }
    .hero-text {
        width: 70%;
        text-align: center;
        img {
            max-width: 250px;
            display: inline-block;
            opacity: 0;
            animation: fadeInBounceUp 1s ease forwards;
            animation-delay: 2.5s;
        }
        h1 {
            opacity: 0;
            animation: fadeInBounceUp 1s ease forwards;
            animation-delay: 1.8s;
        }
        h2 {
            opacity: 0;
            animation: fadeInBounceUp 1s ease forwards;
            animation-delay: 2s;
        }
        h3 {
            opacity: 0;
            animation: fadeInBounceUp 1s ease forwards;
            animation-delay: 2.1s;
        }
        h4 {
            opacity: 0;
            animation: fadeInBounceUp 1s ease forwards;
            animation-delay: 2.2s;
        }
    }
    .hero-images {
        width: 30%;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        align-content: flex-end;
        height: 100vh;
        img {
            max-width: 230px;
            opacity: 0;
            animation: fadeInBounceUp 1s ease forwards;
        }
        img:nth-child(1) {
            animation-delay: 2.5s;
        }
        img:nth-child(2) {
            animation-delay: 2s;
        }
        img:nth-child(3) {
            animation-delay: 2.1s;
        }
    }

    @media (max-width: 768px) {
        .hero {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .hero-text {
            padding-top: 100px;
            width: 100%;
            img {
                max-width: 150px;
            }
        }
        .hero-images {
            width: 100%;
            justify-content: center;
            align-items: flex-end;
            img {
                max-width: 120px;
            }
        }
    }

</style>
<template>
    <div>
        <div class="hero section" id="hero">
            <div class="hero-text">
                <img src="~/assets/images/rings.png" alt="Logo">
                <h1>{{ $t('hero.title') }}</h1>
                <h2>{{ $t('hero.subtitle') }}</h2>
                <h3>{{ $t('hero.description') }}</h3>
                <h4>{{ $t('hero.when') }}</h4>
                <a class="arrow-down" href="#location">⌄</a>
            </div>
            <div class="hero-images">
                <img src="~/assets/images/rory.png" alt="Rory's Image">
                <img src="~/assets/images/sarah.png" alt="Sarah's Image">
                <img src="~/assets/images/salvo.png" alt="Salvo's Image">
            </div>
        </div>
    </div>
</template>
