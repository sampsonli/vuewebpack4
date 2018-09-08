<template>
    <div>
        <video
            id="my-video"
            class="video-js vjs-default-skin"
            controls
            preload="auto"
            ref="video">
            <source
                src="/iphone/samples/bipbop/gear1/prog_index.m3u8"
                type='application/x-mpegURL'>
        </video>
    </div>
</template>

<script>
    import videojs from 'video.js'
    import 'video.js/dist/video-js.css'

    export default {
        name: 'Demo',
        created () {
            window.HELP_IMPROVE_VIDEOJS = false
        },
        mounted () {
            console.log(this.$abc)
            const video = this.$refs.video
            var myPlayer = videojs(video, {
                bigPlayButton: false,
                textTrackDisplay: false,
                posterImage: true,
                errorDisplay: false
                // controlBar : false
            }, () => {
                // video.setAttribute('width', innerWidth)
                myPlayer.play()
            })
        }
    }
</script>

<style scoped>
    .video-js {
        width: 100%;
        height: 2.8rem;
    }

</style>
