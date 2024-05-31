import { TestBed } from '@angular/core/testing';

import { MyserviceService } from './myservice.service';

describe('MyserviceService', () => {

  TestBed.configureTestingModule({
    providers:[MyserviceService]
  })

  it("testing add method",()=>{
    let ob= TestBed.inject(MyserviceService);
   // let ob = new MyserviceService();
    var result= ob.add(10,20);
    expect(result).toBe(30);

  })

 



});
