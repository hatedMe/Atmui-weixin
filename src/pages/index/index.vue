<template>
<div class="content">
    <scroll-view class="scroll-view" scroll-y="scroll-y" scroll-with-animation="true">
        <div class="content-block-title" @click="clickHandle">基础组件</div>
        <div class="list">
            <ul>
                <ListItem href="/button" licon="icon-remind" subtitle="6">Button按钮组件</ListItem>
                <ListItem href="/tab" licon="icon-integral" subtitle="小组件">Tab组件</ListItem>
                <ListItem licon="icon-manage" subtitle="可定制">Icon图标组件</ListItem>
                <ListItem href="/list" licon="icon-other" subtitle="7">List列表组件</ListItem>
                <ListItem licon="icon-send" subtitle="8">Input表单组件</ListItem>
                <ListItem href="/switch" licon="icon-send" subtitle="多样化">Switch组件</ListItem>
            </ul>
        </div>

        <div class="content-block-title">视觉规范</div>
        <div class="list">
            <ul>
                <ListItem href="/button" licon="icon-remind" subtitle="6">Button按钮组件</ListItem>
                <ListItem href="/tab" licon="icon-integral" subtitle="小组件">Tab组件</ListItem>
                <ListItem licon="icon-manage" subtitle="可定制">Icon图标组件</ListItem>
                <ListItem href="/list" licon="icon-other" subtitle="7">List列表组件</ListItem>
                <ListItem licon="icon-send" subtitle="8">Input表单组件</ListItem>
                <ListItem href="/switch" licon="icon-send" subtitle="多样化">Switch组件</ListItem>
            </ul>
        </div>
    </scroll-view>
    <nav class="bartab">
        <a class="bar-tab-item active">
            <Icon type="icon-remind" size="28" />
            <span class="tab-label">基础</span>
        </a>
        <a class="bar-tab-item">
            <Icon type="icon-integral" size="28" />
            <span class="tab-label">组件</span>
        </a>
        <a class="bar-tab-item">
            <Icon type="icon-document" size="28" />
            <span class="tab-label">示例</span>
        </a>
        <a class="bar-tab-item">
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
            subtitle: 'miniText',
            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 5]
        }
    },
    methods: {
        clickHandle (ev){
            console.log( ev );
        }  
    },
    mounted() {
        // wx.showActionSheet({
        //     itemList: ['A', 'B', 'C'],
        //     success: function(res) {
        //         console.log(res.tapIndex)
        //     },
        //     fail: function(res) {
        //         console.log(res.errMsg)
        //     }
        // })
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
