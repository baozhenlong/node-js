<template>
    <div class="detail">
        <div class="title">{{detail.title}}</div>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    data(){
        return {
            detail: {
                id: undefined,
                title: undefined,
                img: undefined
            }
        }
    },

    created(){
        fetch('./article/detail/' + this.$route.query.id)
            .then(res => res.json())
            .then(res => {
                if(res.status === 200){
                    this.detail = res.data;
                }else{
                    Toast.fail(res.errMsg);
                }
            });
    }
}
</script>
<style scoped>
    .detial {
        padding: 20px;
        text-align: left;
    }

    .detial .title {
        font-size: 25px;
        padding-bottom: 20px;
    }
</style>