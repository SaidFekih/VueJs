
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
        brand:'Said',
        product: 'Socks',
        productSize:[39,41,43,45,47],
        porductSizeStyle:'display: inline-flex',
        details:['50% cotton','30% wool','20% polyester'],
        productDiscription:'Kalsita 7lewa mta3 rjéls',
        selectedItem:0,
        altImage:'taswiret kalsita zarka',
        productimage:'product-image',
        inventory:02,
        cart: 0,
        varients:[
          {id:2235, color:'blue', image:'assets/images/socks_blue.jpg', quentiti:5},
          {id:2234, color:'green', image:'assets/images/socks_green.jpg',quentiti:0}
        ], 
      }
    },
    methods:{
      updateImage(index){
        this.selectedItem=index;
      },
      checkInventory(cart){
        console.log('cart =' +this.cart)
        if(this.varients[this.selectedItem].quentiti > 0){
          this.varients[this.selectedItem].quentiti -=1;
          this.cart +=1
          if(this.varients[this.selectedItem].quentiti === 0){
            this.disableButton = true
          }

        }else{
          console.log("inventory 0")
          this.disableButton = true
        }
      },
      removeArticleFromCart(cart){
        this.cart-=1;
        this.varients[this.selectedItem].quentiti +=1;
        this.disableButton = false;
      },
    },
    computed:{
      title(){
          return this.brand+' '+ this.product
      },
      image(){
          return this.varients[this.selectedItem].image
      },
      stok(){
        return this.varients[this.selectedItem].quentiti
      },
      disableButton(){
        return this.varients[this.selectedItem].quentiti > 0 ? false: true
      }

    }
  }).mount("#produits")

 
  