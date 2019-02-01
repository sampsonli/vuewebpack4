<style scoped src="./style.less" lang="less"></style>
<template>
    <div class="l-full l-flex-column container">
        <div class="l-flex-1 l-relative">
            <li class="l-full l-scroll-y">
                <ul class="items">

                    <li class="item">
                        <span class="title">性别</span>
                        <div class="radios">
                            <label class="sex"><input
                                class=""
                                type="radio"
                                name="sex">男</label>

                            <label class="sex"><input
                                class=""
                                type="radio"
                                name="sex">女</label>
                        </div>
                    </li>
                    <li class="item">
                        <span class="title">出生年月</span>
                        <input
                            class="dateinput"
                            type="month"
                            placeholder="请选择" >
                    </li>
                </ul>

            </li>
        </div>
        <div class="footer">
            <div
                class="btn"
                v-tap="{methods: () => $router.push({name: 'pzeval_question'})}">
                提交
            </div>
        </div>
    </div>
</template>
<script>
    import { aTypes } from '../../store'

    export default {
        data () {
            return {
                // platform
            }
        },
        methods: {
            goDetail ({ params: { art_id } }) {
                this.$router.push({ name: 'cartoon/detail', params: { art_id } })
            }
        },
        components: {},
        mounted () {
            // this.$store.dispatch(aTypes.getInfo, {})

        }

    }
</script>
