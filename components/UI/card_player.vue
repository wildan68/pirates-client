<template>
<div class="w-full bg-white border-box border-[4px] p-[20px]" v-if="$server.msg.player.char.equip != null">
    <div class="flex gap-[10px]">
        <div class="w-[80px] flex items-center justify-center relative">
            <img :src="`/assets/${$server.msg.player.char.equip.border}`" class="w-[65px] h-[65px] absolute z-10" />
            <div class="bg-white w-[55px] h-[55px] flex items-center justify-center  overflow-hidden">
                <img :src="`/assets/${$server.msg.player.char.equip.avatar}`" class="w-[55px] h-[55px] object-cover" />      
            </div>
        </div>
        <div class="flex flex-col gap-[10px]">
            <span class="font-[600] text-[24px]">{{ msg.player.char.nickname }}</span>
            <span class="flex gap-[10px] items-center text-[14px] bg-yellow-200 text-yellow-600 font-[600] rounded-md px-[15px] py-[5px]">
                <img src="/png/spr_gold.png" class="h-[24px]" /> {{ $server.gold(msg.player.char.gold) }}
            </span>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        msg: Object,
    },
}
</script>
