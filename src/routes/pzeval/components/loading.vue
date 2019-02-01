<template>
    <div class="l-full l-box-center wraper">
        <div class="spinner">
            <div class="double-bounce1"/>
            <div class="double-bounce2"/>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Loading'
  }
</script>

<style scoped>
    .wraper {
        z-index: 10;
    }

    .spinner {
        width: .8rem;
        height: .8rem;
        position: relative;
    }

    .double-bounce1,
    .double-bounce2 {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #67CF22;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        animation: bounce 2.0s infinite ease-in-out;
    }

    .double-bounce2 {
        animation-delay: -1.0s;
    }

    @keyframes bounce {
        0%,
        100% {
            transform: scale(0.0);
        }
        50% {
            transform: scale(1.0);
        }
    }
</style>
