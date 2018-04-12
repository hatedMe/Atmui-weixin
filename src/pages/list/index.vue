

<template>
<div class="">
    <div class="content-block-title">基础</div>
    <div class="list">
        <ul>
            <ListItem>消费记录</ListItem>
            <ListItem>提现</ListItem>
        </ul>
    </div>
    <div class="content-block-title">前面带图标</div>
    <div class="list">
        <ul>
            <ListItem licon="icon-like">消费记录</ListItem>
            <ListItem licon="icon-interactive">提现</ListItem>
        </ul>
    </div>

    <div class="content-block-title">后面带小说明</div>
    <div class="list">
        <ul>
            <ListItem licon="icon-like" subtitle="200">消费记录</ListItem>
            <ListItem licon="icon-interactive" subtitle="146">提现</ListItem>
        </ul>
    </div>
</div>
</template>


<script>
import ListItem from '../../components/List/ListItem.vue';
export default {
    components: {
        ListItem,
    }
}
</script>


<style lang="less">
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
</style>

