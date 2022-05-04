export const URLToCategory = (category : string) => {
    switch (category) {
        case "/2":
            category = "economy"
            return category
        
        case "/3":
            category = "society"
            return category
        
        case "/4":
            category = "science"
            return category
        
        case "/5":
            category = "sports"
            return category
         
        default:
            category = "politics"
            return category
    }
}

