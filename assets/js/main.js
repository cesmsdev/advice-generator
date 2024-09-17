document.querySelector('.btn-dice').addEventListener('click', () =>{
    $(".btn-dice").attr("disabled");
    GetNewRandomQuote();
});

function GetNewRandomQuote() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => {
            if (!response.ok) {
                throw new Error('Bad request' + response.status);
            }
            return response.json();
        })
        .then(data => {
            $("#id-qoute").text(data.slip.id);
            $("#quote-advice").text(data.slip.advice);
        })
        .catch(error => {
            console.error('Was a problem', error);
        });
}