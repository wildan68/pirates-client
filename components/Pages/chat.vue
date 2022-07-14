<template>
<div class="flex flex-col gap-[20px] z-20">
    <div class="w-full bg-white border-box border-[4px] gap-[10px] py-[30px] px-[10px] rounded-lg flex flex-col items-center">
        <div class="h-[350px] w-full flex-col flex justify-end overflow-hidden" ref="chatBox">
            <div class="flex gap-[5px]" v-for="(chat, i) in $server.msg.chat" :key="i">
                <span class="text-black">{{ chat.nick }}</span>
                <span class="text-black">:</span>
                <span class="text-black">{{ chat.text }}</span>
            </div>
        </div>
    </div>
    <div class="w-full bg-white border-box border-[4px] gap-[10px] py-[20px] px-[10px] rounded-lg flex items-center">
        <input type="text" class="w-full" placeholder="Ketik disini.." v-model="textChat" @focus="inputFocus" @blur="inputBlur"/>
        <button class="btn btn-common text-white" style="padding-left: 15px; padding-right: 15px" @click.prevent="sendChat">
            <i class="bi bi-chat-dots-fill"></i>
        </button>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            textChat: '',
            btnChat: true,
        }
    },
    methods: {
        inputFocus() {
            this.$refs.chatBox.classList.remove('h-[350px]')
            this.$refs.chatBox.classList.add('h-[100px]')
        },
        inputBlur() {
            this.$refs.chatBox.classList.remove('h-[100px]')
            this.$refs.chatBox.classList.add('h-[350px]')
        },
        sendChat() {
            if (!this.btnChat) {
                this.$server.host.send(JSON.stringify({
                // cmd 1005 = custom notif
                cmd: 1005,
                data: {
                    type: 1,
                    text: "Tunggu 10 Detik untuk mengirim kembali",
                }
                }))
                return;
            } 
            this.$server.host.send(JSON.stringify({
                // cmd 1004 = send chat
                cmd: 1004,
                data: {
                    text: this.textChat,
                }
            }));
            this.textChat = '';
            this.btnChat = false;
            setTimeout(() => {
                this.btnChat = true;
            }, 10000);
        },
    }
}
</script>
