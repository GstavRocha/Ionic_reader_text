import { Injectable } from '@angular/core';
import{ RangeValue} from '@ionic/core';
import {TextToSpeech} from "@capacitor-community/text-to-speech";
import {RangeCustomEvent} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class LeitorService {
  taxa!: RangeValue;
  tone!: RangeValue;

  constructor() { }
  readerText = async (text: string)=>{
    await TextToSpeech.speak({
      text: text,
      lang: 'pt-BR',
      rate: +(this.taxa),
      pitch: +(this.tone),
      volume: 1.0,
      category: 'ambient',
    })
  }
  public stopText = async () => {
    await TextToSpeech.stop();
  };
  public changeTaxa(event: Event){
    this.taxa = (event as RangeCustomEvent).detail.value;
  }
  public  changeTone(event: Event){
    this.tone = (event as RangeCustomEvent).detail.value;
  }
  public cleanning( text: any){
    text.value = "";
  }

}
