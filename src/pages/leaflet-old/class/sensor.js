import L from "leaflet"

export default class Sensor{
    constructor(marker){
        this.marker = marker;
        this.sayHello();
    }

    sayHello(){
        console.log("hello")
    }
}