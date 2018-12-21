import React from 'react';

class Canvas extends React.Component {
  ctx;
  componentDidMount() {
    const canvas = this.refs.canvas;
    this.ctx = canvas.getContext('2d');
    this.ctx.beginPath();
    this.ctx.moveTo(20, 400);
    this.ctx.lineTo(580, 400);
    this.ctx.stroke();
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps !== this.props.step) {
      switch (this.props.step) {
        case 10:
          this.ctx.beginPath();
          this.ctx.moveTo(460, 130);
          this.ctx.lineTo(490, 160);
          this.ctx.stroke();
        case 9:
          this.ctx.beginPath();
          this.ctx.moveTo(460, 130);
          this.ctx.lineTo(430, 160);
          this.ctx.stroke();
        case 8:
          this.ctx.beginPath();
          this.ctx.moveTo(460, 200);
          this.ctx.lineTo(430, 250);
          this.ctx.stroke();
        case 7:
          this.ctx.beginPath();
          this.ctx.moveTo(460, 200);
          this.ctx.lineTo(490, 250);
          this.ctx.stroke();
        case 6:
          this.ctx.beginPath();
          this.ctx.moveTo(460, 110);
          this.ctx.lineTo(460, 200);
          this.ctx.stroke();
        case 5:
          this.ctx.beginPath();
          this.ctx.arc(460, 80, 30, 0, Math.PI * 2, true);
          this.ctx.stroke();
        case 4:
          this.ctx.beginPath();
          this.ctx.moveTo(460, 0);
          this.ctx.lineTo(460, 50);
          this.ctx.stroke();
        case 3:
          this.ctx.beginPath();
          this.ctx.moveTo(220, 0);
          this.ctx.lineTo(460, 0);
          this.ctx.stroke();
        case 2:
          this.ctx.beginPath();
          this.ctx.moveTo(220, 300);
          this.ctx.lineTo(220, 0);
          this.ctx.stroke();
        case 1:
          this.ctx.beginPath();
          this.ctx.arc(220, 400, 100, 0, Math.PI, true);
          this.ctx.stroke();
      }
    }
    return true;
  }

  render() {
    return (
      <div className="canvas">
        <canvas ref="canvas" width={640} height={400} />
      </div>
    );
  }
}
export default Canvas;
