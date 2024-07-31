interface Shoe{
    brand:string
    discount:number
    createdAt:{
        seconds:number
    }
    updatedAt:{}
    shoeId:string
    manufacturer:string
    name:string
    color:string
    description:string
    for:string
    thumbnail:string
    rating:number
    reviews:number
    sellingPrice:number
    sizes:number[]
    stocks:number[]
    images:string[]
}

interface Accessory{
    createdAt:{
        seconds:number
    }
    updatedAt:{
        seconds:number
    }
    accessoryId:string
    discount:number
    manufacturer:string
    name:string
    thumbnail:string
    rating:number
    reviews:number
    sellingPrice:number
    sizes:number[]
    stocks:number[]
    images:string[]
}

interface Review{
    review:{
        rating:number
        description:string
    }
    username:string
    createdAt:{
        seconds:number
    }
}

interface Slide {
    slideId: string
    slideUrl: string
}