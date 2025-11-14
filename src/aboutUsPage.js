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

function domAppender(item, text, destination)
{
    
}


function generator(item, key, destination)
{ 
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

                }
                else
                { 
                    generator(item[i], undefined, destination) 
                }
            }
        } 
        else if (typeof item == 'object')
        { 
            generator(Object.values(item), Object.values(Object.keys(item)), destination) 
        }
    }


export default function()
{
    generator(contactInfo, undefined, container) 
}

