$(document).ready(function () {
    // Getting data from the form
    let email = "";
    let pwd = "";
    const url = 'http://localhost:3000/api';

    // Submitting the  form on click
    $("#loginForm").submit(function () {
        event.preventDefault();
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

