<template>
    <div class="l-full l-flex-column container">
        <div class="header">
            <div class="h-ct">
                <i
                    class="h-back"
                    v-tap="{methods: back}"/>
                <span class="h-title">详情{{ test }}</span>
            </div>
        </div>

        <div class="l-flex-1 l-relative">

            <div class="l-full l-scroll-y">
                <div class="tit">
                    如果东周列国是一个班级，那这事就好理解了
                </div>
                <div class="art-info">
                    <span class="author">作者：混日子</span>
                    <span class="date">2018-07-09</span>
                    <span class="readt">208381次阅读</span>
                </div>
                <div class="content">
                    <!--<ul><li><img class="image" src="~assets/cartoon/logo.png"/> </li></ul>-->

                </div>
                <div class="favor">
                    <!--<div class="like">-->
                    <!--喜欢-->
                    <!--</div>-->
                    <div class="nlike">
                        不喜欢
                    </div>
                </div>

                <div class="comm">
                    <div class="c-title">
                        评论（45）
                    </div>
                    <ul class="comm-list">
                        <li>
                            <div class="comm-tit"><img
                                class="avator"
                                src="../../assets/logo.png">可爱的小蜘蛛</div>
                            <div
                                class="comm-ct"
                                v-tap="{methods: viewCommons}">
                                我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是。
                            </div>
                            <ul class="reply-list">
                                <li class="reply-item">
                                    <span class="replier">可爱的小蜘蛛：</span><span class="reply-ct">应广大小伙伴的要求，我们</span>
                                </li>
                                <li class="reply-item">
                                    <span class="replier">可爱的小蜘蛛：</span><span class="reply-ct">应广大小伙伴的要求，我们</span>
                                </li>
                            </ul>
                            <div class="view-all">查看全部6条回复 ></div>
                            <div class="comm-opt"><i class="ping"/><span class="star"><i
                                class="star-logo"/>111</span></div>
                        </li>
                        <li>
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
                            <div class="view-all"/>
                            <div class="comm-opt"/>
                        </li>
                    </ul>
                </div>

            </div>

        </div>
        <div class="commons l-flex-row">
            <div class="c-input">在此处发表伟大言论</div>
            <div class="c-pl l-box-center">1123</div>
            <div class="c-like l-box-center">423</div>

        </div>
        <!--<hand-write></hand-write>-->
        <!--<hand-write></hand-write>-->

    </div>
</template>
<script>
    // import {platform} from '~/common/util'
    // import HandWrite from '~components/handwrite'
  import { ns } from '../../store'

  export default {
    data () {
      return {
        // platform
      }
    },
    computed: {
      test () {
        return this.$store.state[ns].test
      }
    },
    methods: {
      back () {
        history.back()
      },
      viewCommons () {
        this.$router.push({ name: 'cartoon/comment', params: { art_id: this.$route.params.art_id, comm_id: 123 } })
      }
    },
    components: {},
    mounted () {
      console.log(module)
      // console.log(this.$route)
    }

  }
</script>
<style scoped src="./style.css"></style>
