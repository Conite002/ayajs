import { _uuid } from "./uuid";
import { _Register } from "../register";
import { EventManager } from "../eventManager";
import {events} from "../events";
import { FactoryForm } from "../factoryForm";
import { Point } from "./point";


/**
 * @class Line
 */

class Line 
{
    /**
     * 
     * @param {string} uuid 
     * @param {number} x 
     * @param {number} y 
     * @param {number} dest_x 
     * @param {number} dest_y 
     * @param {array of object} children 
     * @param {object} ratio 
     */

    constructor(uuid, x=0, y=0, dest_x = x, dest_y = y, children = [], ratio = {}){

        this.uuid = uuid;

        this.x = x;
        this.y = y;
        
        this.dest_x = dest_x;
        this.dest_y = dest_y;

        this.events = new EventManager();

        //points d'inflexion

        // this.c0 = { x : this.x, y : this.y};
        this.c1 = { x : this.x, y : this.y};
        this.c2 = { x : this.x, y : this.y};
        // this.c3 = { x : this.x, y : this.y};

        this.c_svg = "";
        this.type = "line";

        this.ratio = ratio;
        this.children = [];

        this.a = (this.dest_y - this.y) / (this.dest_x - this.x);
        this.b = this.y - this.a * this.x;
        this.m = -1/this.a;

        this.vertex = [
            new Point(this.uuid, 0, 0),
            new Point(this.uuid, 0, 0),
        ];

        this.createChildren(children);
    }

    drawVertex(){
        this.vertex[0].x = this.x;
        this.vertex[0].y = this.y;

        this.vertex[1].x = this.dest_x;
        this.vertex[1].y = this.dest_y;
    }

    draw(svgs){

        const ns = "http://www.w3.org/2000/svg";
        this.c_svg = document.createElementNS(ns,'path');

        var p = "M "+  this.x + ","+ this.y + " "+  " L" + this.c1.x + "," + this.c1.y + "  L" + this.c2.x + "," + this.c2.y + "  L" + this.dest_x  + "," + this.dest_y;

        this.c_svg.setAttribute("id", this.uuid);
        this.c_svg.setAttribute("d", p);
        this.c_svg.setAttribute("fill", "none");
        this.c_svg.setAttribute("stroke", "indigo");
        this.c_svg.setAttributeNS(null, "stroke-width", "2px");

        svgs.appendChild(this.c_svg);

        this.drawVertex();

        this.vertex.map( (vertex) => {
            vertex.draw(svgs);
        });

        this.children.map((child) => {
            child.draw(svgs);
        });

        this.events.add(this.c_svg, "mousedown", events.mouseDownCb);

        this.events.create();
    }

    shift(dx,dy){
        this.x += dx;
        this.y += dy;
        this.c1.x += dx;
        this.c1.y += dy;
        this.c2.x += dx;
        this.c2.y += dy;
        this.dest_x += dx;
        this.dest_y += dy;
    }

    redraw(){

       
        this.drawVertex();
        this.vertex.map( (vertex) => {
            vertex.redraw();
        });

        this.children.map( (child) => {
            child.redraw();
        })

        if(this.y == this.c1.y && this.dest_y == this.c2.y){
            // this.c1.x = this.x;
            // this.c1.y = this.dest_y > this.y ? (this.dest_y - this.y) / 2 : (this.y - this.dest_y);
            // this.c2.x = this.dest_x;
            // this.c2.y = this.c1.y;
        }
        var p = "M "+  this.x + ","+ this.y + " "+  " L" + this.c1.x + "," + this.c1.y + "  L" + this.c2.x + "," + this.c2.y + "  L" + this.dest_x  + "," + this.dest_y;
        this.c_svg.setAttribute("d", p);
    }

    resize(pos, dx, dy, param = {}){

        if(pos == 0){
            this.x += dx;
            this.y += dy;
            this.c1.x += dx;
            this.c1.y += dy;
            this.c2.x += dx;
            this.c2.y += dy;
        }
        else{
            this.dest_x += dx;
            this.dest_y += dy;
        }
        this.children.map( (child) => {
            child.resize(pos, dx, dy, {x: this.x, y: this.y, dest_x: this.dest_x, dest_y: this.dest_y, a: this.a, m: this.m, c: this.c})
        });
    }


