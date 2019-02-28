<template>
  <tableModel :data="form" @change="saveForm" :inline="false" buttonText="保存"></tableModel>
</template>
<script>
export default {
  data () {
    return {
      form: {
        formData: {
          input: 180,
          select: '',
          radio: 3,
          checkbox: [],
          switch: false,
        },
        form: [
          {
            placeholder: '请输入总数',
            label: '输入框',
            key: 'input',
            type: 'input',
            maxlength: 10
          },
          {
            label: '单选框',
            key: 'radio',
            type: 'radio',
            list: [
              {
                value: 1,
                label: '选项1'
              },
              {
                value: 2,
                label: '选项2'
              },
              {
                value: 3,
                label: '选项3'
              },
            ]
          },
          {
            placeholder: '请选择',
            label: '下拉菜单',
            key: 'select',
            type: 'select',
            list: [
              {
                value: 1,
                label: '选项1'
              },
              {
                value: 2,
                label: '选项2'
              },
              {
                value: 3,
                label: '选项3'
              },
            ]
          },
          {
            label: '多选框',
            key: 'checkbox',
            type: 'checkbox',
            list: [
              {
                value: 1,
                label: '选项1'
              },
              {
                value: 2,
                label: '选项2'
              },
              {
                value: 3,
                label: '选项3'
              },
            ]
          },
          {
            type: 'switch',
            key: 'switch',
            label: '开关'
          }
        ],
        rules: {
          input: [
            { required: true, message: '不能为空' },
          ]
        },
      },
    }
  },
  methods: {
    /**
     * 保存表单信息
     */
    saveForm () {
      console.log(this.form.formData)
    }
  },
}
</script>
