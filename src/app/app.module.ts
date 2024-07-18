import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

import { MatGridListModule } from '@angular/material/grid-list';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';

import { MatMenuModule } from '@angular/material/menu';
import { NavbarComponent } from './Components/Core/navbar/navbar/navbar.component';
import { ListCustomerComponent } from './Components/features/customer/list-customer/list-customer.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AddCustomerComponent } from './Components/features/customer/add-customer/add-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListSupplierComponent } from './Components/features/supplier/list-supplier/list-supplier.component';
import { EditCustomerComponent } from './Components/features/customer/edit-customer/edit-customer.component';
import { EditSupplierComponent } from './Components/features/supplier/edit-supplier/edit-supplier.component';
import { AddSupplierComponent } from './Components/features/supplier/add-supplier/add-supplier.component';
import { NewRequirementComponent } from './Components/features/new-requirement/new-requirement.component';
import { LoginComponent } from './Components/features/auth/login/login.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ListProductComponent } from './Components/features/Product/list-product/list-product.component';
import { AgGridModule } from 'ag-grid-angular';
import { ListNewrequirementComponent } from './Components/features/new-requirement/list-customerrequirement/list-newrequirement/list-newrequirement.component'; 
import { AuthInterceptor } from './Components/Core/interceptors/auth.interceptor';
import { FinancedashboardComponent } from './Components/features/financedashboard/financedashboard/financedashboard.component';
import { PopupComponent } from './Components/Core/popup/popup/popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TestComponent } from './Components/Core/test/test.component';
import { NotificationIconComponent } from './Components/Core/notification/notification-icon/notification-icon.component';
import { ColoredboxComponent } from './Components/Core/coloredbox/coloredbox/coloredbox.component';

import { MatCardModule } from '@angular/material/card';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CreateTradeInitiationComponent } from './Components/features/TradeInitiation/create-trade-initiation/create-trade-initiation.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { LinkrendererComponent } from './Components/Core/linkrenderer/linkrenderer/linkrenderer.component';
import { LinkrenderercustomerComponent } from './Components/Core/linkrenderercustomer/linkrenderercustomer/linkrenderercustomer.component';
import { SuppliercelleditorcomponentComponent } from './Components/features/suppliercelleditor/suppliercelleditorcomponent/suppliercelleditorcomponent.component';
import { TestdataComponent } from './Components/features/testcom/testdata/testdata.component';
import { ActiontestComponent } from './Components/features/actiontest/actiontest/actiontest.component';
import { ListtradeinitiationComponent } from './Components/features/TradeInitiation/listtradeinitiation/listtradeinitiation.component';
import { TInitiationLinkRendererComponent } from './Components/features/TradeInitiation/TLinkRenderer/tinitiation-link-renderer/tinitiation-link-renderer.component';
import { EditTradeInitiationComponent } from './Components/features/TradeInitiation/edit-trade-initiation/edit-trade-initiation.component';
import { Popupcom1Component } from './Components/Core/popupcom1/popupcom1.component';
import { NgChartsModule } from 'ng2-charts';
import { DashComponent } from './Components/features/dash/dash.component';
import { CardComponent } from './Components/features/card/card.component';
import { ProductSalesChartComponent } from './charts/product-sales-chart/product-sales-chart.component';
import { SalesTrafficChartComponent } from './charts/sales-traffic-chart/sales-traffic-chart.component';
import { OrdersTableComponent } from './orders-table/orders-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MiniCardComponent } from './Components/features/minicard/mini-card/mini-card.component';

import { MatBadgeModule } from '@angular/material/badge';
import { NotificationlistComponent } from './Components/features/NotificationList/notificationlist/notificationlist.component';
import { TradeContractComponent } from './Components/features/TradeContract/trade-contract/trade-contract.component';
import { ListTradeInitiationButtonRenderComponent } from './Components/features/TradeInitiation/ListTradeInitiationButtonRender/list-trade-initiation-button-render/list-trade-initiation-button-render.component';
import { ListtradecontractComponent } from './Components/features/TradeContract/trade-contract/Listtradecontract/listtradecontract/listtradecontract.component';
import { BtncellrenderComponent } from './Components/features/TradeContract/buttoncellrenderer/btncellrender/btncellrender.component';
import { FrieghtChargeUpdateComponent } from './Components/features/TradeContract/trade-contract/FrieghtChargeUpdate/frieght-charge-update/frieght-charge-update.component';
import { ButtoncellrenderderfrieghtupdateComponent } from './Components/features/TradeContract/trade-contract/buttoncellrenderderfrieghtupdate/buttoncellrenderderfrieghtupdate/buttoncellrenderderfrieghtupdate.component';



@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
      ListCustomerComponent,
      AddCustomerComponent,
      ListSupplierComponent,
      EditCustomerComponent,
      EditSupplierComponent,
      AddSupplierComponent,
      NewRequirementComponent,
      LoginComponent,
      ListProductComponent,
      ListNewrequirementComponent,
      FinancedashboardComponent,
      PopupComponent,
      TestComponent,
      NotificationIconComponent,
      ColoredboxComponent,
      CreateTradeInitiationComponent,
      LinkrendererComponent,
      LinkrenderercustomerComponent,
      SuppliercelleditorcomponentComponent,
      TestdataComponent,
      ActiontestComponent,
      ListtradeinitiationComponent,
      TInitiationLinkRendererComponent,
      EditTradeInitiationComponent,
      Popupcom1Component,
      DashComponent,
      CardComponent,
      ProductSalesChartComponent,
      SalesTrafficChartComponent,
      OrdersTableComponent,
      MiniCardComponent,
      NotificationlistComponent,
      TradeContractComponent,
      ListTradeInitiationButtonRenderComponent,
      ListtradecontractComponent,
      BtncellrenderComponent,
      FrieghtChargeUpdateComponent,
      ButtoncellrenderderfrieghtupdateComponent,
    
     
    
  ],
  imports: [
   
    MatGridListModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatNativeDateModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
   
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,MatMenuModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    AgGridModule,
    MatDialogModule,
   
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    NgxMatSelectSearchModule,
    NgChartsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatBadgeModule
  ],
  providers: [

{
provide:HTTP_INTERCEPTORS,
useClass:AuthInterceptor,
multi:true
}],



 
  bootstrap: [AppComponent]
})
export class AppModule { }
