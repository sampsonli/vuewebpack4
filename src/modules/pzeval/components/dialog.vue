<template>
    <transition name="fade">
        <div class="wraper">

            <div class="content">
                <div class="top">
                    <span class="tit">提示</span>
                    <span>确认退出？</span>
                </div>
                <div class="btns">
                    <div
                        class="exit"
                        v-tap="{methods: () => $emit('close')}">退出
                    </div>
                    <div class="cancel">取消</div>
                </div>
            </div>

        </div>
    </transition>
</template>

<script>
  export default {
    name: 'Dialog'
  }
</script>

<style scoped>
    .wraper {
        position: absolute;
        z-index: 2;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, .8)
    }

    .content {
        width: 2.7rem;
        height: 1.71rem;
        background: #FFFFFF;
        border-radius: .12rem;
        display: flex;
        flex-direction: column;
        transform: scale(1);
        transition: transform .5s ease;
    }

    .top {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #333333;
        text-align: center;
        font-size: .16rem;
        line-height: .3rem;

    }

    .tit {
        margin-top: -.1rem;
        margin-bottom: .16rem;
        font-size: .18rem;
        color: #333333;
        font-weight: bold;
    }

    .btns {
        height: .45rem;
        border-top: .01rem solid #EEEEEE;
        line-height: .45rem;
        display: flex;
        flex-direction: row;
        text-align: center;
        font-size: .17rem;
    }

    .exit {
        flex: 1;
        border-right: .01rem solid #EEEEEE;
        color: #333333;

    }

    .cancel {
        flex: 1;
        color: #0076FF;

    }

    .fade-enter-active .content, .fade-leave-active .content, .fade-leave-active {
        transition: transform .3s;
    }

    .fade-enter .content, .fade-leave-to .content {
        transform: scale(0);
    }
</style>
