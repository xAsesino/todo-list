
function tododisplay() {

    let todolists = document.querySelector(".lists");

    todolists.innerHTML += `
    
        <h1>Todo - List</h1>

            <input type="text" name="" id="myInput"> <button class="btnadd"> ADD TODO</button>

    `

    for (let i = 0; i < tab.length; i++) {

        todolists.innerHTML += `

            <li>${tab[i]}</li>

        `
    }

    addtodo();
    JSONtab()
}

let tab = [];

function JSONtab() {

    if (localStorage.getItem('myInputs', tab) != null) {

        tab = JSON.parse(localStorage.getItem('myInputs', tab));

    }
}

function listli() {

    const listchild = document.querySelector(".lists");
    const myInputli = document.getElementById("myInput");

    listchild.innerHTML += `

        <li>${myInputli.value}</li>

    `

    tab.push(myInputli.value);

}

function addtodo() {

    const addtolist = document.querySelector(".btnadd");

    addtolist.addEventListener('click', () => {

        listli();
        addtodo();
    })

    localStorage.setItem('myInputs', JSON.stringify(tab));
}

JSONtab();
tododisplay();


// let tab = [];

// const listchild = document.querySelector(".lists");
// const myInputli = document.getElementById("myInput");
// const addtolist = document.querySelector(".btnadd");

// JSONtab();

// addtolist.addEventListener('click', () => {

//     tab.push(myInputli.value);
//     listchild.innerHTML += `

//             <li>${myInputli.value}</li>

//         `
//     localStorage.setItem('myInputs', JSON.stringify(tab));

// })

// function JSONtab() {

//     if (localStorage.getItem('myInputs', tab) != null) {

//         tab = JSON.parse(localStorage.getItem('myInputs', tab));

//         console.log("LocalStorage n'est pas vide");

//         for (let i = 0; i < tab.length; i++) {

//             listchild.innerHTML += `

//                 <li>${tab[i]}</li>

//             `

//         }

//     }

// }