
const pi = Math.pi

const multiply = (n,m) => n*m;

const dividw = (a,b) =>  a/b;

const sum=(c, d) => c + d;

const square = (x) => x*x;

const double = (x) => x*2;

const Triple = (x) => x * 3;



console.log(sum(2,3))

function getDimens(heightSel,diamSel) {
    return function impureDimens() {
        const height = Document.querySelector(heightSel);
        const diameter = Document.querySelector(diamSel);

        if (!diameter||!height) {
            return void(0);
        }

        return [height.value,diameter.value]
    }
}

//Pure - Only return a function
const dimes = getDimens(".height",'.diameter-bad');

//Impure , Excute the function
const result = dimes();