
const result = document.getElementById('result')
const filter = document.getElementById('filter')

const list = []


getfile()

filter.addEventListener('input', (e)=> getFilter(e.target.value))




async function getfile(){

    const res = await fetch('https://www.randomuser.me/api?results=50')

        const { results} = await res.json()


        //clear result

        result.innerHTML=''

        results.forEach(user => {

            const li = document.createElement('li')

            list.push(li)

            li.innerHTML = `
                    
            <img src = "${user.picture.large}" alt="${user.name.first}">
            
            <div class="user_info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country} </p>            
            
            </div>
            `
            
            result.appendChild(li)
        });

}

function getFilter(serchTearm){

    list.forEach(item => {
        if(item.innerText.toLowerCase().includes(serchTearm.toLowerCase()))
            {
                item.classList.remove('hide')
            }else{
                item.classList.add('hide')
            }

    })

}

