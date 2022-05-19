import  {_uuid}  from "./uuid.js";
import {_Register}  from "../register.js"

/**
 * @class Link
 */

class Link
{
    constructor(source, destination, line = undefined)
    {
       this.uuid = _uuid.generate();
       /* référence sur les points de connexions*/
       this.source = source;
       this.destination = destination;
       this.line = line;
       this.type = "link";
       _Register.add(this);
    }

    redraw(){
        var source = _Register.find(this.source.ref), destination = _Register.find(this.destination.ref);

        var source_point = source.form.optimalPath(this.line);
        var dest_point = destination.form.optimalPath(this.line);


        if(source_point)
            this.source = source_point;
        if(dest_point)
            this.destination = dest_point;

        this.line.x = this.source.x;
        this.line.y = this.source.y;

        this.line.dest_x = this.destination.x;
        this.line.dest_y = this.destination.y;

        // console.log("c1");
        // console.log(this.line.c1);


        // console.log("c2");
        // console.log(this.line.c2);

        // if(this.source.x != this.line.c1.x && this.destination.y == this.line.c2.y){
        //     console.log("test 1");
        //     // this.line.c0.x = this.source.x;
        //     // this.line.c0.y = (this.destination.y - this.source.y) / 2;
        //     // this.line.c3.x = this.destination.x;
        //     // this.line.c3.y = this.line.c1.y;
            
        //     this.line.redraw();
        // }
        // if(this.source.y == this.line.c1.y && this.destination.y != this.line.c2.y){
        //     console.log("test 2");
        //     this.line.c1.x = this.source.x;
        //     this.line.c1.y = this.line.c2.y;
        //     this.line.redraw();
        // }
        // if(this.source.y != this.line.c1.y && this.destination.y == this.line.c2.y){
        //     console.log("test 3");
        //     this.line.c2.x = this.destination.x;
        //     this.line.c2.y = this.line.c1.y;
        //     this.line.redraw();
        // }

         // var delta_x, delta_y, c1 = {x : 0, y: 0}, c2 = {x : 0, y: 0};

        // delta_x = (this.x > this.dest_x) ? this.x - this.dest_x :  -(this.x - this.dest_x);
        // delta_y = (this.y > this.dest_y) ? this.y - this.dest_y :  -(this.y - this.dest_y);
        

        // delta_x /= 2;
        // c1.x = (this.x < this.dest_x) ? this.x + delta_x : this.x - delta_x;
        // c1.y = this.y;

        // c2.x = (this.dest_x < this.x) ? this.dest_x + delta_x : this.dest_x - delta_x;
        // c2.y = this.dest_y;

        // this.c1 = c1;
        // this.c2 = c2;
        
        this.line.redraw();

    }

}
export {Link};



/***
 *
 *         // var pt = this.source.determine_the_right_point(this.line);


 *         var delta_x, delta_y, c1 = {x : 0, y: 0}, c2 = {x : 0, y: 0};

        delta_x = (this.line.x > this.line.dest_x) ? this.line.x - this.line.dest_x :  -(this.line.x - this.line.dest_x);
        delta_y = (this.line.y > this.line.dest_y) ? this.line.y - this.line.dest_y :  -(this.line.y - this.line.dest_y);

        console.log("delta_x,delta_y")
        console.log(delta_x,delta_y)
        console.log("this.line")
        console.log(this.line)

        // c1.x = (this.line.x > this.line.dest_x) ? this.line.x - delta_x/2 : this.line.x + delta_x/2;
        // c1.y = (this.line.y > this.line.dest_y) ? this.line.y  : this.line.dest_y;

        // c2.x = c1.x;
        // c2.y = -delta_y + c1.y;

        delta_x /= 2;
        c1.x = (this.line.x < this.line.dest_x) ? this.line.x + delta_x : this.line.x - delta_x;
        c1.y = this.line.y;

        c2.x = (this.line.dest_x < this.line.x) ? this.line.dest_x + delta_x : this.line.dest_x - delta_x;
        c2.y = this.line.dest_y;

        console.log('c1')
        console.log(c1)
        console.log('c2')
        console.log(c2)

        this.line.c1 = c1;
        this.line.c2 = c2;

 */