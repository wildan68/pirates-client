<template>
<div class="w-full bg-white border-box border-[4px] p-[20px]">
    <div class="flex gap-[10px]">
        <div class="rounded-[10px] bg-gray-300 w-[48px] h-[48px]"></div>
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
