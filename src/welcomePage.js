const page = [
    {   // -->0 / first div (review / good things about it)
        type : 'div',
        class : 'container',
        content : [
            {   //review
                type : 'p',
                class : '',
                text : 'lorem stuff blabla',
            },

            {   //reviewer
                type : 'h3',
                class : '',
                text : 'John Doe',
            }
        ]
    },

    {   // --> 1 / second div (hours)
        type: 'div',
        class: 'container',
        content: [
            {
                type : 'p',
                class : 'Monday',
                text : 'Monday: 8:00 - 16:00',
            },
            {
                type : 'p',
                class : 'Tuesday',
                text : 'Tuesday: 8:00 - 17:00',
            },
            {
                type : 'p',
                class : 'Wednesday',
                text : 'Wednesday: 8:00 - 17:00',
            },
            {
                type : 'p',
                class : 'Thursday',
                text : 'Thursday: 8:00 - 16:00',
            },
            {
                type : 'p',
                class : 'Friday',
                text : 'Friday: 8:00 - 18:00',
            },
            {
                type : 'p',
                class : 'Saturday',
                text : 'Saturday: 7:00 - 19:00',
            },
            {
                type : 'p',
                class : 'Sunday',
                text : 'Sunday: 10:00 - 16:00',
            },
        ]
    },

    {   // --> 2 / third div (where to find us)
        type: 'div',
        class: 'container',
        content: [
            {   //title (location)
                type: 'h3',
                class: '',
                text : 'Location'
            },
            {   //adress 
                type : 'p',
                class : '',
                text : '123 first street, second town, third country'
            }
        ]
    }
]



export default function() {
    navigatePage(page)
}

function addToPage(destination, child)
{
    destination.appenChild(child)
}


function navigatePage(nav, key) {
    const container = document.getElementById('container')
    let element 
    if(typeof nav == 'string')
    {
        if(key == 'type')
        {
            element = document.createElement(nav)
            element.classList.add(nav)
            console.log(element)
        } 
    }
    else if(Array.isArray(nav))
    {
        for(let i = 0; i < nav.length; i++)
        {
            if(key !== undefined)
            {
                navigatePage(nav[i], key[i]) 
            }
            else{
                navigatePage(nav[i])
            }

        }
        
    }else if(typeof nav == 'object')
        {
            const converValuesToArray = Object.values(nav)
            const convertKeysToArray = Object.values(Object.keys(nav))
            navigatePage(converValuesToArray, convertKeysToArray)
        }
}

navigatePage(page)