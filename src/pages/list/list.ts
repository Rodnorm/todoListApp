import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  newItem: {name: string, id: string, responsible: string, date: string, description: string, position: number};
  position: number = 2;
  edit: boolean;
  add: boolean;
  tasks: Array<{name: string, id: string, responsible: string, date: string, description: string, position: number}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {    
    this.selectedItem = navParams.get('item');

    this.tasks = [
      {
      name: 'Lavar louça',
      id: this.generateId(),
      responsible: 'Silvio',
      date: '10/02/03',
      description: '10/02/0310/02/03 silvio',
      position: 0
    },
    {
      name: 'Lavar aaaaa',
      id: this.generateId(),
      responsible: '',
      date: '10/02/03',
      description: 'testeste',
      position: 1
    },
    {
      name: 'Lavar lsssssouça',
      id: this.generateId(),
      responsible: 'fulano',
      date: '10/02/03',
      description: 'teste teste',
      position: 2
    }
    ];
    this.newItemReset();  
  }
  
  newItemReset() {
    this.newItem = { name:'',id:'',description:'',responsible:'',date:'', position: 0};
    this.resetAddEdit();
  }

  itemTapped(item) {
    this.newItem = item;
    this.edit = true;
  }

  generateId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) +
           Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  saveNew(){
    this.position ++;
    this.newItem.position = this.position;
    this.newItem.id = this.generateId();
    this.tasks.push(this.newItem);
    this.add = false;
  }

  saveTask(){
    
    if (this.add) {
      this.saveNew();
      this.newItemReset();
      return;
    }
    this.tasks[this.newItem.position] = this.newItem;
    this.newItemReset();
  }

  remove() {
    this.tasks.splice(this.newItem['position'],1);
    this.newItemReset();
  }

  resetAddEdit(){
    this.add = false;
    this.edit = false;
  }
}
