<style lang="scss" scoped>
    .location {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px;
        height: 100vh;
        background-color: #FFF;
    }
    .location-text {
        width: 50%;
        text-align: center;
        img {
            max-width: 250px;
            display: inline-block;
            opacity: 0;
            animation: fadeInBounceUp 1s ease forwards;
        }
    }
    .location-images {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        height: 100vh;
        img {
            max-width: 630px;
            opacity: 1;
        }
        img:nth-child(1) {
            animation-delay: 0.5s;
        }
    }
    @media (max-width: 768px) {
        .location {
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center;
        }
        .location-text {
            padding-top: 100px;
            width: 100%;
            img {
                max-width: 300px;
            }
        }
        .location-images {
            width: 100%;
            justify-content: center;
            align-items: center;
            img {
                max-width: 300px;
            }
        }
    }
</style>
<template>
    <div class="location section" id="location">
        <div class="location-images">
            <h2>{{ $t('where.location') }}</h2>
            <img src="~/assets/images/thedean.png" alt="the dean screen" class="rounded"/>
            <a href="https://www.google.com/maps/place/The+Dean+Dublin/@53.3352055,-6.2640687,20z/data=!4m9!3m8!1s0x48670e9f902b83e1:0x8518d64072347802!5m2!4m1!1i2!8m2!3d53.3352055!4d-6.2637468!16s%2Fg%2F11b6zw481k?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D" target="_blank">{{ $t('where.map') }}</a>
        </div>
        <div class="location-text">
            <h1>{{ $t('where.title') }}</h1>
            <h2>{{ $t('where.description') }}</h2>
            <a class="arrow-down" href="#rsvp">⌄</a>
        </div>
    </div>
</template>