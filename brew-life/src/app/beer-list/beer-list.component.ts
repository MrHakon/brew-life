import { Component, OnInit } from '@angular/core';
import { BeerDummyDataService } from '../beer-dummy-data.service';
import { BrewModel } from '../models/BrewModel';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  beers: BrewModel[] = [];

  constructor(private brewDummyService: BeerDummyDataService) { }

  ngOnInit(): void {
    let dummyBeer = this.brewDummyService.GetDummyBrew();
    this.beers.push(dummyBeer);
  }

}
