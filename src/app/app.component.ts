import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  show=false;
  dropdownList:any = [];
  selectedItems:any=[];
  dropdownSettings:IDropdownSettings={};
  dropDownForm!:FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Item1' },
      { item_id: 2, item_text: 'Item2' },
      { item_id: 3, item_text: 'nitya' },
      { item_id: 4, item_text: 'xuriti' },
      { item_id: 5, item_text: 'Item5' },
      { item_id: 6, item_text: 'Item6' },
      { item_id: 7, item_text: 'Item7' },
      { item_id: 8, item_text: 'Item8' },
      { item_id: 9, item_text: 'Item9' },
      { item_id: 10, item_text: 'Item10 ddd utyu iiiuuh ssedd jiuv xzssdc fghhg' },
      { item_id: 11, item_text: 'Item11' },
      { item_id: 12, item_text: 'Item12' },
      { item_id: 13, item_text: 'Item13addsd gffghhh 545354646747476' },
      { item_id: 14, item_text: 'Item14' },
      { item_id: 15, item_text: 'Item15' },
      { item_id: 25, item_text: 'Item25' },
      { item_id: 35, item_text: 'Item35' }


    ];
    this.dropdownSettings = {
      idField: 'item_id',
      textField: 'item_text',
      allowSearchFilter: true
    };
    this.selectedItems = [
      { item_id: 3, item_text: 'Item3'  },
      { item_id: 4,item_text: 'Item4' }
    ];
    this.dropDownForm = this.fb.group({
      myItems: [this.selectedItems]
  });

  }
 
}