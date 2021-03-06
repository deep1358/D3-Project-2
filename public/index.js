const btn = document.querySelectorAll('button')
const form = document.querySelector('form')
const formAct = document.querySelector('form span')
const input = document.querySelector('input')
const error = document.querySelector('.error')


var activity = 'cycling'

btn.forEach(bt=>{
    bt.addEventListener('click',e=>{
        activity = e.target.dataset.activity;
        
        btn.forEach(bt=>bt.classList.remove('active'))
        e.target.classList.add('active')

        input.setAttribute('id',activity)

        formAct.textContent = activity

        update(data)

    })
})

form.addEventListener('submit',e=>{
    e.preventDefault()
    const distance = parseInt(input.value)
    if(distance){
        db.collection('activities').add({
            distance,
            activity,
            date:new Date().toString()
        }).then(()=>{
            input.value=""
            error.textContent=""
        })
    }else{
        error.textContent = "Please Enter valid Distance"
    }
})