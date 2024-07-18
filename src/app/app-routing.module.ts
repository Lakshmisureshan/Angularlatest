import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCustomerComponent } from './Components/features/customer/list-customer/list-customer.component';
import { AddCustomerComponent } from './Components/features/customer/add-customer/add-customer.component';
import { EditCustomerComponent } from './Components/features/customer/edit-customer/edit-customer.component';
import { ListSupplierComponent } from './Components/features/supplier/list-supplier/list-supplier.component';
import { EditSupplierComponent } from './Components/features/supplier/edit-supplier/edit-supplier.component';
import { AddSupplierComponent } from './Components/features/supplier/add-supplier/add-supplier.component';
import { LoginComponent } from './Components/features/auth/login/login.component';
import { NewRequirementComponent } from './Components/features/new-requirement/new-requirement.component';
import { ListNewrequirementComponent } from './Components/features/new-requirement/list-customerrequirement/list-newrequirement/list-newrequirement.component';
import { FinancedashboardComponent } from './Components/features/financedashboard/financedashboard/financedashboard.component';
import { TestComponent } from './Components/Core/test/test.component';
import { CreateTradeInitiationComponent } from './Components/features/TradeInitiation/create-trade-initiation/create-trade-initiation.component';
import { LinkrendererComponent } from './Components/Core/linkrenderer/linkrenderer/linkrenderer.component';
import { ActiontestComponent } from './Components/features/actiontest/actiontest/actiontest.component';
import { TestdataComponent } from './Components/features/testcom/testdata/testdata.component';
import { ListtradeinitiationComponent } from './Components/features/TradeInitiation/listtradeinitiation/listtradeinitiation.component';
import { EditTradeInitiationComponent } from './Components/features/TradeInitiation/edit-trade-initiation/edit-trade-initiation.component';
import { DashComponent } from './Components/features/dash/dash.component';
import { ProductSalesChartComponent } from './charts/product-sales-chart/product-sales-chart.component';
import { SalesTrafficChartComponent } from './charts/sales-traffic-chart/sales-traffic-chart.component';
import { NotificationlistComponent } from './Components/features/NotificationList/notificationlist/notificationlist.component';
import { TradeContractComponent } from './Components/features/TradeContract/trade-contract/trade-contract.component';
import { ListtradecontractComponent } from './Components/features/TradeContract/trade-contract/Listtradecontract/listtradecontract/listtradecontract.component';
import { FrieghtChargeUpdateComponent } from './Components/features/TradeContract/trade-contract/FrieghtChargeUpdate/frieght-charge-update/frieght-charge-update.component';

const routes: Routes = [
{
  path :'admin/categories',
  component: ListCustomerComponent
  },
  { path: 'dashboard', component: DashComponent },

{
  path :'admin/customer/add',
  component: AddCustomerComponent
 },

 {
  path :'test/testdata',
  component: TestdataComponent
 },
 {
  path :'test/action',
  component: ActiontestComponent
 },



{
path:'trading/listtradingcontract',
component:ListtradecontractComponent


},


{

  path:'trading/FrieghtChargeUpdate/:transactionId',
  component:FrieghtChargeUpdateComponent
},









{
  path:'trading/TradeContract/:tiid/:customerName',
  component:TradeContractComponent
},

{
path:'trade/listtradeinitiation',
component: ListtradeinitiationComponent
},
{
  path:'trade/EditTradeInitiation/:tInitationID',
  component: EditTradeInitiationComponent
},

{
  path:'trade/tradeinitiation/:crid/:customerName',
  component: CreateTradeInitiationComponent
},

 {
  path :'admin/getNewcustomerrequirement',
  component: ListNewrequirementComponent
 },
 {
path:'circle/circle',
component:SalesTrafficChartComponent



 },

 {
  path :'admin/linkrenderer',
  component: LinkrendererComponent
 },


 {
  path:'chart/chart',
  component:ProductSalesChartComponent
 },

{

  path:'NofificationList',
  component:NotificationlistComponent
},











 {
  path :'finance/dashboard',
  component: FinancedashboardComponent
 },
 {
  path :'test/test1',
  component:TestComponent
  },


{
 path :'login',
 component:LoginComponent
 
 
  },
{

  path :'admin/newrequirement',
  component:NewRequirementComponent
},

  
  
   
 


 {
  path :'Admin/customer/:id',
  component: EditCustomerComponent
 },
 {

path :'admin/supplier',
component:ListSupplierComponent


 },

 
 {
  path :'admin/supplier/add',
  component: AddSupplierComponent
 },

 {

  path :'Admin/supplier/:id',
  component:EditSupplierComponent
  
  
   },







];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
