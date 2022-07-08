<template>
<div class="flex w-full h-[720px] items-center justify-center bg-start">
    <LogoHeader/>
    <div class="flex flex-col border-box border-[4px] gap-4 py-[20px] px-[5em] rounded-md shadow-sm shadow-gray-300 bg-white">
        <span>Buat Akun</span>
        <span class="text-gray-400">Username</span>
        <input type="text">
        <span class="text-gray-400">Email</span>
        <input type="text" placeholder="@">
        <span class="text-gray-400">Password</span>
        <input type="password">
        <span class="text-gray-400">Ulangi Password</span>
        <input type="password">
        <button class="btn btn-login">Register</button>
        <nuxt-link to="/login" class="btn btn-register"><i class="bi bi-arrow-left"></i> Kembali</nuxt-link>
        <br><br>
    </div>
</div>
</template>

<script>
import LogoHeader from '@/components/logo'

export default {
    data() {
        return {
            username: '',
            password: '',
        }
    },
    components: {
        LogoHeader,
    },
    async mounted() {
        this.$options.sockets.onmessage = (event) => {
            let data = JSON.parse(event.data)
            this.$server.msg = data
            console.log(event.data)
        }
        setInterval(() => {
            if (this.$server.msg != null) {
                if (this.$server.msg.player != null) {
                    this.$server.isLogin = true
                    this.$router.push('/')
                }
            }
        }, 1000)
    }
}
</script>
