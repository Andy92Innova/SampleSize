import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { InputModel } from 'src/app/model/Domain/InputModel';
import { Pagination } from 'src/app/model/Domain/PaginationModel';
import { CalculateRequest } from 'src/app/model/Request/CalculateRequest';
import { AuthService } from 'src/app/services/auth-service.service';
import { SampleSizeService } from 'src/app/services/sample-size-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isError:boolean = false;
  msgError:string = "";
  inputUser!: FormGroup;

  constructor(
    private authService:AuthService,
    private sampleSizeServiceService: SampleSizeService,
    private formBuilder: FormBuilder,
    private router: Router) {
  }

  ngOnInit(): void {
    this.initializeForm();

    // this.authService.getToken().subscribe({
    //   next: (token)=> {
    //     console.log(token);
    //     localStorage.setItem("token", token.token)
    //   },
    //   error: (error) => console.log(error)
    // })
  }

  initializeForm() {
    this.inputUser = this.formBuilder.group({
      input1: [1, [Validators.required, Validators.min(1)]],
      input2: [1, [Validators.required, Validators.min(1)]],
      sampleSize: [1, [Validators.required, Validators.min(1)]]
    });
  }

  get validateInput1() {
    return this.inputUser.get('input1');
  }
  get validateInput2() {
    return this.inputUser.get('input1');
  }

  get validateSampleSize() {
    return this.inputUser.get('sampleSize');
  }


  submitForm() {
    // console.log(this.inputUser.valid);
    // console.log(this.inputUser.value);


    if (this.inputUser.valid) {

      const input = new InputModel(
        this.inputUser.get('input1')?.value,
        this.inputUser.get('input2')?.value,
        this.inputUser.get('sampleSize')?.value);

      const pagination = new Pagination(1, 1, 0);

      const model = new CalculateRequest(
        input,
        pagination
      )

      this.sampleSizeServiceService.GetItemsKnown(model).subscribe((data) => {
        if(data != null){
          if (data.Items == null) {
              this.isError = true;
              this.msgError = data.Error;
          } else {
            this.sampleSizeServiceService.UpdateDataForm(data);
            this.sampleSizeServiceService.UpdateInput(input);
            localStorage.setItem('request', JSON.stringify(input));
            this.router.navigate(['/detail']);
          }
        }else{
          this.isError = true;
          this.msgError = 'Token is missing';
        }
      });
    }
  }
}
