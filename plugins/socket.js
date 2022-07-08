import VueNativeSock from 'vue-native-websocket'
import Vue from 'vue'

Vue.use(VueNativeSock, 'ws://pirates-server.herokuapp.com/', { format: 'json' })