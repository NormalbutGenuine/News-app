export const URLToCategory = (category : string) => {
    switch (category) {
        case "/2":
            category = "NANO"
            return category
        
        case "/3":
            category = "BLOCKCHAIN"
            return category
        
        case "/4":
            category = "AI"
            return category
        
        case "/5":
            category = "METAVERSE"
            return category
         
        default:
            category = "BIO"
            return category
    }
}