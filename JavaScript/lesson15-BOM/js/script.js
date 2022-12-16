// let info

// document.querySelectorAll('button')[0].onclick=()=>{
// info =  window.open("","","width=700,height=700")
// }

// document.querySelectorAll('button')[1].onclick=()=>{
//     // info.close();
//     // info.moveTo(500, 100);
//     // info.resizeTo(300, 300)
// }

// document.querySelector('span').innerHTML = navigator.language;
// ["af", "sq", "ar-SA", "ar-IQ", "ar-EG", "ar-LY", "ar-DZ", "ar-MA", "ar-TN", "ar-OM",
//  "ar-YE", "ar-SY", "ar-JO", "ar-LB", "ar-KW", "ar-AE", "ar-BH", "ar-QA", "eu", "bg",
//  "be", "ca", "zh-TW", "zh-CN", "zh-HK", "zh-SG", "hr", "cs", "da", "nl", "nl-BE", "en",
//  "en-US", "en-EG", "en-AU", "en-GB", "en-CA", "en-NZ", "en-IE", "en-ZA", "en-JM",
//  "en-BZ", "en-TT", "et", "fo", "fa", "fi", "fr", "fr-BE", "fr-CA", "fr-CH", "fr-LU",
//  "gd", "gd-IE", "de", "de-CH", "de-AT", "de-LU", "de-LI", "el", "he", "hi", "hu", 
//  "is", "id", "it", "it-CH", "ja", "ko", "lv", "lt", "mk", "mt", "no", "pl",
//  "pt-BR", "pt", "rm", "ro", "ro-MO", "ru", "ru-MI", "sz", "sr", "sk", "sl", "sb",
//  "es", "es-AR", "es-GT", "es-CR", "es-PA", "es-DO", "es-MX", "es-VE", "es-CO", 
//  "es-PE", "es-EC", "es-CL", "es-UY", "es-PY", "es-BO", "es-SV", "es-HN", "es-NI", 
//  "es-PR", "sx", "sv", "sv-FI", "th", "ts", "tn", "tr", "uk", "ur", "ve", "vi", "xh",
//  "ji", "zu"];
// if (navigator.language == "en-US") {
    
// }

setTimeout(()=>{
document.querySelector('.preloader').attributes[1].value = "hide";
document.querySelector('.wrapper').attributes[1].value = "show";
},3000)



const info = setInterval(()=>{
document.querySelector('p').innerHTML = new Date();
},1000)

document.querySelector('button').onclick=()=>{
    clearInterval(info)
}

