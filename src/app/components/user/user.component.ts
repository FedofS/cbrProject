import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    name:string;
    speed:number;
    model:string;
    colors:Colors;
    options:string[];
    isEdit:boolean = false;

  constructor() { }

  ngOnInit() {
    this.name = 'Audi';
    this.speed = 10;
    this.model = 'A8';
    this.colors = {
      car: 'Red',
      salon: 'Black',
      wheels: 'Silver'
    };
    this.options = ["Наименование","Регистрационный номер","Дата регистрации"];
  }

showEdit(){
  this.isEdit = !this.isEdit;
}

addOpt(option,option1,option2) {
  this.options.unshift(option);
  this.options.unshift(option1);
  this.options.unshift(option2);
  return false;
}

deleteOpt(option) {
  for(let i=0;i<this.options.length; i++){
    if(this.options[i] == option)
      this.options.splice(i,1);
      break;
  }
}

  userSelect(userName) {
  if (userName=='bmw'){
    this.name = 'BMW';
    this.speed = 200;
    this.model = 'RS99';
    this.colors = {
      car: 'Синий',
      salon: 'Черный',
      wheels: 'Серебрянный'
    };
    this.options = ["ABS","Автопилот"];
  }else if (userName=='audi'){
    this.name = 'AUDI';
    this.speed = 200;
    this.model = 'RS99';
    this.colors = {
      car: 'Синий',
      salon: 'Черный',
      wheels: 'Серебрянный'
    };
    this.options = ["ABS","Автопилот"];
  }else if (userName=='mer'){
    this.name = 'MERSEDES';
    this.speed = 1200;
    this.model = 'RS99';
    this.colors = {
      car: 'Синий',
      salon: 'Черный',
      wheels: 'Серебрянный'
    };
    this.options = ["ABS","Автопилот","Навигация"];
  }
  }

}
  interface Colors {
    car:string,
    salon:string,
    wheels:string

  }
