QATree = {
	_id,
	rootQANodeId,
	title: '智能客服',
	name: 'chat-bot',
	status: {
		type: String,
		enum: [
			'published',		// 使用中的版本
			'editing',			// 編輯中的版本
			'archived',			// 已下架
		],
	},
	openingMessage: 'Hello',
	endingMessage: 'Bye',
}
