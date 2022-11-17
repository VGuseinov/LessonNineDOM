// создание элемента != добавлению его на страницу
const a = document.createElement('a');
a.href = 'https://github.com/';
a.innerText = 'Click me';

// добавление в HTML
document.body.append(a);
// append(<1>, <2>, <3>) добавление нескольких элементов

const div = document.createElement('div');
div.innerText ='Click here';

// добавление перед тегом <a>
document.body.insertBefore(div, a);

//<tr>
    // <td class="avatar">
    // <img src="data:image/jpeg;base64,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">
    // </td>
    // <td>Top Flex</td>
    // <td>
        // <a href="mailto:topflex@gmail.com">topflex@gmail.com</a>
    // </td>
// </tr> 

const boots = [
    {
        avatar: 'https://images.keepersport.net/eyJidWNrZXQiOiJrZWVwZXJzcG9ydC1wcm9kdWN0LWltYWdlcy11cy1lYXN0LTEiLCJrZXkiOiJuaWtlXC9FVFNDVDA1NTBfNjA4XC9uaWtlLXJlYWN0LWdhdG8taWMtaGFsbGUtcm90LWY2MDgtY3QwNTUwLWZ1c3NiYWxsc2NodWhfcmlnaHRfb3V0LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODAwfX19',
        name: 'Nike',
        email: 'nike@mail.com',
    },
    {
        avatar: 'https://penalty.by/wp-content/uploads/2022/02/futzalki-adidas-copa-sense.3-in-sal-jr-ss22-gw7408.jpg',
        name: 'Adidas',
        email: 'adidas@mail.com',
    },
    {
        avatar: 'https://images.satu.kz/162798152_w640_h640_butsy-zalnye-mondo.jpg',
        name: 'Jogel',
        email: 'jogel.@mail.com',
    }
]

const tbody = document.getElementById('boots');
for (let boot of boots) {
    const tr = document.createElement('tr');
    const tdAvatar = document.createElement('td');
    tdAvatar.classList.add('avatar');
    const img = document.createElement('img');
    img.src = boot.avatar;
    tdAvatar.appendChild(img);

    const tdName = document.createElement('td');
    tdName.innerText = boot.name;

    const tdEmail = document.createElement('td');
    const a = document.createElement('a');
    a.innerText = boot.email;
    a.href = `mailto:${boot.email}`;
    tdEmail.appendChild(a);

    tr.append(tdAvatar, tdName, tdEmail);

    tbody.appendChild(tr);
}

// key + value
localStorage.setItem('key', 'value');

const get = localStorage.getItem('key');
console.log(get);