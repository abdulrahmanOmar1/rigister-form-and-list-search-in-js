document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registration-form');
    const userList = document.getElementById('user-list');
    const searchInput = document.getElementById('search');

    registrationForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const listItem = document.createElement('li');
        listItem.textContent = `Name: ${name}, Email: ${email}, Password: ${password}`;
        userList.appendChild(listItem);

        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    });

    searchInput.addEventListener('input', function () {
        const searchValue = searchInput.value.toLowerCase();

        Array.from(userList.getElementsByTagName('li')).forEach(function (item) {
            const text = item.textContent.toLowerCase();

            if (text.includes(searchValue)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
