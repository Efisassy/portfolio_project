$(document).ready(function () {
    // Getting data from the form
    let email = "";
    let pwd = "";
    const url = 'http://localhost:3000/api';

    // Submitting the  form on click
    $("#loginForm").submit(function () {
        //event.preventDefault();
        email = $("#email").val();
        pwd =  $("#pwd").val();
        let data = {
            password: pwd,
            email: email
        }
        console.log(data);
        $.ajax(url, {
            data: JSON.stringify(data),
            contentType: 'application/json',
            type:'POST',
            success: function(){
                console.log("success");
            }
        })
    });

    //Handle Modal Settings
    $('#room_availiable').click(function(){
        $('#available_modal').on('shown.bs.modal', function () {
            $('#available_modal').modal('show')
          })
        
    })
})

function myFunction(){
    
    const amount = $('#price').text()
    console.log(amount)
    const valOfThis = $('#number_of_days').val()
    console.log(valOfThis)
    let result = +amount * +valOfThis
    console.log(result)
    alert('An executive suite has been booked on'+ 
    '\n'+'Your bill is ' + '$' + result + 
    '\n' + 'Thanks for patronising us' +'\n' +'Have a wonderful stay')
}
function myFunction2(){
    
    const amount = $('#price1').text()
    console.log(amount)
    const valOfThis = $('#number_of_days').val()
    console.log(valOfThis)
    let result = +amount * +valOfThis
    console.log(result)
    alert('Your bill is ' + result)
}
function myFunction3(){
    
    const amount = $('#price3').text()
    console.log(amount)
    const valOfThis = $('#number_of_days').val()
    console.log(valOfThis)
    let result = +amount * +valOfThis
    console.log(result)
    alert('Your bill is ' + result)
}

//payment


