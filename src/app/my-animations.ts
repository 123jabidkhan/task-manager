import { trigger,transition,query,style,animate,group } from "@angular/animations";

export const fadeAnimation = 
 trigger("routerAnimations",[
     transition("* <=> *",[
         query(":enter,:'leave",
         style({position:'absolute',width:'98%'}),
         {optional:true}),

         group([

             query(":enter",[
                 style({opacity:0}),
                 animate("2s",style({opacity:'1'}))
             ],{optional:true}),

             query(":enter",[
                style({opacity:1}),
                animate("0.6s",style({opacity:'0'}))
            ],{optional:true})

         ])
     ])
 ]);