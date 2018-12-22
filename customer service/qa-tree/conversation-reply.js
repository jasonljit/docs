// 選項
conversationReply = {
	type: 'qa-options',
	content: {
		isSubmitted: false,
		description: '您的問題是？',
		options: [{
			QANodeId,
			title: '角色問題',
		}, {
			QANodeId,
			title: '帳戶問題',
		}],
	}
}

// 答案
conversationReply = {
	type: 'text'
}
conversationReply = {
	type: 'image'
}

// 表單
conversationReply = {
	type: 'qa-form',
	content: {
		isSubmitted: false,
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
			required: false,
		}, {
			type: 'image',
			title: '上傳問題截圖',
			required: false,
		}],
	},
}
