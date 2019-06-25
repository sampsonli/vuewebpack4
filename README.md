通用脚手架
=======================
>非常适应超大规模的单页面应用的脚手架，项目可以无限横向扩展，无需考虑性能问题 
--------------------------
使用到的技术框架
-----------------------
* webpack4
* vue+vuex+vue-router

优势
-----------------------
1. 去中心化配置路由
2. 按需加载
3. 模块化
4. 模块细粒度打包
5. 无限扩展
6. vuex 按需加载

基本介绍
-----------------------
1. 模块（当前项目）的概念，以及怎么定义模块，模板包含哪些内容
    1. 所有模块平级放置，以目录形式放入routes目录中
    2. 模块中必须包含 route.js 文件， 定义当前模块中所有路由
    3. 模块访问以目录名来访问， 比如单前实例中定义了 demo模块， 访问路径就是  /demo/XXX, 其中XXX代表demo模块定义的路由
    4. 每个模块都是可插拔的，不需要在根router.js 声明， 只要模块放入routes目录中，会自动注入到项目中
    5. 每个模块都是独立的，可以包含自己的静态资源，组件，model（后面会说明），页面等等
2. 数据模型（model）概念，用法
>题到模块前， 我要先说说使用vuex官方的model（也叫module）的一些不足首先
   *  官方定义的模块中的方法不能直接使用， 必须配合 dispatch，commit等方法， 还要拼接action字符串（主要是有命名空间的情况下）
   *  官方定义的模块，默认不支持热加载，或者需要写大量模块注入的方法（用起来不友善）
   *  在主流ide中， 对自动代码提示不友善， 当用到某个action的时候，传参的时候还要查看action是怎么定义的
   * 使用的时候不够简洁， 比如还要手动去调用 mapActions/mapGetters..
  
>基于官方的种种问题， 重新对官方的vuex 进行了一次封装（不影响性能的前提下）， 封装后有如下优势
   1. 自动注入，只要import的当前模块， 就会把当前模块注入到根store中， 无需手动操作
   2. 导出的模块里面就包含当前模块定义的方法， 使用的时候无需再调用dispatch等方法
   3. 模块定义和官方基本一致，新增了ns（命名空间）字段，namespaced值改为了true, actions里面的方法进行了调整，优化，使用说明后面会具体描述

-------------------
重点&难点
-----------------------

1. 脚手架灵魂spirts,是本人给这个脚本取的名字，是封装官方module的一段代码， 本身代码非常简洁，不依赖任何第三方模块，可以单独使用
    
    1. 在使用spirits前， 首先要注入本地store，可以这样写
        ~~~javascript
        import spritis from './common/spirits'
        spritis(store)
        ~~~
    2. 定义模块
        ~~~javascript
        import { connect } from '~/common/spirits'
        export default connect({
            ns: 'test',
            state: {
                aa: '1242'
            },
            mutations: {
                setAa (state, payload) {
                    state.aa = payload
                }
            },
            getters: {
                me: ({ aa }) => {
                    return aa
                }
            },
            actions: {
                getAa (val) {
                    this.commit('setAa', val)
                }
        
            }
        })
        ~~~
        是不是很简单。。。
    3. 在页面中使用模块
        ~~~javascript
        import model from '../../models/test'
        export default {
            name: 'List',
            methods: {
                changeTitle () {
                    model.getAa(Math.floor(Math.random() * 100))
                }
            },
        }
        ~~~
2. 对vue中的组件进行了扩展，更方便后续使用
    ~~~javascript
    Vue.mixin({
        methods: {
            map (key, ns = this.ns) {
                return (ns && this.$store.getters[[ns, key].join('/')]) || this.$store.getters[key]
            }
        },
        computed: {
            state () {
                return (this.ns && this.$store.state[this.ns]) || this.$store.state
            }
        }
    })
    ~~~
    添加了state属性和map方法
    首先判断当前组件是否定义了ns属性（model里面的ns），如果定义了， state属性指向 model里面的state，可以直接使用了
    map是对原有getters进行了封装， 降低了使用model里面的getter的复杂度

---------------------
总结
-------------------------
此脚手架是一个通用性比较强的脚手架， 使用简洁， 依赖的模块比较少， 非常适合公司项目迭代需求，
本人也会不断完善此脚手架，如果有什么优化的建议点， 可以给我提需求， 我会第一时间去完善。
此外如果您更热衷于react， 也可以查看react版本，基本思路差不多, 点击
[react+webpack4](https://github.com/sampsonli/reactwebpack4)

