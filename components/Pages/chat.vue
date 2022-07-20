<template>
<div class="flex flex-col gap-[20px] z-20">
    <div class="w-full bg-white border-box border-[4px] gap-[10px] py-[30px] px-[10px] rounded-lg flex flex-col items-center">
        <div class="w-full overflow-y-scroll h-[350px] flex flex-col" ref="chatBox">
            <div class="flex gap-[5px] p-[10px]" v-for="(chat, i) in $server.msg.chat" :key="i">
                <div class="w-[50px] flex items-center justify-center relative">
                    <img v-if="chat.equip.border" :src="`/assets/${chat.equip.border}`" class="w-[48px] h-[48px] absolute z-10" />
                    <div class="bg-white w-[43px] h-[43px] flex items-center justify-center  overflow-hidden">
                        <img :src="`/assets/${chat.equip.avatar}`" :class="chat.equip.shape == 'circle' ? 'w-[43px] h-[43px] object-cover rounded-full' : 'w-[43px] h-[43px] object-cover'" />
                    </div>
                </div>
                <div class="flex flex-col gap-[5px]">
                    <div class="flex gap-[10px] items-center">
                        <span :class="chat.equip.class ? `font-[600] text-[14px] ${chat.equip.class}` : 'font-[600] text-[14px]'">{{ chat.nick }}</span>
                        <img src="/assets/badge/gm_badge.png" v-if="chat.role === 1" class="w-[30px] h-[15px]" />
                    </div>
                    <span class="text-black text-[12px]">{{ chat.text }}</span>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full bg-white border-box border-[4px] gap-[10px] py-[20px] px-[10px] rounded-lg flex items-center">
        <input type="text" class="w-full" placeholder="Ketik disini.." v-model="textChat" @focus="inputFocus" @blur="inputBlur" />
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
