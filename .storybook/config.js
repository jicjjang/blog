// config.js
import { configure } from '@storybook/vue';

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// Import your custom components.
import ArchivePost from '../components/archive/Post.vue';
import HomeCategory from '../components/home/Category.vue';
import HomePost from '../components/home/Post.vue';
import HomeSns from '../components/home/Sns.vue';

// Register custom components.
Vue.component('archive-post', ArchivePost);
Vue.component('home-category', HomeCategory);
Vue.component('home-post', HomePost);
Vue.component('home-sns', HomeSns);

import '../static/static/css/main.css';

function loadStories() {
  // You can require as many stories as you need.
  require('../stories');
}

configure(loadStories, module);
