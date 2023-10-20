//is vich apa counter element nu countValue ch store karleya
//jo const apa use kita...ohde ch apna element store waa...ta const karn naal element constant wala koi issue nahi waa

const countValue = document.querySelector('#counter');

const Increment = () =>{
    //hun countValue element de andhar wali value nikal lai UI vicho
    let value = parseInt(countValue.innerText); //je apa let di jagah const likh dinde..ta value change nahi honie c 
    value = value+1;
    countValue.innerText = value;

};

const Decrement = () => {
    let value = parseInt(countValue.innerText); 
    value = value-1;
    countValue.innerText = value;

};