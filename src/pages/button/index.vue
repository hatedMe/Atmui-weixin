

<template>
<div class="wingpadding-xl ButtonsMain">
    <p>基础演示</p>
    <Buttons>按钮</Buttons>
    <Buttons type="primary">primary</Buttons>
    <Buttons type="success">success</Buttons>
    <Buttons type="warn">warn</Buttons>
    <Buttons type="submit">submit</Buttons>
    <Buttons type="info">info</Buttons>
    <Buttons type="cancel">cancel</Buttons>
    <p>块级按钮</p>
    <Buttons type="primary" long>primary</Buttons>
    <Buttons type="success" long>success</Buttons>
    <Buttons type="warn" long>warn</Buttons>
    <Buttons type="submit" long>submit</Buttons>
    <Buttons type="info" long>info</Buttons>
    <Buttons type="cancel" long>cancel</Buttons>

    <p>带图标</p>
    
    <Buttons type="primary" licon="icon-homepage">primary</Buttons>
    <Buttons type="success" licon="icon-like"> success </Buttons>
    <Buttons type="warn" licon="icon-setup"> warn </Buttons>
    <Buttons type="submit" licon="icon-collection">submit</Buttons>
    <Buttons type="info" liocn="icon-prompt">info</Buttons>
    <Buttons type="cancel" licon="icon-delete">cancel</Buttons>

    <p>线框按钮</p>

    <Buttons type="primary" outline>primary</Buttons>
    <Buttons type="success" outline>success</Buttons>
    <Buttons type="warn" outline>warn</Buttons>
    <Buttons type="submit" outline>submit</Buttons>
    <Buttons type="info" outline>info</Buttons>
    <Buttons type="cancel" outline>cancel</Buttons>
</div>
</template>


<script>
import Buttons from '@/components/Button/Buttons';

export default {
    components: {
        Buttons,
    }
}
</script>


<style lang="less">
.ButtonsMain {
    padding: 10px;
    p {
        margin-bottom: 10px;
    }
    a {
        margin-bottom: 8px;
    }
}
</style>

