import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { GeneratorComponent } from './generator/generator.component';
import { SampleComponent } from './sample/sample.component';

const routes: Route[] = [
  { path: "", redirectTo: "/sample", pathMatch: "full" },
  { path:"home", redirectTo: "/sample", pathMatch:"full" },
  { path:"sample", component: SampleComponent},
  { path:"generate", component: GeneratorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
