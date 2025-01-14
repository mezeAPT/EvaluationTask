import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BluetoothTroubleshootComponent } from './bluetooth-troubleshoot.component';

describe('BluetoothTroubleshootComponent', () => {
  let component: BluetoothTroubleshootComponent;
  let fixture: ComponentFixture<BluetoothTroubleshootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BluetoothTroubleshootComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BluetoothTroubleshootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
