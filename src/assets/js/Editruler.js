const EditRulers = {
  time: [
    { required: true, message: '日期不能为空', trigger: 'blur' }
  ],
  title: [
    { required: true, message: '标题不能为空', trigger: 'blur' }
  ],
  important: [
    { required: true, message: '重要性不能为空', trigger: 'blur' }
  ],
  context: [
    { required: true, message: '内容不能为空', trigger: 'blur' }
  ]
}
export {
  EditRulers
}
