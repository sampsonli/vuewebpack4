<style scoped src="./style.css"></style>
<template>
    <div class="l-full l-flex-column container">
        <div class="header">
            <div
                class="h-ct"
                v-tap="{methods: changeTitle}"
            >
                <i class="h-back" />
                <span class="h-title">
                    漫话历史{{ hi }}-{{ me }}
                </span>
            </div>
        </div>
        <div class="l-flex-1 l-relative">
            <div
                class="l-full"
                ref="container"
            >
                <ul
                    class="content"
                    ref="content"
                >
                    <div class="time-line" />
                    <li
                        :key="item"
                        class="item art"
                        v-for="item in 30"
                        v-tap="{methods: goDetail, art_id: item}"
                    >
                        <div class="l-flex-row">
                            <i class="logo_02" /><img
                                class="logo"
                                src="../../assets/logo.png"
                            >
                            <div class="l-flex-1 l-relative art-info">
                                <div class="l-full">
                                    <div class="art-m">
                                        这是一段文字， 测试用的的考虑过克拉克邓肯如果盛开的玫瑰
                                    </div>
                                    <div class="art-s">
                                        一句话简介一句话简介一句话简介
                                    </div>
                                    <div class="art-i">
                                        111739
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import model from '../../models/test'
    import { Scroller } from 'scroll-accelerate'
    export default {
        name: 'List',
        data () {
            return {
                ns: model.ns
            }
        },
        methods: {
            goDetail ({ art_id }) {
                this.$router.push({ name: 'demo/detail', params: { art_id } })
            },
            changeTitle () {
                model.act.getAa(Math.floor(Math.random() * 100))
            }
        },
        components: {
            // HandWrite
        },
        computed: {
            hi () {
                return this.state.aa
            },

            me () {
                return this.get('me', model.ns)
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
