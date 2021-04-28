import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeerDummyDataService } from '../beer-dummy-data.service';
import { BrewModel } from '../models/BrewModel';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.scss']
})
export class BeerDetailsComponent implements OnInit {

  beerId: string;
  dummyBrew: BrewModel;

  constructor(private activatedRoute: ActivatedRoute, private dummyBeerService: BeerDummyDataService) { 
    this.beerId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.beerId);
    this.dummyBrew = this.dummyBeerService.GetDummyBrew();
  }

  ngOnInit(): void {
  }

}
