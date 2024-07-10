<script setup lang="ts">
import {Chelick, Valuta} from "@/model/Chelick.ts";
import {Pivo} from "@/model/Pivo.ts";
import Card from 'primevue/card';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional
import Rating from 'primevue/rating';
import { Beer } from 'lucide-vue-next';
import {data} from "autoprefixer";
import { Accessibility } from 'lucide-vue-next';
import { ShoppingBasket } from 'lucide-vue-next';
import Toast from 'primevue/toast';
import {computed, createApp} from 'vue';
import ToastService from 'primevue/toastservice';
import { useToast } from 'primevue/usetoast';
import ChelickCard from "@/components/ChelickCard.vue";
import { ref } from 'vue'
import Dialog from 'primevue/dialog';
import MicroSpinner from "@/components/MicroSpinner.vue";




const toast = useToast();


const shop = ref<Pivo[]> ( [

])


const zero = [

]


const baltika = [
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

const banda1 = ref<Chelick[]>( [
  {
    name: 'egor',
    surname: 'zalupa',
    hui: 35,
  },
  {
    name: 'misha',
    surname: 'pipka',
    hui: 8,
    staff: 'https://cdn.shopify.com/s/files/1/0439/1724/6630/products/snus-hotline-faff-pink-lemonade-19620176036006_2048x.png?v=1600910072'
  },
  {
    name: 'denis',
    surname: 'bolt',
    hui: 18,
    staff: 'https://rusinfo.info/wp-content/uploads/0/c/a/0cacfd6936bee28e55fb74a15c3c465f.png',
    cash: '25 юаней',
  },
  {
    name: 'inokentiy',
    surname: 'debil',
    hui: 12,
    staff: 'https://avatars.dzeninfra.ru/get-zen_doc/5231890/pub_60ec17f379b59675f1099b0a_60ec264ea6b898190a31ec43/scale_1200',
    cash: '280 тенге',
  },
  {
    name: 'bobka',
    surname: 'zalupa',
    hui: 35,
    staff: 'https://img.b2b.trade/4d51c46e-86f8-457a-bf3c-5b5d51f73b86/-/smart_resize/900x900/-/quality/smart/-/format/webp/',
    chepuha: true,
  },
])

const banda = ref<Chelick[]> ([
  {
    name: 'joj',
    surname: 'zalupa',
    hui: 35,
    age: 10,
    cash: '470 рублей',
  },
  {
    name: 'jij',
    surname: 'pipka',
    hui: 8,
    age: 10,
    cash: '2970 копеек',
  },
  {
    name: 'jaj',
    surname: 'bolt',
    hui: 18,
    age: 10,
    cash: '12 бачей',
  },
  {
    name: 'juk',
    surname: 'debil',
    hui: 12,
    age: 10,
    cash: '13 тенге',
  },
  {
    name: 'auf',
    surname: 'zalupa',
    hui: 35,
    age: 10,
  },
])

const merge = banda1.value.filter((chel) =>  chel.hui < 30)

const show = () => {
  toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
};

const banda2 = ref([...banda.value, ...merge])

const money = new Map <Valuta ,  number> ([
  [Valuta.Rub, 1],
  [Valuta.Dollar, 100],
  [Valuta.Yan, 5],
  [Valuta.Kop, 0.01],
  [Valuta.Tenge, 0.2],
])



//money.forEach((value, key, map) => {
//alert(`${key}: ${value}`)})

const money1 = banda2.value.map ((chel) => {
  if (chel.cash) {
    const splitedCash = chel.cash.split(' ')
    const [kolvo, denga] = splitedCash
    return Number(kolvo) * (money.get(denga as Valuta) || 1)
  }
  return 0
} )




const sum = money1.reduce ((accumulator, currentValue) => accumulator + currentValue,
    0,)

const sum1 = computed ( () => banda2.value.reduce ((acc , chel) =>  {
  if (chel.cash) {
    const splitedCash = chel.cash.split(' ')
    const [kolvo, denga] = splitedCash

     acc['всего'] += (money.get(denga as Valuta) || 1) * Number(kolvo)

    acc[denga] += Number(kolvo)

  }
  return acc
    },


    {
      рублей: 0,
      бачей: 0,
      юаней: 0,
      тенге: 0,
      копеек: 0,
      всего: 0,
    } as Record<string, number>
))

const mapaPiva = ref( new Map <string, number> ( [

]))

const onClickHandler =(beer:Pivo) => {
  shop.value.push(beer)
  mapaPiva.value.set(beer.name, (mapaPiva.value.get(beer.name) || 0) + 1 )
}

const summa = computed(() => shop.value.reduce((accumulator, beer) => {
  const [nominal, ...rest] = [...beer.price].reverse()
  accumulator += Number(rest.reverse().join(''))
  return accumulator
    }, 0

))



const minusDenga = () => {
  let nado = summa.value

  banda2.value = banda2.value.map ((chel) => {
    if (chel.cash) {
      const splitedCash = chel.cash.split(' ')
      const [kolvo, denga] = splitedCash
      const est = Number(kolvo) * (money.get(denga as Valuta) || 1)
      const auf = nado - est
      if (auf > 0) {
        nado = nado - est

        return {...chel , cash: `0 ${denga}` } as Chelick

      }
        else {
        const perevod1 = money.get(denga as Valuta) || 1
        const sdacha = (est - nado) / perevod1
        nado = 0

        return {...chel, cash: String( `${sdacha} ${denga} `)} as Chelick

      }
    }
    return chel
  })

}

const thanks = () => {
  toast.add({severity: 'info', summary: 'Спасибо за покупку', detail: 'Приходите еще'})
}

const oplata = () => {
  if (summa.value < sum1.value.всего) {
    minusDenga()
    shop.value =[]
    mapaPiva.value.clear()
    thanks()

  }
  else {
    visible.value = true
  }



}

const naZavod = () => {
  banda2.value = banda2.value.map((chel) => {
    if (chel.cash) {
      const splitedCash = chel.cash.split(' ')
      const [kolvo, denga] = splitedCash
      const est = Number(kolvo)
      const perevod = (75 / (money.get(denga as Valuta) || 1))
      return {...chel, cash: String(`${est + perevod} ${denga}`) } as Chelick
    }
    return chel
  })
}

const visible = ref(false);

const buttonNaZavod = () => {
  naZavod()
  visible.value = false
}

const warning = () => {
  toast.add({severity: 'error', summary: 'Внимание!', detail: 'Пиво вредит вашему здоровью'})
}



</script>

<template>


  <div class="flex h-86.5vh">

    <div class="card w-[1000px] h-[100%] m-10">
      <DataTable :value="baltika" paginator :rows="6" tableStyle="min-width: 50rem " class="">
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
        <Column field="price" header="Цена">

        </Column>
        <Column field="rating" header="Рейтинг пацанов">
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
    <Toast />

  <div class="flex flex-col mt-10 items-center justify-center">


    <Card class="w-full h-[300px] " :style="{background: 'orange'}">
    <template #title> <p class="text-black">Богатства банды </p></template>
    <template #content>
      <table class=" w-[1000px] ql-align-center border-collapse border-[1px] bg-gray-300">
        <tr>
        <th class="border-[1px] border-color-black text-color-black bg-orange-300"> Валюта</th>
        <th class="border-[1px] border-color-black text-color-black bg-orange-300"> Количество</th>
        </tr>
        <tr v-for = "item in Object.entries(sum1)"
        :key = "item[0]">

          <th class=" text-color-black border-[1px] border-color-black"> {{item[0]}}</th>
          <th class="border-[1px] border-color-black text-color-black">{{item[1]}} </th>
        </tr>





      </table>
      <Button @click="naZavod" class="justify-content-center m-1" severity="contrast">На завод!</Button>
      <Toast />
    </template>

    </Card>


    <Card class="w-1/2 " :style="{background: 'orange'}">
      <template #title><p class="text-black">Корзина</p></template>
      <template #content>
        <div v-for="[name , count] in [...mapaPiva]" class="text-black">
          {{name}}  x {{count}}
        </div>
      </template>

      <template #footer>
        <div class="text-black"> Всего: {{summa}}</div>
        <Button label="Help" servity="help" @click="oplata" severity="contrast">Оплатить бустеры</Button>
        <Dialog v-model:visible="visible" modal header="Не хватает денег, нищеброд" :style="{ width: '25rem' }">
          <span class="text-surface-500 dark:text-surface-400 block mb-8">Чего делать будем, чепухня?</span>
          <div class=" flex justify-center">
            <MicroSpinner/>
          </div>
          <div class="flex items-center gap-4 mb-4 justify-center">
            <Button @click="buttonNaZavod">Пойду на завод</Button>
          </div>
          <div class="flex items-center gap-4 mb-8 justify-center">
            <Button @click="visible=false">Пойду выпрашивать у пацанов</Button>
          </div>

        </Dialog>
      </template>
    </Card>
  </div>




  </div>

<!--<div v-if="sum1.всего < summa"><BeerSpinner /></div>-->







</template>



