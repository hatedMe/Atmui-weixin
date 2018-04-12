<template>
<div>
    <div class="list">
        <!-- <ul>
            <li class="list-item">
                <a class="list-item-inner" href="/pages/color/main">
                    <p class="list-main-title">
                        <Icon type="icon-remind" size="24" />
                        <span>Button按钮</span>
                    </p>
                    <p class="list-item-after">
                        <span>小标题</span>
                        <Icon type="icon-enter" size="20" />
                    </p>
                </a>
            </li>
            <li class="list-item">
                <a class="list-item-inner">
                    <p class="list-main-title">
                        <Icon type="icon-integral" size="24" />
                        <span>{{ mainTitle }}</span>
                    </p>
                    <p class="list-item-after">
                        <span>{{ subtitle }}</span>
                        <Icon type="icon-enter" size="20" />
                    </p>
                </a>
            </li>
        </ul> -->
        456
    </div>

    <!-- <nav class="bartab">
        <a class="bar-tab-item">
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
    </nav> -->

</div>
</template>

<script>
// import Lists from '../../Atmui/components/List/List.vue';
// import Icon from '../../Atmui/components/Icon/Icon.vue';

export default {
    data() {
        return {
            motto: 'Hello World',
            userInfo: {},
            mainTitle: 'text',
            subtitle: 'miniText'
        }
    },
    mounted() {
        console.log(456);
    }
}
</script>

<style>
p {
    font-size: 20px;
}
</style>
