import React, {Component} from "react"
import * as d3 from 'd3';

class DrawVertex extends Component {

	drawGraph() {
		d3.select(this.refs.bg).style("background-color", "blue")
	}

	componentDidMount() {
		this.drawGraph()
	}

	render() {
		return (
			<div ref="bg">
				<svg ref="graph"></svg>
			</div>
		)
	}
}

export default DrawVertex;