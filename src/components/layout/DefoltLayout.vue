<script setup lang="ts">
import {ref} from "vue";
import { School } from 'lucide-vue-next';
import { Beer } from 'lucide-vue-next';
import { Phone } from 'lucide-vue-next';
import {type Component} from "vue";
import Divider from 'primevue/divider';
import {useRouter} from "vue-router";


const router = useRouter()


const icons = new Map <string , Component> ([
  ['Домой', School],
  ['Пиво Балтика' , Beer],
  ['Контакты' , Phone]

    ])


const bukovi = ref([
  {
    label: 'Домой',
    routName: 'Home'
  },
  {
    label: 'Пиво Балтика',
    routName: 'Store'
  },
  {
    label: 'Контакты',
  }
]);


</script>

<template>


  <div class="card w-full">
    <MenuBar :model="bukovi">
      <template #item="{item, props}">

        <a v-ripple v-bind="props.action" @click="router.push({ name: item.routName })">
        <div class="flex flex-row">

        <span class="m-1">{{item.label}} </span>

          <div class="flex pt-1"><Component :is="icons.get(item.label)"></Component> </div>
          <Divider layout="vertical"/>

        </div>
        </a>
      </template>
    </MenuBar>
  </div>

  <div class="min-h-[100%]"><slot /></div>

  <div class="w-full h-30 bg-black flex absolute left-0 bottom-0">

    <p class="color-white m-10">
      По всем вопросам обращаться suric2010@mail.ru
    </p>

    <img src="https://catherineasquithgallery.com/uploads/posts/2021-02/1614405396_2-p-pivo-na-temnom-fone-2.jpg" class="relative right--450">


  </div>



</template>

<style scoped>

</style>