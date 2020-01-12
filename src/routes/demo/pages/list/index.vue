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
                    漫话历史2-{{ uname }}
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
    import model from '../../models/testModel'
    export default {
        name: 'List',
        data () {
            return {
                ns: model.ns
            }
        },
        methods: {
            changeTitle () {
                // console.log(model)
                model.fetchName(Math.floor(Math.random() * 100))
            }
        },
        computed: {
            uname () {
                return this.$store.getters[model.ns + '/uname']
            }
        },
        mounted () {
        }
    }
</script>
