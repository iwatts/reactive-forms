import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})

export class ProfileEditorComponent {
  profileForm$: Observable<any> = this.store.select(state => state.profileForm)
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });
  
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }
  
  constructor(private fb: FormBuilder, private store: Store<{profileForm: any}>){
    this.profileForm$ = of(this.profileForm.value)
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    // this.store.dispatch({
    //   type: 'SUBMIT_FORM',
    //   profileForm: this.profileForm.value
    // })
  }
}
