<template>
    <div>
        <van-nav-bar
        title="标题"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        />
        <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        >
        <van-cell
            v-for="item in list"
            :key="item"
            :title="item"
        />
        </van-list>
    </div>
</template>
<script>
import { List ,Cell,NavBar} from 'vant';
export default {
    components :{
        [List.name]:List,
        [Cell.name]:Cell,
        [NavBar.name]:NavBar
    },
    data() {
        return {
        list: [],
        loading: false,
        finished: false
        };
    },

    methods: {
        onLoad() {
        // 异步更新数据
        setTimeout(() => {
            for (let i = 0; i < 10; i++) {
            this.list.push(this.list.length + 1);
            }
            // 加载状态结束
            this.loading = false;

            // 数据全部加载完成
            if (this.list.length >= 40) {
            this.finished = true;
            }
        }, 500);
        },
         onClickLeft() {
             this.$router.go(-1);
        },
        onClickRight() {
             this.$router.push('select');
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>
