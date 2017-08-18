Ext.define('app.model.schemas.Room', {
    extend: 'app.model.schemas.Base',
    mapping: 'org.takeback.chat.entity.GcRoom',
    name: '房间',
    orderInfo: 'hot desc',
    items: [
        {id: 'id', type: 'string', name: 'ID', display:0},
        {id: 'name', type: 'string', name: '房间名称',allowBlank:false,queryable:true},
        {id: 'catalog', type: 'string', name: '房间分类',allowBlank:false,dic:'dic.chat.roomCata'},
        {id: 'type', type: 'string', name: '游戏类型',allowBlank:false,dic:'dic.chat.gameType'},
        {id: 'owner', type: 'string',allowBlank:false, name: '房主'},
        {id: 'limitNum', type: 'int',allowBlank:false, name: '人数限制'},

        {id: 'shareRate', type: 'int', name: '分成比例'},
        {id: 'sumPool', type: 'double', name: '奖池金额'},
        {id: 'poolAdd', type: 'double', name: '单次累奖'},
        {id: 'feeAdd', type: 'double', name: '单次服务费'},
        {id: 'sumFee', type: 'double', name: '服务费总数'},

        {id: 'hot', type: 'int',allowBlank:false, name: '排序'},
        {id: 'roomimg', type: 'string', name: '图标',dic:'dic.chat.roomLogo'},
        {id: 'psw', type: 'string', name: '密码'},
        {id: 'createdate', type: 'datetime', name: '创建时间'},
        {id: 'status', type: 'string', name: '状态',dic:'dic.chat.roomStatus'},
        {id: 'description', type: 'string', name: '简介',width:"280",colspan:"2"},
        {id: 'detail', type: 'string', name: '详细说明',width:"280",colspan:"3",xType: 'htmleditor'},
    ],
    singleton: true
});