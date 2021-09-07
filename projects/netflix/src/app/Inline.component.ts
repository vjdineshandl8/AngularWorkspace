import { Component } from "@angular/core";

@Component({
selector:'app-header',
template:`<div>{{title}}</div>`,
styles:['div{background-color:red}']
})

export class InlineComponent
{
    title = "Welcome to inline";
}