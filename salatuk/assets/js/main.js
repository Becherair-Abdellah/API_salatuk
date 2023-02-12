
let countries = [
    {
        "country": "السعودية",
        "city": "مكة المكرمة",
        "isoCodeCountry": "SA",
        "isoCodeCity": "Makkah al Mukarramah"
    },
    {
        "country": "الجزائر",
        "city": "ورقلة",
        "isoCodeCountry": "DZ",
        "isoCodeCity": "Ouargla"
    },
    {
        "country": "الولايات المتحدة",
        "city": "نيفادا",
        "isoCodeCountry": "US",
        "isoCodeCity": "Nevada"
    },
    {
        "country": "بريطانيا",
        "city": "لندن",
        "isoCodeCountry": "UK",
        "isoCodeCity": "London"
    }
]
let co;
let ci;
function getTimes(isocity, isocountry) {
    axios.get(`http://api.aladhan.com/v1/timingsByCity?city=${isocity}&country=${isocountry}`)
        .then((data) => {
            const timings = data.data.data.timings;
            const date = data.data.data.date.hijri;
            document.querySelector('#weekday').innerText = date.day;
            document.querySelector('#month').innerText = date.month.ar;
            document.querySelector('#year').innerText = date.year;
            fulltimings(document.querySelector('#imsak .time'), timings.Imsak);
            fulltimings(document.querySelector('#subh .time'), timings.Fajr);
            fulltimings(document.querySelector('#dhur .time'), timings.Dhuhr);
            fulltimings(document.querySelector('#asr .time'), timings.Asr);
            fulltimings(document.querySelector('#maghrib .time'), timings.Maghrib);
            fulltimings(document.querySelector('#isha .time'), timings.Isha);
        });
}
getTimes("SA", "Makkah al Mukarramah");
function fulltimings(elementID, timepray) {
    elementID.innerText = timepray;
}
document.querySelector('.addCountry').onclick = function () {
    document.querySelector('.countries').classList.add('visible');
    document.querySelectorAll('.countries li').forEach(element => {
        element.onclick = function () {
            document.querySelector('.countries').classList.remove('visible');
            document.querySelector('.country').innerText = element.innerHTML;
            let namecountry = document.querySelector('.country').innerText.split('/')[0];
            let generator = isonCode(namecountry);
            co = generator.next().value;
            ci = generator.next().value;
            getTimes(ci, co);
        }
    });;
}
function* isonCode(nameCountry) {
    for (let country of countries) {
        if (country.country === nameCountry) {
            yield country.isoCodeCountry;
            yield country.isoCodeCity;
        }
    }
}









// fetch("'https://example.com/profile'",{
//     method:"POST",
//     headers:{
//         'Accept': 'application/json',
//     },
//     body:JSON.stringify({example:"abdellah"}),
// })
// .then(response => response.json())
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })

const data = { username: 'example' };

fetch('https://example.com/profile', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  mode: "no-cors",
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });











