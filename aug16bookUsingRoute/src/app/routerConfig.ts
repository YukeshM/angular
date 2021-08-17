import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AddBookComponent } from "./components/add-book/add-book.component";
import { DisplayBookComponent } from "./components/display-book/display-book.component";

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'add-book',
        component: AddBookComponent
    },
    {
        path: 'display-book',
        component: DisplayBookComponent
    }
];
export default appRoutes;