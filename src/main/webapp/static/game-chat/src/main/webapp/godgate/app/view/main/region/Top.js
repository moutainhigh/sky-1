/**
 * 系统主页的顶部区域，主要放置系统名称，菜单，和一些快捷按钮
 */
Ext.define('app.view.main.region.Top', {

    extend: 'Ext.toolbar.Toolbar',

    alias: 'widget.maintop', // 定义了这个组件的xtype类型为maintop

    requires: [
        'app.view.frame.AboutWindow'
    ],

    style: 'background-color:#99bbe8;',
    height: 80,
    initComponent: function () {
        this.callParent();
        setInterval(function(){
            Ext.Ajax.request({
                url: '/lottery/adminInfo',
                success: function (res) {
                    var respText = Ext.util.JSON.decode(res.responseText);
                    var num_withdraw = this.document.getElementById("num_with_draw");
                    num_withdraw.innerHTML =respText.body.withdraw;
                    var num_online   = this.document.getElementById("num_online");
                    num_online.innerHTML =respText.body.online;
                    var num_recharge   = this.document.getElementById("num_recharge");
                    num_recharge.innerHTML =respText.body.recharge;
                }
            })
        },40000);
    },
    items: [{
        xtype: 'image',
        bind: { // 数据绑定到MainModel中data的ystem.iconUrl
            hidden: '{!system.iconUrl}', // 如果system.iconUrl未设置，则此image不显示
            src: '{system.iconUrl}' // 根据system.iconUrl的设置来加载图片
        }
    }, {
        xtype: 'label',
        bind: {
            text: '{system.name}' // text值绑定到system.name
        },
        style: 'font-size : 20px; color : blue;'
    }, {
        xtype: 'label',
        bind: {
            text: ''
        }
    },{
        xtype: 'label',
        html:'<div style="margin-left: 110px;margin-top:40px;">共有<span id="num_with_draw" style="color:firebrick;font-size: 18px;">-</span>笔提现请求、<span id="num_recharge" style="color:firebrick;font-size: 18px;">-</span>比充值请求未处理,当前在线人数<span id="num_online" style="color:green;font-size: 18px;">-</span>人</div>'
    },
        '->', {
            text: '关于',
            handler: function (button) {
                Ext.create('app.view.frame.AboutWindow').show();
            }
        }, {
            text: '注销',
            handler: function () {
                Ext.Ajax.request({
                    url: '/logout',
                    callback: function () {
                        window.location.reload();
                    }
                })
            }
        }]

});