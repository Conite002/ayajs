import {_Register}  from "./register.js";
import {_uuid} from "./entities/uuid.js";
import {Factory} from "./factory.js";

class Component
{
    /**
     * 
     * @param {*} type 
     * @param {*} props 
     * @param {*} svg 
     * @param {*} events 
     * @param {*} config 
     */
    constructor( type, props, svg, events, config)
    {
        this.uuid = _uuid.generate();
        this.type = type;
        this.shape = Factory.createForm(this.uuid, type, props, svg, events, config);
        this.shape.draw();
        _Register.add(this);
    }

    move(dx,dy){
        this.shape.x += dx;
        this.shape.y += dy;

        this.shape.redraw();

        var lk = _Register.findAllLink(this);
        
         lk.map((link) => {
            link.redraw();
         });
    }

  /**
   * @description
   * We can build any shape by adding to a basic component a children form.
   * 
   * @param { (Rectangle | Lozenge | Triangle | Circle | Line | Text) } child - This form ( @extend Form) is added 
   * as a child to a component with a form.
   * @param { Function } translate - { parent, child } This function allows us to position the child relative to its parent.
   * @param {Function } rotate  - { parent, child } This function allows us to apply a rotation of the child taking into 
   * account its relative position and the center of rotation.
   */
  addChild(child, translate = null, rotate = null, drawing = true){
    /* resizing and connection to child isn't possible */
    child.vertex = [];
    child.c_points = [];

    if(translate != null){
        child.offsetX = translate.x;
        child.offsetY = translate.y;
    }
    if(rotate != null){
        child.centerX = rotate.x;
        child.centerY = rotate.y;
        child.angle = rotate.angle;
    }       
    if(drawing == true)
        child.draw();
    this.shape.children.push({child});
  }

  remove(){
    this.shape.removeFromDOM();
  }
}
export {Component};