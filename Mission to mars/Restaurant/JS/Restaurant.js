const addButtons = document.querySelectorAll('.add-button');
const orderList = document.getElementById('order-list');
const totalField = document.querySelector('.total');

let total = 0;

addButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const price = parseFloat(button.getAttribute('data-price'));
        const itemName = button.parentElement.textContent.trim().split(' ')[0];
        
        const listItem = document.createElement('li');
        listItem.textContent = `${itemName} - €${price.toFixed(2)}`;
        orderList.appendChild(listItem);

        total += price;
        totalField.value = `€${total.toFixed(2)}`;
    });
});

function showTotal() {
    alert(`Your total order is €${total.toFixed(2)} euro. Thank you for ordering!`);
}
document.getElementById("order-button").addEventListener("click", showTotal);
