<script setup lang="ts">

import Card from "primevue/card";
import MicroSpinner from "@/components/MicroSpinner.vue";
import Dialog from "primevue/dialog";
</script>

<template>
  <Card class="w-1/2 " :style="{background: 'orange'}">
    <template #title><p class="text-black">Корзина</p></template>
    <template #content>
      <div v-for="[name , count] in [...beerMap]" class="text-black">
        {{name}}  x {{count}}
      </div>
    </template>

    <template #footer>
      <div class="text-black"> Всего: {{total}}</div>
      <Button label="Help" servity="help" @click="payment" severity="contrast">Оплатить</Button>
      <Dialog v-model:visible="visible" modal header="Ой!" :style="{ width: '25rem' }">
        <span class="text-surface-500 dark:text-surface-400 block mb-8">Пополните счет</span>
        <div class=" flex justify-center">
          <MicroSpinner/>
        </div>
        <div class="flex items-center gap-4 mb-4 justify-center">
          <Button @click="buttonSalary">Пополнить</Button>
        </div>
        <div class="flex items-center gap-4 mb-8 justify-center">
          <Button @click="visible=false">Отмена</Button>
        </div>

      </Dialog>
    </template>
  </Card>
</template>

<style scoped>

</style>