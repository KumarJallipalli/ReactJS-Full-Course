const obj = {
    x : 10,
    y : 'Siva',
    z : () => {console.log("Log Message")}
};

const {a = 'Luck', b = 20, c = ()=>{console.log("Lucky Bhaskar")}, x, y, z} = obj;

console.log(a);
console.log(b);
console.log(c);
c()