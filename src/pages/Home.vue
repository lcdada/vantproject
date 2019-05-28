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
        <div>
            <van-swipe>
                <van-swipe-item v-for="item in lists" :key="item.id">
                    <!-- <router-link :to="{path:'/helloWorld',query:{ id:item.id }}" class="around" @click="handleDetail"> -->
                        <img :src="item.url" @click.prevent="handleDetail">
                    <!-- </router-link> -->
                </van-swipe-item>
            </van-swipe>
        </div>
        <div>
            <van-tabs>
                <van-tab v-for="index in 8" :title="'标签 ' + index" :key="index" class="swiper_block">
                    内容 {{ index }}
                </van-tab>
            </van-tabs>
        </div>
        <div class="goods-list">
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
        <div class="footerbar">
            <van-tabbar v-model="active" class="footer-bar">
                <van-tabbar-item class="tab-item" icon="home-o">标签</van-tabbar-item>
                <van-tabbar-item class="tab-item" icon="search">标签</van-tabbar-item>
                <van-tabbar-item class="tab-item" icon="friends-o">标签</van-tabbar-item>
                <van-tabbar-item class="tab-item" icon="setting-o">标签</van-tabbar-item>
            </van-tabbar>
        </div>
    </div>
</template>
<script>
import {NavBar,Swipe, SwipeItem , Tab, Tabs,List ,Cell,Tabbar, TabbarItem, Icon } from 'vant';
export default {
     components :{
         [NavBar.name]:NavBar,
         [Swipe.name]:Swipe,
         [SwipeItem.name]:SwipeItem,
         [Tab.name]:Tab,
         [Tabs.name]:Tabs,
         [List.name]:List,
         [Cell.name]:Cell,
         [Tabbar.name]:Tabbar,
         [TabbarItem.name]:TabbarItem,
         [Icon.name]:Icon,
    },
    methods: {
        onClickLeft() {
            // Toast('返回');
        },
        onClickRight() {
            // Toast('按钮');
        },
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
            }, 500)
        },
        handleDetail () {
           
            this.$router.push('helloworld')
        }
    },
    data () {
        return {
            active: 0,
            list: [],
            loading: false,
            finished: false,
                
            lists:[
                {
                    id:"1",
                    url:"http://pic25.nipic.com/20121205/10197997_003647426000_2.jpg"
                },
                {
                    id:"2",
                    url:"http://www.cnr.cn/xjfw/btfw/2011btfw/jkwh/jkwt/20160516/W020160516492035673595.jpg"
                },
                {
                    id:"3",
                    url:"http://pic25.nipic.com/20121205/10197997_003647426000_2.jpg"
                },
                {
                    id:"4",
                    url:"http://pic18.nipic.com/20120204/8339340_144203764154_2.jpg"
                },
            ]
        }
    }
}
</script>
<style lang="stylus" scoped>
    .van-swipe-item img 
        width 100%;
        height 5rem;
    .swiper_block{
        width 100%
        height 3rem
        background #ccc
        line-height 3rem
        }
    .goods-list
        padding-bottom 1rem     
</style>
