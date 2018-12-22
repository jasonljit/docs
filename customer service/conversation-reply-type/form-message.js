const conversationReply = await createBotConversationReply({
	conversationId,
	type: 'form-message',
	content: {
		// title: '支付寶掃碼',
		// formName: "deposit-fail",
		status: {
			type: String,
			enum: ['new', 'submitted'],
		},
		inputs: [{
			type: 'text',
			name: 'email',
			title: '您的電子信箱',
			placeHolder: '請輸入信箱',
			required: true,
		}, {
			type: 'radio',
			name: 'gender',
			title: '您的性別',
			values: ['男', '女'],
		}, {
			type: 'checkbox',
			name: '',
			title: '從哪得知消息',
			values: ['報章雜誌', '親友介紹', '網路廣告'],
		}, {
			type: 'image',
			title: '上傳問題截圖',
		}]
	}
})

socket.emit('bot-message', { conversationReply })
