import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SystemsService } from '../../../services/systems.service';
import { System } from '../../../models/system';
import { ToastrService } from 'ngx-toastr';
import { GeneralHelperService } from '../../../services/general-helper.service';


@Component({
  selector: 'app-producer-edit-tech-docs',
  templateUrl: './producer-edit-documents.component.html',
  styleUrls: ['./producer-edit-documents.component.scss']
})
export class ProducerEditDocumentsComponent implements OnInit {

  @Input() system: System;
  @Input() documents: any[];
  isChanged: boolean = false;

  docFile: any = null;
  uploading: boolean = false;
  data: any = {url: '', name: ''};

  addTechDoc(addForm): void {
    if (addForm.valid){
      this.documents.push({url: this.data.url,
                          name: this.data.name ? this.data.name.trim() : ''});
      this.data = {url: '', name: ''};
      addForm.reset();
      this.isChanged = true;
    }
  }

  fileChange(event, form){
    this.docFile = event.target.files[0];
    this.uploading = true;

    this.systemsService.postDataFile(this.docFile).then(res =>{
      this.uploading = false;
      this.documents.push({
        url: 'file://' + res.text(),
        name: this.docFile.name
      });
      this.docFile = null;
      this.isChanged = true;
    }, err =>{
      this.uploading = false;
      this.docFile = null;
    });
  }

  deleteTechDoc(i): void {
    this.documents.splice(i, 1);
    this.isChanged = true;
  }

  saveSystem(){
    let s = this.generalHelperService.cloneObject(this.system);
    s.details.documents = this.documents;
    this.systemsService.updateSystem(s).then(response => {
      this.activeModal.close({system: new System(response.json())});
    }, err => {
      this.toastrService.error('Serveri viga.')
    });
  }

  closeModal(f){
    if (this.isChanged || f.form.dirty){
      if (confirm('Oled väljades muudatusi teinud. Kui navigeerid siit ära ilma salvestamata, siis sinu muudatused kaovad.')){
        this.activeModal.dismiss();
      } else {
        return false;
      }
    } else {
      this.activeModal.dismiss();
    }
  }

  constructor(private activeModal: NgbActiveModal,
              private systemsService: SystemsService,
              private toastrService: ToastrService,
              private generalHelperService: GeneralHelperService) { }

  ngOnInit() {
  }

}
