const button = document.querySelectorAll('.btn')
const value = document.querySelector('#value')

let count = 0 
button.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        if(e.target.className.includes('increase')){
count ++
        }else if(e.target.className.includes('decrease')){
            count--
        }else{
            count = 0
        }
        value.textContent = count
    })
})