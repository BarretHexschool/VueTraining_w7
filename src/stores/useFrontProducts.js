import { defineStore } from 'pinia'
import axios from 'axios'
import sweetAlertStore from './useSweetAlertStore'
const sweetAlert = sweetAlertStore()
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export const useProductStore = defineStore('useProductStore', {
  state: () => {
    return {
      products: [],
      groupProducts: [],
      isLoading: true
    }
  },
  actions: {
    getProducts () {
      axios
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          this.products = res.data.products
          this.groupProducts = Object.values(
            this.gropuSetProducts(res.data.products)
          )
          this.isLoading = false
        })
        .catch((err) => {
          sweetAlert.swalError(err)
        })
    },
    gropuSetProducts (setProducts) {
      const setGroup = {}
      setProducts.forEach((item) => {
        const { mainTitle, select1, select2 } = item
        if (item.is_select === 1) {
          if (setGroup[mainTitle] === undefined) {
            setGroup[mainTitle] = {
              ...item
            }
          } else {
            if (select1 !== undefined) {
              if (typeof setGroup[mainTitle].select1 === 'string') {
                if (setGroup[mainTitle].select1 !== select1) {
                  setGroup[mainTitle].select1 = [
                    setGroup[mainTitle].select1,
                    select1
                  ]
                }
              } else {
                if (!this.checkHas(setGroup[mainTitle].select1, select1)) {
                  setGroup[mainTitle].select1 = [
                    ...setGroup[mainTitle].select1,
                    select1
                  ]
                }
              }
            }

            if (typeof setGroup[mainTitle].select2 === 'string') {
              if (setGroup[mainTitle].select2 !== select2) {
                setGroup[mainTitle].select2 = [
                  setGroup[mainTitle].select2,
                  select2
                ]
              }
            } else {
              if (!this.checkHas(setGroup[mainTitle].select2, select2)) {
                setGroup[mainTitle].select2 = [
                  ...setGroup[mainTitle].select2,
                  select2
                ]
              }
            }
          }
        } else {
          setGroup[mainTitle] = {
            ...item
          }
        }
      })
      return setGroup
    },
    checkHas (arr, find) {
      return arr.includes(find)
    }
  },
  getters: {}
})
