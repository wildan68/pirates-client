<template>
<div class="w-full bg-white border-box border-[4px] p-[20px]" v-if="$server.msg.player.char.equip != null">
    <div class="flex gap-[10px]">
        <div class="w-[80px] flex items-center justify-center relative">
            <img v-if="$server.msg.player.char.equip[0].id != -1" :src="`/assets/${$server.msg.player.char.equip[0].sprite}`" class="w-[65px] h-[65px] absolute z-10" />
            <div class="bg-white w-[55px] h-[55px] flex items-center justify-center  overflow-hidden">
                <img :src="`/assets/${$server.msg.player.char.equip[1].sprite}`" :class="$server.msg.player.char.equip[0].id != -1 ? $server.msg.player.char.equip[0].shape == 'circle' ? 'w-[55px] h-[55px] object-cover rounded-full' : 'w-[55px] h-[55px] object-cover' : 'w-[55px] h-[55px] object-cover'" />
            </div>
        </div>
        <div class="flex flex-col gap-[5px] flex-1">
            <div class="flex gap-[10px] items-center">
                <span :class="$server.msg.player.char.equip[2] ? `font-[600] text-[18px] ${$server.msg.player.char.equip[2].class}` : 'font-[600] text-[18px]'">{{ $server.msg.player.char.nickname }}</span>
                <img src="/assets/badge/gm_badge.png" v-if="$server.msg.player.role === 1" class="h-[30px]" />
            </div>
            <div class="flex gap-[10px] items-center">
                <div class="level">{{ $server.msg.player.char.level }}</div>
                <div class="w-full relative h-[5px] bg-gray-200 rounded-full">
                    <div class="h-full bg-green-500 rounded-full" :style="`width: ${$server.msg.player.char.xp / $server.msg.player.char.max_xp * 100}%`"></div>
                </div>
            </div>
            <div class="flex">
                <span class="flex gap-[10px] items-center text-[12px] bg-yellow-200 text-yellow-600 font-[600] rounded-md px-[8px] py-[3px]">
                    <img src="/png/spr_gold.png" class="h-[14px]" /> {{ $server.gold($server.msg.player.char.gold) }}
                </span>
            </div>
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

<style scoped>
.level {
    font-size: 10px;
    background-image: url('/png/star.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 28px;
    padding-top: 2px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: rgb(120, 122, 1);
}
</style>
