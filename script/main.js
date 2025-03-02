const boardCards = document.querySelectorAll('.boardcard-btn');

const today = new Date();
const formateDate = today.toDateString();
document.getElementById('date').innerText = formateDate;



for (const boardCard of boardCards) {
    boardCard.addEventListener('click', function(){
        alert('Board Updated Successfully')
        const taskNumber= getInnerTextByID('task-number');
        const convertTaskNumber = parseInt(taskNumber);
        const taskSum = convertTaskNumber - 1;
        setInnerTextByIdAndValue('task-number', taskSum );

        const taskAdd = getInnerTextByID('task-add');
        const sum = parseInt(taskAdd) + 1;
        setInnerTextByIdAndValue( 'task-add', sum);

        const date = new Date();
        const localTime = date.toLocaleTimeString();

        const titles = document.querySelectorAll('.title');
        const singleTitle = [];

       for (const title of titles) {
        const titled = title.innerText;
        console.log(titled);
        
        const cache = document.getElementById('cache');
        const div = document.createElement('div');
        div.innerHTML = `<p class="text-base tracking-wide bg-[#F4F7FF] rounded-lg p-4 mt-5"> You have Complete The Task ${titled} at ${localTime} </p>`;
        cache.appendChild(div)
       }



        //  cache Clear
        document.getElementById('clear-history').addEventListener('click', function(){
            cache.innerText = '';
        })

        
       this.disabled = true;

       if (convertTaskNumber === 1) {
            alert('congrats!!! You have conpleted all the current task');
       }
       
    })
    
}


