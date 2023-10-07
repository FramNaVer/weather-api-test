import { ref } from 'vue';
import { defineStore } from 'pinia'

export const Travel_listStore = defineStore('Travel_list', () => {

const travel_list  = ref([
  {
    name: 'Nan',
    img: 'https://www.tourfahsai.com/images/content/original-1604745920535.jpg',
    ip: 'api.openweathermap.org/data/2.5/forecast?lat=18.88852127095799&lon=99.01373892653918&appid=e330f565d71514234861e6d8f4ea2c6e'
  },
  {
    name: 'Lampang',
    img: 'https://itsbetterinthailand.com/wp-content/uploads/2018/02/Lampang.jpg',
    ip: 'api.openweathermap.org/data/2.5/forecast?lat=18.884067360988016&lon=99.01340628045365&appid=e330f565d71514234861e6d8f4ea2c6e'
  },
  {
    name: 'Chiang Mai',
    img: 'https://a.cdn-hotels.com/gdcs/production9/d679/184d7edf-5c3a-470c-8529-b0085d6d5b0e.jpg',
    ip: 'api.openweathermap.org/data/2.5/forecast?lat=18.879198960518284&lon=99.01400969350873&appid=e330f565d71514234861e6d8f4ea2c6e'
  },
  {
    name: 'Payao',
    img: 'https://www.chillnaid.com/wp-content/uploads/2020/01/magicmountaincafe-1-4-1024x768.jpg',
    ip: 'api.openweathermap.org/data/2.5/forecast?lat=18.88680552840249&lon=99.00700527133165&appid=e330f565d71514234861e6d8f4ea2c6e'
  },
  {
    name: 'Phrae',
    img: 'https://www.tatnewsthai.org/Interesting_articles/2.jpg',
    ip: 'api.openweathermap.org/data/2.5/forecast?lat=18.80202637792063&lon=98.99512191864117&appid=e330f565d71514234861e6d8f4ea2c6e'
  },
  {
    name: 'Sukhothai',
    img: 'https://i.natgeofe.com/n/a59d608d-b918-476c-8146-238c568c4973/sukhothai-unesco-01_16x9.jpg?w=1200',
    ip: 'api.openweathermap.org/data/2.5/forecast?lat=18.795914426649965&lon=98.96570372658144&appid=e330f565d71514234861e6d8f4ea2c6e'
  }
])

return { travel_list }
})