

<template>
    <li class="list-item" @click="clickHandle">
        <div v-if="!href" class="list-item-inner">
            <p class="list-main-title">
                <Icon v-if="licon" :type="licon" size="24" />
                <span> <slot>{{ mainTitle }}</slot> </span>
            </p>
            <p class="list-item-after">
                <span v-if="subtitle">{{ subtitle }}</span>
                <Icon type="icon-enter" size="24" />
            </p>
        </div>
        <a v-else :href="href" class="list-item-inner">
            <p class="list-main-title">
                <Icon v-if="licon" :type="licon" size="24" />
                <span> <slot>{{ mainTitle }}</slot> </span>
            </p>
            <p class="list-item-after">
                <span v-if="subtitle">{{ subtitle }}</span>
                <Icon type="icon-enter" size="24" />
            </p>
        </a>
    </li>
</template>


<script>
    import Icon from '../components/Icon/Icon.vue';
    export default {
        name: 'ListItem',
        components: {
            Icon ,
        },
        props: {
            mainTitle: {
                type: String,
                default: ''
            },
            subtitle: {
                type: String,
                default: ''
            },
            licon: {
                type: String,
                default: ''
            },
            href:{
                type: String,
                default: ''
            }
        },
        methods: {
            clickHandle(ev){
                this.$emit('click' ,ev)
            }
        }
    }
</script>

