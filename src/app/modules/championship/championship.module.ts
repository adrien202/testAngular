import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChampionshipComponent} from "./championship.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [ChampionshipComponent],
  imports: [BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ChampionshipModule { }
