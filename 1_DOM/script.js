
{/* <div class="container">
    <h1 id="heading1">this is heading1</h1>
    <h2 id="heading2">this is heading2</h2>
</div> */}

// let body = document.getElementsByTagName('body')[0];
// let container = document.createElement('div');
// container.setAttribute('class', 'container');
// body.appendChild(container);

// container.innerHTML = `
//     <h1 id="heading1">this is heading1</h1>
//     <h2 id="heading2">this is heading2</h2>
// `

/****** styling elment by using of dom *******/

//container.style.backgroundColor = 'red';
// function css(element, style) {
//     for(const property in style) {
//         //console.log(property);
//         element.style[property] = style[property];
//     }
// }
// css(container, {
//     'background-color' : 'blue',
//     display : 'flex'
// });


//** Query Selector */

// const el = document.querySelectorAll("h2")[0];
// console.log(el);


//dom traversal
// console.log(document);

// const elem = document.querySelector('ul');
// console.log(elem.innerH);
// console.log("step1");
// console.log("step2");
// console.log("step3");

// setInterval(() => {
//     printSomething();
// }rrrrrrrrtyuiuytfrdee34567uihgfde478
// function printSomething() {
//     console.log("something funny");
// }

let fnameElem = document.querySelector('#fname');
let btnElem = document.querySelector('.btn');

btnElem.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e)
    console.log(fnameElem.value);
})


