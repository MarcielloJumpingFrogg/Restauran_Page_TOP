import fluffyPancake from '../images/fluffyPancake.jpeg'
import japaneseCheesecake from '../images/japaneseCheesecake.jpeg' 
import tiramisu from '../images/tiramisu.jpeg'
import eggs from '../images/eggs.jpeg'
import pepsi from '../images/pepsi.jpeg'

const menu = [
    {
        name: 'Fluffy Pancake',
        image : fluffyPancake,
        ingredients: 'Pancake, Fruit, Cream', 
        price: '10$',
        cat: 'breakfast',
    },
    {
        name: 'Japanese CheeseCake',
        image: japaneseCheesecake,
        ingredients: 'eggs, milk, stuff?',
        price: '11$',
        cat: 'breakfast', 
    },
    {
        name: 'Tiramisu',
        image: tiramisu,
        ingredients: 'Eggs, coffe, something',
        price: '8$',
        cat: 'breakfast',
    },
    {
        name: 'Eggs',
        image: eggs,
        ingredients: 'eggs',
        price: '5$',
        cat: 'breakfast lunch'
    },
    {
        name: 'Pepsi',
        image: pepsi,
        ingredients: 'who knows, sugar',
        'price': '2.50$',
        cat: 'drink',
    }
]

let currentActive = false

const container = document.getElementById('container')

function sectionOfMenu() {
    const funContainer = document.createElement('div')
    funContainer.id = 'funContainer'

    const fullMenu = document.createElement('button')
    fullMenu.textContent = 'All'
    fullMenu.dataset.id = 'all'
    funContainer.appendChild(fullMenu)


    const breakfastButton = document.createElement('button')
    breakfastButton.textContent = 'Breakfast'
    breakfastButton.dataset.id = 'breakfast'
    funContainer.appendChild(breakfastButton)

    const lunchButton = document.createElement('button')
    lunchButton.textContent = 'Lunch'
    lunchButton.dataset.id = 'lunch'
    funContainer.appendChild(lunchButton)

    const drinksButton = document.createElement('button')
    drinksButton.textContent = 'Drink'
    drinksButton.dataset.id = 'drink'
    funContainer.appendChild(drinksButton)

    container.appendChild(funContainer)
}

function setActive() {
    if (currentActive)
    {
        currentActive = false
    }
    else
    {
        currentActive = true
    }
}


function loadMenu()
{
    sectionOfMenu()

    setActive()

    const menuContainer = document.createElement('div')
    menuContainer.classList.add('menuContainer')
    menu.forEach(element => {
        const item = document.createElement('div')
        
            const name = document.createElement('h3')
            name.textContent = element.name
            item.appendChild(name)
        
        
            const img = document.createElement('img')
            img.src = element.image
            item.appendChild(img)

            const ingredients = document.createElement('p')
            ingredients.textContent = `Ingredients: ${element.ingredients}`
            item.appendChild(ingredients)

            const price = document.createElement('button')
            price.textContent = element.price
            item.appendChild(price)


            if((element.cat).includes(' ') )
            {
                const splitCat = element.cat.split(' ') 

                splitCat.forEach(splitVal => {
                    item.classList.add(splitVal)
                });
                item.classList.add('menuItem')
            }
            else{
                item.classList.add(element.cat, 'menuItem') 
            }
        

        menuContainer.appendChild(item)
    })
    container.appendChild(menuContainer)
}

export default function()
{
    loadMenu()
}


const loadSection = document.getElementById('funContainer')

const buttons = loadSection.querySelectorAll('button')      //there is no 'funContainer' quindi non sa cosa prendere (HHHHEEEEELP)

const menuItem = document.querySelectorAll('.menuItem')

for( let i = 0; i < buttons.length; i++)
{ 
    buttons[i].addEventListener('click', function(){
        menuItem.forEach(element => {
            element.classList.remove('invisible')
        }); 
        if(buttons[i].dataset.id != 'all')
        {
            menuItem.forEach(element => {
                
                if(!element.classList.contains(buttons[i].dataset.id))
                {
                    element.classList.add('invisible') 
                }
            })
        }
        
    })
}


