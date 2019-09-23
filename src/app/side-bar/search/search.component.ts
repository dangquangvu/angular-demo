import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    visible : boolean = true;
    visit : number =1 ;
    constructor() { }

    ngOnInit() {
    }
    changeStage (){
        this.visible = false;
    }
    expand()
    {
        this.visible = true;
    };
    onclick(){
        this.visible =! this.visible;
    }
    towClick(){
        if(this.visit ==0){
            this.visit =1;
        }
        else if(this.visit ==1){
            this.visit =0;
        }
    }

}
