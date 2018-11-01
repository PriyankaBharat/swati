import { Component, OnInit } from '@angular/core';
import { MobPartDataTypes } from './MobDatTypes';
// import { MOBPARTS } from './mocks';
import { MobDataService } from './mob-data.service';
import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Component({
  selector: 'app-mob-parts',
  templateUrl: './mob-parts.component.html',
  styleUrls: ['./mob-parts.component.css']
})
export class MobPartsComponent implements OnInit {

  constructor(private mobDataService: MobDataService, private el: ElementRef, private renderer: Renderer) {
        // this.ChangeBgColor('red');
    }
    
    @HostListener('mouseover') 
    onMouseOver() {
        this.ChangeBgColor('blue');
    }

    @HostListener('click') 
    onClick() {
        alert('Host Element Clicked');
    }

    @HostListener('mouseleave') 
    onMouseLeave() {
        this.ChangeBgColor('black');
    }
    ChangeBgColor(color: string) {
        this.renderer.setElementStyle(this.el.nativeElement, 'color', color);
    }
 
  ngOnDestroy() {
    console.log("ngOnDestroy Block...!");
  }

  
  ngAfterViewInit() {
    console.log("ngAfterViewInit Block...!");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit Block...!");
  }

  ngOnInit() {
    console.log("ngOnInit Block...!");

  	//this.mobParts = MOBPARTS;
    //let mobDataService = new MobDataService();
    //this.mobParts = this.mobDataService.getMobParts();
    this.mobDataService.getMobParts().subscribe(mobParts => this.mobParts = mobParts);
  }

  mobParts: MobPartDataTypes[];

	calcPro(){
		let sum = 0;
    if(Array.isArray(this.mobParts)){
  		for(let mPart of this.mobParts){
  			sum += mPart.inStock;
  		}
    }
		return sum; 
	}
  upQntt(e){
    if(e.inStock > e.quantity)
      e.quantity++;
  }
  downQntt(e){
    if(e.quantity != 0)
      e.quantity--;
  }
  // abc(e){
  //   console.log("input value : "+e);
  // }
}
