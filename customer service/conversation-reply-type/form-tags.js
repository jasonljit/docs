const conversationReply = await createBotConversationReply({
	conversationId,
	type: 'form-tags',
	content: {
		description: '...',
		title: '充值方式',
		options: [{
			"title": "支付宝扫码",
			"formId": "5bf7b178291ce14031bf3ccf"
		}, {
			"title": "支付宝转账",
			"formId": "5bf7b178291ce14031bf3ccd"
		}, {
			"title": "银行转账",
			"formId": "5bf7b178291ce14031bf3ccd"
		}, {
			"title": "在线充值",
			"formId": "5bf7b178291ce14031bf3cce"
		}]
	}
})

socket.emit('bot-message', { conversationReply })
