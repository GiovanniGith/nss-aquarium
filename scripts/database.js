const database = {
    fish: [
        {
            name: "Bart",
            food: "crustaceans",
            size: 3, 
            location: "any", 
            price: 10,

        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}
