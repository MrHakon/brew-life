import { Component, OnInit } from '@angular/core';
import { BeerDummyDataService } from '../../services/beer-dummy-data.service';
import { BrewModel } from '../../models/BrewModel';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipe: BrewModel[] = [];

  constructor(private brewDummyService: BeerDummyDataService) { }

  ngOnInit(): void {
    let dummyBrew = this.brewDummyService.GetDummyBrew();
    this.recipe.push(dummyBrew);
  }
}
