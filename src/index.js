

import Vue from "vue";
import router from "./router";
import profile from "./components/profile";
import "./styles/styles";
new Vue({
  el:"#application",
  router,
  components : {
  	pp : profile
  },
  template:`<div><div class = "routers">
  <router-link to="/">Главная</router-link>
  <router-link to="/todo">Туду</router-link>
  <router-link to="/clicker">Кликер</router-link>
  <router-link to="/pugTest">Читать текст</router-link>
  <router-link to="/contentv">Контент</router-link>
  <router-link to="/profile">Профиль</router-link>
  <router-link to="/draw">Рисовать</router-link></div>
  <div><router-view></router-view></div>
  </div>`,
})


