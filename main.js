function deleteRow(rowId) {
    const tableBody = document.querySelector('tbody');
    const rowToDelete = document.getElementById(`row-${rowId}`);
    if (rowToDelete) {
        tableBody.removeChild(rowToDelete);
        console.log(`Deleted row with ID ${rowId}`);
    } else {
        console.log(`Row with ID ${rowId} not found`);
    }
}
function calculateAverage() {
    const rows = [
        { id: 1, price: 39919 },
        { id: 2, price: 1490 },
        { id: 3, price: 6490 },
        { id: 4, price: 599 },
        { id: 5, price: 1090 }
    ];
    const totalPrice = rows.reduce((sum, row) => sum + row.price, 0);
    const averagePrice = totalPrice / rows.length;

    const resultElement = document.getElementById("averagePriceResult");
    resultElement.innerHTML = 'Average Price: ₪' + averagePrice.toFixed(2);
    
}

const buypageContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Buy TV</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="container buy-form-container">
            <form id="buyForm">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter your full name" required>
                </div>
                <div class="form-group">
                    <label for="creditCard">Credit Card:</label>
                    <input type="text" class="form-control" id="creditCard" placeholder="Enter credit card number" required>
                </div>
                <div class="form-group">
                    <label for="number">Product ID</label>
                    <input type="text" class="form-control" id="IDnum" placeholder="Enter your Product ID number" required>
                </div>
                <div class="form-group">
                    <label for="name">Store Name:</label>
                    <input type="text" class="form-control" id="sname" placeholder="Enter the store name" required>
                </div>
                <div class="form-group">
                    <label for="Npayments">Number of payments</label>
                    <input type="number" class="form-control" id="name" placeholder="Enter the number of payments" required>
                </div>
                <button type="button" class="btn btn-send" onclick="sendForm()">Send</button>
            </form>
        </div>
        <script src="main.js"></script>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </body>
    </html>
`;

function openBuyPage() {
    const buyWindow = window.open('', '_blank');
    if (buyWindow) {
        buyWindow.document.write(buypageContent);
    } else {
        alert('Please allow pop-ups for this site to open the buy form.');
    }
}

function sendForm() {
    alert('Form submitted!');
}

function findBestOption(data) {
    let bestOptionId = null;
    let lowestPrice = Infinity;

    for (const row of data) {
      if ((row.rating === 4 || row.rating === 5) && row.price < lowestPrice) {
        lowestPrice = row.price;
        bestOptionId = row.id;
      }
    }

    return bestOptionId;
  }

  const tableData = [
    { id: 1, price: 10, rating: 4 },
    { id: 2, price: 8, rating: 5 },
    { id: 3, price: 12, rating: 3 },
  ];

  const findBestOptionButton = document.getElementById('findBestOptionButton');

  findBestOptionButton.addEventListener('click', function() {
    const bestOptionId = findBestOption(tableData);
    console.log("Best option ID:", bestOptionId);
  });