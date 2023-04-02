import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServeurService } from '../services/serveur.service';
import { Dialog, DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent {
  empForm: FormGroup;
 
  constructor(private _fb:FormBuilder,private _empService:ServeurService ,private _dialogRef:DialogRef<EmpAddEditComponent>){
    this.empForm = this._fb.group({
      nomServeur:'',
      adresseIP:'',
    });
  }

  onFormSubmit(){
    if(this.empForm.valid){
      this._empService.addServeur(this.empForm.value).subscribe({
        next: (val: any)=> {
          alert('Serveur enregistre');
          this._dialogRef.close();
        },
        error:(err:any)=>{
          console.error(err);
        },
        
      }); 
    }
  }

}
