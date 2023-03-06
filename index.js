let orderId = document.getElementById("order-id")
let workId = document.getElementById("work-id")
let contactId = document.getElementById("contact-id")


document.addEventListener('click', function(e){
    if(e.target.dataset.orderId){
        getOrderHtml(e.target.dataset.orderId) 
})

function getOrderHtml(){

    let contactHtml = ""
    contactHtml += `
            <div class="contact-us">
                <h1>CONTACT US</h1>
                <form onsubmit="sendEmail(); reset(); return false;">
                    <label>Full Name</label>
                    <input type="text" class="fullname" name="">
                    <label>Email</label>
                    <input type="email" class="email" name="Email" required>
                    <label>Phone Number</label>
                    <input type="number" class="phonenumber" name="phonenumber" required>
                    <label>Message</label>
                    <textarea type="text" rows="4" class="message" name="message"></textarea>
                    <input type="submit" class="submit" name="submit">
                </form>
            </div>
            `  
}
return contactHtml

function render(){
    document.getElementById('main').innerHTML = getOrderHtml()
}

render()


