import { Component, OnInit } from '@angular/core';
import { BeerDummyDataService } from '../../beer-dummy-data.service';
import { BrewModel } from '../../models/BrewModel';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  beers: BrewModel[] = [];

  constructor(private brewDummyService: BeerDummyDataService) { }

  ngOnInit(): void {
    let dummyBeer = this.brewDummyService.GetDummyBrew();
    this.beers.push(dummyBeer);
  }

}
