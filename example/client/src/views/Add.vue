<template>
    <div>
        <van-uploader
            :max-count="1"
            v-model="fileList" multiple 
            :after-read="afterRead"
        />

        <van-cell-group>
            <van-field label="文章标题" placeholder="请输入文章标题" v-model="title"/>
        </van-cell-group>
        <van-button type="primary" @click="handleAdd" class="add-button">
            提交
        </van-button>
    </div>
</template>
<script>
import {Uploader, CellGroup, Field, Button, Toast} from 'vant'
export default {
    components: {
        [Uploader.name]: Uploader,
        [CellGroup.name]: CellGroup,
        [Field.name]: Field,
        [Button.name]: Button
    },
    data(){
        return {
            fileList: [],
            title:'',
            img:''
        }
    },
    methods:{
        afterRead(file){
            console.log(file);
            this.img = file.content;
        },
        handleAdd(){
            const data = {
                title: this.title,
                img: this.img
            } ;
            console.log(data);
            fetch('/article/create', {
                method: 'post',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(res => {
                if(res.status === 200){
                    Toast.success('文章发布成功');
                    this.$router.push('/');
                }else{
                    Toast.fail(res.errMsg);
                }
            });
        }
    }
}
</script>
<style scoped>
    .add-button {
        position: absolute;
        left: 0;
        bottom: 80px;
        width: 100%;
    }
</style>