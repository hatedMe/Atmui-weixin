<template>
    <a :class=" 'button ' + type + ( long ? ' block' : '') + ( outline ? ' outline' : '' ) " @click="handleClick" >
        <Icon v-if="licon" :type="iconType" />
        <span><slot></slot></span>
    </a>
</template>

<script>
    import Icon from '../Icon/Icon';
    export default {
        components: {
          Icon,  
        },
        name: 'Buttons',
        computed: {
            iconType() {
                return this.licon === '' && typeof this.licon !== 'undefined' ? 'icon-enter' : this.licon
            }
        },
        props:{
            type:{
                type: String,
                default:''
            },
            size:{
                type:String,
                default:''
            },
            long:{
                type:Boolean,
                default:false
            },
            licon:{
                type:String,
                // default:''
            },
            outline:{
                type:Boolean,
                default:false
            }
        },
        methods:{
            handleClick (event){
                this.$emit('click', event);
            }
        }
    }
</script>


<style lang="less">
    

</style>


