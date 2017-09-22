$(function() {
  $('#sendAnswer').on('click', function(e){
    e.preventDefault();
    var result = $('input:checked').val();
    $.post('/questionList', {result}).then(response =>{

      // rescatas la respuesta
      // borras la anterior
      // append la nueva

      console.log(response);


    });
  });
});
