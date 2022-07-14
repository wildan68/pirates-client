<template>
<div class="flex flex-col gap-[20px]">
    <TopInfo/>
    <div class="w-full bg-white border-box border-[4px] gap-[10px] py-[10px] px-[10px] rounded-lg flex flex-col items-center">
        <span class="rainbow font-[600] text-[18px]">Inventory</span>
        <div class="overflow-y-scroll h-[250px] w-full">
            <div class="list_items">
                <div :id="itemSelected == i ? 'selected' : 0" class="box_items" v-for="(data, i) in $server.msg.inventory" :key="i" @click.prevent="getInfoItems(i, data.id)">
                    <img :src="`/assets/${data.sprite}`" />
                </div>
            </div>
        </div>
    </div>
    <div v-if="infoItems != null" class="w-full bg-white border-box border-[4px] gap-[10px] py-[10px] px-[10px] rounded-lg flex flex-col items-center">
        <span class="rainbow font-[600] text-[18px]">Info</span>
        <div class="flex border border-gray-400 gap-[10px] w-full p-[10px]">
            <div class="w-[68px] h-[68px] overflow-hidden flex justify-center items-center">
                <img :src="`/assets/${infoItems.sprite}`" class="w-full h-full object-fill border border-gray-400" />
            </div>
            <div class="flex flex-col gap-[10px] flex-1">
                <span class="text-black font-[600]">{{ infoItems.name }}</span>
                <span class="text-gray-600">{{ infoItems.description }}</span>
                <button @click.prevent="equipItem(infoItems.id, infoItems.type)" class="btn btn-common text-white" style="padding-left: 15px; padding-right: 15px">
                    <span class="text-white">Pakai</span>
                </button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import TopInfo from '../UI/top_info'

export default {
    data() {
        return {
            infoItems: null,
            itemSelected: null,
        }
    },
    components: {
        TopInfo,
    },
    methods: {
        getInfoItems(index, id) {
            // cari info item berdasarkan id di $server.msg.listShop
            this.infoItems = this.$server.msg.inventory.find(item => item.id == id);
            this.itemSelected = index;
        },
        equipItem(id, type) {
            this.$server.host.send(JSON.stringify({
                // cmd 1007 = equip item
                cmd: 1007,
                data: {
                    id: id,
                    type: type,
                }
            }))
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
    align-items: flex-start;
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
    object-fit: fill;
}
</style>
