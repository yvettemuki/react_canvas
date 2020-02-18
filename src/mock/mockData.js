const mockData = {
	nodes: [
		{
			id: 1,
			title: "evolution.dependence.application",
			parent: 0
		},
		{
			id: 2,
			title: "evolution.dependence.application.fix",
			parent: 1
		},
	],
	edges: [
		{
			a: 1,
			b: 2,
			num: 10
		}
	]
}

export default mockData;

