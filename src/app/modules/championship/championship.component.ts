import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {newArray} from "@angular/compiler/src/util";
import {Chronos} from "../../interfaces/Chronos";

@Component({
  selector: 'app-championship',
  templateUrl: './championship.component.html',
  styleUrls: ['./championship.component.css']
})
export class ChampionshipComponent implements OnInit {

  pilotes: string[] = ["Adrien", "Norbert"]

  championshipForm!: FormGroup
  participantAjoute: string = '';
  tempsSpeciales: Chronos[][] = [
    [{minutes:5, secondes:32,millisecondes: 856},{minutes:4, secondes:10,millisecondes: 500},{minutes:3, secondes:27,millisecondes: 900}],
    [{minutes:5, secondes:32,millisecondes: 856},{minutes:4, secondes:10,millisecondes: 500},{minutes:3, secondes:27,millisecondes: 900}]
  ];

  constructor() { }

  ngOnInit(): void {
  }

  initForm(){

  }

  addParticipant() {
    if (this.participantAjoute != ''){
      this.pilotes.push(this.participantAjoute)
    }
    this.participantAjoute = ''
  }

  tempsTotalParticipant(allChronos: Chronos[]){
    let tempsTotalmillisec= 0;

    allChronos.forEach(temps =>{
      tempsTotalmillisec += temps.minutes * 60 * 1000;
      tempsTotalmillisec += temps.secondes * 1000;
      tempsTotalmillisec += temps.millisecondes
    })

    let min = Math.trunc(tempsTotalmillisec / 60000)
    tempsTotalmillisec = tempsTotalmillisec - min*60000
    console.log(min)
    let sec = Math.trunc(tempsTotalmillisec / 1000)
    tempsTotalmillisec = tempsTotalmillisec - sec*1000



    return min + '.' + sec + '.' + tempsTotalmillisec
  }
}
