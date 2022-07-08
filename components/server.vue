<script>
export default {
    data() {
        return {
            connection: null,
            username: null,
            password: '',
            jumlah: '',
            msg: null,
        }
    },
    methods: {
        login() {
            this.connection.send(JSON.stringify({
                type: 'login',
                data: {
                    user: this.username,
                    pass: this.password,
                }
            }));
        },
        addGold() {
            this.connection.send(JSON.stringify({
                type: 'addGold',
                data: {
                    user: {
                        nickname: this.msg.player.char.nickname,
                        gold: this.jumlah,
                    }
                }
            }));
        },
        server_msg() {
            try {
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
            }
        }
    },
    async mounted() {

        this.$root.$on('login', (data) => {
            this.username = data.user
            this.password = data.pass
            this.login()
        })

        this.$root.$on('addGold', (data) => {
            this.jumlah = data.jumlah
            this.addGold()
        })
        
        this.$root.$on('msg', () => {
            this.server_msg()
        })
    }
}
</script>
