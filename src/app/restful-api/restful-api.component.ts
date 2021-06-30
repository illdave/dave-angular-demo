import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-restful-api',
    templateUrl: './restful-api.component.html',
    styleUrls: ['./restful-api.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class RestfulApiComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
}

