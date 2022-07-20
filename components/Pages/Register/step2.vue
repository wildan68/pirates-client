<template>
    <div class="flex flex-col border-box border-[4px] gap-4 py-[20px] px-[5em] rounded-md shadow-sm shadow-gray-300 bg-white">
        Buat Nickname
        <input type="text" v-model="nickname">
        <button class="btn btn-login" @click.prevent="onCreate">Buat Akun</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nickname: '',
        }
    },
    methods: {
        onCreate() {
            this.$server.host.send(JSON.stringify({
                // cmd 1005 = custom notif
                cmd: 1011,
                data: {
                    nick: this.nickname,
                }
            }))
            return;
        }
    }
}
</script>