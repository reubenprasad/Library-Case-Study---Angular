import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AuthComponent } from './auth/auth.component';
import { AuthdescComponent } from './authdesc/authdesc.component';
import { BookdescComponent } from './bookdesc/bookdesc.component';
import { BooksComponent } from './books/books.component';
import { EditbookComponent } from './editbook/editbook.component';
import { SignupComponent } from './signup/signup.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FileUploadModule, FileSelectDirective } from 'ng2-file-upload';
import { MsgserviceService } from './msgservice.service';
@NgModule({
  declarations: [
    AppComponent,
    AddbookComponent,
    AuthComponent,
    AuthdescComponent,
    BookdescComponent,
    BooksComponent,
    EditbookComponent,
    SignupComponent,
    UpdatebookComponent,
    LoginComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FileUploadModule
  ],
  providers: [MsgserviceService,FileSelectDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
