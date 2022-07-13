<template>
<div class="flex flex-col bg-start h-screen py-[30px]">
    <div v-if="$server.msg != null" class="flex flex-col gap-[20px] px-[24px]">
        <RunningText />
        <Draw v-if="$server.msg.page == 'draw'"/>
        <Chat v-if="$server.msg.page == 'chat'"/>
        <Menu v-if="$server.msg.page == 'menu'"/>
        <MainShop v-if="$server.msg.page == 'shop'"/>
        <Inventory v-if="$server.msg.page == 'inventory'"/>
        <Navbar />
    </div>
    <UIDialogBox />
</div>
</template>

<script>
import Draw from '../components/Pages/draw.vue'
import Chat from '../components/Pages/chat.vue'
import Menu from '../components/Pages/menu.vue'
import MainShop from '../components/Pages/mainShop.vue'
import Inventory from '../components/Pages/inventory.vue'

import UIDialogBox from '@/components/UI/dialog_box';
import Navbar from '../components/UI/navbar.vue';
import RunningText from '../components/UI/running_text.vue';


export default {
    data() {
        return {
            jumlah: '',
            addGoldDialog: false,
            listPlayer: false,
        }
    },
    components: {
        Draw,
        Chat,
        UIDialogBox,
        Navbar,
        RunningText,
        Menu,
        MainShop,
        Inventory,
    },
    methods: {
        closeAddGold() {
            this.addGoldDialog = false;
        },
    },
    async mounted() {
        /*try {
            this.connection = new WebSocket('ws://localhost:3001')
            this.connection.onopen = (event) => {
                console.log('connected')
            }
            this.connection.onmessage = (event) => {
                let data = JSON.parse(event.data)
                this.msg = data
                console.log(event.data)
            }
        } catch (error) {
            console.log(error)
        }*/
        if (!this.$server.isLogin) {
            this.$router.push('/login')
        }
        this.$server.host.onmessage = (event) => {
            let data = JSON.parse(event.data)
            this.$server.msg = data
            console.log(event.data)
        }
        this.$root.$on('closeAddGold', () => {
            this.closeAddGold()
        })
    }
}
</script>
