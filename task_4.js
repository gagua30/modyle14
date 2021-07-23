//если статус техники "on" то подсчитывается потребление энергии, если "off, то нет"

function StatusDevice(){
    this.getStatus = function(status){
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


ListDevice.prototype = new StatusDevice()  


function ListDevice(name, func, power){
    this.name = name,
    this.func = func,
    this.power = power    
}

const lamp = new ListDevice("lamp", "light", 20);
const comp = new ListDevice("comp", "game", 54);




//получаем объекты
console.log(lamp);
console.log(comp);

//статусы электроприборов
lamp.getStatus("on");