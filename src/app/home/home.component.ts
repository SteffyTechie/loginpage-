import { CommonModule } from '@angular/common';
import { Component, Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UtilService } from '../../service/services/util.service';
import { DataService } from '../../service/services/data.service';
import { HttpClientService } from '../../service/services/http-client.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [ReactiveFormsModule] 
})


export class HomeComponent {
  router: any;
validateNumberOnly($event: KeyboardEvent) {
throw new Error('Method not implemented.');
}
validateAlphaNumericOnly($event: KeyboardEvent) {
throw new Error('Method not implemented.');
}
  http: any;
onSubmit() {
  if (this.homeForm.valid) {
        const formData = this.homeForm.value;
        console.log('Form Submitted', this.homeForm.value);
       
        this.httpClientService.saveFormData(formData)
          .subscribe(
            response => {
              this.utilService.showMessage('Data saved successfully!', 3000);
              console.log('Save response:', response);
              this.router.navigate(['/edit']);
            },
            error => {
              this.utilService.showMessage('Error saving data. Please try again.', 3000);
              console.error('Save error:', error);
              
            }
          );
      } else {
        this.utilService.showMessage('Please fill in the required fields.', 3000);
      }
}


  documentId: any;
editUser(event: any) {
}
  homeForm!: FormGroup;
 
  constructor(private fb: FormBuilder,
      private utilService: UtilService,
      private dataService: DataService,
      private httpClientService: HttpClientService,
    ){}

  ngOnInit(): void {
    this.homeForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName:new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      zip: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      document:[null]
   
    });
  }
 
  onChangeDocId(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      
      this.uploadFile(file).subscribe((response) => {
        console.log('File uploaded successfully:', response);
      });
    } else {
      console.log('No file selected');
    }
  }

 
  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    
    return this.http.post('localhost:8080/document/upload', formData);
  }
    }
    

     
  

  

    
 
  



