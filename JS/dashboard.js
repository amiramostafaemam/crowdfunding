let dashboardTable = document.getElementById('dashboardTable');
let campainsTable = document.getElementById('campainsTable');
let pledgeTable = document.getElementById('pledgeTable');

document.getElementById('dashboardBtn').addEventListener('click', function () {
    dashboardTable.classList.remove('d-none');
    campainsTable.classList.add('d-none');
    pledgeTable.classList.add('d-none');
});

document.getElementById('campainsBtn').addEventListener('click', function () {
    dashboardTable.classList.add('d-none');
    campainsTable.classList.remove('d-none');
    pledgeTable.classList.add('d-none');
});

document.getElementById('pledgeBtn').addEventListener('click', function () {
    dashboardTable.classList.add('d-none');
    campainsTable.classList.add('d-none');
    pledgeTable.classList.remove('d-none');
});
