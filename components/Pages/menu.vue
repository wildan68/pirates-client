<template>
<div class="list_menu">
    <button @click.prevent="changePage(menu.toPage)" v-for="(menu, i) in $server.msg.listMenu" :key="i" class="bg-white border-box border-[4px] gap-[10px] py-[20px] px-[10px] rounded-lg flex flex-col items-center text-[12px]">
        <img :src="`/assets/ico/${menu.icon}`" class="w-[48px] h-[48px]"/>
        {{ menu.name }}
    </button>
</div>
</template>

<script>
export default {
    methods: {
        changePage(page) {
            // cmd 1003 = change page
            this.$server.host.send(JSON.stringify({
                cmd: 1003,
                data: {
                    page: page,
                }
            }));
        },
    }
}
</script>

<style scoped>
.list_menu {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 10px;
}
</style>
