const conversationReply = await createBotConversationReply({
	conversationId,
	type: 'upload-image',
	content: {
		description: '...',
		link: {
			title: '回單範例',
			url: 'http://...',
		},
		options: [{
			title: '上傳',
			action: 'upload',
		}, {
			title: '回首頁',
			aciton: 'home',
		}]
	}
})

socket.emit('bot-message', { conversationReply })
