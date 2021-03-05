/*const square = function (x) {
    return x * x;
}*/

/*
const square = (x) => {
    return x * x;
}
*/

//const square = (x) => x * x;

//console.log(square(2));

/*const event = {
    name: 'Birthday Party',
    printGuestList: function () {
        console.log('Guest list for ' + this.name)
    }
}*/


/*const event = {// arrow functions do not bind their own 'this' value; they access their 'this' value in the context they are created
    name: 'Birthday Party',
    printGuestList: () => {
        console.log('Guest list for ' + this.name)
    }
}*/

const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {

        console.log('Guest list for ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name);
        })
    }
}


event.printGuestList();