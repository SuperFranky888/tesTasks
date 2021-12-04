let container = document.querySelector('.container');
let btn = document.querySelector('button');

let page = 1;

showUsers();
btn.onclick = showUsers;

// получает инф-ию по fetch и выводит user-ов постранично
function showUsers() {
  fetch(`https://reqres.in/api/users?page=${page}`)
    .then(response => response.json())
    .then(data => {

      if (typeof data != 'object') {
        alert('not JSON!!!');
      }

      if (page > data.total_pages) {
        page = 1;
        btn.style.display = 'none'
      };

      console.log(data);

      data.data.forEach((el, i) => {
        container.insertAdjacentHTML('beforeend', `<div class="userCard">
    <img  src ='${data.data[i].avatar}' alt="" class="userImg">
    <h2 class='name'>${data.data[i].first_name} ${data.data[i].last_name}</h2>
    <p class="email">${data.data[i].email}</p>
</div>
    `);
      });
    });
  page++;
}



