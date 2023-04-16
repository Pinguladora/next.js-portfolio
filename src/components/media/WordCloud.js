import React, { useRef, useEffect } from 'react';
import { select } from 'd3-selection';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import cloud from 'd3-cloud';

const WordCloud = ({ words, width = 500, height = 500 }) => {
  const svgRef = useRef();

  useEffect(() => {
    const color = scaleOrdinal(schemeCategory10);
    // Create word cloud
    var createCloud  = select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`)

    // Draw word cloud
    const draw = (words) => {
      var wordCloudSelection = createCloud
        .selectAll('g text')
        .data(words)

      // Enter and style each word
      wordCloudSelection
        .enter()
        .append('text')
        .style('font-size', (d) => `${d.weight}px`)
        .style('font-family', 'Impact')
        .style('fill', (_, i) => color(i))
        .attr('text-anchor', 'middle')
        .attr('transform', (d) => `translate(${[d.x, d.y]})rotate(${d.rotate})`)
        .text((d) => d.name);
    };
    const wordCloudInstance = cloud();
    wordCloudInstance
      .size([width, height])
      .words(words)
      .padding(10)
      .rotate(() => ((Math.random() * 2) * 90) - 45) // updated rotation calculation
      .fontSize((d) => d.weight)
      .on('end', draw)
      .start();
  }, [words, width, height]);

  return <svg ref={svgRef}></svg>;
};

export default WordCloud;
