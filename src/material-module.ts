import { NgModule } from "@angular/core";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    exports:[
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatTabsModule,
        MatIconModule

    ]
})

export class MaterialModule{

}