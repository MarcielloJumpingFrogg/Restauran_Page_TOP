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

const container = document.getElementById('container')


function generator(item, key, destination)
{ 
    //debugger
        if(Array.isArray(item))
        {
            
            
            for(let i = 0; i < item.length; i++)
            {
                //console.log('item[i]= ', item[i])
                if(key !== undefined)
                {
                    const element = document.createElement(item[key.indexOf('type')]) 


                    if(item[key.indexOf('class')] == 'box')
                    {
                        element.classList.add(item[key.indexOf('class')])
                        console.log(item[key.indexOf('content')])
                        destination = element
                        container.appendChild(element)
                        generator(item[key.indexOf('content')], undefined, destination)
                        break
                    }
                    else{
                        element.textContent = item[key.indexOf('content')]

                        destination.appendChild(element)
                        break
                    }

                    //posso vedere a cosa corrisponde key
                }
                else
                { 
                    generator(item[i], undefined, destination)
                    //se lo e' allora ri-invoco in modo da poter cercarne il valore
                }
            }
        } 
        else if (typeof item == 'object')
        { 
            generator(Object.values(item), Object.values(Object.keys(item)), destination)
            //se e' un object posso estrarre il valore di key 
        }
    }


export default function()
{
    generator(contactInfo, undefined, container) 
}




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