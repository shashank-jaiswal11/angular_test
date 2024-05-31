import { TestBed } from '@angular/core/testing';

import { NewserviceService } from './newservice.service';

describe('NewserviceService', () => {
  let service: NewserviceService;
  it("testing divide method", ()=>{
    let ob= new NewserviceService();
    var result=ob.divide(25,5);
    expect(result).toBe(5);
  })


});
