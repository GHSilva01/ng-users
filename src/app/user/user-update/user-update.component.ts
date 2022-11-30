import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  user: User

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
    firstFormCtrl: ['', Validators.required],
  });
  secondFormGroup: FormGroup = this._formBuilder.group({
    secondFormCtrl: ['', Validators.required],
  });
  isEditable = true;

  

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private _formBuilder : FormBuilder
  ) { }

    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id')
      this.userService.readById(id).subscribe(user => {
        this.user = user
      })
    }

    updateUser(): void {
      this.userService.update(this.user).subscribe(() => {
        this.userService.showMessage('Usuário atualizado com sucesso!!!')
        this.router.navigate(["/users"])
      })
    }
    
    cancel(): void {
      this.router.navigate(["/users"])
    }
}
