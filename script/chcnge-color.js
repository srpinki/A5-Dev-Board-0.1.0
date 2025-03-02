document.getElementById('change-bg')
    .addEventListener('click', function(){
        const candomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = candomColor;
    })

