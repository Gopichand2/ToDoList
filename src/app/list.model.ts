export class list{
    public title : string;
    public Description: string;
    public time: string;
    public checked : boolean;


    constructor(title: string, Description: string, time : string, checked : boolean){
        this.title = title;
        this.Description = Description;
        this.time = time;
        this.checked = checked; 
    }
}
