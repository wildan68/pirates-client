<template>
<div class="flex flex-col gap-[20px]">
    <div class="w-full bg-white border-box border-[4px] gap-[10px] py-[30px] px-[10px] rounded-lg flex flex-col items-center">
        <span class="rainbow font-[600] text-[18px]">Main Shop</span>
        <div class="list_items">
            <div :id="itemSelected == data.id ? 'selected' : 0" class="box_items" v-for="(data, i) in $server.msg.listShop" :key="i" @click.prevent="getInfoItems(data.id)">
                <img :src="`/assets/${data.sprite}`"/>
            </div>
        </div>
    </div>
    <div class="w-full bg-white border-box border-[4px] gap-[10px] py-[30px] px-[10px] rounded-lg flex flex-col items-center">
        <span class="rainbow font-[600] text-[18px]">Info</span>
        <div class="flex border border-gray-400 gap-[10px] w-full p-[10px]" v-if="infoItems != null">
            <div class="w-[68px] h-[68px] overflow-hidden flex justify-center items-center">
                <img :src="`/assets/${infoItems.sprite}`" class="w-full h-full object-fill border border-gray-400"/>
            </div>
            <div class="flex flex-col gap-[10px] flex-1">
                <span class="text-black font-[600]">{{ infoItems.name }}</span>
                <span class="text-gray-600">{{ infoItems.description }}</span>
                <span class="text-gray-600 flex gap-[5px]" v-if="infoItems.type_price == 0">
                    <img src="/png/spr_gold.png" class="w-[14px] h-[14px] object-fill"/>
                    {{ $server.gold(infoItems.price) }}
                </span>
                <button class="btn btn-common text-white" style="padding-left: 15px; padding-right: 15px">
                    <i class="bi bi-cart-fill"></i>
                    <span class="text-white">Beli</span>
                </button>
            </div>
        </div>
    </div>
</div>
</template>


<script>
export default {
    data() {
        return {
            infoItems: null,
            itemSelected: null,
        }
    },
    methods: {
        getInfoItems(id) {
            // cari info item berdasarkan id di $server.msg.listShop
            this.infoItems = this.$server.msg.listShop.find(item => item.id == id);
            this.itemSelected = id;
        },
    },
    mounted() {
        this.infoItems = null
    }
}
</script>

<style scoped>
.list_items {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    /*grid-template-columns: repeat(auto-fit, minmax(48px, 1fr)); */
    gap: 0;
    overflow-y:scroll;
    height: 192px;
}

.list_items .box_items {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    border: 2px solid rgb(164, 164, 164);
    overflow: hidden;
    cursor: pointer;
}

.list_items .box_items#selected {
    border: 2px solid rgb(236, 163, 3);
}

.list_items .box_items img {
    width: 100%;
    height: 100%;
    object-fit:fill; 
}
</style>