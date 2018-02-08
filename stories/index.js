import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import ArchivePost from '../components/archive/Post.vue';
import HomeCategory from '../components/home/Category.vue';
import HomePost from '../components/home/Post.vue';
import HomeSns from '../components/home/Sns.vue';

import ContentsMap from "../contentsMap";

Vue.use(VueRouter);

const store = new Vuex.Store({
  state: {
    // baseUrl: 'http://localhost:3000/blog',
    baseUrl: 'https://jicjjang.github.io/blog',
    postList: ContentsMap.post,
    categoryList: ContentsMap.category
  },
  getters: {
    baseUrl: state => {
      return state.baseUrl
    },
    postList: state => {
      return state.postList
    },
    categoryList: state => {
      return state.categoryList
    }
  },
});

storiesOf('Archive', module)
  .add('post', () => ({
    components: { ArchivePost },
    template: '<ul style="width: 500px;"><archive-post index="0" :post="$store.getters.postList[0]" :baseUrl="$store.getters.baseUrl" /></ul>',
    store
  }))
  .add('posts', () => ({
    components: { ArchivePost },
    template: '<ul style="width: 500px;"><archive-post v-for="(post, i) in $store.getters.postList" :key="i" :index="i" :post="post" :baseUrl="$store.getters.baseUrl" /></ul>',
    store
  }));

storiesOf('Home', module)
  .add('category', () => ({
    components: { HomeCategory },
    template: '<ul style="width: 500px;"><home-category :category="$store.getters.categoryList[0]" :baseUrl="$store.getters.baseUrl" /></ul>',
    store
  }))
  .add('categories', () => ({
    components: { HomeCategory },
    template: '<ul style="width: 500px;"><home-category v-for="(category, i) in $store.getters.categoryList" :key="i" :category="category" :baseUrl="$store.getters.baseUrl" /></ul>',
    store
  }))
  .add('post', () => ({
    components: { HomePost },
    template: '<ul style="width: 500px;"><home-post index="0" :post="$store.getters.postList[0]" :baseUrl="$store.getters.baseUrl" :setPreviewIndex="setPreviewIndex" /></ul>',
    store,
    methods: {
      setPreviewIndex(index) {
        console.log(index)
      }
    }
  }))
  .add('posts', () => ({
    components: { HomePost },
    template: '<ul style="width: 500px;"><home-post v-for="(post, i) in $store.getters.postList" :key="i" :index="i" :post="post" :baseUrl="$store.getters.baseUrl" :setPreviewIndex="setPreviewIndex" /></ul>',
    store,
    methods: {
      setPreviewIndex(index) {
        console.log(index)
      }
    }
  }))
  .add('sns', () => ({
    components: { HomeSns },
    template: '<ul><home-sns :baseUrl="$store.getters.baseUrl" /></ul>',
    store
  }));
