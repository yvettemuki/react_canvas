import React, {Component} from "react"
import * as d3 from 'd3';
import mockData from "../mock/mockData";
import "./DrawVertex.css"

class DrawVertex extends Component {

	constructor(props) {
		super(props)
		this.state = {
			packages: mockData,
		}
	}

	drawGraph() {
		const packages = ["pkgAA", "pkgBB", "pkgCC"];
		const g = d3.select("svg").selectAll("g")
			.data(packages)
			.enter()
			.append("g")
			.attr("id", function(d) {
				return d
			})

		g.append("rect")
			.attr("x", 30)
			.attr("y", function (d, i) {
				return 30*(i+1) + 4
			})
			.attr("rx", 10)
			.attr("ry", 10)
			.attr("width", 120)
			.attr("height", 32)
			.attr("fill", "#e2e6eb")
			.append("text")
			.attr("fill", "#333333")
			.text(function (d) {
				return d
			})

	}

	componentDidMount() {
		this.drawGraph()
	}

	render() {
		return (
			<div className="home-container">
				<svg height="1000" width="800"></svg>
			</div>
		)
	}
}

export default DrawVertex;