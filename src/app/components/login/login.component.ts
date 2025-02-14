import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from './login.service';

@Component({
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  providers: [LoginService],
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrl: 'login.component.scss',
})
export class LoginComponent {
  constructor(private readonly service: LoginService) {}

  private readonly formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    user: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  get userControl() {
    return this.form.controls.user;
  }

  get passwordControl() {
    return this.form.controls.password;
  }

  onSubmit() {
    if (this.form.invalid) return;
    this.service
      .login({
        name: this.userControl.value!,
        password: this.passwordControl.value!,
      })
      .subscribe({
        next: alert,
        error: (error) => {
          const response = JSON.parse(error.error);
          alert(response.message);
        },
      });
  }
}
