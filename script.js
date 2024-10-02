

const tarotName = document.querySelector ('#tarotName') // Lines 1-9 are setters based on HTML file

const getFortuneBtn = document.querySelector ('#btn')

const tarotDescription = document.querySelector('#tarotDescription')

const cardImg = document.querySelector('#card-img')






// Line 18 this function has a timing built into the code. That timing comes up on Line 19
// says wait for this information to retrieve successfully until this function is complete
//line 21 gives it a direct path on where to go for the api

const getTarotInfo =  async () => {
    const tarottypes = await axios.get('https://tarot-api-3hv5.onrender.com/api/v1/cards/random?n=1')
    const tarotArray = tarottypes.data.cards[0].meaning_up
    console.log(tarotArray)
    tarotDescription.innerHTML = tarotArray
    tarotName.innerHTML = ""
    cardImg.setAttribute('src', "")
}




const getTarot = async () => {
    let tarotCard; // To store the current tarot card

    while (true) {
        const tarottypes = await axios.get('https://tarot-api-3hv5.onrender.com/api/v1/cards/random?n=1');
        tarotCard = tarottypes.data.cards[0];
        const tarotArray = tarotCard.name;

        console.log(tarotArray);

        // Clear the description for each iteration
        tarotDescription.innerHTML = "";

        if (tarotCard.type === 'major') { 
            // Process only if the card type is 'major'
            tarotName.innerHTML = tarotArray; // Display the name
            cardImg.setAttribute('src', `Tarot-Card-imgs/${tarotArray}.jpg`); // Set the image source
            break; // Exit the loop after processing a major card
        }

        // If it's a minor card, the loop will continue to fetch another card
    }
}





 
getFortuneBtn.addEventListener('click', () => {
    getTarot()
}) 


tarotName.addEventListener('click', () => {
    getTarotInfo()
})

cardImg.addEventListener('click', () => {
    getTarotInfo()
})































// const getFortuneBtn = document.querySelector('#btn')
// getFortuneBtn.addEventListener('click', () => {

// })

// const tarotCards = document.getElementsByClassName('.img')

// getFortuneBtn.addEventListener('click', () => {
//    const meaning = document.querySelector('#app')
//    app.innerText = tarotList[index].meaning

// })


// const tarotList = [
//     {
//         name: "Strength",
//         imgSrc: 'https://unwinnable.com/wp-content/uploads/2013/08/Tarot2.jpg',
//         meaning: `Strength predicts the triumphant conclusion to a major life problem, situation or temptation through strength of character. It is a very happy card if you are fighting illness or recovering from injury. It emphasizes achieving success through inner strength rather than external force.`
        
//     },
//     {
//         name: "The Magician",
//         imgSrc: 'https://cdn.shopify.com/s/files/1/1366/7699/files/The-Magician-Major-arcana-tarot-card_large.png?v=1472681005',
//         meaning: `When the Magician appears in a spread, it points to the talents, capabilities and resources at the querent's disposal to succeed. The message is to tap into one's full potential rather than holding back, especially when there is a need to transform something`
//     },
//     {
//         name: "The Fool",
//         imgSrc: 'https://images.squarespace-cdn.com/content/v1/65ca8126025b8b2aeb60b542/03b114a7-9daa-49b2-b935-5b813e0a87ba/The+Fool+3.png',
//         meaning: `The Fool represents new beginnings, having faith in the future, being inexperienced, not knowing what to expect, having beginner's luck, improvisation and believing in the universe. It symbolizes the embrace of new beginnings, the expansion of one's horizons, and the willingness to take risks guided by intuition.`
//     },

//     {
//         name: "Death",
//         imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg',
//         meaning: `Unlikely that this card actually represents a physical death. Typically it implies an end, possibly of a relationship or interest, and therefore implies an increased sense of self-awareness. It represents the end of a significant phase in your life that you recognize is no longer serving you.`
//     },
//     {
//         name: "Queen of Cups",
//         imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Cups13.jpg',
//         meaning: `The Queen of Cups reminds us to treat ourselves and others with compassion and sympathy. She encourages us to embrace our emotions and express them authentically. This card also highlights the importance of self-care and nurturing our own emotional well-being.`
//     },

//     {
//         name: "The Chariot",
//         imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/RWS_Tarot_07_Chariot.jpg/800px-RWS_Tarot_07_Chariot.jpg',
//         meaning: `The Chariot is a card about overcoming conflicts and moving forward in a positive direction. One needs to keep going on and through sheer hard work and commitment they will be victorious. The Chariot card in the tarot represents determination, success, and control.`
//     },


//     {
//         name: "The Hermit",
//         imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/RWS_Tarot_09_Hermit.jpg/800px-RWS_Tarot_09_Hermit.jpg',
//         meaning: `The Hermit suggests that you are in a phase of introspection where you are drawing your attention inwards and looking for answers within. You are in need of a period of inner reflection, away from the current demands of your position.`
//     },


//     {
//         name: "Page of Swords",
//         imgSrc: 'https://www.spiritdelalune.com/wp-content/uploads/page-of-swords-tarot-card.webp',
//         meaning: `The Page cards typically represent young individuals or those who embody youthful energy, curiosity, and vitality. The Page of Swords specifically signifies a person who possesses mental agility, sharp communication skills, and a thirst for knowledge.`
//     },


//     {
//         name: "Ace of Wands",
//         imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Wands01.jpg',
//         meaning: `This card in a reading signifies success in all aspects. The success is backed by luck. This combination of success backed by hard work and luck is what forms the basis of the Ace card in the Tarot deck. The element of the wands suit is fire. The key words are passion, new ventures, success, and good luck.`
//     },


//     {
//         name: "Ace of Pentacles",
//         imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Pents01.jpg',
//         meaning: `The Ace of Pentacles card is a positive sign that represents new beginnings, opportunities, and the potential for financial success. It can also indicate that new doors are opening, and that you have the chance to make your goals and dreams a reality. 
// `
//     },

    
// ]



// const index = getRandomIndex(tarotList)

// const answer = tarotList[index].name


// const divApp = document.querySelector("#app")
// displayRandomImg(divApp, tarotList, index)
// const img = document.querySelector("img")




// function displayRandomImg (element, arr, index){
  
//     const img = document.createElement("img")
    
//     img.setAttribute("src", arr[index].imgSrc)
    
//     element.appendChild(img)
// }


// function getRandomIndex(arr){
    
//     return Math.floor(Math.random() * arr.length)
// }