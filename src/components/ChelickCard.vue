<script setup lang="ts">

import Image from "primevue/image";
import Card from "primevue/card";
import Button from "primevue/button";
import {Chelick} from "../model/Chelick.ts";

defineProps<{
  poc: Chelick
}>()

const emit = defineEmits<{
  'onDelete': [poc: Chelick]
}>()

</script>

<template>
  <Card v-if="!poc.chepuha" class="bg-lightYellow w-[200px] h-[300px]">
    <template #title>{{poc.name}} {{poc.surname}} <Button icon="pi pi-times" severity="error" aria-label="Cancel" @click="emit('onDelete', poc)" >x</Button> </template>
    <template #content>
      <p class="m-0">
        Биг
      </p>
      <Image v-if="poc.staff" :src="poc.staff" alt="Image" width="250" />
      <p v-else>
        Дурашка Глупый
      </p>
      <Button severity="error" @click="poc.dostatHui(poc.hui)">Достать</Button>
      <!--      <Button  @click=" showToast(`Вы нажали на хуй номер ${item}`);">Нажми жопу</Button>-->
    </template>
  </Card>
</template>
