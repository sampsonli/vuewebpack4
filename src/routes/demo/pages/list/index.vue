<style scoped src="./style.css"></style>
<template>
    <div class="l-full l-flex-column container">
        <div class="header">
            <div class="h-ct">
                <i class="h-back"/>
                <span class="h-title">漫话历史{{ lichun }}</span>
            </div>
        </div>
        <div class="l-flex-1 l-relative">

            <div
                class="l-full"
                ref="container">
                <ul
                    class="content"
                    ref="content">
                    <div class="time-line"/>
                    <!--<li class="item period">
                        <div><i class="logo_01"/><span class="l-title">春秋战国</span><span class="s-title">公元前770年—公元前221年</span>
                        </div>
                    </li>-->
                    <li
                        :key="item"
                        class="item art"
                        v-for="item in 30"
                        v-tap="{methods: goDetail, params: {art_id: item}}">
                        <div class="l-flex-row"><i class="logo_02"/><img
                            class="logo"
                            src="../../assets/logo.png">
                            <div class="l-flex-1 l-relative art-info">
                                <div class="l-full">
                                    <div class="art-m">
                                        这是一段文字， 测试用的的考虑过克拉克邓肯如果盛开的玫瑰
                                    </div>
                                    <div class="art-s">一句话简介一句话简介一句话简介</div>
                                    <div class="art-i">111739</div>
                                </div>

                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
        <!--<hand-write/>-->

    </div>
</template>
<script>
    // import {platform} from '~/common/util'
    // import HandWrite from '../../components/handwrite'
    import model from '../../models/test'
    import { Scroller } from 'scroll-accelerate'

    export default {
        name: 'List',
        data () {
            return {
                // platform
                ns: model.ns
            }
        },
        methods: {
            goDetail ({ params: { art_id } }) {
                model.getAa('1123455')
                // this.$router.push({ name: 'cartoon/detail', params: { art_id } })
            }
        },
        components: {
            // HandWrite
        },
        computed: {
            lichun () {
                return this.state.aa
            },

            ddd () {
                return this.map('me')
            }
        },
        mounted () {
            let container = this.$refs.container
            let content = this.$refs.content
            const scrollerObj = new Scroller((left, top, zoom) => {
                content.style.transform = 'translate3d(' + (-left) + 'px,' + (-top) + 'px,0) scale(' + zoom + ')'
            }, {
                scrollingX: false,
                scrollingY: true
            })
            scrollerObj.setDimensions(container.offsetWidth, container.offsetHeight, content.offsetWidth, content.offsetHeight)
            container.addEventListener('touchstart', function (e) {
                scrollerObj.doTouchStart(e.touches, e.timeStamp)
                e.preventDefault()
            }, false)
            container.addEventListener('touchmove', function (e) {
                scrollerObj.doTouchMove(e.touches, e.timeStamp, e.scale)
            }, false)
            container.addEventListener('touchend', function (e) {
                scrollerObj.doTouchEnd(e.timeStamp)
            }, false)
            container.addEventListener('touchcancel', function (e) {
                scrollerObj.doTouchEnd(e.timeStamp)
            }, false)
        }
    }
</script>
