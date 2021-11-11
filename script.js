let tab = [];

let indice = 0;

const listchild = document.querySelector(".lists");
const myInputli = document.getElementById("myInput");
const addtolist = document.querySelector(".btnadd");


JSONtab();

addtolist.addEventListener('click', () => {

    tab.push(myInputli.value);
    listchild.innerHTML += `

            <li class="test">${myInputli.value} <button class="btndel" data-id="${myInputli.value}">XXXXXXXXXXX</button></li>

        `
    localStorage.setItem('myInputs', JSON.stringify(tab));

    myInputli.value = "";

    deltamere();

})

function JSONtab() {

    if (localStorage.getItem('myInputs', tab) != null) {

        tab = JSON.parse(localStorage.getItem('myInputs', tab));

        for (let i = 0; i < tab.length; i++) {

            listchild.innerHTML += `

            <li class="test">${tab[i]} <button class="btndel" data-id="${tab[i]}">XXXXXXXXXXX</button></li>

            `

        }

        deltamere();

    }

}

function deltamere() {

    const lister = document.querySelectorAll('.test');

    for (const tester of lister) {

        const btndelete = tester.querySelector('.btndel');
        let tag = btndelete.getAttribute("data-id");

        btndelete.addEventListener('click', () => {


            for (let i = 0; i < tab.length; i++) {

                if(tag == tab[i]){

                    indice = i;
                
                }

            }

            tab.splice(indice, 1);
            listchild.removeChild(tester);
            localStorage.setItem('myInputs', JSON.stringify(tab));

        })

    }

}






// const btndell = document.getElementsByClassName("btndel");
// const lister = document.querySelector(".test");

// for (let i = 0; i < btndell.length; i++) {

//     btndell[i].addEventListener('click', () => {

//         let tag = btndell[i].getAttribute("data-id");

//         if (tag == myInputli.value || tag == tab[i]) {

//             if (indice == tab[i]) {

//                 indice = i;

//             }

//             console.log(tag);

                // tab.splice(indice, 1);
//             // listchild.removeChild(lister);
//             

//             // localStorage.setItem('myInputs', JSON.stringify(tab));

//         }

//     })

// }
