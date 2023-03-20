import './style.css';
import Swal from 'sweetalert2';

// Seletores
const moeda = document.getElementById('moeda');
const btnSearch = document.getElementById('pesquisar');
const lista = document.getElementById('list');


const BASE_URL = 'https://api.exchangerate.host/latest?base=';

btnSearch.addEventListener('click', () => {
    const coin = moeda.value;
    if (!coin){
        Swal.fire({
            title: 'Erro',
            text: 'Informe uma moeda!',
            icon: 'error',
            confirmButtonText: 'Tente novamente',
        });
        return;
    }
    fetch(`${BASE_URL}${coin}`).then((res) => res.json()).then((data) => {
        const currency = Object.entries(data.rates);
        currency.forEach((elem) => {
            const li = document.createElement('li');
            li.innerHTML = `<b>${elem[0]}</b> ${elem[1].toFixed(3)}`;
            lista.appendChild(li);
        });
       
        if (coin !== data.base) {
            throw new Error('Moeda não encontrada');
        }
    }).catch((error) => {
        Swal.fire({
            title: 'Erro',
            text: error.message,
            icon: 'error',
            confirmButtonText: 'Tente novamente',
        });
    });
});
