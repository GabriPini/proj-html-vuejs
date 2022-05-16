<template>
<div>
       <a
    v-for="(link, index) in linkList"
    :key="index"
    :href="link.href"
    :linkList="linkList"
    :class="link.class"
    > {{link.text}} </a>
 

</div>
</template>

<script>
export default {
    name:'LinkComponent',
    props:["linkList"]

}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/links.scss";

</style>

