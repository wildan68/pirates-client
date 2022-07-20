<template>
<div class="flex w-full h-[720px] items-center justify-center bg-start">
    <LogoHeader />
    <Step1 v-if="$server.msg.page == 'register'"/>
    <Step2 v-if="$server.msg.page == 'step2register'"/>
    <Step3 v-if="$server.msg.page == 'step3register'"/>
    <UIDialogBox />
</div>
</template>

<script>
import LogoHeader from '@/components/logo'
import UIDialogBox from '@/components/UI/dialog_box';

import Step1 from '@/components/Pages/Register/step1';
import Step2 from '@/components/Pages/Register/step2';
import Step3 from '@/components/Pages/Register/step3';

export default {
    components: {
        LogoHeader,
        UIDialogBox,
        Step1,
        Step2,
        Step3,
    },
    async mounted() {
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
