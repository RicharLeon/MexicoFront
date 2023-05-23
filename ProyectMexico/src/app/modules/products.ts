/**
 * This interface is to retrieve the information that comes from the api
 */
export interface Product {

    _id?: string,
    name: string,
    price: number,
    category: string,
    state: string,
    amount: number,
    description?: string,

}
