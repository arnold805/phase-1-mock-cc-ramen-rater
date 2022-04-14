document.addEventListener("DOMContentLoaded", function() {
    function fetchRamens() {
        fetch('http://localhost:3000/ramens')
        .then( response => response.json() )
        .then( data => renderRamens(data) )
    }

    function renderRamens(ramens) {
        const ramenMenu = document.getElementById('ramen-menu')

        ramens.forEach(ramen => {
            const ramenImage = document.createElement('img')
            ramenImage.setAttribute('src', ramen.image)
            ramenImage.setAttribute('id', ramen.id)
            console.log(ramenImage)

            ramenImage.addEventListener("click", function() {
                fetchRamen(ramen)
            })
            ramenMenu.appendChild(ramenImage)
        })
    }

    function fetchRamen(ramen) {
        fetch(`http://localhost:3000/ramens/${ramen.id}`)
        .then( response => response.json() )
        .then( data => renderRamen(data) )
    }

    function renderRamen(ramen) {
        const ramenImage = document.querySelector('.detail-image')
        ramenImage.setAttribute('src', ramen.image)
        
        const ramenName = document.querySelector('.name')
        ramenName.innerText = ramen.name
        
        const ramenRestaurant = document.querySelector('.restaurant')
        ramenRestaurant.innerText = ramen.restaurant

    const form = document.querySelector('#new-ramen')
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const ramenMenu = document.querySelector('#ramen-menu')
        const name = document.querySelector('#new-name').value
        const restaurant = document.querySelector('#new-restaurant').value
        const image = document.querySelector('#new-image').value
        const rating = document.querySelector('#new-rating').value
        const comment = document.querySelector('#new-comment').value
        const img = document.createElement('img')
        
        const newRamen = {
            "id": 6,
            "name": name,
            "restaurant": restaurant,
            "image": image,
            "rating": rating,
            "comment": comment
        }
        
        const newImage = document.createElement('img')
        newImage.setAttribute('src', newRamen.image)
        newImage.setAttribute('id', newRamen.id)
        
        ramenName.innerText = ramen.name

        // console.log(newImage)
        // console.log(newImage.image)
        ramenMenu.append(newImage)

    })
    }

    fetchRamens();
})