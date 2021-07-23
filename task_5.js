//создаем общий класс

class StatusDevice{
    constructor(options){
        this.name = options.name;
        this.func = options.func;
        this.power = options.power
    }
    getStatus(status){
        if(`${status}` == "on"){
            function  getSumPowerDay(one, two) {
               console.log(`За сутки техника поребляет ${(one + two) * 24} энергии`)
           };
           function getSumPowerMonth(one, two){
               console.log(`За месяц техника поребляет ${((one + two) * 24)*30} энергии`)
           }
           return getSumPowerDay(lamp.power,comp.power) + getSumPowerMonth(lamp.power,comp.power);
        }
        else{
           return console.log('техника отключена')
       }
       
   }
}

const lamp = new StatusDevice({
    name: "lamp",
    func: "ligth",
    power: 20
})

const comp = new StatusDevice({
    name: "comp",
    func: "game",
    power: 50
})

console.log(lamp);
console.log(comp);


//меняем статусы вкл/выкл
lamp.getStatus("off");


