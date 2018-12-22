tree = {
	_id,
	rootNodeId,
	title: 'QA智能客服',		// 顯示給 client 看
	name: 'QA',				// query 用
	status: {
		enum: [
			'published',		// 使用中的版本
			'editing',			// 編輯中的版本
			'archived',			// 已下架
		],
	}
}
