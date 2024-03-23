const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        console.log('guest list for ' + this.name)
        
        this.guestList.forEach((guest) => {
            console.log(guest)
        })
    },
    guestList2: function (){
        console.log(this.name)
    },
    guestList3: () => {
        console.log(this.name)
    }
}
event.guestList2()