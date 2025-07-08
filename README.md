Standalone Components  : Building components without @NgModule

# What are "Standalone Components" ?

- Standalone components are regular Angular components with one important twist : They dont require @NgModule as a wrapper
- Instead, you can use them, well, 'standalone'. they define their own dependencies and can be imported and used anywhere.

- It's also  not just "standalone components", but also "standalone directives" and standalone pipes

# problem with standard app

- There is quite lot of boilerplate code you need to write

There are 5 arrays need to declare inside the @NgModule directive

@NgModule({
    declarations : [AppComponent, WelcomeComponent, DetailsComponent],
    imports: [BrowserModule, SharedModule],
    providers : [],
    exports : [],
    bootstrap: [AppComponent]
})

- you could mix standalone + ngModule

# Conversions Standard component to Standalone component

- converting DetailsComponent Component to Standalone component
Step 1 : add standalone : true

@Component({
   standalone : true,
   selector: 'app-module',
   templateUrl: './.component.html',
   styleUrls: './component.css'
})

Step 2 : remove DetailsComponent from @NgModule , declarations array

@NgModule({
    declarations: [AppComponent, WelcomeComponent]
})

Step 3: now DetailsComponent becomes Standalone component, and WelcomeComponent is using it, There is also need to make change in WelcomeComponent to points to it

@Component({
    imports: [DetailsComponent] 
    templateUrl:'./html',
    styleUrl: './.css',
    selector: 'app-welcome'
})
- But it would gives error, bcz for this WelcomeComponent should also a Standalone component. 

Step 4 - for now Add DetailsComponent inside the imports array of @NgModule

@NgModule({
    imports : [sharedModule, browserModule, DetailsComponent]
})

# Twist : Migrating Root Component 
- what will happen if you migrate AppComponent ?

@Component({
    standalone : true
})

- remove it from @NgModule - declarations array 

- Also need to change in main.ts

EARLIER

platformBrowserDynamic().bootstrapModule(AppModule).catch(err=>console.err(err));

NOW

- Remove the above line and use bootstrapApplication()

import { bootstrapApplication } from '@angular/platform-browser';
bootstrapApplication(AppComponent);

- you woudl also not need app.module.ts file anymore - remove it

# Lazy loading for a specific component 

Earlier if we want to perform lazy loading, then would need to call whole module using 'loadChildern'
Now you could load individual component lazyily , Only present in Standalone component.

