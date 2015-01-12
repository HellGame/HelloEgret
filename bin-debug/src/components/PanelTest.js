/**
 * Created by icepower on 15/1/12.
 */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var PanelTest = (function (_super) {
    __extends(PanelTest, _super);
    function PanelTest() {
        _super.call(this);
        this.skinName = "skins.panel.PanelTestSkin";
    }
    PanelTest.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        //绑定成功之后为对应的组件赋值
        if (instance == this.labelDisplay) {
            this.labelDisplay.text = "绑定的标签";
        }
        if (instance == this.buttonDisplay) {
            this.buttonDisplay.label = "绑定的按钮";
            //为按钮组件添加触碰事件，同时改变上面文本标签的显示
            this.buttonDisplay.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.buttonTouchEventHandler, this);
            this.buttonDisplay.addEventListener(egret.TouchEvent.TOUCH_END, this.buttonTouchEventHandler, this);
        }
    };
    PanelTest.prototype.buttonTouchEventHandler = function (e) {
        if (e.type == egret.TouchEvent.TOUCH_BEGIN && this.labelDisplay) {
            this.labelDisplay.text = "按钮按下";
        }
        else if (e.type == egret.TouchEvent.TOUCH_END && this.labelDisplay) {
            this.labelDisplay.text = "按钮松起";
        }
    };
    return PanelTest;
})(egret.gui.Panel);
PanelTest.prototype.__class__ = "PanelTest";
