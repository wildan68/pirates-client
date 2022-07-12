<template>
<div class="list_menu">
    <div v-for="(menu, i) in $server.msg.listMenu" :key="i" class="w-[] bg-white border-box border-[4px] gap-[10px] py-[20px] px-[10px] rounded-lg flex flex-col items-center text-[12px]">
        {{ menu.name }}
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.list_menu {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 10px;
}

</style>