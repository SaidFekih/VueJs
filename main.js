
const firstVue = Vue.createApp({
    data() {
      return {
        message: 'Hello form Vue!',
        
      }
    }
  }).mount('#app')

  const secondVue = Vue.createApp({
    data(){
      return{
        product: 'Socks',
        porductName:'Kalsita',
        productSize:[39,41,43,45,47],
        porductSizeStyle:'display: inline-flex',
        details:['50% cotton','30% wool','20% polyester'],
        productDiscription:'Kalsita 7lewa mta3 rjéls',
        image:'assets/images/socks_blue.jpg',
        altImage:'taswiret kalsita zarka',
        productimage:'product-image',
        productLink:'www.google.ca',
        inventory:80,
        cart:0,
        varients:[
          {id:2235, color:'blue', image:'assets/images/socks_blue.jpg'},
          {id:2234, color:'green', image:'assets/images/socks_green.jpg'}
        ]
      }
    },
    methods:{
      updateImage(varientImage){
        this.image=varientImage;
      },
      updateCart(cart){
        this.cart-=1;
      }
    }
  }).mount("#produits")

 
  