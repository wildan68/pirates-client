<template>
<div class="fixed bottom-[30px] w-full justify-center px-[3em] z-50" ref="dialogBox" v-if="$server.msg != null">
    <div class="w-full h-auto border-box border-[4px] flex flex-col gap-[10px] items-center pt-[20px] relative bg-white rounded-[20px] shadow-md">
        <span>Tambahkan Gold</span>
        <input type="number" v-model="jumlah">
        <div class="flex gap-[10px]">
            <button class="btn btn-common text-white" @click.prevent="addGold">Tambahkan</button>
            <button class="btn btn-common text-white" @click.prevent="close">Batal</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        msg: Object,
    },
    data() {
        return {
            jumlah: '',
        }
    },
    methods: {
        addGold() {
            this.$server.host.send(JSON.stringify({
                // cmd 1002 = add gold
                cmd: 1002,
                data: {
                    user: {
                        nickname: this.msg.player.char.nickname,
                        gold: this.jumlah,
                    }
                }
            }));
            //this.$root.$emit('closeAddGold')
            this.$server.draw.addGold = false;
        },
        close() {
            //this.$root.$emit('closeAddGold')
            this.$server.draw.addGold = false;
        }
    },
}
</script>
