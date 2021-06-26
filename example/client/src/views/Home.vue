<template>
    <div>
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
        >
            <van-cell 
                v-for="item in list" 
                :key="item.id"
                @click="handleClick(item.id)"
            >
                <div class="list">
                    <div class="left" >
                        <img :src="item.img" alt="">
                    </div>
                    <div class="right">
                        <div class="title">
                            {{item.title}}
                        </div>
                    </div>
                </div>
            </van-cell>
        </van-list>
    </div>
</template>
<script>
import {List, Cell, Toast} from 'vant';
export default {
    components:{
        [List.name]: List,
        [Cell.name]: Cell
    },
    data(){
        return {
            loading: false,
            finished: false,
            list: []
        }
    },
    methods: {
        onLoad(){
            fetch('./article/lists')
                .then(res => res.json())
                .then(res => {
                    if(res.status === 200){
                        this.loading = false;
                        this.finished = true;
                        this.list = res.data;
                    }else{
                        Toast.fail(res.errMsg);
                    }
                });
            // setTimeout(()=>{
            //     this.loading = false;
            //     this.finished = true;
            //     this.list = [
            //         {  
            //             id:1,
            //             title:'城市',
            //             img:'https://images.unsplash.com/photo-1623055918989-b4b50c7bc1a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
            //         },
            //         {
            //             id:2,
            //             title:'海滩',
            //             img:'https://images.unsplash.com/photo-1623167898501-ba0eb52ba92a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80'
            //         }
            //     ];
            // }, 1000);
        },

        handleClick(id){
            this.$router.push({
                path:'./detail',
                query:{
                    id
                }
            });
        }
    }
}
</script>
<style scoped>
    .list {
       display: flex;
       flex-direction: row; 
    }
    .list .left, img {
        width: 640px;
        height: 320px;
        border-radius: 10px;
    }
    .list .right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 15px;
    }
    .list .right .title {
        font-size: 18px;
        color: blue;
    }
</style>