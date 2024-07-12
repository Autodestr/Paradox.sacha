<script setup lang="ts">
import {User, Valuta} from "@/model/User.ts";
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
import BeerTable from "@/components/BeerTable.vue";


const toast = useToast();

const shop = ref<Pivo[]> ( [
])

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

const users1 = ref<User[]>( [
  {
    name: 'Egor',
    surname: 'Ivanov',
    id: 35,
  },
  {
    name: 'Mihail',
    surname: 'Vasiliev',
    id: 8,
  },
  {
    name: 'Denis',
    surname: 'Arsanov',
    id: 18,
    cash: '25 юаней',
  },
  {
    name: 'Inokentiy',
    surname: 'Versalev',
    id: 12,
    cash: '280 тенге',
  },
  {
    name: 'Boris',
    surname: 'Zaicev',
    id: 34,
  },
])

const users = ref<User[]> ([
  {
    name: 'Arseniy',
    surname: 'Hasanov',
    id: 36,
    age: 10,
    cash: '470 рублей',
  },
  {
    name: 'Alexandr',
    surname: 'Mihalev',
    id: 7,
    age: 10,
    cash: '2970 копеек',
  },
  {
    name: 'Danil',
    surname: 'Leontiev',
    id: 17,
    age: 10,
    cash: '12 долларов',
  },
  {
    name: 'Gleb',
    surname: 'Shishkin',
    id: 12,
    age: 10,
    cash: '13 тенге',
  },
  {
    name: 'Evgeniy',
    surname: 'Lakman',
    id: 38,
    age: 10,
  },
])

const merge = users1.value.filter((user) =>  user.id < 30)

const show = () => {
  toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
};

const users2 = ref([...users.value, ...merge])

const money = new Map <Valuta ,  number> ([
  [Valuta.Rub, 1],
  [Valuta.Dollar, 100],
  [Valuta.Yan, 5],
  [Valuta.Kop, 0.01],
  [Valuta.Tenge, 0.2],
])

const yourMoney = users2.value.map ((user) => {
  if (user.cash) {
    const splitedCash = user.cash.split(' ')
    const [count, denga] = splitedCash
    return Number(count) * (money.get(denga as Valuta) || 1)
  }
  return 0
} )

const sum = yourMoney.reduce ((accumulator, currentValue) => accumulator + currentValue,
    0,)

const sum1 = computed ( () => users2.value.reduce ((acc , user) =>  {
  if (user.cash) {
    const splitedCash = user.cash.split(' ')
    const [count, denga] = splitedCash

     acc['всего'] += (money.get(denga as Valuta) || 1) * Number(count)

    acc[denga] += Number(count)
  }
  return acc
    },
    {
      рублей: 0,
      долларов: 0,
      юаней: 0,
      тенге: 0,
      копеек: 0,
      всего: 0,
    } as Record<string, number>
))

const onAddBeer = (beer:Pivo) => {
    beerMap.value.set(beer.name, (beerMap.value.get(beer.name) || 0) + 1 )
    shop.value.push(beer)
}

const beerMap = ref( new Map <string, number> ( [
]))

const onClickHandler =(beer:Pivo) => {
  shop.value.push(beer)
  beerMap.value.set(beer.name, (beerMap.value.get(beer.name) || 0) + 1 )
}

const total = computed(() => shop.value.reduce((accumulator, beer) => {
  const [nominal, ...rest] = [...beer.price].reverse()
  accumulator += Number(rest.reverse().join(''))
  return accumulator
    }, 0
))

const withdraw = () => {
  let need = total.value

  users2.value = users2.value.map ((user) => {
    if (user.cash) {
      const splitedCash = user.cash.split(' ')
      const [count, denga] = splitedCash
      const have = Number(count) * (money.get(denga as Valuta) || 1)
      const remain = need - have
      if (remain > 0) {
        need = need - have

        return {...user , cash: `0 ${denga}` } as User
      }
        else {
        const transfer = money.get(denga as Valuta) || 1
        const versa = (have - need) / transfer
        need = 0

        return {...user, cash: String( `${versa} ${denga} `)} as User

      }
    }
    return user
  })
}

const thanks = () => {
  toast.add({severity: 'info', summary: 'Спасибо за покупку', detail: 'Приходите еще'})
}

const payment = () => {
  if (total.value < sum1.value.всего) {
    withdraw()
    shop.value =[]
    beerMap.value.clear()
    thanks()
  }
  else {
    visible.value = true
  }
}

const salary = () => {
  users2.value = users2.value.map((user) => {
    if (user.cash) {
      const splitedCash = user.cash.split(' ')
      const [count, denga] = splitedCash
      const have = Number(count)
      const transfer = (75 / (money.get(denga as Valuta) || 1))
      return {...user, cash: String(`${have + transfer} ${denga}`) } as User
    }
    return user
  })
}

const visible = ref(false);

const buttonSalary = () => {
  salary()
  visible.value = false
}

const warning = () => {
  toast.add({severity: 'error', summary: 'Внимание!', detail: 'Пиво вредит вашему здоровью'})
}
</script>

<template>

  <div class="flex h-86.5vh">

    <BeerTable @onBeerAdd="onAddBeer"/>
    <Toast />

  <div class="flex flex-col mt-10 items-center justify-center">

    <Card class="w-full h-[300px] " :style="{background: 'orange'}">
    <template #title> <p class="text-black">Ваши средства </p></template>
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
      <Button @click="salary" class="justify-content-center m-1" severity="contrast">Пополнить</Button>
      <Toast />
    </template>
    </Card>

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
            <MicroSpinner />
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
  </div>

  </div>
</template>



