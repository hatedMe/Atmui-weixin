

<template>
<div class="">
    <div class="input-box">
        <inputItem title="名字" placeholder="请输出名字"></inputItem>
        <inputItem title="年龄" placeholder="请输出年龄"></inputItem>
        <inputItem title="邮箱" placeholder="请输出邮箱"></inputItem>
        <inputItem title="所在地" placeholder="填写所在地"></inputItem>
        <inputItem title="学校" placeholder="发现校友"></inputItem>
    </div>
</div>
</template>


<script>
import inputItem from '../../components/Form/inputItem';
export default {
    components: {
        inputItem,
    }
}
</script>


<style lang="less">

</style>

