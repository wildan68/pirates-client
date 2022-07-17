<template>
<div class="flex flex-col gap-[20px]">
    <TopInfo />
    <CardPlayer />
    <div class="w-full bg-white border-box border-[4px] gap-[10px] py-[10px] px-[10px] rounded-lg flex flex-col items-center">
        <span class="rainbow font-[600] text-[18px]">Equip</span>
        <div class="h-[50px] w-full">
            <div class="list_items" v-if="$server.msg.player.char.equip != null">
                <div @click.prevent="getInfoItems(i, data.id)" :id="itemSelected == i ? 'selected' : 0" class="box_items" v-for="(data, i) in $server.msg.player.char.equip" :key="i">
                    <img v-if="data.id != -1" :src="`/assets/${data.sprite}`" />
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
                <div class="flex gap-[10px] w-full">
                    <button @click.prevent="offItems(infoItems.id)" class="btn btn-common flex-1 text-white" style="padding-left: 15px; padding-right: 15px">
                        <span class="text-white">Lepas</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import TopInfo from '../UI/top_info'
import CardPlayer from '../UI/card_player'

export default {
    data() {
        return {
            infoItems: null,
            itemSelected: null,
        }
    },
    methods: {
        getInfoItems(index, id) {
            if (id != -1) {
                // cari info item berdasarkan id di $server.msg.listShop
                this.infoItems = this.$server.msg.player.char.equip.find(item => item.id == id);
            }
            else this.infoItems = null
            this.itemSelected = index;
        },
        offItems(id) {
            this.$server.host.send(JSON.stringify({
                // cmd 1009 = lepas item
                cmd: 1009,
                data: {
                    id: id,
                }
            }))
            this.infoItems = null;
        }
    },
    components: {
        TopInfo,
        CardPlayer,
    },
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
