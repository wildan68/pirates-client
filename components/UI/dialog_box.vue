<template>
<div class="hidden fixed bottom-[30px] w-full justify-center px-[3em]" ref="dialogBox" v-if="$server.msg != null">
    <div class="w-full h-[10em] border-box border-[4px] flex flex-col items-center pt-[20px] relative bg-white rounded-[20px] shadow-md" v-if="$server.msg.message">
        {{ $server.msg.message.text }}
        <button class="btn btn-common text-white absolute bottom-5" @click.prevent="close()">Tutup</button>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        close() {
            this.$server.host.send(JSON.stringify({
                // cmd 1000 = close dialog
                cmd: 1000,
            }))
        }
    },
    mounted() {
        setInterval(() => {
            if (this.$server.msg != null) {
                if (this.$server.msg.message != null) {
                    if (this.$server.msg.message.type == 1) {
                        this.$refs.dialogBox.classList.remove('hidden')
                        this.$refs.dialogBox.classList.add('flex')
                    } else {
                        this.$refs.dialogBox.classList.remove('flex')
                        this.$refs.dialogBox.classList.add('hidden')
                    }
                }
            }
        }, 1000)
    }
}
</script>
