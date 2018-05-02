<template>
    <div>
        456 {{ networkType }}
    </div>
</template>


<script>
    export default {
        data () {
            return {
                networkType : ''
            }
        },
        mounted () {
            let This = this;
            wx.getNetworkType({
  success: function(res) {
    // 返回网络类型, 有效值：
    // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
    This.networkType = res.networkType
    
  }
})
        }
    }
</script>