import Vue from 'vue'
import Router from 'vue-router'
import Child1 from '../components/Child1'
import Child2 from '../components/Child2'
import Child3 from '../components/Child3'
import Child4 from '../components/Child4'
import Child5 from '../components/Child5'
import Child1_index from '../components/Child1_index'
import gouwuche from '../components/gouwuche'
import chuangjiandingdan from '../components/chuangjiandingdan'
import shouhuodizhi from '../components/shouhuodizhi'
import xinjianshouhuo from '../components/xinjianshouhuo'
import zhifufangshi from '../components/zhifufangshi'
import fukuanchenggong from '../components/fukuanchenggong'
import iiiii from '../components/iiiii'
import yiwancheng from '../components/yiwancheng'
import daishouhuo from '../components/daishouhuo'
import daifukuan from '../components/daifukuan'
import youhuijuan from '../components/youhuijuan'
import wodeyuyue from '../components/wodeyuyue'
import wodeshoucang from '../components/wodeshoucang'
import wodexiaoxi from '../components/wodexiaoxi'
import sousuook from '../components/sousuook'
import sousuo from '../components/sousuo'
import denglu from '../components/denglu'
import zhuce from '../components/zhuce'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Child1',
      name: 'Child1',
      component: Child1,
      alias: '/'
    },
    {
      path: '/Child2',
      name: 'Child2',
      component: Child2
    },
    {
      path: '/Child3',
      name: 'Child3',
      component: Child3
    },
    {
      path: '/Child4',
      name: 'Child4',
      component: Child4
    },
    {
      path: '/Child5',
      name: 'Child5',
      component: Child5
    },
    {
      path: '/Child1_index',
      name: 'Child1_index',
      component: Child1_index

    },
    {
      path: '/gouwuche',
      name: 'gouwuche',
      component: gouwuche

    },
    {
      path: '/chuangjiandingdan',
      name: 'chuangjiandingdan',
      component: chuangjiandingdan

    },
//shouhuodizhi
    {
      path: '/shouhuodizhi',
      name: 'shouhuodizhi',
      component: shouhuodizhi

    },
    //xinjianshouhuo
    {
      path: '/xinjianshouhuo',
      name: 'xinjianshouhuo',
      component: xinjianshouhuo

    },
    //zhifufangshi
    {
      path: '/zhifufangshi',
      name: 'zhifufangshi',
      component: zhifufangshi

    },
    //fukuanchenggong
    {
      path: '/fukuanchenggong',
      name: 'fukuanchenggong',
      component: fukuanchenggong

    },
    {
      path: '/iiiii',
      name: 'iiiii',
      component: iiiii

    },
    //yiwancheng
    {
      path: '/yiwancheng',
      name: 'yiwancheng',
      component: yiwancheng

    },
    //daishouhuo
    {
      path: '/daishouhuo',
      name: 'daishouhuo',
      component: daishouhuo

    },
    //daifukuan
    {
      path: '/daifukuan',
      name: 'daifukuan',
      component: daifukuan

    },
    //youhuijuan
    {
      path: '/youhuijuan',
      name: 'youhuijuan',
      component: youhuijuan

    },
    //wodeyuyue
    {
      path: '/wodeyuyue',
      name: 'wodeyuyue',
      component: wodeyuyue

    },
    //wodeshoucang
    {
      path: '/wodeshoucang',
      name: 'wodeshoucang',
      component: wodeshoucang

    },
    //wodexiaoxi
    {
      path: '/wodexiaoxi',
      name: 'wodexiaoxi',
      component: wodexiaoxi

    }, {
      path: '/sousuook',
      name: 'sousuook',
      component: sousuook

    },
    {
      path: '/sousuo',
      name: 'sousuo',
      component: sousuo

    },
    {
      path: '/denglu',
      name: 'denglu',
      component: denglu

    },
    // {
    //   path: '/zhuce',
    //   name: 'zhuce',
    //   component: zhuce
    //
    // },
  ]
})
