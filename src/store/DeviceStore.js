import  { makeAutoObservable } from "mobx"
export default class DeviceStore{
    constructor(){
        this._types = [
            {id:1, name:'холодильник'},
            {id:2, name:'Смартфон'},
            {id:3, name:'Ноутбуки'},
            {id:4, name:'Телевизоры'},
        ];
        this._brand = [
            {id:1, name:'Samsung'},
            {id:2, name:'Apple'}
        ]
        this._devices=[
            {id:1,name:"iphone 12 pro", price: 25000, rating: 5, img:'https://www.phonebunch.com/news-images/2022/03/iPhone-14-Pro-and-iPhone-14-Pro-Max-leak-schematics-phonebunch.jpg'},
            {id:2,name:"iphone 12 pro", price: 25000, rating: 5, img:'https://www.phonebunch.com/news-images/2022/03/iPhone-14-Pro-and-iPhone-14-Pro-Max-leak-schematics-phonebunch.jpg'},
            {id:3,name:"iphone 12 pro", price: 25000, rating: 5, img:'https://www.phonebunch.com/news-images/2022/03/iPhone-14-Pro-and-iPhone-14-Pro-Max-leak-schematics-phonebunch.jpg'},
            {id:4,name:"iphone 12 pro", price: 25000, rating: 5, img:'https://www.phonebunch.com/news-images/2022/03/iPhone-14-Pro-and-iPhone-14-Pro-Max-leak-schematics-phonebunch.jpg'},
            {id:5,name:"iphone 12 pro", price: 25000, rating: 5, img:'https://www.phonebunch.com/news-images/2022/03/iPhone-14-Pro-and-iPhone-14-Pro-Max-leak-schematics-phonebunch.jpg'},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }
    setBrands(brand){
        this._brand=brand
    }
    setDevices(devices){
        this._devices=devices
    }
    setSelectedType(type){
        this._selectedType = type
    }
    setSelectedBrand(brand){
        this._selectedBrand = brand
    }
    get types(){
        return  this._types
    }
    get brand(){
        return  this._brand
    }
    get devices(){
        return   this._devices
    }
    get selectedType(){
        return  this._selectedType
    }
    get selectedBrand(){
        return this._selectedBrand
    }
}