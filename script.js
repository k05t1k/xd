// Car class
class Car {
    constructor(make, model, year, price) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.price = price;
    }
}

// Car collection
let carCollection = [];

// Add car form
const addCarForm = document.getElementById('addCarForm');
addCarForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form values
    const make = document.getElementById('make').value;
    const model = document.getElementById('model').value;
    const year = document.getElementById('year').value;
    const price = document.getElementById('price').value;

    // Validate form values
    if (!make || !model || !year || !price) {
        alert('Please fill in all fields');
        return;
    }

    // Create new car object
    const newCar = new Car(make, model, year, price);

    // Add car to collection
    carCollection.push(newCar);

    // Clear form fields
    addCarForm.reset();

    // Update car collection display
    displayCarCollection();
});

// Display car collection
function displayCarCollection() {
    const carCollectionDiv = document.getElementById('carCollection');
    carCollectionDiv.innerHTML = '';

    carCollection.forEach((car, index) => {
        const carDiv = document.createElement('div');
        carDiv.classList.add('card', 'mb-3');
        carDiv.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${car.make} ${car.model}</h5>
                <p class="card-text">Year: ${car.year}</p>
                <p class="card-text">Price: $${car.price}</p>
                <button class="btn btn-danger" onclick="deleteCar(${index})">Delete</button>
            </div>
        `;
        carCollectionDiv.appendChild(carDiv);
    });
}

// Delete car
function deleteCar(index) {
    carCollection.splice(index, 1);
    displayCarCollection();
}
