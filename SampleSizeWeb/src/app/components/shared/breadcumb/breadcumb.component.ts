import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breadcumb',
  templateUrl: './breadcumb.component.html',
  styleUrls: ['./breadcumb.component.css']
})
export class BreadcumbComponent implements OnInit {

  @Output() navigate = new EventEmitter<string>();

  constructor(private route:ActivatedRoute) { 
    
  }

  ngOnInit(): void {

  }

  

}
