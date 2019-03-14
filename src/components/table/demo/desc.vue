<template>
  <div>
    <h4>Table Slots</h4>
    <tableModel :list="slotDesc.table" :header="slotDesc.header"></tableModel>
    <h4>Table Props</h4>
    <tableModel :list="tableDesc.list" :header="tableDesc.header"></tableModel>
    <h4>Form Slots</h4>
    <tableModel :list="slotDesc.form" :header="slotDesc.header"></tableModel>
    <h4>Form Props</h4>
    <tableModel :list="formDesc.list" :header="formDesc.header"></tableModel>
  </div>
</template>
<script>
export default {
  data () {
    return {
      slotDesc: {
        table: [
          {
            name: 'left',
            desc: '表格插入前N列',
          },
          {
            name: 'right',
            desc: '表格插入后N列',
          },
        ],
        form: [
          {
            name: 'start',
            desc: '搜索开始',
          },
          {
            name: 'end',
            desc: '搜索结束',
          },
          {
            name: 'button-left',
            desc: '按钮左侧',
          },
          {
            name: 'button-right',
            desc: '按钮右侧',
          },
          {
            name: 'right',
            desc: '表单右侧',
          },
        ],
        header: [{
          label: '名称',
          key: 'name',
        },
        {
          label: '说明',
          key: 'desc',
        },
        ],
      },
      tableDesc: {
        list: [
          {
            name: 'formData',
            desc: '分页相关信息',
            type: 'Object',
            default: JSON.stringify({
              total: 100,
              current: 1,
              pagesize: 10
            }),
          },
          {
            name: 'list',
            desc: '列表信息',
            type: 'Object',
            default: JSON.stringify([{
              key: '表头名称对应值'
            }])
          },
          {
            name: 'header',
            desc: '表头信息',
            type: 'Array',
            default: JSON.stringify([{
              label: '表头名称', key: 'key'
            }]),
          },
          {
            name: 'selection',
            desc: '是否含表格操作列',
            type: 'Boolean',
            default: 'false'
          },
          {
            name: 'multipleSelection',
            desc: '选中的列数',
            type: 'Array',
            default: '[]'
          },
          {
            name: 'pageSizes',
            desc: '分页默认参数',
            type: 'Array',
            default: '[10, 20, 30, 40]'
          },
        ],
        header: [{
          label: '名称',
          key: 'name',
        },
        {
          label: '说明',
          key: 'desc',
        },
        {
          label: '类型',
          key: 'type',
        },
        {
          label: '默认值',
          key: 'default',
        },
        ],
      },
      formDesc: {
        list: [
          {
            name: 'formData',
            desc: '表格数据对象',
            type: 'Object',
            default: JSON.stringify({
              name: 'hello'
            })
          },
          {
            name: 'form',
            desc: '表单内容',
            type: 'Array',
            default: JSON.stringify({
              placeholder: '请输入姓名',
              label: '姓名',
              key: 'name',
              type: 'input',
              maxlength: 10,
              rules: [
                { required: true, message: '姓名不能为空' },
              ]
            },)
          },
          {
            name: 'labelWidth',
            desc: 'label宽度',
            type: 'String',
            default: '80px'
          },
          {
            name: 'inline',
            desc: '单行表单',
            type: 'Boolean',
            default: 'false'
          },
          {
            name: 'buttonText',
            desc: '表单中左侧按钮名称',
            type: 'String',
            default: '查询'
          },
          {
            name: 'resetText',
            desc: '表单重置按钮名称',
            type: 'String',
            default: '重置'
          },
          {
            name: 'formName',
            desc: '组件内表单名称',
            type: 'String',
            default: 'form-model-searchForm'
          },
          {
            name: 'insideBtn',
            desc: '底部按钮在form内，左对齐',
            type: 'Boolean',
            default: 'true'
          },
          {
            name: 'reset',
            desc: '是否重置表单，对话框中的表单使用',
            type: 'Boolean',
            default: 'false'
          },
        ],
        header: [{
          label: '名称',
          key: 'name',
        },
        {
          label: '说明',
          key: 'desc',
        },
        {
          label: '类型',
          key: 'type',
        },
        {
          label: '默认值',
          key: 'default',
        },
        ],
      },
      dataDesc: {
        list: [{
          name: 'list',
          desc: '表格数组',
          type: 'Array',
          default: '-',
        },
        {
          name: 'formData',
          desc: '查询条件',
          type: 'Object',
          default: '-'
        },
        {
          name: 'form',
          desc: '表单数组',
          type: 'Array',
          default: '-',
          expend: {
            list: [{
              name: 'placeholder',
              desc: '提示语',
              type: 'String',
              default: '-',
            },
            {
              name: 'label',
              desc: '标签文案',
              type: 'String',
              default: '-'
            },
            {
              name: 'key',
              desc: '表单字段名',
              type: 'String',
              default: '-'
            },
            {
              name: 'type',
              desc: '表单类型，input，radio等',
              type: 'String',
              default: 'input'
            },
            {
              name: 'maxlength',
              desc: '最大长度限制',
              type: 'Number',
              default: 32
            },
            {
              name: 'rules',
              desc: '正则规则',
              type: 'Array',
              default: ''
            },
            ],
            header: [{
              label: '名称',
              key: 'name',
            },
            {
              label: '说明',
              key: 'desc',
            },
            {
              label: '类型',
              key: 'type',
            },
            {
              label: '默认值',
              key: 'default',
            },
            ],
          },
        },
        {
          name: 'header',
          desc: '表格的表头数组',
          type: 'Array',
          default: '-',
          expend: {
            list: [{
              name: 'label',
              desc: '表头文案',
              type: 'String',
              default: '-'
            },
            {
              name: 'key',
              desc: '对应表格数据',
              type: 'String',
              default: '-'
            },
            ],
            header: [{
              label: '名称',
              key: 'name',
            },
            {
              label: '说明',
              key: 'desc',
            },
            {
              label: '类型',
              key: 'type',
            },
            {
              label: '默认值',
              key: 'default',
            },
            ],
          },
        },
        ],
        header: [{
          label: '名称',
          key: 'name',
        },
        {
          label: '说明',
          key: 'desc',
        },
        {
          label: '类型',
          key: 'type',
        },
        {
          label: '默认值',
          key: 'default',
        },
        ],
      },
    }
  },
}
</script>
