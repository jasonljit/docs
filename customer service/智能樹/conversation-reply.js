// 選項
conversationReply = {
	type: 'node-options',
	content: {
		isSubmitted: false,
		hasCallCSOption: true,
		description: '您的問題是？',
		options: [{
			nodeId: '',
			title: '角色問題',
		}, {
			nodeId: '',
			title: '帳戶問題',
		}],
	}
}

// 答案
conversationReply = {
	type: 'node-answer',
	content: {
		fields: [{
			type: 'textArea',
			content: '...',
		}, {
			type: 'image',
			src: 'IMAGE_PATH',
		}],
	}
}

// 表單
conversationReply = {
	type: 'node-form',
	content: {
		isSubmitted: false,
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
