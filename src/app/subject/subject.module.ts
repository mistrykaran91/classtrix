import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubjectPageRoutingModule } from './subject-routing.module';

import { SubjectPage } from './subject.page';
import { SubjectSkeletonDetailComponent } from './skeleton/subject-detail/subject-skeleton-detail.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SubjectPageRoutingModule],
  declarations: [SubjectPage, SubjectSkeletonDetailComponent]
})
export class SubjectPageModule {}
