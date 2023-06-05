import { Component } from '@angular/core';
import { IonTextarea, IonicModule } from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LeitorService} from "../service/leitor.service";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public formText: FormGroup;
    constructor(private ls: LeitorService, private fg: FormBuilder) {
      this.formText = fg.group({
        text: ['', Validators.required]
      });
    }
    reader(text: IonTextarea): any{
      let texto = JSON.stringify(text.value)
      return this.ls.readerText(texto)
    }
    stoping(){
      return this.ls.stopText()
    }
    limpar(text: IonTextarea){
      this.ls.cleanning(text);
    }
    selectTaxa(event: Event){
      this.ls.changeTaxa(event);
    }
    selectTone(event: Event){
      this.ls.changeTone(event);
    }
}
