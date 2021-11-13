"use strict";

let tab = [];
let tab1 = [];

let indice = 0;

const listchild = document.querySelector(".lists");
const listacquis = document.querySelector(".acquis");
const myInputli = document.getElementById("myInput");
const addtolist = document.querySelector(".btnadd");

addtolist.addEventListener('click', () => {

    tab.push(myInputli.value);
    tab1.push(myInputli.value);

    listchild.innerHTML += `

            <li class="test">${myInputli.value} 
            <button class="btndel" data-id="${myInputli.value}">Supprimer</button>
            <button class="acquiss" data-id="${myInputli.value}">Accomplis !</button>
            </li>

        `
    localStorage.setItem('myInputs', JSON.stringify(tab));
    localStorage.setItem('MyGoods', JSON.stringify(tab1));

    myInputli.value = "";

    deltamere();
})



function JSONtab() {

    if (localStorage.getItem('myInputs', tab) != null) {

        tab = JSON.parse(localStorage.getItem('myInputs', tab));

        for (let i = 0; i < tab.length; i++) {

            listchild.innerHTML += `

            <li class="test">${tab[i]} 
            <button class="btndel" data-id="${tab[i]}">Supprimer</button>
            <button class="acquiss" data-id="${tab1[i]}">Accomplis !</button>
            </li>

            `

        }

        deltamere();

    }

}

function JSONtab1() {

    if (localStorage.getItem('MyGoods', tab1) != null) {

        tab1 = JSON.parse(localStorage.getItem('MyGoods', tab1));

        for (let i = 0; i < tab1.length; i++) {

            listacquis.innerHTML += `
            <li class="test">${tab1[i]}</li>


            `
        }

        itsgood();

    }

}

function deltamere() {

    const lister = document.querySelectorAll(".test");

    for (const listerr of lister) {

        const btndelete = listerr.querySelector(".btndel");
        let tag = btndelete.getAttribute("data-id");

        btndelete.addEventListener('click', () => {


            for (let i = 0; i < tab.length; i++) {

                if (tag == tab[i]) {

                    indice = i;

                }

            }

            tab.splice(indice, 1);
            listchild.removeChild(listerr);
            localStorage.setItem('myInputs', JSON.stringify(tab));

        })

    }
    itsgood();

}

function itsgood() {

    const lister = document.querySelectorAll(".test");

    for (const listerr of lister) {

        const btnacquis = listerr.querySelector(".acquiss");
        let tag = btnacquis.getAttribute("data-id");

        btnacquis.addEventListener('click', () => {

            for (let i = 0; i < tab1.length; i++) {


                if (tag == tab1[i]) {

                    listacquis.innerHTML += `

                    <li class="test">${tab1[i]}</li>
                
                `
                }

            }

            tab.splice(indice, 1);
            listchild.removeChild(listerr);
            localStorage.setItem('myInputs', JSON.stringify(tab));

        })
        localStorage.setItem('MyGoods', JSON.stringify(tab1));
    }
}

JSONtab();
JSONtab1();