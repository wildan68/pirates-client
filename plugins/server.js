import Vue from 'vue'

export default ({ app }, inject) => {
    inject('server', Vue.observable({
        //State 
        isLogin: false,
        // Message Server
        msg: null,
        draw: {
            listPlayer: false,
            addGold: false,
        },
        //host: new WebSocket('wss://pirates-server.herokuapp.com/'),
        //host: new WebSocket('ws://103.189.235.44/'),
        host: new WebSocket('ws://localhost:5000/'),


        // Method
        // buat method konversi angka jadi rupiah
        gold(angka) {
            var rupiah = '';
            var angkarev = angka.toString().split('').reverse().join('');
            for (var i = 0; i < angkarev.length; i++)
                if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + '.';
            return rupiah.split('', rupiah.length - 1).reverse().join('');
        },
        // konversi xp ke persen berdasarkan max_xp
        xp(xp, max_xp) {
            return (xp / max_xp) * 100;
        }
    }))
}