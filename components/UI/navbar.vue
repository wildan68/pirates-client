<template>
<div class="border-box border-2 fixed bottom-0 left-0 right-0 h-[50px] bg-white ">
    <div class="flex gap-[10px] justify-center mt-[-20px]">
        <button class="btn border border-box p-6 flex flex-col gap-[10px] bg-white" v-for="(menu, i) in menu" :key="i" @click.prevent="changePage(menu.page)">
            {{ menu.label }}
        </button>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            menu: [{
                label: 'Chat Dunia',
                page: 'chat',
            }, {
                label: 'Menu',
                page: 'menu',
            }, {
                label: 'Keluar',
                page: 'logout',
            }]
        }
    },
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
