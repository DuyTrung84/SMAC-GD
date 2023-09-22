import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { HomeComponent } from './page/home/home.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { ContactComponent } from './page/contact/contact.component';
import { AboutComponent } from './page/about/about.component';
import { RecruitComponent } from './page/recruit/recruit.component';
import { BannerComponent } from './component/site/banner/banner.component';
import { ProductsComponent } from './component/site/products/products.component';
import { TechComponent } from './component/site/tech/tech.component';
import { AchievementComponent } from './component/site/achievement/achievement.component';
import { FeedbackComponent } from './component/site/feedback-customer/feedback.component';
import { CustomerComponent } from './component/site/customer/customer.component';
import { NewsComponent } from './component/site/news/news.component';
import { ContentContactComponent } from './component/site/content-contact/content-contact.component';
import { ProductDetailAppComponent } from './component/site/product-detail-app/product-detail-app.component';
import { ButtonBackComponent } from './component/site/button-back/button-back.component';
import { ContentAboutComponent } from './component/site/content-about/content-about.component';
import { CoreValueComponent } from './component/site/core-value/core-value.component';
import { BannerAboutComponent } from './component/site/banner-about/banner-about.component';
import { BannerRecruitComponent } from './component/site/banner-recruit/banner-recruit.component';
import { ContentRecruitComponent } from './component/site/content-recruit/content-recruit.component';
import { QuestionComponent } from './component/site/question/question.component';
import { FeedbackEmpolyeeComponent } from './component/site/feedback-empolyee/feedback-empolyee.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    HomeComponent,
    ProductDetailComponent,
    ContactComponent,
    AboutComponent,
    RecruitComponent,
    BannerComponent,
    ProductsComponent,
    TechComponent,
    AchievementComponent,
    FeedbackComponent,
    CustomerComponent,
    NewsComponent,
    ContentContactComponent,
    ProductDetailAppComponent,
    ButtonBackComponent,
    ContentAboutComponent,
    CoreValueComponent,
    BannerAboutComponent,
    BannerRecruitComponent,
    ContentRecruitComponent,
    QuestionComponent,
    FeedbackEmpolyeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
