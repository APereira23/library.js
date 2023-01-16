let myLibrary = [];

function Book(name, author, overview, image, fav) {
  this.name = name;
  this.author = author;
  this.overview = overview;
  this.image = image;
  this.fav = fav;
};



const cabraCega = new Book(
"Jogo da Cabra Cega",
"José Régio",
"aaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaa  aaaaaaaaaaaaaa aaaaaaaaaaaa Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore obcaecati ullam praesentium magni, earum ipsum odio consectetur perspiciatis perferendis quaerat quasi culpa qui adipisci, molestiae neque fugiat quam, laboriosam inventore!",
"https://rnod.bnportugal.gov.pt/ImagesBN/winlibimg.aspx?skey=&doc=1894418&img=57297&save=true",
true,
);

const lusiadas = new Book(
"Os Lusíadas",
"Luís de Camões",
"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore obcaecati ullam praesentium magni, earum ipsum odio consectetur perspiciatis perferendis quaerat quasi culpa qui adipisci, molestiae neque fugiat quam, laboriosam inventore!",
"https://upload.wikimedia.org/wikipedia/commons/0/0d/Os_Lus%C3%ADadas.jpg",
false,
);


myLibrary.unshift(lusiadas, cabraCega);

function displayLibrary() {
  const libcontainer = document.getElementById('library');
  const row = document.createElement('div');
  row.classList.add('row','row-cols-1','row-cols-sm-2','row-cols-xxl-3','gx-2','gy-2');
  
  myLibrary.forEach(item => {
    const col = document.createElement('div');
    col.classList.add('col');
    col.setAttribute('data-index',`${myLibrary.indexOf(item)}`);
    const box = document.createElement('div');
    box.classList.add('box','p-2','h-100');
    const boxImg = document.createElement('div');
    boxImg.classList.add('entry','img-container','m-2');
    const img = document.createElement('img');
    img.setAttribute('src', item.image);
    img.setAttribute('width', '50%');
    const boxNam = document.createElement('div');
    boxNam.classList.add('entry','name','m-2');
    boxNam.textContent = `Title: ${item.name}`;
    const boxAut = document.createElement('div');
    boxAut.classList.add('entry','author','m-2');
    boxAut.textContent = `Author: ${item.author}`;
    const boxOvv = document.createElement('div');
    boxOvv.classList.add('entry','overview','m-2');
    boxOvv.textContent = `Overview: ${item.overview}`;
    const boxDel = document.createElement('div');
    boxDel.classList.add('boxDel');
    const delBtn = document.createElement('button');
    delBtn.classList.add('delBtn');
    delBtn.textContent = "X";
   
    libcontainer.appendChild(row);
    row.appendChild(col);
    col.appendChild(box);
    box.appendChild(boxDel);
    boxDel.appendChild(delBtn);
    box.appendChild(boxImg);
    boxImg.appendChild(img);
    box.appendChild(boxNam)
    box.appendChild(boxAut);
    box.appendChild(boxOvv);

    if (item.fav === true) box.style.backgroundColor = "rgb(218, 153, 62)";
    
    delBtn.addEventListener('click', () => {
      console.log(myLibrary.indexOf(item));
      //myLibrary.shift(myLibrary.indexOf(item));
    });
 
  });

}

displayLibrary();




const form = document.getElementById('form');
const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () => {
  form.style.display = 'block';
  addBtn.style.display = 'none';
});

function addBookToLibrary() {

}