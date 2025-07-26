const contactInfo = [
    {       //1
        class: 'box',
        type: 'div',
        content : 
        [
            {       //1.1 
                type : 'h3',
                content : 'Contact 1:'
            },

            {       //1.2 
                type: 'p',
                content: '123-123-1212'
            }
        ]
    },
    
    {       //2
        class: 'box',
        type: 'div',
        content: 
        [
            {
                type: 'h3',
                content: 'Contact 2: '
            },

            {
                type: 'p',
                content: '456-456-4545'
            }
        ]
    },

    {       //3
        class: 'box',
        type: 'div',
        content: 
        [
            {
                type: 'h3',
                content: 'Contact 3:'
            }, 

            {
                type: 'p',
                content: '789-789-7878'
            }
        ]
    }
] 


function generator(item, key)
{ 
    //debugger
        if(Array.isArray(item))
        {
            
            
            for(let i = 0; i < item.length; i++)
            {
                if(key !== undefined)
                {
                    const element = document.createElement(item[key.indexOf('type')])

                    
                    if(item[key.indexOf('class')] == 'box')
                    {
                        element.classList.add(item[key.indexOf('class')])
                        console.log(item[key.indexOf('content')])
                        generator(item[key.indexOf('content')])
                    }
                    else{
                        element.textContent = item[key.indexOf('content')]
                        console.log(element)
                    }

                    //posso vedere a cosa corrisponde key
                }
                else
                { 
                    generator(item[i], undefined)
                    //se lo e' allora ri-invoco in modo da poter cercarne il valore
                }
            }
        } 
        else if (typeof item == 'object')
        { 
            generator(Object.values(item), Object.values(Object.keys(item)))
            //se e' un object posso estrarre il valore di key 
        }
    }


generator(contactInfo)



/* 
    problemi: 
        gira 1 per ogni elemento dentro l'array

    eeeeee:
        risolve per ogni i
            ma io lo risolvo in una volta sola D:
            (basically io do sia type che classe che testo, ma il for(i) viaggia uno alla volta)


    possibile risoluzione:
        cambiare il modo in cui i funziona 

        / fare in modo che si completi quando finisco di generare un item

*/