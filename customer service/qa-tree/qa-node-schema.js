// 選項
QANode = {
	_id,
	title: '',
	description: '您的問題是？',
	type: 'options',
	childIds: [],					// 根節點不會有 parentId
	status: 'active',

	content: {},
}

// 答案
QANode = {
	_id,
	title: '帳戶問題',
	description: '',
	type: 'answer',
	parentId,
	childIds: [],
	status: 'active',

	content: {
		fields: [{
			type: 'text',
			content: '...',
		}, {
			type: 'image',
			url: 'IMAGE_PATH',
		}]
	}
}

// 表單
QANode = {
	_id,
	title: '充值問題',
	description: '',
	type: 'form',
	parentId,
	childIds: [],
	status: 'active',

	content: {
		tagId,
		inputs: [{
			type: 'text',
			title: '您的電子信箱',
			placeHolder: '請輸入信箱',
			required: true,
		}, {
			type: 'radio',
			title: '您的性別',
			values: ['男', '女'],
			required: true,
		}, {
			type: 'checkbox',
			title: '從哪得知消息',
			values: ['報章雜誌', '親友介紹', '網路廣告'],
			required: true,
		}, {
			type: 'image',
			title: '上傳問題截圖',
			required: true,
		}],
	},
}

// 動作
QANode = {
	_id,
	title: '聯絡人工客服',
	description: '',
	type: 'action',
	parentId,
	childIds: [],
	status: 'active',

	content: {
		action: 'contact-cs',
	},
}
