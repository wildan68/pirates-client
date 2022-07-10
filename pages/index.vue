<template>
<div class="flex flex-col bg-start h-screen py-[30px]">
    <div v-if="$server.msg != null" class="flex flex-col gap-[20px] px-[24px]">
        <RunningText/>
        <CardPlayer :msg="$server.msg" />
        <div v-if="$server.msg.player != null" class="w-full bg-white border-box border-[4px] gap-[10px] py-[30px] px-[5em] rounded-lg flex flex-col items-center">
            <div class="flex gap-[10px] p-[10px] bg-green-200 text-green-600 rounded-md">
                <i class="bi bi-bullseye"></i> <b>Player Online : {{ $server.msg.playeronline}}</b>
            </div>
            <span>Total Gold : {{ $server.gold($server.msg.dataBoard.totalGold) }}</span>
            <span>Waktu : {{ $server.msg.dataBoard.minutes }}:{{ $server.msg.dataBoard.seconds }}</span>
            <span>Total Player : {{ $server.msg.dataBoard.totalUser }}</span>
            Pemenang Terakhir : {{ $server.msg.dataBoard.lastwinner.nickname }}<br>
            <br>
            <UIDialogAddGold v-if="addGoldDialog" :msg="$server.msg" />
            <button class="btn btn-common text-white" @click.prevent="addGoldDialog = !addGoldDialog">Tambah Gold</button>
            <div class="fixed right-0">
                <button class="border-box bg-white px-8 py-6 border-2 text-[24px] text-yellow-700" @click.prevent="listPlayer = !listPlayer">
                    <i class="bi bi-person-lines-fill"></i>
                </button>
            </div>
            <div class="fixed right-0 w-[80%] top-0 bottom-0 border border-box p-[20px] bg-white flex flex-col" v-if="listPlayer">
                <button class="absolute top-[20px] right-[20px] border-box bg-white p-4 border-2 text-yellow-700" @click.prevent="listPlayer = !listPlayer">
                    <i class="bi bi-x-lg"></i>
                </button>
                <h2 class="rainbow text-[18px] font-[600]">Player Sedang Bermain</h2>
                <ul class="flex flex-col gap-[10px] mt-[20px]">
                    <li v-for="(player, i) in $server.msg.dataBoard.player" :key="i">
                        <b>{{ player.char.nickname }}</b> : {{ $server.gold(player.char.gold) }}
                    </li>
                </ul>
            </div>
        </div>
        <Navbar/>
    </div>
    <UIDialogBox/>
</div>
</template>

<script>
import UIDialogBox from '@/components/UI/dialog_box';
import CardPlayer from '@/components/UI/card_player';
import UIDialogAddGold from '@/components/UI/dialog_add_gold';
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
    CardPlayer,
    UIDialogBox,
    UIDialogAddGold,
    Navbar,
    RunningText
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
