function openInventory() {
  // Implement logic to open the inventory page
  window.location.href = "inventory.html";
}

function addNewItem() {
  // Implement logic to add a new item to the inventory
  alert("Adding New Item...");
}

function openSales() {
  // Implement logic to open the sales page
  alert("Opening Sales Management...");
}

function processSale() {
  // Implement logic to process a new sale
  alert("Processing Sale...");
}

function viewCustomers() {
  // Implement logic to view customer information
  alert("Viewing Customer Information...");
}

const inventoryData = [
  { id: 1, name: 'Item 1', quantity: 10, price: 5.99 },
  { id: 2, name: 'Item 2', quantity: 15, price: 9.99 },
  // Add more items as needed
];

function openInventory1() {
  // Display inventory data (in a real scenario, you'd render this in the page)
  const inventoryContainer = document.getElementById('inventory-container');
  inventoryContainer.innerHTML = '';

  inventoryData.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.innerHTML = `<p>ID: ${item.id}</p>
                        <p>Name: ${item.name}</p>
                        <p>Quantity: ${item.quantity}</p>
                        <p>Price: $${item.price.toFixed(2)}</p>`;
    inventoryContainer.appendChild(itemDiv);
  });

  // Simulate opening the inventory page
  alert("Opening Inventory Management...");
}

function searchInventory() {
  const searchValue = document.getElementById('searchBar').value.toLowerCase();
  
  if (searchValue.trim() === "") {
    alert("Please enter a search term.");
    return;
  }

  const filteredItems = inventoryData.filter(item =>
    item.name.toLowerCase().includes(searchValue)
  );

  const inventoryContainer = document.getElementById('inventory-container');
  inventoryContainer.innerHTML = '';

  filteredItems.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.innerHTML = `<p>ID: ${item.id}</p>
                        <p>Name: ${item.name}</p>
                        <p>Quantity: ${item.quantity}</p>
                        <p>Price: $${item.price.toFixed(2)}</p>`;
    inventoryContainer.appendChild(itemDiv);
  });
}
