import { createStore } from "vuex"

const store = createStore({
  state() {
    return {
      cardItems: [
        {
          id: "1asdsadsa",
          imageMain: "/assets/images/main/slider/slide1.png",
          imagesUrls: [
            "/assets/images/main/slider/slide1.png",
            "/assets/images/main/slider/slide2.png",
            "/assets/images/main/slider/slide3.png",
            "/assets/images/main/slider/slide1.png",
          ],
          title: "Кофта1 не в наличии",
          description:
            "Легкая и практичная куртка от Glissade понравится всем, кто увлекается зимними видами спорта.",
          price: 32190,
          oldPrice: 50990,
          options: {
            sizes: ["41", "42", "43", "44", "45"],
            colors: ["black", "brown", "gray", "white"],
          },
          category: "clothes",
          inStock: false,
        },
        {
          id: "2acxz",
          imageMain: "/assets/images/main/slider/slide3.png",
          imagesUrls: [
            "/assets/images/main/slider/slide1.png",
            "/assets/images/main/slider/slide2.png",
          ],
          title: "Кофта2 в наличии",
          description:
            "Легкая и практичная куртка от Glissade понравится всем, кто увлекается зимними видами спорта.",
          price: 10232,
          oldPrice: 50990,
          options: {
            sizes: ["41", "42", "43", "44", "45"],
            colors: ["black", "brown", "gray", "white"],
          },
          category: "clothes",
          inStock: true,
        },
        {
          id: "3zxczcsa",
          imageMain: "/assets/images/main/slider/slide2.png",
          imagesUrls: [
            "/assets/images/main/slider/slide1.png",
            "/assets/images/main/slider/slide2.png",
            "/assets/images/main/slider/slide3.png",
            "/assets/images/main/slider/slide1.png",
          ],
          title: "Ботинки утепленные Puffy в наличии",
          description:
            "Легкая и практичная ботинки от Glissade понравится всем, кто увлекается зимними видами спорта.",
          price: 102322,
          oldPrice: 50990,
          options: {
            sizes: ["41", "42", "43", "44", "45"],
            colors: ["black", "brown", "gray", "white"],
          },
          category: "shoes",
          inStock: true,
        },
        {
          id: "4sacxzasdq",
          imageMain: "/assets/images/main/slider/slide2.png",
          imagesUrls: [
            "/assets/images/main/slider/slide1.png",
            "/assets/images/main/slider/slide2.png",
            "/assets/images/main/slider/slide3.png",
            "/assets/images/main/slider/slide1.png",
          ],
          title: "Ботинки утепленныеffy в наличии",
          description:
            "Легкая и практичная ботинки от Glissade понравится всем, кто увлекается зимними видами спорта.",
          price: 1023,
          oldPrice: 50990,
          options: {
            sizes: ["41", "42", "43", "44", "45"],
            colors: ["black", "brown", "gray", "white"],
          },
          category: "shoes",
          inStock: true,
        },
        {
          id: "5dsacxzcsad",
          imageMain: "/assets/images/main/slider/slide2.png",
          imagesUrls: [
            "/assets/images/main/slider/slide1.png",
            "/assets/images/main/slider/slide2.png",
            "/assets/images/main/slider/slide3.png",
          ],
          title: "Ботинки утепленные мужские не в наличии",
          description:
            "Легкая и практичная ботинки от Glissade понравится всем, кто увлекается зимними видами спорта.",
          price: 102,
          oldPrice: 50990,
          options: {
            sizes: ["42", "43", "44", "45"],
            colors: ["black", "brown"],
          },
          category: "shoes",
          inStock: false,
        },
        {
          id: "6asdczxzcxca",
          imageMain: "/assets/images/main/slider/slide5.jpg",
          imagesUrls: [
            "/assets/images/main/slider/slide1.png",
            "/assets/images/main/slider/slide2.png",
            "/assets/images/main/slider/slide3.png",
            "/assets/images/main/slider/slide1.png",
          ],
          title: "Лыжи беговые 1 не в наличии",
          description:
            "Легкая и практичная беговые лыжи от Glissade понравится всем, кто увлекается зимними видами спорта.",
          price: 10,
          oldPrice: 50990,
          category: "cross-country-skis",
          inStock: false,
        },
        {
          id: "7fsadsad",
          imageMain: "../../../../../assets/images/main/slider/slide5.jpg",
          imagesUrls: [
            "/assets/images/main/slider/slide1.png",
            "/assets/images/main/slider/slide2.png",
            "/assets/images/main/slider/slide3.png",
            "/assets/images/main/slider/slide1.png",
          ],
          title: "Лыжи беговые 2 в наличии",
          description:
            "Легкая и практичная беговые лыжи от Glissade понравится всем, кто увлекается зимними видами спорта.",
          price: 102123,
          oldPrice: 50990,
          category: "cross-country-skis",
          inStock: true,
        },
        {
          id: "8cxzczdsad",
          imageMain: "/assets/images/main/slider/slide5.jpg",
          imagesUrls: [
            "/assets/images/main/slider/slide2.png",
            "/assets/images/main/slider/slide2.png",
            "/assets/images/main/slider/slide3.png",
            "/assets/images/main/slider/slide2.png",
          ],
          title: "Лыжи беговые 3 в наличии",
          description:
            "Легкая и практичная беговые лыжи от Glissade понравится всем, кто увлекается зимними видами спорта.",
          price: 54132,
          oldPrice: 50990,
          category: "cross-country-skis",
          inStock: true,
        },
        {
          id: "9zxczcsadsad",
          imageMain: "/assets/images/main/slider/slide6.jpg",
          imagesUrls: [
            "/assets/images/main/slider/slide6.jpg",
            "/assets/images/main/slider/slide2.png",
            "/assets/images/main/slider/slide3.png",
            "/assets/images/main/slider/slide6.jpg",
          ],
          title: "Лыжи горные 1 в наличии",
          description:
            "Легкая и практичная горные лыжи от Glissade понравится всем, кто увлекается зимними видами спорта.",
          price: 65132,
          oldPrice: 50990,
          category: "downhill-skis",
          inStock: true,
        },
        {
          id: "10cxzczvadsasda",
          imageMain: "/assets/images/main/slider/slide6.jpg",
          imagesUrls: [
            "/assets/images/main/slider/slide6.jpg",
            "/assets/images/main/slider/slide2.png",
            "/assets/images/main/slider/slide3.png",
            "/assets/images/main/slider/slide6.jpg",
          ],
          title: "Лыжи горные 2 в наличии",
          description:
            "Легкая и практичная горные лыжи от Glissade понравится всем, кто увлекается зимними видами спорта.",
          price: 13832,
          oldPrice: 50990,
          category: "downhill-skis",
          inStock: true,
        },
        {
          id: "11zxcxzcaaaazcx",
          imageMain: "/assets/images/main/slider/slide7.jpg",
          imagesUrls: [
            "/assets/images/main/slider/slide7.jpg",
            "/assets/images/main/slider/slide2.png",
            "/assets/images/main/slider/slide3.png",
            "/assets/images/main/slider/slide7.jpg",
          ],
          title: "Аксессуар 1 в наличии",
          description:
            "Легкая и практичная аксессуар от Glissade понравится всем, кто увлекается зимними видами спорта.",
          price: 138322,
          oldPrice: 50990,
          category: "accessories",
          inStock: true,
        },
        {
          id: "12asdsad",
          imageMain: "/assets/images/main/slider/slide7.jpg",
          imagesUrls: [
            "/assets/images/main/slider/slide7.jpg",
            "/assets/images/main/slider/slide2.png",
            "/assets/images/main/slider/slide3.png",
            "/assets/images/main/slider/slide7.jpg",
          ],
          title: "Аксессуар 2 в наличии",
          description:
            "Легкая и практичная аксессуар от Glissade понравится всем, кто увлекается зимними видами спорта.",
          price: 133,
          oldPrice: 50990,
          category: "accessories",
          inStock: true,
        },
        {
          id: "13asdasdcxzczx",
          imageMain: "/assets/images/main/slider/slide7.jpg",
          imagesUrls: [
            "/assets/images/main/slider/slide7.jpg",
            "/assets/images/main/slider/slide2.png",
            "/assets/images/main/slider/slide3.png",
            "/assets/images/main/slider/slide7.jpg",
          ],
          title: "Аксессуар 2 не в наличии",
          description:
            "Легкая и практичная аксессуар от Glissade понравится всем, кто увлекается зимними видами спорта.",
          price: 6762,
          oldPrice: 50990,
          category: "accessories",
          inStock: false,
        },
      ],
      basket: [],
    }
  },
  mutations: {
    addToBasket(state, newItem) {
      state.basket.push(newItem)
    },
  },
  actions: {},
  getters: {},
})

export default store
