import L from 'leaflet'

export default class PopupContentProvider{
    constructor(index, className){
        this.index = index;
        this.className = className;
    }

    getPopupContent(){
        return ( `
            <div id="popup-content-${this.index}">
                some text.
            </div>
        `)
    }
}