const page = [
    {   // -->0 / first div (review / good things about it)
        type : 'div',
        class : 'box',
        content : [
            {   //review
                type : 'p',
                class : '',
                text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quibusdam ab non ex in quam, aperiam minus expedita eligendi inventore velit sunt vero ut itaque eius autem repellendus, ipsa impedit omnis, fugit natus. Nobis, quas.',
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
        class: 'box',
        content: [
            {
                type : 'h3',
                class: '',
                text: 'Opening Hours',
            }
            ,{
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
        class: 'box',
        content: 
        [
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

    const container = document.getElementById('container')


export default function() {
    navigatePage(page)
}


function navigatePage(nav, key, destination) {

    if(typeof nav == 'string')
    {
        
    }
    else if(Array.isArray(nav))
    {
        for(let i = 0; i < nav.length; i++)
        {

            if(key !== undefined)
            { 
                if(key[i] == 'type')
                    { 
                        const element = document.createElement(nav[i])
                        if((nav[i + 1] !== '') && (key[ i + 1] == 'class'))     //basically box and other class having elements
                        {
                            element.classList.add(nav[i + 1]) 
                        }
                        if(key.includes('content'))
                            {
                                destination = element
                                container.appendChild(element)
                            }
                            else
                            {
    
                                destination.appendChild(element)
                            }
                        if (key.includes('text'))
                        { 
                            element.innerText = nav[2]
    
                        }
                        
                    } 
                navigatePage(nav[i], key[i], destination) 
            }
            else{
                navigatePage(nav[i], undefined, destination) 
            }

        }
        
    }else if(typeof nav == 'object')
        {
            const converValuesToArray = Object.values(nav)
            const convertKeysToArray = Object.values(Object.keys(nav))
            navigatePage(converValuesToArray, convertKeysToArray, destination)
        }
}

navigatePage(page)