import L from 'leaflet'

export default class Icon {
    constructor(type, value){
        this.type = type;
        this.value = value;
    }

    sensorHtml(){
        return(`
            <div>
                <h1>sensor</h1>
                <h1>${this.value}</h1>
            </div>
        `)
       
    }

    deviceHtml(){
        return(`
            <div>
                <h1>device</h1>
                <h1>${this.value}</h1>
            </div>
        `)
       
    }

    cameraHtml(){
        return(`
            <div>
                <h1>camera</h1>
                <h1>${this.value}</h1>
            </div>
        `)
       
    }

    getInstance(){
        switch(this.type){
            case "sensor":
                return L.divIcon({html: this.sensorHtml()});
            case "camera":
                return L.divIcon({html: this.cameraHtml()});
            case "device":
                return L.divIcon({html: this.deviceHtml()});
            default:
                throw new Error("unexpcet type for icon, type must be one of 'sensor','camera','device'.")
        }
    }

}