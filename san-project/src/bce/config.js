/**
 * @file file
 * @author Chen Bo(chenbo09@baidu.com)
 * Created on 2018/1/31.
 */

export const tableConf =  {
    schema: [
        {name: 'name', label: '姓名', labelClassName: 'col-name'},
        {
            name: 'age',
            label: '年龄',
            width: 500,
            sortable: true,
            filter: {
                options: [
                    {text: '全部', value: 'foo'},
                    {text: '未审核', value: 'foo1'},
                    {text: '已审核', value: 'foo2'},
                    {text: '已通过', value: 'foo3'}
                ]
            }
        },
        {name: 'gender', label: '性别', sortable: true}
    ],
    cellRenderer(item, key, col, rowIndex) {
        if (key === 'gender') {
            return '<a data-command="DELETE" href="javascript:void(0)">删除</a>';
        }
        return item[key];
    }
}