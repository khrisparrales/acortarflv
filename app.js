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

    clearinputs();
});
var tablamovie = document.getElementById('tablemovie');
tablamovie.innerHTML = "";
const createnewproduct = (name) => {


    tablamovie.innerHTML += ` <tr>
                    
                    <td >${name}</td>    
                    <td>
<button  class="btn" data-clipboard-text="${name}"  color: "red">
    Copiar 
    <ion-icon  size="small" name="copy"></ion-icon>

</button></td>                
                     
                </tr>`


};
var clipboard = new ClipboardJS('.btn');

clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});

function copiar(name) {
    /* Get the text field */
    const alert = document.createElement('ion-alert')

    var copyText = document.getElementById("myInput");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
}

const clearinputs = () => {
    productname.value = '';

}

buttondelete.addEventListener('click', clearinputs);