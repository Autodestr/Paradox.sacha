<script setup lang="ts">

import {Accessibility, Beer, ShoppingBasket} from "lucide-vue-next";
import Rating from "primevue/rating";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import {Pivo} from "@/model/Pivo.ts";
import {ref} from "vue";
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import { emit } from "process";

const emit = defineEmits<{
  'onBeerAdd' : [value: Pivo]
}>()

const beerArr = [
  {
    name: 'Балтика 0',
    price: '65₽',
    image: 'https://cdn.bahroma1.ru/goods/baltika_nov.jpg',
    rating: '2',
    color: '#ed9f7c'
  },
  {
    name: 'Балтика 3',
    price: '70₽',
    image: 'https://grizly.club/uploads/posts/2023-08/1691567131_grizly-club-p-kartinki-baltika-bez-fona-9.jpg',
    rating: '3',
    color: '#48a7ed'
  },
  {
    name: 'Балтика 4',
    price: '69₽',
    image: 'https://apolloimports.com/template/uploads/products/130/original.jpg',
    rating: '3',
    color: '#b5133e'
  },
  {
    name: 'Балтика 5',
    price: '74₽',
    image: 'https://forumsamogon.ru/wp-content/uploads/d/d/4/dd4f9e9612284e5ac26e6386e6852900.png',
    rating: '3',
    color: '#e66f54'
  },
  {
    name: 'Балтика 6',
    price: '76₽',
    image: 'https://d2j6dbq0eux0bg.cloudfront.net/images/72739520/2974920257.jpg',
    rating: '4',
    color: '#39a7c8'
  },
  {
    name: 'Балтика 7',
    price: '76₽',
    image: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA02/CONTENIDOS/201407/21/00118650100086____1__600x600.jpg',
    rating: '4',
    color: '#4581cf'
  },
  {
    name: 'Балтика 8',
    price: '80₽',
    image: 'https://lagurman.com/2861-home_default/cerveza-baltika-8-05l.jpg',
    rating: '5',
    color: '#d3421f'
  },
  {
    name: 'Балтика 9',
    price: '102₽',
    image: 'https://grizly.club/uploads/posts/2023-08/1691488107_grizly-club-p-kartinki-baltika-9-bez-fona-3.jpg',
    rating: '5',
    color: '#f60606'
  },
  {
    name: 'Балтика Кулер',
    price: '88₽',
    image: 'https://хромойсинийкот.kz/image/cache/catalog/products/pivo/baltikakuler2-500x500.jpg',
    rating: '4',
    color: '#c7dfe3'
  },
  {
    name: 'Балтика Мюнхен',
    price: '82₽',
    image: 'https://sun9-63.userapi.com/impf/c628526/v628526564/39523/wuGEOTBZd9E.jpg?size=500x500&quality=96&sign=4e71e909e485b96160cfa7f66f37ab05&c_uniq_tag=Yl60Cz6diDtrem6LPuX1nfmEWBPrwxMRHIhtPLhjCf0&type=album',
    rating: '5',
    color: '#efc2ad'
  },
]

const toast = useToast();

const show = () => {
  toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
};


const onClickHandler =(beer:Pivo) => {
  emit('onBeerAdd', beer)
}

const warning = () => {
  toast.add({severity: 'error', summary: 'Внимание!', detail: 'Пиво вредит вашему здоровью'})
}

</script>

<template>
  <div class="card w-[1000px] h-[100%] m-10">
    <DataTable :value="beerArr" paginator :rows="6" tableStyle="min-width: 50rem " class="">
      <template #header>
        <div class="flex flex-wrap items-center justify-between gap-2">
          <span class="text-xl font-bold">Товары</span>
          <Button rounded raised :style="{background: 'orange', borderColor: 'black'}" @click="warning"><template #icon ></template><Accessibility color="white" /></Button>
        </div>
      </template>
      <Column field="name" header="Балтика" class="w-[200px]">
        <template #body="slotProps">
          <p :style="{color: slotProps.data.color}" >{{ slotProps.data.name }}</p>
        </template>
      </Column>
      <Column header="Фото">
        <template #body="slotProps">
          <img :src="slotProps.data.image" :alt="slotProps.data.image" class="w-24 rounded h-25" />
        </template>
      </Column>
      <Column field="price" header="Цена"></Column>
      <Column field="rating" header="Рейтинг">
        <template #body="slotProps">
          <Rating :modelValue="slotProps.data.rating" readonly>
            <template #onicon>
              <Beer color="yellow" />
            </template>
            <template #officon>
              <Beer color="red" />
            </template>
          </Rating>
        </template>
      </Column>
      <Column  header="Покупка">
        <template #body="slotProps">
          <div>
            <Button rounded label="Success" severity="success" @click="onClickHandler(slotProps.data)" :style="{background: 'orange', borderColor: 'black'}"> Добавить в корзину  <ShoppingBasket /></Button>
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<style scoped>

</style>