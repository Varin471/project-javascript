const navbar = document.querySelector('nav')
const input = document.querySelector('#input')
let render = document.querySelector('#render')
let one_rate = document.querySelector('.one-rate')

const Currency = {
    $origin_currency: document.querySelector('#origin-currency'),
    $destination_currency: document.querySelector('#destination-currency')
}

const $switch = document.querySelector('#switch');
const image  = document.querySelector('#image');

const calculate = (from, goto , one = 1) => {

    from = Currency.$origin_currency.value  //ต้นทาง
    goto = Currency.$destination_currency.value  // ปลายทาง
    
    fetch(`https://v6.exchangerate-api.com/v6/96acb831b46264d7d1d72035/latest/${from}`)
        // Api key: 96acb831b46264d7d1d72035
        .then(response => response.json())
        .then(data => {
            let rate = data.conversion_rates[goto]
            let result = input.value * rate
            let arrange_text = `${input.value} ${from} = ${result} ${goto}`
            let arrange_text2 = `${one} ${from} = ${rate} ${goto}`
            render.innerHTML = arrange_text
            one_rate.innerHTML = arrange_text2
        })
        .catch((Error) => console.log(Error))
}

$switch.addEventListener('click', (event) => {
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

image.addEventListener('click' , () => {
    Swal.fire({
        icon: 'info',
        title: '<h3>เพิ่มเติม</h3>',
        html:'<h5>ข้อมูลสกุลเงินทั้งหมด: <a href="https://www.mataf.net/th/currency/converter/list">mataf.net/th</a></h5>\n<h5>ใช้งาน api: <a href="https://app.exchangerate-api.com/">app.exchangerate-api.com</a></h5>\n<h5>รูปภาพ: <a href="https://iconscout.com/">iconscout.com</a></h5>\ncredit: Kongruksiam'
      })
}) 

Currency.$origin_currency.addEventListener('change', calculate);
Currency.$destination_currency.addEventListener('change', calculate);
input.addEventListener('input', calculate);