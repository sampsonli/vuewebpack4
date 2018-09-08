<style scoped src="./style.less" lang="less"></style>
<template>
    <div class="l-full l-flex-column container">
        <div class="l-flex-1 l-relative">
            <div class="l-full l-scroll-y">
                <div class="navbar">
                    <span class="pre">上一题</span>
                    <span class="navstat"><i>45</i>/91</span>
                </div>
                <div class="statbar">
                    <i style="width: 50%"/>
                </div>
                <div class="title">
                    我经常头晕脑胀。我经常头晕脑胀。我经常头晕脑胀。我经常头晕脑胀。
                </div>
                <ul class="qsct">
                    <li class="qsitem">
                        <div class="desc">没有：自觉无该项症状（或问题）。</div>
                        <i class="option"/>
                    </li>
                    <li class="qsitem">
                        <div class="desc">很轻：自觉有该项症状，但无实际影响或影响轻微。</div>
                        <i class="option"/>
                    </li>
                    <li class="qsitem">
                        <div class="desc">没有：自觉无该项症状（或问题）。</div>
                        <i class="option"/>
                    </li>
                    <li class="qsitem">
                        <div class="desc">没有：自觉无该项症状（或问题）。</div>
                        <i class="option"/>
                    </li>

                </ul>
            </div>
        </div>
        <div class="footer">
            <div
                class="btn"
                v-tap="{methods: () => dialogShow = true}">
                提交
            </div>
        </div>
        <my-dialog
            v-if="dialogShow"
            @close="dialogShow = false; backFn && backFn()"/>
    </div>
</template>
<script>
    import MyDialog from '../../components/dialog'
    import { aTypes, ns } from '../../store'
    import Loading from '../../components/loading'
    export default {
        data () {
            return {
                // platform
                dialogShow: false,
                backFn: null
            }
        },
        computed: {
            question () {
                return this.$store.state[ns].question
            },
            token () {
                return this.$route.query.token
            }
        },
        components: {
            MyDialog
        },
        beforeRouteLeave  (to, from, next) {
            if (~to.path.indexOf('info')) {
                this.backFn = next
                this.dialogShow = true
            } else {
                next()
            }
        },
        methods: {
        },
        mounted () {
            this.question || this.$store.dispatch(aTypes.getQuestion, { token: this.token })
        }

    }
</script>
