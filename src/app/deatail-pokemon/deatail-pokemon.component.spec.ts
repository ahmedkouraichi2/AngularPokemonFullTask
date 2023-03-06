import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeatailPokemonComponent } from './deatail-pokemon.component';

describe('DeatailPokemonComponent', () => {
  let component: DeatailPokemonComponent;
  let fixture: ComponentFixture<DeatailPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeatailPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeatailPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
