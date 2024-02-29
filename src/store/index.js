import { createStore } from 'vuex'
import axios from 'axios'
import sweet from 'sweetalert'
import { useCookies } from 'vue3-cookies'
const {cookies}=useCookies()
import router from '@/router'
import AuthenticateUser from '@/service/AuthenticateUser'
const lifeURL='https://node-eomp-wm.onrender.com/'
export default createStore({
  state: {
    users:null,
    user:null,
products:null,
product:null
  },
  getters: {
  },
  mutations: {
    setUsers(state,value){
      state.users=value
    },
    setUser(state,value){
      state.user=value
    },
    setProducts(state,value){
      state.products=value
    },
    setProduct(state,value){
      state.product=value
    },
    sortProducts(state, { ascending }) {
    // sortProducts(state ) {
      state.products.sort((a, b) => {
          // return ? a.prodAmount - b.prodAmount : b.prodAmount - a.prodAmount;
          return ascending ? a.prodAmount - b.prodAmount : b.prodAmount - a.prodAmount;
          // return ascending ? a.prodAmount - b.prodAmount : b.prodAmount - a.prodAmount;
      });
    }
  },
  actions: {

// users
async register(context,payload){
  try{
    let{msg}=(await axios.post(`${lifeURL}users/register`,payload))
    if(msg){
      context.dispatch('setUser')
      sweet({
        title:'Registration',
        text:msg,
        icon:"success",
        timer:2000
      })

    }
  }catch(e){
    sweet(
      {
        title:'Error',
        text:'Please try again later',
        icon:"error",
        timer:2000
      }
    )
  }
},

async fetchUsers(context){
  try{
    let {results}=(await axios.get(`${lifeURL}users`)).data
    if(results){
      context.commit('setUsers',results)
    }
  }
  catch(e){
    sweet(
      {
        title:'Error',
        text:'An error occurred when retrieving users.',
        icon:'error',
        timer:2000
      }
    )

  }
},
async fetchUser(context,payload){
  try{
    let {result}= (await axios.get(`${lifeURL}users/${payload.id}`)).data
    if(result){
      context.commit('setUser',result)
    }
    else{
      sweet({
        title:'Retrieving a single user',
        text:'User was not found',
        icon:'info',
        timer:2000
      })
    }
  }catch(e){
    sweet({
      title:'Error',
      text:'A user was not found',
      icon:'error',
      timer:2000
    })
  }
},
async updateUser(context, {id,data}){
  try{
    let{update}= await axios.patch(`${lifeURL}users/update/${id}`,data);
    if(update){
      context.dispatch('setUser');
      sweet({
        title:'Update user',
        icon:'success',
        timer:2000
      })
    }

  }catch(e){
    sweet({
      title:'Error',
      text:'Failed to update user',
      icon:'error',
      timer:2000
    });
    console.error('error updating user:',e)
  }
},

async deleteUser({commit,dispatch},payload){
  try{
await axios.delete(`${lifeURL}users/delete/${payload.id}`)
commit('setUsers');
dispatch('fetchUsers');
sweet({
  title:'User Deleted',
  icon:'success',
  timer:2000
})
  }

  catch(error){
    sweet({
      title:'Error',
      text:'An error occurred when deleting a user',
      icon:'error',
      timer:2000
    })
  }
},

async login(context,payload){
try{
  const {msg,token,result}=(await axios.post(`${lifeURL}users/login`,payload)).data
  if(result){
    context.commit('setUser',{msg,result})
    cookies.set('LegitUser',{
      msg,token,result
    })
    AuthenticateUser.applyToken(token)
    sweet({
      title:msg,
      text:`Welcome back, ${result?.firstName} ${result?.lastName}`,
      icon:"success",
      timer:2000
    })
    router.push({name:'home'})
  }else{
    sweet({
      title:'info',
      text:msg,
      icon:'info',
      timer:2000
    })
  }
}catch(e){
  sweet({
    title:'Error',
    text:'Failed to login',
    icon:'error',
    timer:2000
  })
}
},
    // Products
    async fetchProducts(context){
      try{
        let {results}=
        (await axios.get(`${lifeURL}products`)).data
        if(results){
          context.commit('setProducts',results)
        }
      }
      catch(e){
        sweet({
          title:'Error',
          text:'An error occurred when retrieving products',
          icon:"error",
          timer:2000
        })

      }
    },

    async fetchProduct(context,payload){
      try{
        let {result}=(await axios.get(`${lifeURL}products/${payload.id}`)).data
        if(result){
          context.commit('setProduct', result)
        }
        else{
          sweet(
            {
              title:'Retrieving a single product',
              text:'Product was not found',
              icon:"info",
              timer:2000
            }
          )
        }
      }
      catch(e){
        sweet({
          title:'Error',
          text:'A product was not found.',
          icon:'error',
          timer:2000
        })
      }
    },

    async addProduct(context,payload){
      try{
        let {msg}=(await axios.post(`${lifeURL}products/addProduct`,payload))
        if(msg){
          context.dispatch('setProducts')
          sweet(
            {
              title:'Registration',
              text:msg,
              icon:"success",
              timer:2000
            }
          )
        }
      }catch(e){
        sweet({
          title:'Error',
          text:'Please try again later',
          icon:"error",
          timer:2000
        })
      }
    },
    async deleteProduct({commit,dispatch},payload)
    {
      try{
        await axios.delete(`${lifeURL}products/delete/${payload.id}`)
        commit('setProducts');
        dispatch('fetchProducts');
        sweet(
          {
            title:'Product Deleted',
            icon:"success",
            timer:2000
          }
        )
      }
      catch(error){
        sweet({
          title:'Error',
          text:'An error occurred when deleteing a Product.',
          icon:"error",
          timer:2000
        })
      }
    },
    async updateProduct(context,{id,data}){
      try{
        let {update}= await axios.patch(`${lifeURL}products/update/${id}`,data);
        if(update){
          context.dispatch('setProduct');
          sweet({
            title:'Update product',
            icon:"success",
            timer:2000
          })
        }
      }catch(e){
        sweet(
          {
            title:'Error',
            text:'Failed to update product',
            icon:"error",
            timer:2000
          }
        );
        console.error('Error updating user:',e)
      }
    }
  },
  modules: {
  }
})
