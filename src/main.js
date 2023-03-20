import './style.css';
// import Swal from 'sweetalert2';

// Seletores
const moeda = document.getElementById('moeda');
const btnSearch = document.getElementById('pesquisar');

console.log(moeda);
console.log(btnSearch);

fetch('https://api.exchangerate.host/latest').then((res) => res.json()).then((data) => {
    console.log(data);
});