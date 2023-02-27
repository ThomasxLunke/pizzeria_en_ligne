const { PrismaClient, ProductType } = require('@prisma/client')
const prisma = new PrismaClient()


const run = async () => {
    await Promise.all(
        new Array(5).fill(1).map(async (_, i) => {
            return prisma.product.create({
                data: {
                  name: `Menu & Promo ${i + 1}`,
                  description: `${i+1} Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
                  price: 13.98,
                  vegetarian: false,
                  productType: ProductType.MENUPROMO,
                  image: "https://api.pizzahut.io/v1/content/fr-fr/fr-1/images/deal/mega-menu-heineken.378412a96a443bed147e1f75e9048ead.1.jpg"
                },
            })
        }),
        new Array(5).fill(1).map(async (_, i) => {
            return prisma.product.create({
                data: {
                  name: `Pizza ${i + 1}`,
                  description: `${i+1} Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
                  price: 13.98,
                  vegetarian: false,
                  productType: ProductType.PIZZAS,
                  image: "https://api.pizzahut.io/v1/content/fr-fr/fr-1/images/pizza/pepperoni.fb8811efbc2a4e2bb93a5104105fbe55.1.jpg?width=300"
                },
            })
        }),
        new Array(5).fill(1).map(async (_, i) => {
            return prisma.product.create({
                data: {
                  name: `Entrée ${i + 1}`,
                  description: `${i+1} Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
                  price: 13.98,
                  vegetarian: false,
                  productType: ProductType.ENTREE,
                  image: "https://api.pizzahut.io/v1/content/fr-fr/fr-1/images/side/bruschetta-mozzarella-4.57e86735a26cb4ab6918801a697a8100.1.jpg?width=550"
                },
            })
        }),
        new Array(5).fill(1).map(async (_, i) => {
            return prisma.product.create({
                data: {
                  name: `Sauce ${i + 1}`,
                  description: `${i+1} Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
                  price: 13.98,
                  vegetarian: false,
                  productType: ProductType.SAUCES,
                  image: "https://api.pizzahut.io/v1/content/fr-fr/fr-1/images/dip/bbq-dip-single.f4722cd3668517ac6f03aa9a31e7121b.1.jpg?width=550"
                },
            })
        }),
        new Array(5).fill(1).map(async (_, i) => {
            return prisma.product.create({
                data: {
                  name: `Dessert ${i + 1}`,
                  description: `${i+1} Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
                  price: 13.98,
                  vegetarian: false,
                  productType: ProductType.DESSERTS,
                  image: "https://api.pizzahut.io/v1/content/fr-fr/fr-1/images/dessert/ben-and-jerrys-cookie-dough-100ml.4ff8c24d07e519e080e7651bbee08e16.1.jpg"
                },
            })
        }),
        new Array(5).fill(1).map(async (_, i) => {
            return prisma.product.create({
                data: {
                  name: `Boisson ${i + 1}`,
                  description: `${i+1} Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
                  price: 13.98,
                  vegetarian: false,
                  productType: ProductType.BOISSONS,
                  image: "https://api.pizzahut.io/v1/content/fr-fr/fr-1/images/drink/fuze-tea-1250ml.ed8f8d12c0ba1850ba838b1cf8b5a7a7.1.jpg?width=550"
                },
            })
        }),
        new Array(2).fill(1).map(async (_, i) => {
            return prisma.product.create({
                data: {
                  name: `AUTRE ${i + 1}`,
                  description: `${i+1} Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
                  price: 13.98,
                  vegetarian: false,
                  productType: ProductType.AUTRES,
                  image: "https://api.pizzahut.io/v1/content/fr-fr/fr-1/images/side/cutlery.7d11436beb456e0d33306d4cb87370bd.1.jpg?width=550"
                },
            })
        }),
          
    )
    // eslint-disable-next-line no-unused-vars
    const restaurant1 = await prisma.restaurant.create({
        data: {
         name: `Restaurant 31000`,
         longitude: 1.447860,
         latitude: 43.612530,
         zipCode: 31000
        }
    })
    // eslint-disable-next-line no-unused-vars
    const restaurant2 = await prisma.restaurant.create({
        data: {
         name: `Restaurant 31200`,
         longitude: 1.433680,
         latitude: 43.627180,
         zipCode: 31200
        }
    })

    // eslint-disable-next-line no-unused-vars
    const restaurant3 = await prisma.restaurant.create({
        data: {
         name: `Restaurant 31400`,
         longitude: 1.446030,
         latitude: 43.588810,
         zipCode: 31400
        }
    })
}

run()