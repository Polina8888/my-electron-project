document.addEventListener('DOMContentLoaded', () => {
  const addUserButton = document.getElementById('addUserButton');
  const userForm = document.getElementById('userForm');
  const userTable = document.getElementById('userTable').getElementsByTagName('tbody')[0];

  addUserButton.addEventListener('click', () => {
    document.getElementById("addUserForm").style.display = "block";
    document.getElementById("addUserButton").style.display = "none";
  });

  userForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = userForm.elements['name'].value;
    const email = userForm.elements['email'].value;

    const newRow = document.createElement('tr');

    const nameCell = document.createElement('td');
    const emailCell = document.createElement('td');

    nameCell.innerText = name;
    emailCell.innerText = email;

    newRow.appendChild(nameCell);
    newRow.appendChild(emailCell);

    userTable.appendChild(newRow);

    userForm.reset();
  });
});
