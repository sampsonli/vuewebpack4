<style scoped src="./style.css"></style>
<template>
    <div class="l-full l-flex-column container">
        <div class="header">
            <div class="h-ct">
                <i class="h-back"/>
                <span class="h-title">漫话历史{{ddd}}</span>
            </div>
        </div>
        <div class="l-flex-1 l-relative">
            <div class="time-line"/>
            <div class="l-full l-scroll-y">
                <ul>
                    <li class="item period">
                        <div><i class="logo_01"/><span class="l-title">春秋战国</span><span class="s-title">公元前770年—公元前221年</span>
                        </div>
                    </li>
                    <li
                        class="item art"
                        v-for="item in 3"
                        v-tap="{methods: goDetail, params: {art_id: 123}}">
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
                    <li class="item period">
                        <div><i class="logo_01"/><span class="l-title">春秋战国</span><span class="s-title">公元前770年—公元前221年</span>
                        </div>
                    </li>
                    <li
                        class="item art"
                        v-for="item in 3">
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
                    <li class="item period">
                        <div><i class="logo_01"/><span class="l-title">春秋战国</span><span class="s-title">公元前770年—公元前221年</span>
                        </div>
                    </li>
                    <li
                        class="item art"
                        v-for="item in 3">
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
    import { ns } from '../../store'

    export default {
        name: 'List',
        data () {
            return {
                // platform
                ns
            }
        },
        methods: {
            goDetail ({ params: { art_id } }) {
                this.$router.push({ name: 'cartoon/detail', params: { art_id } })
            }
        },
        components: {
            // HandWrite
        },
        computed: {
            ddd () {
                return this.map('ddd')
            }
        },
        mounted () {

        }

    }
</script>
