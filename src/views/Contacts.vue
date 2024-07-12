<script setup lang="ts">
import Editor from 'primevue/editor';
</script>

<template>

<div class="bg-black flex justify-center">
<p class="font-size-8">Вы можете связаться с нами следующими способами:</p>
</div>


<div class="">
  <div class="flex justify-center h-[400px]">
    <Editor v-model="value" editorStyle=" width: 1000px">
    <template v-slot:toolbar>
        <div class="flex justify-center">
            <span>Отправьте нам отзыв напрямую</span>
        </div>
    </template>
    </Editor>
  </div>
</div>

  <div class="flex justify-center">
    <Button class="w-300px">Отправить отзыв</Button>
  </div>


  <div class="w-full flex justify-center mt-10">
  <div class="bg-black w-[1000px] h-[300px]">
<p class="m-5"> Также можете связаться с нами по следующим адресам:</p>

    <div class="flex flex-col m-5">
      <p class="mt-5">suric2010@mail.ru</p>
      <p class="mt-5">suric2010@mail.ru</p>
      <p class="mt-5">suric2010@mail.ru</p>
      <p class="mt-5">suric2010@mail.ru</p>
    </div>
    <div class="absolute top-149 left-320">
      <iframe width="400" height="300" src="https://www.youtube.com/embed/CdUMQ7K1tPQ?si=X0Acien3JWzJk2Pw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

      </iframe>
    </div>
  </div>
  </div>
</template>

<style scoped>

</style>