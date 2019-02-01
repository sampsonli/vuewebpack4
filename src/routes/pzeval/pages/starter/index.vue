<style scoped src="./style.less" lang="less"></style>
<template>
    <div class="l-full l-flex-column container">
        <template v-if="detail">
            <div class="header l-relative l-box-center">
                <span>{{ detail.title }}</span>
                <img
                    class="l-full logo"
                    :src="detail.detailpicture">
            </div>
            <div class="l-flex-1 l-relative">

                <div class="l-full l-scroll-y">
                    <div class="flogo"/>
                    <div class="ftips">
                        测前须知
                    </div>
                    <div
                        class="guide"
                        v-html="detail.appguidecontent">
                        &nbsp;
                    </div>
                </div>
            </div>
            <div class="footer l-box-center">
                <div
                    class="btn"
                    v-tap="{methods: goInfo}">开始测试</div>
            </div>

        </template>
        <template v-else>
            <loading/>
        </template>
    </div>
</template>

<script>
    import { aTypes, ns } from '../../store'
    import Loading from '../../components/loading'

    export default {
        data () {
            return {
                // platform
            }
        },
        computed: {
            detail () {
                return this.$store.state[ns].detail
            },
            token () {
                return this.$route.query.token
            }
        },
        methods: {
            goInfo () {
                this.$router.push({ name: 'pzeval_info', query: this.$route.query })
            }
        },
        components: {
            Loading
        },
        mounted () {
            this.detail || this.$store.dispatch(aTypes.getInfo, { token: this.token })
        }

    }
</script>
