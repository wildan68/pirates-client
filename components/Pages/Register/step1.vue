<template>
    <div class="flex flex-col border-box border-[4px] gap-4 py-[20px] px-[5em] rounded-md shadow-sm shadow-gray-300 bg-white">
        <span>Buat Akun</span>
        <span class="text-gray-400">Username</span>
        <input type="text" v-model="username">
        <span class="text-gray-400">Email</span>
        <input type="text" placeholder="@" v-model="email">
        <span class="text-gray-400">Password</span>
        <input type="password" v-model="password">
        <span class="text-gray-400">Ulangi Password</span>
        <input type="password" v-model="retypePassword">
        <button class="btn btn-login" @click.prevent="onRegister">Lanjut</button>
        <button @click.prevent="toLogin" class="btn btn-register"><i class="bi bi-arrow-left"></i> Kembali</button>
        <br><br>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            retypePassword: '',
            email: '',
        }
    },
    methods: {
        onRegister() {
            // jika password beda dengan retypePassword
            if (this.password !== this.retypePassword) {
                this.$server.host.send(JSON.stringify({
                    // cmd 1005 = custom notif
                    cmd: 1005,
                    data: {
                        type: 1,
                        text: "Password harus sama",
                    }
                }))
                return;
            }
            this.$server.host.send(JSON.stringify({
                // cmd 1010 = register
                cmd: 1010,
                data: {
                    username: this.username,
                    password: this.password,
                    email: this.email,
                }
            }))
            return;
        },
        toLogin() {
            // cmd 1003 = change page
            this.$server.host.send(JSON.stringify({
                cmd: 1003,
                data: {
                    page: 'login',
                }
            }));
            this.$router.push('/login')
        }
    },
}
</script>