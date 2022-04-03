import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer, EventData, Data } from '@interfaces/interfaces';
import { RenderDocxService } from '@services/render-docx.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public customerData: FormGroup;
  public eventData: FormGroup;
  public fileUpdate: FormGroup;
  public data!: Data;
  public file: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private renderDocxService: RenderDocxService
  ) {
    this.customerData = this.formBuilder.group({
      name: [''],
      cpf: [''],
      rg: [''],
      address: [''],
      zipcode: [''],
      city: ['']
    });
    this.eventData = this.formBuilder.group({
      date: [''],
    });
    this.fileUpdate = this.formBuilder.group({
      file: ['']
    })
  }


  readDocxFile(): void {
    this.data = {
        customer: this.customerData.value,
        event: this.eventData.value
    }
    const file = this.fileUpdate.value.file._files

    this.renderDocxService.render(file, this.data)
  }
}
