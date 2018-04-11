

<template>
    <div>
        <p>色彩运用规范，以下就是文字用色 与背景等基本使用做说明</p>
        <ul class="color-list">
            <li class="flex">
                <span></span>
                <p>
                    <span>#FF0077</span>
                    <span>适用于品牌色</span>
                    <span>用于品牌主色</span>
                </p>
            </li>
        </ul>
    </div>
</template>


<script>
export default {

}
</script>


<style lang="less">
    .color-list{
        li {
            & > span{
                width: 50px;
                height: 50px;
                background-color: red;

            }

        }
    }
</style>

