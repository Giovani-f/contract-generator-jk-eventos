import { Injectable } from '@angular/core';
import { Data } from '@interfaces/interfaces';
import { MapperService } from '@services/mapper.service';

import * as PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import { saveAs } from "file-saver";

@Injectable()
export class RenderDocxService {
  private data!: Data
  constructor(
    private mapperSerivce: MapperService
  ) { }

  render(file: any, data: Data):void {
    const elm = file //this.fileUpdate.value.file._files
    this.data = {
      customer: this.mapperSerivce.customerMapper(data.customer),
      event: data.event
    }

    const reader = new FileReader();

    if (elm.length === 0) {
      console.log('No files selected');
    }

    reader.readAsBinaryString(elm[0]);

    reader.onerror = (event) => {
      console.log('error reading file', event);
    };

    reader.onload = (event: any) => {
      const content = event.target.result;
      const zip = new PizZip(content);
      const doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
      });
      doc.render({
        ...this.data.customer
      });
      const out = doc.getZip().generate({
        type: "blob",
        mimeType:
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      });
      const fileName = `contrato_${this.data.customer.name.replace(' ', '_').toUpperCase()}`
      saveAs(out, `${fileName}.docx`);
    };
  }
}
