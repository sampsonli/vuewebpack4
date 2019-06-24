<template>
    <div class="l-full l-flex-column container">
        <div class="header">
            <div class="h-ct">
                <i
                    class="h-back"
                    v-tap="{methods: back}"/>
                <span class="h-plxq">评论详情</span>
            </div>
        </div>

        <div class="l-flex-1 l-relative">

            <div class="l-full l-scroll-y">

                <div class="comm">
                    <div class="comm-tit"><img
                        class="avator"
                        src="../../assets/logo.png">可爱的小蜘蛛</div>
                    <div class="comm-ct">我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是。</div>
                    <ul class="reply-list">
                        <li class="reply-item">
                            <span class="replier">可爱的小蜘蛛：</span><span class="reply-ct">应广大小伙伴的要求，我们</span>
                        </li>
                        <li class="reply-item">
                            <span class="replier">可爱的小蜘蛛：</span><span class="reply-ct">应广大小伙伴的要求，我们</span>
                        </li>
                    </ul>
                    <div class="view-all">查看全部6条回复 ></div>
                    <div class="comm-opt"><i class="ping"/><span class="star"><i class="star-logo"/>111</span></div>
                </div>

            </div>

        </div>
        <div class="commons l-flex-row">
            <div class="c-input">在此处发表伟大言论</div>
            <div class="c-pl l-box-center">1123</div>
            <div class="c-like l-box-center">423</div>
        </div>
    </div>
</template>
<script>
    // import {platform} from '~/common/util'
    // import HandWrite from '~components/handwrite'

    export default {
        data () {
            return {
                // platform
            }
        },
        methods: {
            back () {
                history.back()
            }
        },
        components: {},
        mounted () {
            console.log(this.$route)
        }

    }
</script>
<style scoped src="./style.css"></style>
