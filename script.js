function calculateBudget() {
    const monthlyIncome = parseFloat(document.getElementById('monthlyIncome').value);

    if (isNaN(monthlyIncome) || monthlyIncome <= 0) {
        alert('Please enter a valid monthly income.');
        return;
    }

    const essentials = monthlyIncome * 0.50;
    const allowance = monthlyIncome * 0.30;
    const investment = monthlyIncome * 0.20;

    const budgetData = [
        { category: 'Essentials', amount: essentials.toFixed(2) },
        { category: 'Allowance', amount: allowance.toFixed(2) },
        { category: 'Investment', amount: investment.toFixed(2) }
    ];

    updateTable(budgetData);
}

function updateTable(budgetData) {
    const outputTable = document.getElementById('outputTable');
    outputTable.innerHTML = '';

    const table = document.createElement('table');
    const headerRow = table.insertRow();
    const headers = ['Category', 'Amount'];
    
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    budgetData.forEach(item => {
        const row = table.insertRow();
        const values = [item.category, item.amount];
        
        values.forEach(value => {
            const cell = row.insertCell();
            cell.textContent = value;
        });
    });

    outputTable.appendChild(table);
}