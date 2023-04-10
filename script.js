const wrapper = document.querySelector(".wrapper"),
credit = wrapper.querySelector(".credit")
qrinput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button");
qrimg = wrapper.querySelector(".qrcode img");

generateBtn.addEventListener("click", () => {
    let qrinputvalue = qrinput.value;
    if(!qrinputvalue) return;
    generateBtn.innerText = "Generating QR code"
    wrapper.classList.add("active");
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrinputvalue}`;
    
    qrimg.addEventListener("load", ()=> {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR code"
    });
    
    qrinput.addEventListener("keyup", ()=> {
        if (!qrinput.value) {
            wrapper.classList.remove("active");
            credit.classList.add("active");
        }
    });

});