/**
 * Created by icepower on 15/1/12.
 */


class PanelTest extends egret.gui.Panel {
    public constructor() {
        super();
        this.skinName = "skins.panel.PanelTestSkin";
    }

    public labelDisplay:egret.gui.Label;
    public buttonDisplay:egret.gui.Button;

    public partAdded(partName:string, instance:any):void {
        super.partAdded(partName, instance);
        //绑定成功之后为对应的组件赋值
        if (instance == this.labelDisplay) {
            this.labelDisplay.text = "绑定的标签";
        }
        if (instance == this.buttonDisplay) {
            this.buttonDisplay.label = "绑定的按钮"
            //为按钮组件添加触碰事件，同时改变上面文本标签的显示
            this.buttonDisplay.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.buttonTouchEventHandler, this);
            this.buttonDisplay.addEventListener(egret.TouchEvent.TOUCH_END, this.buttonTouchEventHandler, this)
        }
    }

    private buttonTouchEventHandler(e:egret.TouchEvent):void {
        if (e.type == egret.TouchEvent.TOUCH_BEGIN && this.labelDisplay) {
            this.labelDisplay.text = "按钮按下";
        } else if (e.type == egret.TouchEvent.TOUCH_END && this.labelDisplay) {
            this.labelDisplay.text = "按钮松起";
        }
    }
}