var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var panel;
    (function (panel) {
        var PanelTestSkin = (function (_super) {
            __extends(PanelTestSkin, _super);
            function PanelTestSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [300, 400]);
                this.elementsContent = [this.contentGroup_i()];
                this.states = [
                    new egret.gui.State("normal", [
                    ]),
                    new egret.gui.State("disabled", [
                    ])
                ];
            }
            Object.defineProperty(PanelTestSkin.prototype, "skinParts", {
                get: function () {
                    return PanelTestSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            PanelTestSkin.prototype.buttonDisplay_i = function () {
                var t = new egret.gui.Button();
                this.buttonDisplay = t;
                this.__s(t, ["horizontalCenter", "label", "y"], [0, "按钮", 173]);
                return t;
            };
            PanelTestSkin.prototype.contentGroup_i = function () {
                var t = new egret.gui.Group();
                this.contentGroup = t;
                this.__s(t, ["percentHeight", "percentWidth"], [100, 100]);
                t.elementsContent = [this.buttonDisplay_i(), this.__3_i(), this.labelDisplay_i()];
                return t;
            };
            PanelTestSkin.prototype.labelDisplay_i = function () {
                var t = new egret.gui.Label();
                this.labelDisplay = t;
                this.__s(t, ["horizontalCenter", "text", "textColor", "y"], [0, "标签", 0, 58]);
                return t;
            };
            PanelTestSkin.prototype.__3_i = function () {
                var t = new egret.gui.CheckBox();
                this.__s(t, ["horizontalCenter", "label", "y"], [0, "复选框", 125]);
                return t;
            };
            PanelTestSkin._skinParts = ["buttonDisplay", "labelDisplay", "contentGroup"];
            return PanelTestSkin;
        })(egret.gui.Skin);
        panel.PanelTestSkin = PanelTestSkin;
        PanelTestSkin.prototype.__class__ = "skins.panel.PanelTestSkin";
    })(panel = skins.panel || (skins.panel = {}));
})(skins || (skins = {}));
