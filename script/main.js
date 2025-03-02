const boardCards = document.querySelectorAll('.boardcard-btn');
//Added date
const today = new Date();
const formateDate = today.toDateString();
document.getElementById('date').innerText = formateDate;


for (const boardCard of boardCards) {
    boardCard.addEventListener('click', function(event){
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

        //added title in the cache
        const parentCard = event.target.parentNode.parentNode ;
        console.log(parentCard);
        const title = parentCard.querySelector('.title').innerText;

        const cache = document.getElementById('cache');
        const div = document.createElement('div');
        div.innerHTML = `<p class="text-base tracking-wide bg-[#F4F7FF] rounded-lg p-4 mt-5"> You have Complete The Task ${title} at ${localTime} </p>`;
        cache.appendChild(div)


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






