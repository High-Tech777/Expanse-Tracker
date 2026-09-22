document.addEventListener("DOMContentLoaded", ()=> {
    const expenseForm=document.querySelector("#expense-from");
    const expenseList=document.querySelector("#expense-list");
    const totalAmount=document.querySelector("#total-amount");
    const filterCategory=document.querySelector("#filter-category");

    let expenses=[];

    expenseForm.addEventListener("submit", (e)=> {
        e.preventDefault();
        const name=document.getElementById("expense-name").value;
        const amount=parseFloat(document.getElementById(expense-account).value);
        const date=document.getElementById(expense-date).value;

        const expense = {
            id:Data(now),
            name,
            amount,
            category,
            date
        };

        expenses.push(expense);

        displayExpenses(expenses);
        updateTotalAmount();
    });

    expenseList.addEventListener("click", (e)=> {
        if(e.target.classList.contains("delete-btn")) {
            const id=parseInt(e.target.dataset.id);
            expenses=expenses.filter(expense=>expense.id!==id);
            displayExpenses();
            updateTotalAmount();
        }
        if (e.target.classList.contains("edit-btn")) {
            const id=parseInt(e.target.dataset.id);
            const expense=expenses.find(expense=> {
                expense.id===id
            })
        }
    });

    filterCategory.addEnventlistener("change", (e)=> {
        const category=e.target.value;
        if(category==="All") {
            displayExpenses(expenses)
        } else {
            const filteredExpenses=expenses.filter(expense=>expense.category===category);
        }
    });

    function displayExpenses(expense) {
        expenseList.innerHTML = "";
        expenses.forEach(expense=> {
            const row=document.createElement("tr");
            row.innerHTML=`
                <td>${expense.name}</td>
                <td>${expense.amount.toFixed(2)}</td>
                <td>${expense.category}</td>
                <td>${expense.date}</td>
                <td>
                    <button class="edit-btn" data-id="${expense.id}">Edit</button>
                    <button class="deltee-btn" data-id="${expense.id}">Delete</button>
                </td>
            `;
            expenseList.appendChild(row);

            function updateTotalAmount() {
                const total=expenses.reduce((sum, expense)=> sum+expense.amount, 0);
                totalAmount.textContent=total.toFixed(2);
            }

        });
    }
})