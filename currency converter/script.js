const navbar = document.querySelector('nav')
const input = document.querySelector('#input')
let render = document.querySelector('#render')
let one_rate = document.querySelector('.one-rate')
const Currency = {
    $origin_currency: document.querySelector('#origin-currency'),
    $destination_currency: document.querySelector('#destination-currency')
}
const Button = {
    $switch: document.querySelector('#switch')
}

const calculate = (from, goto) => {
    from = Currency.$origin_currency.value
    goto = Currency.$destination_currency.value
    fetch(`https://v6.exchangerate-api.com/v6/96acb831b46264d7d1d72035/latest/${from}`)
        // Api key: 96acb831b46264d7d1d72035
        .then(response => response.json())
        .then(data => {
            let rate = data.conversion_rates[goto]
            let result = input.value * rate
            render.innerHTML = `${input.value} ${from} = ${result} ${goto}`
            one_rate.innerHTML = `1 ${from} = ${rate} ${goto}`
        })
        .catch((Error) => console.log(Error))
}


if (Button || navbar) {

    Button.$switch.addEventListener('click', (event) => {
        event.preventDefault()
        const temp = Currency.$origin_currency.value;
        Currency.$origin_currency.value = Currency.$destination_currency.value;
        Currency.$destination_currency.value = temp;
        calculate();
    })

    navbar.addEventListener('click', () => {
        Swal.fire({
            title: 'Javascript-project',
            text: 'โปรเจคนี้ทำเกี่ยวกับโปรแกรมคำนวณอัตราแลกเปลี่ยนสกุลเงิน',
            imageUrl: 'img/logo/logo.png',
            imageWidth: 250,
            imageHeight: 250,
            imageAlt: 'Custom image',
        });
    })
}


Currency.$origin_currency.addEventListener('change', calculate);
Currency.$destination_currency.addEventListener('change', calculate);
input.addEventListener('input', calculate);