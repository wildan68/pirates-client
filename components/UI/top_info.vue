<template>
<div class="fixed top-[10px] right-[30px] flexgap-[10px]">
    <span class="flex gap-[10px] items-center text-[14px] bg-yellow-200 text-yellow-600 font-[600] rounded-md px-[15px] py-[5px]">
        <img src="/png/spr_gold.png" class="h-[24px]" /> {{ $server.gold($server.msg.player.char.gold) }}
    </span>
</div>
</template>

<script>
export default {
    
}
</script>