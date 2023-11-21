import { createRouter, createWebHistory } from 'vue-router';
import SelectPage from '../views/SelectPage.vue'
import BasketPage from '../views/BasketPage.vue'
import NewsPage from '../views/NewsPage.vue'
import ResultPage from '../views/ResultPage.vue'
import SubscriberCheck from '../views/SubscriberCheck.vue'
import MailSend from '../views/MailSend.vue'


const routes = [
  // 라우트 정의
  { path: '/', name: 'SelectPage', component: SelectPage },
  { path: '/BasketPage', name: 'BasketPage', component: BasketPage },
  { path: '/NewsPage', name: 'NewsPage', component: NewsPage },
  { path: '/ResultPage', name: 'ResultPage', component: ResultPage },
  { path: '/SubscriberCheck', name: 'SubscriberCheck', component: SubscriberCheck },
  { path: '/MailSend', name: 'MailSend', component: MailSend },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;