import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = {
    name: '',
    email: '',
    cpf: '',
    renda: null,
    dtNasc: '',
    phone: '',
    job: ''
  }

  jobs = [
    "Desenvolvedor",
    "Auxiliar Administrativo",
    "Funcionário Público",
    "Médico",
    "Enfermeiro",
    "Advogado",
    "Professor",
    "Cientista",
    "Recursos Humanos",
    "Aposentado"
  ]

  firstFormGroup: FormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    cpf: ['', Validators.required],
    renda: ['', Validators.required],
  });
  secondFormGroup: FormGroup = this._formBuilder.group({
    dtNasc: ['', Validators.required],
    phone: ['', Validators.required],
    job: ['', Validators.required],
  });
  isEditable = true;


  constructor(
    private userService: UserService,
    private router: Router,
    private _formBuilder: FormBuilder

  ) { }

  ngOnInit(): void {

  }

  

  createUser(): void {
    const data = {...this.firstFormGroup.getRawValue(), ...this.secondFormGroup.getRawValue()}
      this.userService.create(data).subscribe(() => {
      this.userService.showMessage('Seu cadastro foi concluído com sucesso! Agradecemos pelas suas informações e iremos entrar em contato pelo e-mail informado!')
      this.router.navigate(['/users'])
    })
  }

  cancel(): void {
    this.router.navigate(['/users'])
  }
}
