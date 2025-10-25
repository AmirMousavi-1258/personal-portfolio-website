const button = document.getElementById("headerBut");
const color = ['#ffffff','#151515cc'];
const emoji = ['☀️','🌙'];


button.addEventListener('click',()=>{
    if(button.value === '🌙'){
        button.value = '☀️';
        // button.textContent = '☀️';
        // document.getElementById("headerBut").style.backgroundColor = "#151515";
        document.body.style.backgroundColor = color[1];
        document.getElementById("container1-1").style.backgroundColor = color[1];
        document.getElementById("Hh1").style.backgroundColor = color[1];
        document.getElementById("Hh1").style.color = color[0];
        document.getElementById("C1h1").style.backgroundColor = color[1];
        document.getElementById("C1h1").style.color = color[0];
        document.getElementById("skills").style.backgroundColor = color[1];
        document.getElementById("skills2").style.backgroundColor = color[1];
        document.getElementById("Skill").style.backgroundColor = color[1];
        document.getElementById("Skill").style.color = color[0];
        document.getElementById("Fh2").style.backgroundColor = color[1];
        document.getElementById("Fh2").style.color = color[0];
        document.getElementById("email").style.backgroundColor = color[1];
        document.getElementById("phonenumber").style.backgroundColor = color[1];
        document.querySelectorAll('a').forEach(element,()=>{
            element.classList.toggle('dark-mode');
        })

    }
    else if(button.value === '☀️'){
        button.value = '🌙';
        // button.textContent = '🌙';
        document.body.style.backgroundColor = color[0];
        // document.getElementById("headerBut").style.backgroundColor = color[0];
        document.getElementById("container1-1").style.backgroundColor = color[0];
        document.getElementById("Hh1").style.backgroundColor = color[0];
        document.getElementById("Hh1").style.color = color[1];
        document.getElementById("C1h1").style.backgroundColor = color[0];
        document.getElementById("C1h1").style.color = color[1];
        document.getElementById("skills").style.backgroundColor = color[0];
        document.getElementById("skills2").style.backgroundColor = color[0];
        document.getElementById("Skill").style.backgroundColor = color[0];
        document.getElementById("Skill").style.color = color[1];
        document.getElementById("Fh2").style.backgroundColor = color[0];
        document.getElementById("Fh2").style.color = color[1];
        document.getElementById("email").style.backgroundColor = color[0];
        document.getElementById("phonenumber").style.backgroundColor = color[0];
        document.querySelectorAll('a').forEach(element => {
            element.style.color = color[1];
            element.addEventListener('mouseenter',()=>{
                element.style.color = color[0];
                element.style.backgroundColor = color[1];
            })
            element.addEventListener('mouseleave',()=>{
                element.style.color = color[1];
                element.style.backgroundColor = 'transparent';
            })
        });

    }
});