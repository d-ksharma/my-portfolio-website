const sections =document.querySelectorAll('.section');
const sectbtns =document.querySelectorAll('.controles');
const sectbtn =document.querySelectorAll('.control');
const allsections =document.querySelector('.main-context');

function pageTransitions(){
    // button class active class
    for(let i=0;i<sectbtn.length;i++){
        sectbtn[i].addEventListener('click',function(){
            let currentbtn=document.querySelectorAll('.active-btn');
            currentbtn[0].className=currentbtn[0].className.replace('active-btn','');
            this.className +=' active-btn';
        })
    }

    //section active class select
    allsections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        console.log(id)
        if(id){
            //remove selection from the other btns
            sectbtns.forEach((btn)=>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')
            //hide other section
            sections.forEach((section)=>{
                section.classList.remove('active')
            })
            const element = document.getElementById(id)
            element.classList.add('active')
        }
    })


    //toggle theam between light to dark
    const theambtn=document.querySelector('.theam-btn');
    theambtn.addEventListener('click',()=>{
        let element=document.body;
        element.classList.toggle('light-mode');
    })
}
pageTransitions();


