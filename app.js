const productname = document.querySelector('#productname')
const productprice = document.querySelector('#productprice')
const buttonsave = document.querySelector('#buttonsave')
const buttondelete = document.querySelector('#buttondelete')
const productlist = document.querySelector('#productlist')
const totalouput = document.querySelector('#total')
let total = 0;
const isempty = str => !str.trim().length;
const prsentalert = () => {
    const alert = document.createElement('ion-alert')
    alert.header = 'Dato invalido';
    alert.subHeader = 'Ingrese un Link';
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    return alert.present();
}
buttonsave.addEventListener('click', () => {
    const name = productname.value;

    if (isempty(name)) {

        prsentalert();
        return;
    }
    var url = name;
    var nq = url.includes("%2F");
    while (nq == true) {
        url = url.replace("http://ouo.io/s/y0d65LCP?s=h", "h");
        url = url.replace("%2F", "/");
        url = url.replace("%3A", ":");
        url = url.replace("%23", "#");
        url = url.replace("%21", "!");
        nq = url.includes("%2F");
    }
    createnewproduct(url);
    total += +price;
    totalouput.textContent = total;
    clearinputs();
});

const createnewproduct = (name) => {

    const ioncard = document.createElement('ion-card');
    const newproductitem = document.createElement('ion-card-content');
    newproductitem.textContent = name;
    ioncard.appendChild(newproductitem);
    productlist.appendChild(ioncard)

};

const clearinputs = () => {
    productname.value = '';
    productprice.value = '';
}

buttondelete.addEventListener('click', clearinputs);