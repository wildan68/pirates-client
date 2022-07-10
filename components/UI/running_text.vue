<template>
<div v-if="$server.msg != null">
    <div v-if="$server.msg.runningText.show" class="marquee flex fixed top-0 left-0 right-0 px-[10px] py-[15px] bg-black/50 text-white border-b-2 border-yellow-500">
        <marquee class="text-white" direction="left" behavior="scroll" scrollamount="5" v-html="$server.msg.runningText.text">
        </marquee>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.marquee {
    animation: marquee 1s ease-in-out;
}

@keyframes marquee {
    from  { transform: translateY(-100%); }
    to { transform: translateY(0); }
}
</style>
