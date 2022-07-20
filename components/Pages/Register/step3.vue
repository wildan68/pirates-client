<template>
    <div class="text-center flex flex-col border-box border-[4px] gap-4 py-[20px] px-[2em] rounded-md shadow-sm shadow-gray-300 bg-white" v-if="$server.msg.data">
        <span class="font-[600] text-[18px]">Berhasil membuat akun</span>
        <div>Hai <span class="font-[600]">{{ $server.msg.data.nickname }}</span></div>
        <span>Selamat kamu mendapatkan</span>
        <div class="flex gap-[10px]">
            <div class="flex flex-col flex-wrap w-[88px] p-4 items-center justify-center border border-box">
                <img src="/assets/border/border_item_1001.png" class="h-[48px] w-[48px]"/>
                <span class="text-[12px]">Galaxy Border</span>
            </div>
            <div class="flex flex-col flex-wrap w-[88px] p-4 items-center justify-center border border-box">
                <img src="/assets/avatar/avatar_item_2001.png" class="h-[48px] w-[48px]"/>
                <span class="text-[12px]">Skull Avatar</span>
            </div>
            <div class="flex flex-col flex-wrap w-[88px] p-4 items-center justify-center border border-box">
                <img src="/png/spr_gold.png" class="h-[48px] w-[48px]"/>
                <span class="text-[12px]">1.000 gold</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>