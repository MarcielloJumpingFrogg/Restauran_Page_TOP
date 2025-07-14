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
    const container = document.getElementById('container')

    page.forEach(parent => { 
        console.log(parent.type)
        let createdEl = document.createElement(parent.type) 
        
        /* Object.keys(parent).forEach(key => { 
            if(typeof(parent[key]) == 'string')
                {
                    
                }
            }) */
            
        container.appendChild(createdEl)
        
        
        /* console.log(typeof(e))
        console.log((e[0]))
        console.log((e.class))
        console.log((e.content)) */
        for(let i = 0; i < parent.content.length; i++)
        { 
            //console.log(Object.values(e.content[i]))
            //mi serve per ogniuno dei miei item all'interno di content + per ogni item dentro div ecc.
        }
    })
}