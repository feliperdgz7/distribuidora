$('#telefone').mask('(00) 00000-0000',{
    placeholder: '(xx) xxxxx-xxxx'
});

document.addEventListener('DOMContentLoaded', function(){
    const modalExemplo = new bootstrap.Modal('#maior-idade');
    setTimeout(function(){
        modalExemplo.show();
    }, 1000);
})