    createChildren(children){
        children.map((chd) => {
            if(chd.type == "triangle" && chd.ratio.end == true){
                this.c = this.dest_y - this.m * this.dest_x;
                var _x1, _y1, _x2, _y2, _x3, _y3;
                if(this.a == 0){
                    console.log("this.a == 0");
                    _x1 = this.dest_x;
                    _y1 = this.dest_y - 5;
                    
                    _x2 = this.dest_x + 10;
                    _y2 = this.dest_y;

                    _x3 = _x1;
                    _y3 = _y1 + 10;
                }
                else{
                    console.log("this.a != 0");
                    _x1 = this.m < 0 ? this.dest_x - 3 : this.dest_x + 3;
                    _y1 = this.m * _x1 + this.c;
    
                    _x2 = this.dest_x + 10;
                    _y2 = this.a * _x2 + this.b;
    
                    _x3 = this.m < 0 ? this.dest_x + 3 : this.dest_x - 3;
                    _y3 = this.m * _x3 + this.c;
                }

                

                var child = FactoryForm.createForm(this.uuid, chd.type, {x1: _x1, y1: _y1, x2: _x2, y2: _y2, x3: _x3, y3: _y3}, [], chd.ratio, chd.zoom);
                this.children.push(child);
            }
            else if(chd.type == "triangle" && chd.ratio.start == true){
                this.c = this.y - this.m * this.x;
                var _x1, _y1, _x2, _y2, _x3, _y3;
                if(this.a == 0){
                    console.log("this.a == 0");
                    _x1 = this.x;
                    _y1 = this.y - 5;
                    
                    _x2 = this.x - 10;
                    _y2 = this.y;

                    _x3 = _x1;
                    _y3 = _y1 + 10;
                }
                else{
                    console.log("this.a != 0");
                    _x1 = this.m < 0 ? this.x - 3 : this.x + 3;
                    _y1 = this.m * _x1 + this.c;
    
                    _x3 = this.m < 0 ? this.x + 3 : this.x - 3;
                    _y3 = this.m * _x3 + this.c;

                    _x2 = this.x - 10;
                    _y2 = this.a * _x2 + this.b;
                }

                var child = FactoryForm.createForm(this.uuid, chd.type, {x1: _x1, y1: _y1, x2: _x2, y2: _y2, x3: _x3, y3: _y3}, [], chd.ratio, chd.zoom);
                this.children.push(child);
            }
        });
    }
}
export {Line};
 




/**
 *      // var p = _Register.find(this.parent);

        // if(Object.keys(param).length > 0){
        //     if( pos == 0){
        //         var c_p = p.form.c_points[pos];
    
        //         // vertical line
        //         if( this.x == this.dest_x && this.y != this.dest_y){
        //             if( (this.y - c_p.y) <   (this.dest_y - c_p.y)){
        //                 this.y += dy;
        //             }
        //             else{
        //                 this.dest_y += -dy;
        //             }
        //         }
    
        //         // horizontal line
        //         else if( this.y == this.dest_y && this.x != this.dest_x){
        //             if(  (this.x - c_p.x) <   (this.dest_x - c_p.x)  ){
    
        //                 this.x += dx;
        //             }
        //             else{
        //                 this.dest_x += dx;
        //             }
        //         }
        //         else{
    
        //         }
    
        //     }
        //     else if(pos == 1){
        //         var c_p = p.form.c_points[pos];
    
        //         // vertical line
        //         if( this.x == this.dest_x && this.y != this.dest_y){
        //             if(  ( this.y - c_p.y  ) <= ( this.dest_y - c_p.y) ){
        //                 this.y += dy;
        //             }
        //             else{
        //                 this.dest_y += -dy;
        //             }
        //         }
        //         // horizontal line
        //         else if( this.y == this.dest_y && this.x != this.dest_x){
        //             if( ( c_p.x - this.x) <= ( c_p.x - this.dest_x) ){
    
        //                 this.x += dx;
        //             }
        //             else{
        //                 this.dest_x += dx;
        //             }
        //         }
        //         else{
    
        //         }
    
        //     }
        //     else if(pos == 2){
        //         var c_p = p.form.c_points[pos];
    
        //         // vertical line
        //         if( this.x == this.dest_x && this.y != this.dest_y){
        //             if(  ( c_p.y - this.y ) <= ( c_p.y - this.dest_y ) ){
        //                 this.y += dy;
        //             }
        //             else{
        //                 this.dest_y += dy;
        //             }
        //         }
        //         // horizontal line
        //         else if( this.y == this.dest_y && this.x != this.dest_x){
        //             if( ( c_p.x - this.x) <= ( c_p.x - this.dest_x) ){
    
        //                 this.x += dx;
        //             }
        //             else{
        //                 this.dest_x += dx;
        //             }
        //         }
        //         else{
    
        //         }
    
        //     }
        //     else if(pos == 3){
        //         var c_p = p.form.c_points[pos];
    
        //         // vertical line
        //         if( this.x == this.dest_x && this.y != this.dest_y){
        //             if(  ( c_p.y - this.y ) <= ( c_p.y - this.dest_y ) ){
        //                 this.y += dy;
        //             }
        //             else{
        //                 this.dest_y += dy;
        //             }
        //         }
        //         // horizontal line
        //         else if( this.y == this.dest_y && this.x != this.dest_x){
        //             if( ( this.x - c_p.x ) <= ( this.dest_x - c_p.x) ){
    
        //                 this.x += dx;
        //             }
        //             else{
        //                 this.dest_x += dx;
        //             }
        //         }
        //         else{
    
        //         }
        //     }
        // }

 */