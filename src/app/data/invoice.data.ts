import { Invoice } from "../model/Invoice";

export const invoiceData:Invoice={
    id:"001",
    company:{
        ruc:"1792285747001",
        name:"Clear Minds Consultores",
        address:{
            city:"Quito",
            principalStreet:"Juan Pablo Sanz",
            secondaryStreet:"Iñaquito",
            code:"N-57",
        },
    },
    customer:{
        id:"1150253084",
        name:"Carlos ",
        surname:"Tene",
        address:{
            city:"Catamayo-Loja",
            principalStreet:"Av. Isidro Ayora",
            secondaryStreet:"Sin nombre",
            code:"N-55",
        },
    },
    items:[
        {   id:100,
            product:{
                id:500,
                name:"Papas Rufles",
                price:0.50,
                description:"Las papas más sabrosas",
                category:{
                    id:50,
                    name:"Golosinas",
                }
            },
            quantity:23,
            
        },
        {   id:101,
            product:{
                id:550,
                name:"Doritos",
                price:0.60,
                description:"De queso",
                category:{
                    id:50,
                    name:"Golosinas",
                }
            },
            quantity:50,
        },
        {   id:102,
            product:{
                id:580,
                name:"Kchitos",
                price:0.30,
                description:"Para kchudos",
                category:{
                    id:50,
                    name:"Golosinas",
                }
            },
            quantity:100,
        },
    ],
}