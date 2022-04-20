export class CategoryNumber {
    categoryNum
    constructor (){
        this.categoryNum = "1"
    }

    setCategoryNum(category:string){
        this.categoryNum = category
        if (category === "1") category = "";
        document.location.href = `/${category}`
    }

    getCategoryNum(){
        return this.categoryNum
    }
    
}