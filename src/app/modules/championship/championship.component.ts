import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-championship',
  templateUrl: './championship.component.html',
  styleUrls: ['./championship.component.css']
})
export class ChampionshipComponent implements OnInit {

  pilotes: string[] = ["Norbert", "Pierre", "Adrien"]

  championshipForm!: FormGroup

  constructor() { }

  ngOnInit(): void {
  }

}
