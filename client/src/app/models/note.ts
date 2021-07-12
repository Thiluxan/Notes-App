export class Note{
    _id?:String;
    title:String;
    content:String;
    author:String;
    createdAt:String;

    constructor(_id:String,title:String,content:String,author:String,createdAt:String){
        this._id= _id;
        this.title = title;
        this.content = content;
        this.author = author;
        this.createdAt = createdAt;
    }

}