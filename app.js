// BUDGET CONTROLLER
var budgetController = (function () {


})();
// UI CONTROLLER
var UIController = (function () {

    return {
        getInput: () => {
            return {
                type: document.querySelector('.add__type').value,
                description: document.querySelector('.add__descrioption').value,
                value: document.querySelector('.add__value').value
            };
        }
    }

})();

// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

    var ctrlAddItem = () => {
        // 1. Get the field input data
        var input = UICtrol.getInput();
        console.log(input);
        // 2. Add the item to the budget controller

        // 3. Add the new item to the UI 

        // 4. Calculate the budget

        // 5. Display the budget on the UI
    }

    document.querySelector('.add__btn').addEventListener('click', () => {


    });

    document.addEventListener('keypress', (event) => {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    })

})(budgetController, UIController);

