import { NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatExpansionModule} from '@angular/material/expansion';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';


const MaterialComponents=[MatSelectModule,MatButtonModule,MatToolbarModule,
  MatSidenavModule,MatListModule,MatIconModule,MatFormFieldModule,MatMenuModule,MatInputModule,
  MatTableModule,MatCheckboxModule,MatDialogModule,MatCardModule,MatSortModule,MatPaginatorModule,
  FormsModule,ReactiveFormsModule,MatProgressSpinnerModule,MatProgressBarModule,MatDatepickerModule,MatNativeDateModule,
  MatTabsModule,MatDividerModule,MatTooltipModule,MatExpansionModule,MatRadioModule
  
  
]
@NgModule({
  
  imports: [
    
    MaterialComponents
  ],
  exports:[MaterialComponents]
})
export class MaterialModule { }
