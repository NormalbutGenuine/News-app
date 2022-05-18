export interface Ex_DTO {
    OASIS : string,
    BLUR : string,
    winner : boolean
}

export class Test_DTO {
    Example : string
    Index : number
}

const sample = new Test_DTO()
console.log(sample.Example)