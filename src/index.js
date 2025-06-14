const form = document.getElementById('guestForm');
const guestList = document.getElementById('guestList');
const input = document.getElementById('guestname');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = input.value.trim();
    if (!name) return;

    if (guestList.children.length >= 10) {
        alert('Guest list is full. Maximum number of guests is 10.');
        return;
    }


const listItem = document.createElement('li');
listItem.textContent = name;

const rButton = document.createElement('button');
rButton.textContent = 'Missing';
rButton.addEventListener('click', () => {
    listItem.classList.toggle('missing');
    rButton.textContent = listItem.classList.contains('missing') ? 'Present' : 'Missing';
});

const dbutton = document.createElement('button');
dbutton.textContent = 'Delete';
dbutton.addEventListener("click", () => listItem.remove());

listItem.appendChild(rButton);
listItem.appendChild(dbutton);
guestList.appendChild(listItem);
input.value = '';
}); 

