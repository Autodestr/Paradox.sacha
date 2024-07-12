<script setup lang="ts">
import Image from 'primevue/image';
import Galleria from 'primevue/galleria';
import { ref, onMounted } from "vue";
import {watch} from "vue";
import {sleep} from "radash";



const images = ref([{
  itemImageSrc: 'https://wigmorewholesale.com/image/wkseller/3590/%D0%BF%D0%BD%D0%B3_%D0%BB%D0%B8%D1%86%D0%BE%20(1).png',
  thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
  alt: 'Description for Image 1',
  title: 'Title 1'
},
  {
    itemImageSrc: 'https://grizly.club/uploads/posts/2023-08/1691567130_grizly-club-p-kartinki-baltika-bez-fona-4.png',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
  },
  {
    itemImageSrc: 'https://cdn140.picsart.com/305758348298211.png',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
  },
  {
    itemImageSrc: 'https://pallet-retail.ru/img/img/items/small/421010.png?1707850666',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
  },
])

const responsiveOptions = ref([
  {
    breakpoint: '1300px',
    numVisible: 4
  },
  {
    breakpoint: '575px',
    numVisible: 1
  }
]);

const activeIndex = ref(0);

const opacity = ref(0);

watch (() => activeIndex.value , async ()=> {
  opacity.value = 0
  await sleep(100)
  opacity.value = 1
  console.log(opacity)
} )

</script>

<template>

  <div class="flex justify-center">
    <img src="https://korusconsulting.ru/upload/iblock/05a/logo_white.png">
  </div>


  <div class="flex justify-center bg-black">
    <p class="font-size-8">
     Здесь вы можете приобрести все виды популярного пива Балтика, начиная с безалкогольного "Балтика 0", до эксцентричного
      "Балтика Мюнхен".
    </p>
  </div>

  <div class="card flex justify-center m-20">
    {{activeIndex}}
    <Galleria v-model:activeIndex="activeIndex" :circular="true" :infinity="true" :show-thumbnail-navigators="false" :show-thumbnails="false" :autoPlay='true' :responsiveOptions="responsiveOptions" :value="images" :numVisible="5" containerStyle="max-width: 800px ; border: 0px">
      <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 450px ; height: 500px" class="galery transition-op"/>
      </template>

    </Galleria>
  </div>

</template>

<style scoped>

</style>