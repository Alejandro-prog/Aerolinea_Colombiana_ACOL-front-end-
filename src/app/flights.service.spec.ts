import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { FlightsService } from './flights.service';


describe('FlightsService', () => {

      beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule], 
        providers: [FlightsService]
      }));

       it('should be created', () => {
        const service: FlightsService = TestBed.get(FlightsService);
        expect(service).toBeTruthy();
       });

       it('should have getData function', () => {
        const service: FlightsService = TestBed.get(FlightsService);
        expect(service.getFlights).toBeTruthy();
       });


    });