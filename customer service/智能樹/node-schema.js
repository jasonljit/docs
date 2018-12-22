// 選項
node = {
	_id,
	title: '',
	description: '您的問題是？',
	type: 'options',
	childIds: [],
	properties: ["contact_cs"],
	status: 'active',

	metadata: {},
}

// 拉選項 node 時，還要把 child nodes 都拉出來（顯示 title）
// 添加選項的時候 create child node
// 刪除選項時，刪除整棵樹

// 答案
node = {
	_id,
	title: '',
	description: '',
	type: 'answer',
	childIds: [],
	properties: ["contact_cs"],
	status: 'active',

	metadata: {
		fields: [{
			type: 'textArea',
			content: '...',
		}, {
			type: 'image',
			src: 'IMAGE_PATH',
		}]
	}
}

// 表單
node = {
	_id,
	title: '',
	description: '',
	type: 'form',
	childIds: [],
	properties: ["contact_cs"],
	status: 'active',

	metadata: {
		inputs: [{
			type: 'text',
			name: 'input_1',
			title: '您的電子信箱',
			placeHolder: '請輸入信箱',
			required: true,
		}, {
			type: 'radio',
			name: 'input_2',
			title: '您的性別',
			values: ['男', '女'],
			required: true,
		}, {
			type: 'checkbox',
			name: 'input_3',
			title: '從哪得知消息',
			values: ['報章雜誌', '親友介紹', '網路廣告'],
			required: false,
		}, {
			type: 'image',
			name: 'input_4',
			title: '上傳問題截圖',
			required: false,
		}],
	},
}
