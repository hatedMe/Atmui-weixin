<template>
<div class="content">
    <scroll-view class="scroll-view" scroll-y="scroll-y" scroll-with-animation="true">
        <div class="content-block-title" @click="clickHandle">基础组件</div>
        <div class="list">
            <ul>
                <ListItem href="/pages/button/main" licon="icon-remind" subtitle="6">Button按钮组件</ListItem>
                <ListItem href="/tab" licon="icon-integral" subtitle="小组件">Tab组件</ListItem>
                <ListItem licon="icon-manage" subtitle="可定制">Icon图标组件</ListItem>
                <ListItem href="/pages/list/main" licon="icon-other" subtitle="7">List列表组件</ListItem>
                <ListItem licon="icon-send" subtitle="8">Input表单组件</ListItem>
                <ListItem href="/switch" licon="icon-send" subtitle="多样化">Switch组件</ListItem>
            </ul>
        </div>

        <div class="content-block-title">视觉规范</div>
        <div class="list">
            <ul>
                <!-- <ListItem href="/button" licon="icon-remind" subtitle="6">Button按钮组件</ListItem>
                <ListItem href="/tab" licon="icon-integral" subtitle="小组件">Tab组件</ListItem>
                <ListItem licon="icon-manage" subtitle="可定制">Icon图标组件</ListItem>
                <ListItem href="/list" licon="icon-other" subtitle="7">List列表组件</ListItem>
                <ListItem licon="icon-send" subtitle="8">Input表单组件</ListItem>
                <ListItem href="/switch" licon="icon-send" subtitle="多样化">Switch组件</ListItem> -->

                <!-- <ListItem href="/swipeout" licon="icon-flip">滑动删除</ListItem>
                <ListItem href="/map" licon="icon-coordinates">腾讯地图</ListItem> -->
                <ListItem href="/pages/form/main" subtitle="可定制" licon="icon-message">Form组件系列</ListItem>
                <!-- <ListItem href="/search" licon="icon-search">SearchBar搜索栏</ListItem>
                <ListItem href="/searchhistory" licon="icon-search">Search搜索历史列表</ListItem>
                <ListItem href="/upload" licon="icon-picture">Upload文件上传</ListItem>
                <ListItem href="/picker" licon="icon-flip">Picker选择</ListItem>
                <ListItem href="/uprefresh" licon="icon-flip">上拉刷新</ListItem> -->
            </ul>
        </div>
    </scroll-view>
    <nav class="bartab">
        <!-- <a class="bar-tab-item active">
            <Icon type="icon-remind" size="28" />
            <span class="tab-label">基础</span>
        </a> -->
        <a class="bar-tab-item active">
            <Icon type="icon-integral" size="28" />
            <span class="tab-label">组件</span>
        </a>
        <a class="bar-tab-item">
            <Icon type="icon-document" size="28" />
            <span class="tab-label">规范</span>
        </a>
        <a class="bar-tab-item" href="/pages/about/main">
            <Icon type="icon-accessory" size="28" />
            <span class="tab-label">关于</span>
        </a>
    </nav>
</div>
</template>

<script>
import List from "@/components/List/List.vue";
import ListItem from "@/components/List/ListItem.vue";

import Icon from '@/components/Icon/Icon.vue';
import Button from '@/components/Button/Button.vue';

import request from '../../request/request.js';

export default {
    components: {
        Icon,
        Button,
        List,
        ListItem
    },
    data() {
        return {
            motto: 'Hello World',
            userInfo: {},
            mainTitle: 'text',
            subtitle: 'miniText'
        }
    },
    methods: {
        clickHandle (ev){
            console.log( ev );
        }  
    },
    mounted() {

        request.defaults.timeout = 1000;

        // request('https://github.com').then(res =>{
        //     console.log( res );
        // }).catch(err =>{
        //     console.log(err);
        // })

        request.head('https://github.com').then(res =>{
            console.log( res );
        }).catch(err =>{
            console.log(err);
        })
        
        // console.log( request.defaults );
    }
}
</script>

<style>
.content-block-title {
    position: relative;
    overflow: hidden;
    margin: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 20px;
    text-transform: uppercase;
    line-height: 1.5;
    color: #6d6d72;
    margin: 12px;
}

.content {
    height: 100vh;
    width: 100vw;
    background-color: #f5f5f5;
    overflow: hidden;
}

.scroll-view {
    position: absolute;
    top: 0;
    width: 100%;
    height: auto;
    bottom: 26px;
}
</style>
