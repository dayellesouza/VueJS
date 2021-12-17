let app = new Vue({
    el: '#app',
    data: {
        brand: 'Vue Masterful',
        product: 'Socks',
        selectedVariant: 0,
        altText: 'A pair of sock',
        linkSocks: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
        description: 'A pair of warm, fuzzy ',
        onSale: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"], //Array
        variants: [
            {
                variantId: 2234,
                variantColor: "#23864F",
                variantImage: "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
                variantQuantity: 10
            },
            {
                variantId: 2235,
                variantColor: "#203042",
                variantImage: "https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg",
                variantQuantity: 0
            }
        ],                           //Objeto
        sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
        cart: 0,
        onSale: false
    },

    methods: {
        addToCart: function () {
            this.cart += 1
        },
        updateProduct(index) {
            this.selectedVariant = index
        },
        removeFromCart() {
            this.cart -= 1
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        sale() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' are on sale!'
            } else {
                return this.brand + ' ' + this.product + ' are not on sale!'
            }
        }
    }
})