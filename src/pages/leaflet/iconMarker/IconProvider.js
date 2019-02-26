import L from 'leaflet'

export default class IconProvider{
    constructor(index, className){
        this.index = index;
        this.className = className;
    }

    getIcon(){
        return L.divIcon({
            className: this.className, 
            html: `
            <div class="i-marker">
                <div class="i-marker-icon"></div>
                <div class="i-marker-value" id="marker-value-${this.index}"></div>
                <div class="i-marker-unit">%</div>
            </div>
        `})
    }
}