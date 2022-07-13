<template>
<div class="flex w-full h-[720px] items-center justify-center bg-start">
    <LogoHeader />
    <div class="flex flex-col border-box border-[4px] gap-4 py-[30px] px-[5em] rounded-lg shadow-md shadow-gray-300 bg-white">
        <span>Login Pirates</span>
        <span class="text-gray-400">Username</span>
        <input type="text" v-model="username">
        <span class="text-gray-400">Password</span>
        <input type="password" v-model="password">
        <button @click="login" class="btn btn-login">Login</button>
        <nuxt-link to="/register" class="btn btn-register">Buat Akun</nuxt-link>
        <br><br>
    </div>
    <UIDialogBox/>
</div>
</template>

<script>
import {
    Howl,
    Howler
} from 'howler';

import LogoHeader from '@/components/logo'
import UIDialogBox from '@/components/UI/dialog_box';

export default {
    data() {
        return {
            username: '',
            password: '',
        }
    },
    components: {
        LogoHeader,
        UIDialogBox,
    },
    methods: {
        login() {
            this.$server.host.send(JSON.stringify({
                // cmd 1001 = login
                cmd: 1001,
                data: {
                    user: this.username,
                    pass: this.password,
                }
            }));
        },
    },
    async mounted() {
        // connect websocket
        try {
            this.$server.host.onopen = (event) => {
                console.log('connected')
            }
            this.$server.host.onmessage = (event) => {
                let data = JSON.parse(event.data)
                this.$server.msg = data
                console.log(event.data)
            }
        } catch (error) {
            console.log(error)
        }
        /*this.$options.sockets.onmessage = (event) => {
            let data = JSON.parse(event.data)
            this.$server.msg = data
            console.log(event.data)
        }*/
        setInterval(() => {
            if (this.$server.msg != null) {
                if (this.$server.msg.player != null) {
                    this.$server.isLogin = true
                    this.$router.push('/')
                }
            }
        }, 1000)

        var sound = new Howl({
            src: ['/audio/bg.mp3'],
            loop: true,
        });
        
        // Clear listener after first call.
        sound.once('load', function () {
            //sound.play();
        });

    }
}
</script>
