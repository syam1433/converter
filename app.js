const base_url="https://v6.exchangerate-api.com/v6/23b160cd53f19a8475367897/latest";
const CountryList=document.querySelectorAll(".LISTS select");
let btn=document.querySelector("button");
const fromcurrency=document.querySelector(".from select");
const tocurrency=document.querySelector(".to select");
const msg=document.querySelector(".msg");
const countryList = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
  };
  //accesinglist of countries and placing in options
let i=0;
for(let select of CountryList){
    for(code in countryList){
        let newopt=document.createElement("option");
        newopt.innerText=code;
        newopt.value=code;
        if(select.name==="one" && code==="INR"){
            newopt.selected="selected";
        } else if(select.name==="two" && code==="USD"){
            newopt.selected="selected";
        }
        select.append(newopt);
    }
    select.addEventListener("change",(event)=>{
        falgupdate(event.target);
    });
}
//flagupdate
const falgupdate=(element)=>{
    let code=element.value;
    let src=`https://flagsapi.com/${countryList[code]}/flat/64.png`;
    let image=element.parentElement.querySelector("img")
    image.src=src;
}
//getting answer

btn.addEventListener("click", async (event)=>{
    event.preventDefault();
    let amount=document.querySelector(".amount input");
    let amountval=amount.value;
    if(amountval===""|| amountval<1){
        alert("Enter a valid amount");
    }
    if(fromcurrency.value==="" || tocurrency.value==="")
        {
          alert("Please Select The Options");
          fromcurrency.value="INR";
          tocurrency.value="USD";
        }
    const URL1=`${base_url}/${fromcurrency.value}`;
    let response= await fetch(URL1);
    let data1= await response.json();
    let rates=data1.conversion_rates[tocurrency.value];
    finalamount=amountval*rates;
    msg.innerText=`${amountval} ${fromcurrency.value} = ${finalamount} ${tocurrency.value}`;

    //swapping
    let a=fromcurrency.value;
    let b=tocurrency.value;
    let temp;

    swap.addEventListener("click",()=>{
    let opt1=document.querySelector(".one option");
    let opt2=document.querySelector(".two option");
    let flag1=document.querySelector(".flag1");
    let flag2=document.querySelector(".flag2");
    temp=a;
    a=b;
    b=temp;
    fromcurrency.value=a;
    opt1.innerText=a;
    tocurrency.value=b;
    opt2.innerText=b;
    flag1.src=`https://flagsapi.com/${countryList[a]}/flat/64.png`;
    flag2.src=`https://flagsapi.com/${countryList[b]}/flat/64.png`;
    })
})