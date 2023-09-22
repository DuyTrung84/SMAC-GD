import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { ContactComponent } from './page/contact/contact.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { RecruitComponent } from './page/recruit/recruit.component';

const routes: Routes = [
  {
    path: '', component: BaseLayoutComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'product-detail', component: ProductDetailComponent },
      { path: 'recruit', component: RecruitComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
