<template>
<div class="border-box border-2 fixed bottom-0 left-0 right-0 h-[50px] bg-white ">
    <div class="flex gap-[10px] justify-center mt-[-20px]">
        <!-- <button class="btn border border-box p-6 flex flex-col gap-[10px] bg-white" v-for="(menu, i) in menu" :key="i" @click.prevent="changePage(menu.page)">
            <img :src="`${menu.ico}`" class="w-[100px] h-[50px]" v-if="menu.ico" />
        </button> -->
        <button class="flex justify-center items-center overflow-hidden" @click.prevent="changePage('chat')">
            <img src="/png/btn_chat.png" class="h-[48px]" />
        </button>
        <button class="flex justify-center items-center overflow-hidden" @click.prevent="changePage('menu')">
            <img src="/png/btn_menu.png" class="h-[68px]" />
        </button>
        <button class="flex justify-center items-center overflow-hidden" @click.prevent="changePage('logout')">
            <img src="/png/btn_logout.png" class="h-[48px]" />
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
                ico: 'toast.png',
            }, {
                label: 'Menu',
                page: 'menu',
                ico: '/png/btn_menu.png'
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
