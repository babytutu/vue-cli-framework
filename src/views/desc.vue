<template>
  <div>
    <h4>Slots</h4>
    <tableModel :data="slotDesc"></tableModel>
    <h4>Props</h4>
    <tableModel :data="modelDesc"></tableModel>
    <h4>Data参数说明</h4>
    <tableModel :data="dataDesc">
      <template slot="table-left">
        <el-table-column type="expand">
          <template slot-scope="props"
                    v-if="props.row.expend">
            <tableModel :data="props.row.expend"></tableModel>
          </template>
        </el-table-column>
      </template>
    </tableModel>
  </div>
</template>
<script>
export default {
  data () {
    return {
      slotDesc: {
        list: [{
          name: 'search-start',
          desc: '搜索开始',
        },
        {
          name: 'search-end',
          desc: '搜索结束',
        },
        {
          name: 'table-left',
          desc: '表格插入前N列',
        },
        {
          name: 'table-right',
          desc: '表格插入后N列',
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
      modelDesc: {
        list: [{
          name: 'data',
          desc: '表单表格信息',
          type: 'Object',
          default: '-'
        },
        {
          name: 'height',
          desc: '搜索区域高度',
          type: 'String',
          default: '110'
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
          name: 'selection',
          desc: '表格操作列',
          type: 'Boolean',
          default: 'false'
        },
        {
          name: 'multipleSelection',
          desc: '选中的列数',
          type: 'Array',
          default: '-'
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
          name: 'pageSizes',
          desc: '分页默认参数',
          type: 'Array',
          default: '[10, 20, 30, 40]'
        },
        {
          name: 'formName',
          desc: '组件内表单名称',
          type: 'String',
          default: 'table-model-searchForm'
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
