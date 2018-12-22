level = {
	_id: 'L1',
	name: "階層一"
	index: 1,
	type: 'options',
	nodeIds: ['N1', 'N2'],
	content: '你的問題是？',
	properties: ["contact_cs"]
}

label = {
	_id: 'L2',
	level: 2,
	type: 'form',
	nodeIds: ['N1-1'],
	description: '請填寫表單',
	contactCS: false,
}

// ===============================

node = {
	_id: 'N1',
	//parentNodeId: '',
	childIds: ["N2", "N3"],
	nextLevelId:
	title: '帳戶問題',
	type: 'option',
}

node = {
	_id: 'N1-1',
	parentNodeId: 'N1',
	labelId: 'L2',
	title: '',
	type: 'form',
	inputs: [{
		type: 'text',
		title: '充值方式',
	}]
}

