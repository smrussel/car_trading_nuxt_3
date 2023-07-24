import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

export default defineEventHandler((event)=>{
    const {city} = event.context.params
    const {make, minPrice,maxPrice} = getQuery(event)

    const filters = {
        city:city.toLowerCase()
    }


    if (make){
        filters.make = make
    }

    if (minPrice || maxPrice){
        filters.price = {}
    }

    if (minPrice){
        filters.price.gte= parseInt(minPrice)
        
    }

    if (maxPrice){
        filters.price.lte= parseInt(maxPrice)
    }

    // return filteredCars
    return prisma.car.findMany({
        where: filters
    })
})