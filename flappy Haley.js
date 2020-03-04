(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.StartInstructions = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text Body
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ANzhBIApABIgEBiIBFgDIABAlIhsACgARxBEIAAiHIA5AAQANAAAIAEQAHADAEAGQAEAFABAHIABAPQgBAPgBAJQgCAIgHAEQgHAEgPAAIgXABIAAA2gASWgPIARABQAGAAACgCQABAAABAAQAAAAABgBQAAAAAAgBQAAAAABAAIAAgGIgBgJQAAgEgDgDQgDgDgFAAIgRAAgAQ+BEIgGgrIgeAAIgFArIgjAAIAciHIAzAAIAoCHgAQdAAIAagBIgPgxgAMPBEIAAiHIBcAAIAAAZIg4ADIAAAYIA0ADIAAAZIgyAAIAAA3gAJLBCQgLgBgJgFQgJgHgGgJQgGgJABgMIAAgjQAAgPADgLQAEgLAHgGQAGgGAJgDQAHgDAIABIARAAQAKAAAKAFQAIAGAGAJQAHAJAAALIAAAxQAAALgEAIQgDAIgGAGQgGAFgIADQgGADgHABgAJNgkQgGABgDAIQgCAIgBARIAAAKQAAAHACAHQACAGAEAFQAFAFAFAAIAIAAQAFAAAFgEQADgEACgFIACgJIAAgTQgBgNgDgIQgDgHgEgDQgFgCgFAAgAHMBEIAFhbIgkgBIgDgrIBwABIABAnIgnAHIAABYgADTBEIAChEIgmhEIApAFIATAqIARguIAogBIgnBEIgGBEgABIBEIAAiHIBbAAIAAAZIg3ADIAAAXIAzAEIAAAZIgxAAIAAARIA6AFIAAAhgAgGAdIgMATIAAAUIgnAAIAAiIIAoAFIgBA2IAfg4IAngEIgoBFIAwBCIgpACgAkQBEIABhEIglhEIAoAFIATAqIARguIApgBIgnBEIgGBEgAmUgCIACBGIgkAAIAAiIIApAFIAnBYIgDhcIAogBIABCGIg2ACgAnqBEIgFgrIgfAAIgEArIgjAAIAbiHIA0AAIAoCHgAoLAAIAbgBIgQgxgAsBBEQgRgBgKgFQgJgHAAgOIAAgNIAagDIABACIADAHQACADAEADQAFADAHABIAFAAIAJgBQAEgBACgCQABgCAAgGIAAgHQAAgEgEgDQgGgCgIgBIgQgFQgJgCgIgDQgIgEgFgFQgFgGAAgJIAAgOQAAgHAFgHQADgGAHgEQAHgFAHgCQAHgDAGAAIAZAAQAJAAAIAEQAGAEAFAFQADAFADAGQACAFAAAEIAAAQIgfAAIAAgLQAAgEgDgEQgDgDgDgCIgHgBIgFAAQgLABgEAEQgEAEAAAJQAAAFAEACIAOAFIARAEIARAGQAHADAGAHQAFAGAAAKIAAALQAAAGgEAIQgDAJgHAFQgHAFgHABgAtzBEQgTgBgJgFQgJgHAAgOIAAgNIAagDIABACIADAHQACADAFADQAEADAHABIAFAAIAJgBQADgBACgCQACgCAAgGIAAgHQAAgEgEgDQgGgCgIgBIgQgFQgJgCgIgDQgIgEgFgFQgFgGAAgJIAAgOQAAgHAEgHQAEgGAHgEQAHgFAHgCQAHgDAGAAIAZAAQAJAAAIAEQAGAEAEAFQAEAFADAGQABAFAAAEIAAAQIgeAAIAAgLQAAgEgDgEQgDgDgDgCIgHgBIgFAAQgLABgEAEQgEAEgBAJQAAAFAGACIAMAFIARAEIASAGQAHADAGAHQAFAGAAAKIAAALQAAAGgEAIQgEAJgGAFQgHAFgHABgAwABEIAAiHIBcAAIAAAZIg4ADIAAAXIA0AEIAAAZIgyAAIAAARIA6AFIAAAhgAwtBEIAAgqQAAgEgDgDQgDgCgEgBIgIgCIgCgBIAAA3IglAAIAAiHIA3AAQANAAAHACQAIACAEAFQADAEACAGIAAANQAAAPgBAJQgDAJgHADQgHAFgOAAIAEABIAIADIAKAFIAHAFQADAEAAACIAAAqgAxDgTIASAAQAFAAACgBQABgBABAAQAAAAABgBQAAAAAAgBQAAAAABgBIAAgFQAAgFgCgEQgCgFgHAAIgSAAgAzPBEIAAiHIA5AAQANAAAIAEQAHADAEAGQAEAFAAAHIACAPQAAAPgCAJQgCAIgHAEQgHAEgPAAIgYABIAAA2gAyqgPIARABQAGAAACgCQABAAABAAQAAAAAAgBQABAAAAgBQAAAAAAAAIABgGIgBgJQAAgEgDgDQgDgDgFAAIgRAAg");
	this.shape.setTransform(-0.5,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Text Shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("ANqBgQgEgCgCgEQgCgDAAgEIABgXIgBgCIAAgCIAAgOIgdAAIAAAnQgBAGgEAFQgEAEgHAAIgmAAQgGAAgEgEQgEgFgBgGIAAihQABgHAEgEQAEgEAGAAIBcAAQAEAAADABIABAAIApACIADAAQAEABAEADQADAEAAAEIAAADIAAAWIAAAFIgBA3IAzgCQAGgBAFAFQADADABAEIAUhhQABgGAEgDQAFgEAFABIAzAAQAFAAAEADQAFACABAFIATA/IAAg6QAAgHAEgEQAEgEAGAAIA5AAQARAAAKAFQALAFAGAIIABACQAFAIABAKIABARIAAACIAAAFIgBATIAAABQgEAPgNAHIgEACIgCABQgJACgNABIgKAAIAABCQAAAGgEAFQgEAEgGAAIgnAAIgDAAIgFAAIgrAAQgGAAgFgEQgEgEAAgFIgEgeIgEAAIgCAeQgBAFgFAEQgEAEgGAAIgjAAQgEAAgEgCIgCgCIgCACQgEACgEAAIhsACIgBAAQgEAAgDgCgAJgBgIgVgBIgBAAQgPgBgMgIIAAAAQgNgIgHgNQgHgNgBgPIAAgZIAAgBIAAgJIgQADIAABMQAAAGgEAFQgFAEgGAAIgoAAQgEAAgEgCQgDgCgCgEQgCgEAAgEIABgUIgBgFIADgzIgTAAQgGgBgFgDQgEgEAAgGIgCgrQgBgDACgDIgBgVIAAAAIAAgBIAAgCIABgFQACgDAEgCQAEgDAEABIBvABQAGAAAFAEQADAEABAFQAIgIAKgDIgBABQALgFALABIAQAAQAOAAAOAIIgBAAQAMAHAIAMQAIANABAPIAAABIAAAaIAAABIAAAxQAAANgFAMIgBAAQgEAKgIAIIAAABQgIAHgJAEQgLAEgJAAIAAAAIgBAAgArbBgIgmAAQgXAAgMgIIAAAAQgGgEgEgGQgEAFgFAEIABAAQgLAIgMABIgBAAIglAAQgVAAgMgGIgBACQgFAEgGAAIhgAAIgEgBIgGABIgjAAQgGAAgEgEQgFAEgFAAIglAAQgHAAgEgEQgEgFgBgGIAAhHIgCABIgDABQgIACgNABIgKAAIAABCQAAAGgEAFQgEAEgHAAIgmAAQgGAAgEgEQgEgFgBgGIAAihQABgHAEgEQAEgEAGAAIA5AAQARAAAKAFIAHAEIADgFQAEgEAHAAIA3AAQAPAAAJACIABAAIAKAFIACgDQAEgEAGAAIBcAAQAGAAAEAEQAFAEAAAGIADgCIABAAQAIgGAJgDQAKgEAIABIAZAAQAOAAAKAFIAAABQAJAEAGAIIABABIADAEQAEgGAHgFIABAAQAIgGAJgDQAKgEAIABIAZAAQAOAAAJAFIABABQAJAEAGAIIABABQAFAHACAHQAEAJgBAGIAAAQIAAAEIAAAHIAAAQIgBAFIABAJIAAAKIAAABIAAADIAAABIgBADIABAJIAAAKQAAAKgFAMIAAgBQgFAMgKAHIABAAQgLAIgMABIgBAAIAAAAgAAMBeQgDgBgCgDIgKgQIgBAHQAAAGgEAFQgEAEgGAAIgnAAQgGAAgFgEQgEgFAAgGIAAiiQAAgFACgDQADgEAEgCQADgCAFABIAoAFQAGAAAEAFIAAAAIAAABIACACIABACIACgFQACgDADgCIAFgCIAogEQAGAAAFADIACACQAEgDAFAAIBbAAIAGABQAEgCAEAAIApAFQAEAAADADQADACACADIAEAJIAEgMQACgEADgDQAEgCAFAAIAogBQAGAAAEAEQAEADABAFIAAAAQABAFgCAFIgFAIIABABQAEADABAFQABAGgCAFIgmBBIgGA/QAAAGgEAEQgFAEgGAAIgkAAQgEAAgDgCQgEgCgCgEQgCgDABgEIAAgXIAAgEIAAgmIgUglIgDADIAAAAIAAASIAAABIAAAGIAFAEQAEAEgBAGIAAAbIAAABIAAAgQAAAGgEAFQgEAEgGAAIhgAAQgEAAgDgCIgFABIgpABIAAAAQgEAAgDgCgAkYBeQgDgCgCgEQgCgDAAgEIAAgXIAAgEIAAgmIgSghIAABGIAAADIAAAYQABAGgFAFQgEAEgGAAIg2ABQgFAAgEgCQgEgDgBgEIgBgBIgBACQgCAEgDACQgEACgEAAIgkAAIgEAAIgEAAIgsAAQgGAAgEgEQgEgEgBgFIgEgeIgDAAIgDAeQgBAFgEAEQgEAEgGAAIgjAAQgFAAgEgCQgDgDgCgEQgCgFABgEIADgOIgCgEQgCgFABgEIAciGQABgGAEgDQAEgEAFABIA0AAQAFAAAEADQAEACABAFIATA/IAAg7QAAgEACgEQADgEADgBQAEgCAFAAIAoAFQAEAAAEADQADACABADIAIASIgBgRIACgGQACgDAEgCQADgDAFABIAogBQAEAAADACQADgCAFAAIAoAFQAEAAADADQAEACABADIAEAJIAFgMQABgEAEgDQAEgCAEAAIApgBQAFAAAFAEQAEADABAFIAAAAQABAFgDAFIgEAIIABABQAEADABAFQABAGgDAFIglBBIgGA/QgBAGgEAEQgEAEgGAAIgkAAIAAAAQgEAAgEgCg");
	this.shape_1.setTransform(-0.5,3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.StartInstructions, new cjs.Rectangle(-125.1,-6.1,249.3,19.6), null);


(lib.ScreenFlash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bfQMAAAg+fMAu3AAAMAAAA+fg");
	this.shape.setTransform(80,80);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ScreenFlash, new cjs.Rectangle(-70,-120,300,400), null);


(lib.GetReady = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text Body
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtXCHIgGgPQgKAGgLAEQgKADgJAAIgBAAIAAAAIgpgCQgXgCgSgMQgTgLgMgUQgKgTgBgXIAAhHQABgfAIgVQAIgVANgNQANgNAPgFQAPgFAPAAIAkAAQAUAAASALQATAMAMASQAMATAAAVIAAAZIgzACQAAgNgDgMQgEgMgIgHQgHgIgMAAIgDAAIgDABIgcAFQgMACgGAQQgGAQAAAgIAAAWQAAAOAFAPQAEAPAIAKQAHAKALAAIAYAAQADAAAGgDQAFgCADgFQADgEABgFIAAgCIgBgBIgfgDIgEggIBhAAIgBB2gANhCFIACiJIhKiGIBRAJIAmBTIAhhbIBRgBIhNCKIgMCFgAI2CFIAAkNIB3AAQAsABAVASQATATAAAhIAACQQAAANgCAKQgCAKgGAHQgIAHgOAEQgOADgYAAgAKDBcIAaAAQATAAAJgDQAIgDACgGQACgHAAgJIABghIACgqQACgXAAgZQAAgOgEgGQgDgHgGgBQgFgCgGAAIgxAAgAHPCFIgKhWIg9AAIgJBWIhHAAIA4kOIBnAAIBPEOgAGMgCIA1gDIgdhigABqCFIgBkOIC3AAIAAAyIhvAGIAAAvIBmAIIAAAyIhhAAIAAAkIByAIIAABBgAAPCFIAAhRQAAgJgHgGQgGgFgHgDIgPgEIgGgBIAABtIhKAAIAAkOIBuAAQAaAAAPAFQAPAEAIAJQAHAIADAMQACAMAAAPQAAAdgFASQgEATgOAHQgOAJgbAAIAGACIAQAHIATAJQAJAGAHAGQAGAFABAGIAABSgAgcgpIAiAAQALAAAEgCQAFgDABgEQACgEgBgGQAAgLgDgJQgFgJgOAAIgiAAgAoPCFIAKi2IhIgCIgFhWIDfACIABBPIhMAMIAACxgAshCFIAAkOIC3AAIAAAyIhwAGIAAAvIBmAIIAAAyIhgAAIAAAkIByAIIAABBg");
	this.shape.setTransform(-1.1,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Text Shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("As7C7IgfgEQgIgBgHgFIgBAAQgOAEgNAAIgBAAIgBAAIgBAAIgpgCIAAAAQgfgCgYgQIgBAAQgYgQgPgZIgBgBQgOgZgBgfIAAgBIAAgjIAAgBIAAhHQABglAKgaIAAAAQAKgcASgQIAAgBQASgRAVgHIAAAAQAVgHATAAIAjAAIABAAQAcAAAaAQIAAAAQAJAFAIAHQAAgMAJgIQAJgJAMAAIC3AAQAHAAAFACQAGgCAGAAIDfACQANAAAIAJQAJAJAAAMIABBPIgBAGIABAeQAAALgHAJQgHAIgLACIg0AIIAACXQAAANgIAJQgJAIgNAAIhQAAQgIAAgIgEQgHgEgEgIQgDgHAAgIIABgaQgBgFAAgFIAGh0IgngBIgIgBIAAAbQAGACAEAFQAIAIAAAMIAABlQAAANgJAJQgJAIgMAAIi/AAIgFAAIgFADQgGADgHAAIgDAAgAImC1IhXAAQgLAAgJgHQgJgIgBgLIgHg8IgHAAIgGA7QgBAMgJAIQgJAHgLAAIhHAAIgHgBIgJABIi+AAQgGAAgEgBQgFABgGAAIhHAAQgMAAgHgIQgJAIgMAAIhKAAQgMAAgJgIQgJgJAAgNIAAkyQAAgNAJgIQAJgJAMAAIBuAAQAfAAATAGIABAAQAKAEAJAEIAEgFQAJgJAMAAIC3AAQANAAAJAJQAIAIAAANIAAAxIAAADIAAAiQAAAMgIAJIgBABIAAADIAAAbIAdiQQADgLAIgGQAIgHALAAIBnAAQAKAAAIAGQAIAGADAKIAkB8IAAhzQAAgMAJgJQAJgJAMAAIB3AAQA0ABAbAVIAAAAQACgMAJgGQAKgHALACIBRAIQAIABAGAFQAHAEADAIIAIARIAIgYQAEgJAHgFQAIgFAJAAIBRgBQALAAAIAHQAJAHACALQACAKgFAKIgCAEQAEAFABAHQACAKgFAKIhLCDIgLCAQgBAMgJAHQgIAIgMAAIhIAAQgIAAgHgEQgHgEgEgHQgEgHAAgIIABggIgBgEIABhfIglhDIAAAAIgBBsIAAABIAAAIIAAAEIAAAWIAAABQABARgDAMQgDATgNANIAAABQgMAMgXAGQgRAEgdAAIiFAAIgIgBIgIABIAAAAg");
	this.shape_1.setTransform(-1.1,12.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.GetReady, new cjs.Rectangle(-106.7,-6.4,211.3,37.4), null);


(lib.GameOver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text Body
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtsCIIgGgPQgKAGgLADQgKAEgJAAIgBAAIgBAAIgogDQgXgBgTgMQgSgMgMgTQgKgTgBgXIAAhHQABgfAIgVQAIgWANgMQANgNAPgFQAPgGAPAAIAjAAQAVABASALQATAMAMASQAMASAAAWIAAAZIgzABQAAgNgEgLQgEgMgHgIQgIgHgLAAIgDAAIgEABIgbAFQgMACgGAQQgGAPAAAhIAAAVQAAAPAEAPQAFAOAHAKQAIALAKgBIAZAAQADABAFgDQAFgDAEgEQADgFABgEIgBgCIAAgBIgfgDIgFggIBhAAIAAB1gAo5CGIAAkPIBOAAIBBCeIAwieIBTADIAGEMIhPAAIAAh/IghB/IhBAAIgZh1IgGB6gAPRCGIAAhSQAAgIgGgGQgHgFgIgDIgOgFIgHAAIAABtIhJAAIAAkPIBuAAQAaAAAQAGQAPAEAHAIQAIAJACAMQACAMAAAOQAAAegEASQgFATgOAHQgNAJgcAAIAHACIAPAHIATAJQAKAGAGAFQAGAGABAGIAABSgAOlgoIAjAAQALAAAEgCQAFgDABgEQACgEgBgGQABgLgEgJQgFgJgOAAIgjAAgAKPCGIAAkPIC3AAIAAAzIhwAGIAAAvIBmAIIAAAyIhhAAIAAAjIBzAIIAABCgAIwCGIgTgBIgYgBIgUAAIgKgBIhOkMIBQAIIArDPIAfjXIBQgCIhLERIgIAAgAE1CGIgBAAIgpgDQgXgBgSgMQgTgLgLgUQgLgSAAgYIAAhGQAAggAIgVQAIgWANgMQANgMAPgGQAQgGAPAAIAjAAQAUABATAMQASAKAMATQAMASABAWIAABjQgBAVgHARQgIAQgMAMQgMALgNAGQgOAGgNAAIgBAAgAEihLIgUACQgMABgFAQQgGAQgBAhIAAAWQAAAOAFAOQAEANAIAKQAIAIAKABIAQAAQAMgBAHgHQAIgIADgKQAEgLAAgHIgBgoQAAgagGgOQgGgPgJgFQgJgGgJAAIgBAAgAkLCGIAAkPIC3AAIAAAzIhwAGIAAAvIBmAIIAAAyIhhAAIAAAjIBzAIIAABCgAqgCGIgKhWIg9AAIgJBWIhGAAIA3kPIBnAAIBPEPgArigCIA0gCIgdhig");
	this.shape.setTransform(-1.2,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Text Shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AtQC9IgfgDQgJgBgGgFIgBAAQgOAEgNAAIgBAAIgBAAIgBAAIgpgCIAAAAQgfgDgZgPIAAgBQgYgPgQgaIAAAAQgOgagBgeIAAgBIAAgnIAAgBIAAghIAAgBIAAglQABglAKgaIAAAAQAKgcARgRIABAAQASgSAVgGIAAAAQAUgIAUABIAjAAIABAAQAcAAAZAPIABABQAYAOAQAYIAAABQAOAWADAYIAQhOQACgLAIgHQAJgGAKAAIBnAAQAKAAAIAGQAIAGADAJIAkB9IAAh0QAAgNAJgJQAJgIAMAAIBOAAQAJgBAIAGQAIAFADAIIAhBRIAXhOQAEgKAIgGQAIgGAKABIBTACQAFAAAFACQAHgEAKAAIC3AAQAMAAAJAIQAJAJAAANIAAAwIAAAEIAAAmQAAAMgJAJIgBABIAAAlIAAAEIAAAYQAFADAFAEQAIAJAAAMIAAAoIAAACIAAA/QAAAMgJAJQgJAJgMAAIi/AAQgGAAgFgCQgFACgGAAIhPAAQgJAAgHgFQgIAFgJAAIhBAAQgGAAgFgCIgHAEQgHAEgIgBIhIgFIgGgBIgIABIhXAAQgLAAgJgIQgIgHgCgLIgHg8IgHAAIgGA7QgBALgJAIQgIAIgMAAIhGAAIgFAAIgFADQgGACgHAAIgDAAgAIuC4IgRgBIgCAAIgXAAIgTgBIgCAAIgIAAQgKAAgIgGQgIgHgDgJIgmiFIAAAmIAAABQgBAbgKAWQgKAWgQAPQgQAQgSAIIgBAAQgUAIgSAAIgBAAIgBAAIgCAAIgogCIgBAAQgegDgZgPIgBgBQgYgPgPgZIgBgBQgNgZgBgfIAAgBIAAgnIAAgBIAAhHQAAglAKgaIAAAAQALgcARgQQASgSAVgHIAAAAQAVgIAUABIAjAAIABAAQAcABAZAPQAJAFAIAHQAAgFACgGQAEgJAJgGQAIgFAKABIBQAJQAKABAHAGQAIAHACAKIAHAmIAHgtQACgLAIgHQAIgHALAAIBQgCQAGgBAFADIACAAIC3AAQAGAAAGACQAFgCAHAAIBuAAQAfAAATAGIABAAQAYAHAMAPQANAOADAVQADAOAAASIgBAaIAAAAIAAABIABAMIAAABQAAAigFATIgCAHQAHAKAAALIAAACIAAAmIAAAFIAABPQAAAMgJAJQgJAJgMAAIhHAAQgMAAgJgIQgJAIgMAAIhJAAIgIgBIgIABIi/AAQgMAAgJgJQgJgJAAgMIAAheIgcBmQgCAKgJAGQgIAGgKAAIgIAAIgBAAIgBAAg");
	this.shape_1.setTransform(-1.2,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.GameOver, new cjs.Rectangle(-108.9,-6.6,215.6,37.9), null);


(lib.LowerPipe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#52CC05").ss(5,1,1).p("Agiu6IAAB4AAjrAIAAZ7");
	this.shape.setTransform(9.5,103.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#50A602").s().p("AkrAPIAAgdIJXAAIAAAdg");
	this.shape_1.setTransform(30.1,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Pipe Top
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#454545","#59C900","#459E00"],[0,0,1],-30,0,30,0).s().p("AkOCHQgZAAgDgUIgBgGIAAjZQAAgaAdAAIIdAAQAdAAAAAaIAADZQAAAagdAAg");
	this.shape_2.setTransform(30,13.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(55,126,0,0.4)").s().p("AjxgXIAAgQIHGAAQAdAAAAAIIAAA+QAAAJgdAAg");
	this.shape_3.setTransform(29.3,31);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Pipe Bottom
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#454545","#59C900","#459E00"],[0,0,1],-24,0,24,0).s().p("AjvN/IAA79IHfAAIAAb9g");
	this.shape_4.setTransform(30,113.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.LowerPipe, new cjs.Rectangle(0,0,60.1,203), null);


(lib.GroundSlice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Edges
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B841D").s().p("AvEAKIAAgTIeJAAIAAATg");
	this.shape.setTransform(96.5,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#85D93D").s().p("AvEAKIAAgTIeJAAIAAATg");
	this.shape_1.setTransform(96.5,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Grass
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#72BE32").s().p("AAAAaQgCAXgUADQgVACgHgcQgKAPgSgPQgWAYgNgYQgiAngggnQgYAbgUgbQgQAWgJgWQggAtghgtQgWASgUgSQgfApgcgpQgoAsgigsQgTAGgOgGQgZAwgXgwQgoAngrgnQgcAmgVgmQgdAlgPglQg4AmgpgmQgUAcgEgcQgSAXgWgXQgOAggSgHQgTgIgHgRIAAhPIeJAAIAABPIgDAAQgZA1gXg1QgPAPgQgPQgUAbgQgbQgjApgegpQgXAXgSgXQgQAYgOgYQgbAvghgvQgWAVgVgVQghAtgagtQgvAvgdgvQgRAOgTgOQgYAxgSgxQgqAogqgoQgeAqgXgqQgdAmgLgmQg0ApgwgpQgOAfgIgfQgeAcgHgcQgSAcgPAAQgPAAgLgcg");
	this.shape_2.setTransform(96.5,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Grass copy
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5AA11F").s().p("AAAAaQgCAXgUADQgVACgHgcQgLAOgRgOQgWAYgNgYQgiAngggnQgZAagTgaQgQAWgJgWQggAtghgtQgWASgUgSQgfApgcgpQgoAsgigsQgTAGgOgGQgZAwgXgwQgoAngrgnQgcAmgVgmQgdAlgPglQg4AmgpgmQgUAcgEgcQgSAXgWgXQgOAggSgHQgSgIgIgRIAAhPIeJAAIAABPIgDAAQgZA1gXg1QgPAOgQgOQgVAbgPgbQgjApgegpQgXAXgSgXQgQAYgOgYQgcAvgggvQgWAVgVgVQgiAtgZgtQgvAugdguQgQAOgUgOQgYAxgSgxQgqAogqgoQgeAqgXgqQgdAlgLglQg0ApgwgpQgOAfgIgfQgeAcgHgcQgSAcgPAAQgPAAgLgcg");
	this.shape_3.setTransform(96.5,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Grass copy 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#665025").s().p("AAAAaQgCAXgUADQgVACgHgcQgLAOgRgOQgWAYgNgYQgiAngggnQgZAagTgaQgQAWgJgWQggAtghgtQgWASgUgSQgfApgcgpQgoAsgigsQgTAGgOgGQgZAwgXgwQgoAngrgnQgcAmgVgmQgdAlgPglQg4AmgpgmQgUAcgEgcQgSAXgWgXQgOAggSgHQgSgIgIgRIAAhPIeJAAIAABPIgDAAQgZA1gXg1QgPAOgQgOQgVAbgPgbQgjApgegpQgXAXgSgXQgQAYgOgYQgcAvgggvQgWAVgVgVQgiAtgZgtQgvAugdguQgQAOgUgOQgYAxgSgxQgqAogqgoQgeAqgXgqQgdAlgLglQg0ApgwgpQgOAfgIgfQgeAcgHgcQgSAcgPAAQgPAAgLgcg");
	this.shape_4.setTransform(96.5,12.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Dirt
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7B6233").s().p("AvED6IAAnzIeJAAIAAHzg");
	this.shape_5.setTransform(96.5,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.GroundSlice, new cjs.Rectangle(0,0,193,50), null);


(lib.Collision = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AixBXQhIgkgBgzQABgyBIgkQBKgkBnAAQBoAABJAkQBKAkAAAyQAAAzhKAkQhJAkhoAAQhnAAhKgkg");
	this.shape.setTransform(-0.1,0.2,0.08,0.163);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Collision, new cjs.Rectangle(-2,-1.8,4,4), null);


(lib.Trees = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Front
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1CD241").s().p("AiPEwIgJgIQgqATgxAAQhaAAhAg+QgvAqhAAAQg6AAgrgiQgyAig/AAQhIAAg2grQgcAIgfAAQgpAAgkgOQgnAXgxAAQhIAAg0gzQgWgWgNgaIgLAAIgFAAQgUApgiAjQhPBPhwAAQhwAAhPhPQgPgQgNgQIAApOQAcgIAgAAQBaAABBBBQAwAwAMA/QBBANA0AsQAjgSAqAAQBGAAAyAxQATAUAMAXQAJgCAKAAIAKABIAKgLQA8g8BVAAQBIAAA2ArQAbgIAgAAQBVAAA7A8IAQASQAZgIAdAAQAkAAAgANIAMgIQALgPAOgOQBDhCBdAAQBCAAA0AiQBLhABkAAQByAABRBQIADAEQA4goBHAAQBYAABAA9QAfgOAlAAQBGAAAyAxQAOAOALAQQARguAmgnQBGhGBkAAQBjAABGBGQAZAaARAdQAJgQAOgOQAygyBGAAQBGAAAyAyQATATAMAXIAFgCIgBgPQAAhhBFhFQBFhEBhAAIADAAIAAHTIgDAAIgcgBQgMAlgeAdQgyAzhGAAQhGAAgzgzQgTgTgLgWQgXAGgaAAQhGAAgygyIgJgKQgSAvgmAmQhGBGhjAAQhkAAhGhGQgkgkgRgrQgLATgQAQQgyAxhGAAQgiAAgcgLIgCACQhBBBhbAAQhAAAgzggIgPAQQhRBRhyAAQhxAAhQhRg");
	this.shape.setTransform(162.1,352.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Middle
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5BE7AB").s().p("AN8EcQgXgXgOgaIgLAMQgqAqg6AAQg8AAgqgqQgcgcgKgkQggAhgvAAQgvAAghgiQgIgIgFgIQgNAUgSASQg2A3hOAAQhNAAg4g3QgbgcgNgiQgTAIgWAAQgpAAgdgdQgIgJgGgJQgLAtgiAkQgxAwhEAAQguAAgngXQgKAcgWAWQgsArg9AAQg9AAgrgrQgcgcgJghIgUAAQhMAAg1g1IgHgHIgIAIQgrArg8AAQgpAAgggTQgKAOgMALQg2A3hOAAQhOAAg2g3QgmgmgMgwQgaAIgeAAQhGAAgxgyQgygxAAhGIAAgCQgTAKgWAAQgkAAgagaQgRgSgGgWQgfAWgpAAQgfAAgagNIAAjiQAagNAfAAQA1AAAkAkQAmAlgBA1IAAAAQAPgFAQAAQAkAAAZAaQAOAOAHARIAJgKQAxgyBGAAQBHAAAxAyQAeAdAMAkQAjgQApAAQBNAAA2A1QAogjA4AAQAyAAAmAdQALgUATgRQA1g2BMAAQBLAAA2A2QA0AzACBGQAWADAUAJQALgmAegfQAxgwBEAAQBEAAAxAwQAaAbAMAgQAIgQANgOQAdgdApAAQAhAAAZASQALgPAMgOQA4g2BNAAQBOAAA2A2QAjAjANAsQAggdAsAAQAvAAAhAgQARARAIATQAFgHAHgHQAqgpA8AAQA6AAAqApIALANQAOgbAXgXQA5g4BRAAQBPAAA3A1QAZgJAcAAQATAAASAFQANguAjgjQA3g3BNAAQAnAAAgAOQAGgrAegeQAlglA0AAQAvAAAiAdIAADCQgiAcgvAAIgLAAQADAPgBAQQABBOg3A2Qg3A3hOAAQg/AAgwgkIgOAQQglAmg3AAQgMAAgKgCQgMAQgPAPQg5A5hRAAQhRAAg5g5g");
	this.shape_1.setTransform(162,341.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Back
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B6FFFC").s().p("AK0E0QgQgQgKgRQgoAng5AAQg6gBgpgpQgIgHgGgJQgVAFgWAAQhDAAgwgvQgbgcgLgiIgRABQg1AAgngiQgEAlgbAaQgeAfgrAAQgYAAgTgIIgDACQgRATgbAAQgbAAgTgTIgJgLQgjARgpAAQhHAAg0gzIAAgBIgEAEQgsAshAAAQg/AAgtgsQgYgZgLgeQgKAZgWAVQgmAog5AAQgsAAgjgaIgGAGQgtAvhBAAQhBAAgvgvQgMgMgIgNIgUABQg1AAglglQgkglAAg0IAAgMQgdAVgkgBQgmABgdgWQgbAbglAAQgKgBgJgCQgHAJgIAHQgqArg7AAQg8AAgpgrQgrgpAAg7IABgRQgvgBglgcIAAjkQAlgeAzgBQA7ABAqAqQAqAqABA7IgBASQA4ABApApIAJAJQAMgDANAAQASAAAQAGQAHgLAKgKQAhghAvAAQAuAAAhAhQAiAhgBAvIAAAFQAigbAtAAQAsAAAhAbQAfgRAkgBIAAgJQAAg/AsgtQAtgsA/AAQA/AAAtAsQAiAkAIAuIALAAQAoAAAbAcQAKAKAIANQAhgVAqABQA2gBApAhQAHgLAKgKQA0gyBHgBQBIABAzAyQArArAHA4QAVgLAbAAQAdAAAXANIAAgJQAAg6AqgqQArgqA7gBQA7ABAqAqQARARAKATQAUgEAWgBQBCAAAvAwQAXAUAKAaIABAAQAJgmAfgeQArgrA9AAQA9AAAsArQASATALAVQAUgJAYAAQAqAAAdAcQAFgrAhghQAngoA5ABQAuAAAjAaIACgDQApgpA6AAQAvAAAjAbQAHgMALgLQAfgeAogDQgBgLAAgMQAAgvAggiQAiggAvAAQAuAAAiAgQAdAdAEAnQATAIARARIAKAMIAAChIgKALQgmAmg2AAQgnAAgegTIgFAGQgjAjgwAAQgdAAgYgNQgKAagVAVQgkAjgvAFQgGAhgaAZQghAhguAAQgvAAghghQgWgWgIgcQgqgHgfggIgNgOQgGAWgTATIgEADQADAPAAAQQAABAgsAsQgtAsg/AAQg/AAgtgsg");
	this.shape_2.setTransform(162,332.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Trees, new cjs.Rectangle(-9.1,297,342.5,94.1), null);


(lib.Clouds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Front
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ECF8FF").s().p("A6cIRIgKiKIAAtrQAUgFAXAAQBBAAAuAtQAkAkAJAvQBrAIBOBNQBNBNAJBoQAJgNAMgLQA3g3BPAAQAbAAAYAHIAAgOQAAhUA8g7QA8g7BVAAQBUAAA8A7QApAoAOAzQAygeA/AAQA1AAAsAUIACgCQArgqA7AAQA7AAAqAqQAqApAAA7IAAACQANgUARgRQBDhBBcAAQBdAABCBBQAiAiARApQALgUASgSQAzgxBHAAQAYAAAWAFIgBgVQgBhmBKhIQBIhIBnAAQBnAABJBIQA8A7ALBPQAlAHAeAXIAAgLQAAhCAvgvQAwgvBCAAQBDAAAwAvQARARALAUQADhcBDhCQBFhFBhAAQBiAABGBFIADADIAAPZg");
	this.shape.setTransform(-0.4,-9.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Back
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D0EFFF").s().p("A5hIRIAAwfIANgBIAUgBQBiAABFBFQBDBCACBcQALgUASgRQAvgvBDAAQBCAAAwAvQAvAvAABCIAAALQAegXAmgHQALhPA7g7QBJhIBnAAQBnAABJBIQAtAtARA3IAOgPQBQhPBwAAQBxAABPBPQAZAZARAcQBNAHA6A5QASARAMAUIAAgCQAAg7AqgpQAqgqA7AAQA8AAAqAqIACACQAsgUA1AAQA/AAAzAeQAOgzAogoQA8g7BUAAQA1AAArAXQAKgMAMgMQBVhVB5AAQB4AABWBVIADAEQAogiA2AAQAlAAAfAQQALgZAVgVQAugtBCAAQAWAAAUAFIAANrIgKCKg");
	this.shape_1.setTransform(-8.8,-13.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clouds, new cjs.Rectangle(-172.2,-66.3,342.2,109.4), null);


(lib.Pipe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Upper Pipe
	this.instance = new lib.LowerPipe();
	this.instance.parent = this;
	this.instance.setTransform(26.7,-150.8,1,1,0,180,0,29.7,101.8);
	this.instance.cache(-2,-2,64,207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Lower Pipe
	this.instance_1 = new lib.LowerPipe();
	this.instance_1.parent = this;
	this.instance_1.setTransform(26.7,150.8,1,1,0,0,0,29.7,101.8);
	this.instance_1.cache(-2,-2,64,207);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Pipe, new cjs.Rectangle(-3,-252,60.1,504), null);


(lib.Bird = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Collision
	this.hit8 = new lib.Collision();
	this.hit8.name = "hit8";
	this.hit8.parent = this;
	this.hit8.setTransform(34,-17.8,1,1,0,0,0,-0.1,0.2);

	this.hit7 = new lib.Collision();
	this.hit7.name = "hit7";
	this.hit7.parent = this;
	this.hit7.setTransform(43.9,1.6,1,1,0,0,0,-0.1,0.2);

	this.hit6 = new lib.Collision();
	this.hit6.name = "hit6";
	this.hit6.parent = this;
	this.hit6.setTransform(29,16.1,1,1,0,0,0,-0.1,0.2);

	this.hit5 = new lib.Collision();
	this.hit5.name = "hit5";
	this.hit5.parent = this;
	this.hit5.setTransform(3.2,25.8,1,1,0,0,0,-0.1,0.2);

	this.hit4 = new lib.Collision();
	this.hit4.name = "hit4";
	this.hit4.parent = this;
	this.hit4.setTransform(-17.9,26.9,1,1,0,0,0,-0.1,0.2);

	this.hit3 = new lib.Collision();
	this.hit3.name = "hit3";
	this.hit3.parent = this;
	this.hit3.setTransform(-27.6,-11.5,1,1,0,0,0,-0.1,0.2);

	this.hit2 = new lib.Collision();
	this.hit2.name = "hit2";
	this.hit2.parent = this;
	this.hit2.setTransform(-10.4,-22.7,1,1,0,0,0,-0.1,0.2);

	this.hit1 = new lib.Collision();
	this.hit1.name = "hit1";
	this.hit1.parent = this;
	this.hit1.setTransform(4.7,-27.2,1,1,0,0,0,-0.1,0.2);

	this.hit0 = new lib.Collision();
	this.hit0.name = "hit0";
	this.hit0.parent = this;
	this.hit0.setTransform(27.2,-31.2,1,1,0,0,0,-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hit0},{t:this.hit1},{t:this.hit2},{t:this.hit3},{t:this.hit4},{t:this.hit5},{t:this.hit6},{t:this.hit7},{t:this.hit8}]}).to({state:[]},14).wait(1));

	// Wing
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C90102").s().p("AB4BlIiDg4IgegQIgqgZIgvgfQgFgFgCgIQgCgGACgJQADgRAOgPQAPgPASgDQAIgBAHABQAIACAEAEIBgBxIBWBPIABACIACABIAOALg");
	this.shape.setTransform(-23.2,-15.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C90102").s().p("AAeBHIh5iAIgIgKIgDgFQgDgDAAgEIgBgHQABgIADgHQAIgQARgKQATgKARABQAIAAAHAEIAGAEIAEAFIBZDHIAiA9g");
	this.shape_1.setTransform(-20.1,-18.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C90102").s().p("AAlBzIgng/IAAgBIgBgCIgag1IgVg6IgMgxQAAgIAEgGQACgFAIgFQAOgKAVgBQAUgBAPAJIALAKQAEAHAAAFIgEBaIAEA6IABADIAAABIAAACIALA9IAOAwg");
	this.shape_2.setTransform(-15.6,-19.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C90102").s().p("AAZA/IhCgiIgqgZIgvgfQgFgFgCgIQgCgGACgJQADgRAOgPQAPgPASgDQAIgBAHABQAIACAEAEIBgBxIBWBPIABACIACABIAOALg");
	this.shape_3.setTransform(-23.2,-15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C90102").s().p("AABAsIhkhvIgDgFQgDgDAAgEIgBgHQABgIADgHQAIgQARgKQATgKARABQAIAAAHAEIAGAEIAEAFIBZDHIAiA9g");
	this.shape_4.setTransform(-20.1,-18.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C90102").s().p("Ah/AyQgNgCgIgQQgIgQACgTQADgVALgNQALgNAOABQASACD8BPQjvASglAAIgGAAg");
	this.shape_5.setTransform(-24.8,-7.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C90102").s().p("AhXBrQgQgDgQgPQgOgPgDgRQgBgJABgHQADgHAFgFIAugfQAtgbAsgXICCg3IgnAkIgIAHIg1A0QggAhggAoIggAoQgFAFgHABIgIABIgIgBg");
	this.shape_6.setTransform(-23.1,6.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C90102").s().p("AhOCEQgSgJgJgRQgDgFgBgJQAAgIAEgHIADgGIA3hDIADgCIACgCIAqgtIBuheIgXAmQgHALgPAcIgYAvQgLAWgLAZIgDAGIgBACIgeBPIgDAGQgDAGgHADQgGAFgIAAIgHABQgOAAgPgIg");
	this.shape_7.setTransform(-20.3,9.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C90102").s().p("AgwCJQgIgGgCgFQgEgHAAgHIACgMIAKgkIACgGIADgKIAqhgIABgCIAAgBIAcguIABgCIACgCIAiguIgOAxIgLA9IAAACIAAABIgBADIgEBRIAEBEQAAAEgEAHIgLAKQgPAIgUAAQgVAAgOgKg");
	this.shape_8.setTransform(-15.6,10.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C90102").s().p("AgwCJQgIgGgCgFQgEgHAAgHIACgMIAKgkIAVg8IAag0IABgCIAAgBIAcguIABgCIACgCIAiguIgUBQIgFAeIAAACIAAABIgBADIgEBRIAEBEQAAAEgEAHIgLAKQgPAIgUAAQgVAAgOgKg");
	this.shape_9.setTransform(-15.6,10.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C90102").s().p("AAaBjIgcgvIAAgBIgBgCIgag1IgVg6IgMgxQAAgIAEgGQACgFAIgFQAOgKAVgBQAUgBAPAJIALAKQAEAHAAAFIgDAqIADBqIABADIAAABIAAACIASBXIAHAWg");
	this.shape_10.setTransform(-15.6,-19.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6},{t:this.shape_7}]},1).to({state:[{t:this.shape_6},{t:this.shape_7},{t:this.shape_8}]},1).to({state:[{t:this.shape_6},{t:this.shape_7},{t:this.shape_9}]},1).to({state:[{t:this.shape_6},{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_10},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[]},1).wait(1));

	// Eye
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D4EBFF").s().p("AgDACQABgDAEgBQAFAFgHAAIgDgBg");
	this.shape_11.setTransform(24.8,-14.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D4EBFF").s().p("AgDACQACgDADgBQAEAFgGAAIgDgBg");
	this.shape_12.setTransform(24.6,-14.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C90102").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_13.setTransform(28.6,-5.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C90102").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_14.setTransform(28.6,-5.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C90102").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_15.setTransform(28.5,-5.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C90102").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_16.setTransform(28.4,-7.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C90102").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_17.setTransform(28.4,-7.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C90102").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_18.setTransform(28.4,-7.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C90102").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_19.setTransform(28.5,-6.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C90102").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_20.setTransform(28.5,-6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C90102").s().p("AgBAVIgFgmQAAgBAAAAQAAAAAAgBQABAAAAAAQABAAAAgBIACAAQAIANABASQABAKgIAAIgBAAg");
	this.shape_21.setTransform(28.8,-7.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C90102").s().p("AgDARQgCgRACgOQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAABAAQAGALgBAOQAAAIgGAAIgCAAg");
	this.shape_22.setTransform(28.5,-7.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C90102").s().p("AgDAEQgCgFAFgBIACgBIACABIAAABQAAAFgFAAIgCAAg");
	this.shape_23.setTransform(28.5,-7.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C90102").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_24.setTransform(28.5,-7.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C90102").s().p("AgDADQgBgFAGAAIACABIABAAQgCAEgDAAIgDAAg");
	this.shape_25.setTransform(28.3,-8.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C90102").s().p("AgDADQgBgEAFgBIABgBIACABIAAABQgBAFgDAAIgDgBg");
	this.shape_26.setTransform(28.3,-8.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C90102").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_27.setTransform(28.2,-8.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C90102").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_28.setTransform(28.3,-8.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#AECCE7").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_29.setTransform(27.6,-8.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#AECCE7").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_30.setTransform(27.7,-7.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#AECCE7").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_31.setTransform(27.5,-7.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#AECCE7").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_32.setTransform(27.5,-7.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#AECCE7").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_33.setTransform(27.6,-7.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#AECCE7").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_34.setTransform(27.7,-5.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#AECCE7").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_35.setTransform(27.7,-6.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#AECCE7").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_36.setTransform(27.6,-6.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#AECCE7").s().p("AgEADQAAgFAGAAIACABIAAAAQgBAEgDAAIgEAAg");
	this.shape_37.setTransform(27.7,-6.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#AECCE7").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_38.setTransform(27.7,-5.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#AECCE7").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_39.setTransform(27.7,-5.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#AECCE7").s().p("AgCAJQgGgMAJgGQAIAJgHAJIgCABIgCgBg");
	this.shape_40.setTransform(27.5,-5.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#AECCE7").s().p("AgDADQgBgEAFgBIABgBIACABIAAABQgBAFgDAAIgDgBg");
	this.shape_41.setTransform(27.6,-5.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#AECCE7").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_42.setTransform(27.7,-4.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#AECCE7").s().p("AgEADQgDgIAIgCQAEAEABAGIAAAAQgEAFgCAAQgCAAgCgFg");
	this.shape_43.setTransform(27.5,-5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D4EBFF").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_44.setTransform(24.1,-17.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D4EBFF").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_45.setTransform(23.9,-17.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#D4EBFF").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_46.setTransform(24,-17.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D4EBFF").s().p("AgDADQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQACgCADAAQAGAFgIAAIgDAAg");
	this.shape_47.setTransform(24.3,-17.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D4EBFF").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_48.setTransform(24.2,-17.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D4EBFF").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_49.setTransform(24.4,-17);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D4EBFF").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_50.setTransform(24.5,-16.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D4EBFF").s().p("AgDADQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQACgDADgBQAIAHgJAAIgDgBg");
	this.shape_51.setTransform(24.7,-16.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#D4EBFF").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_52.setTransform(24.7,-16.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D4EBFF").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_53.setTransform(24.7,-16.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D4EBFF").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_54.setTransform(24.8,-16.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#D4EBFF").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_55.setTransform(25,-16);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#D4EBFF").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_56.setTransform(25.1,-15.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#D4EBFF").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_57.setTransform(25,-15.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D4EBFF").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_58.setTransform(25.1,-15.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#D4EBFF").s().p("AgDADQAAgFAEAAIADABIABAAQgCAEgDAAIgDAAg");
	this.shape_59.setTransform(24.9,-15.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#D4EBFF").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_60.setTransform(24.9,-15.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#D4EBFF").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_61.setTransform(24.8,-15.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#D4EBFF").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_62.setTransform(24.7,-14.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#D4EBFF").s().p("AgEADQAAgFAGAAIACABIAAAAQgBAEgDAAIgEAAg");
	this.shape_63.setTransform(24.5,-14.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#D4EBFF").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_64.setTransform(24.3,-13.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#D4EBFF").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_65.setTransform(24.1,-13.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#D4EBFF").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_66.setTransform(23.9,-12.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#C90102").s().p("AgEAHQgDgPAKgIIACABIAAABQAAAQgBAOQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAQgFgCgBgIg");
	this.shape_67.setTransform(0,-3.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#C90102").s().p("AgCAKIgCgGQgCgLAIgFQAEAIgCALQgBAGgCAAQgBAAgCgDg");
	this.shape_68.setTransform(0.1,-3.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#C90102").s().p("AgCAGQgFgHAHgDIABgBQAKAIgNADg");
	this.shape_69.setTransform(0.1,-4.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#C90102").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_70.setTransform(0.2,-3.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#C90102").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_71.setTransform(0.2,-3.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#C90102").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_72.setTransform(0.3,-2.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#C90102").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_73.setTransform(0.3,-2.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#AECCE7").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_74.setTransform(1,-4.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#AECCE7").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_75.setTransform(1.1,-4.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#AECCE7").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_76.setTransform(1,-4.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#AECCE7").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_77.setTransform(1,-4.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#AECCE7").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_78.setTransform(1,-3.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#AECCE7").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_79.setTransform(1,-3.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#AECCE7").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_80.setTransform(1.1,-2.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#AECCE7").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_81.setTransform(1.2,-2.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#AECCE7").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_82.setTransform(1.1,-2.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#AECCE7").s().p("AgDADQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQABgDAEAAQAGAFgIAAIgDAAg");
	this.shape_83.setTransform(1.1,-2.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#AECCE7").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_84.setTransform(1.2,-2.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#AECCE7").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_85.setTransform(1.3,-2.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#C90102").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_86.setTransform(0.2,-4.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#C90102").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_87.setTransform(0.1,-4.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#C90102").s().p("AgDAIQgDgMAIgFQAIALgKAHIgCABQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBg");
	this.shape_88.setTransform(0.1,-4.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#C90102").s().p("AgEAXQgDgXAIgUQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAIACABIABABQgCAVgEAUQAAABAAAAQAAAAAAAAQgBABAAAAQgBAAAAAAIgCAAg");
	this.shape_89.setTransform(0.3,-5.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#C90102").s().p("AgFAXQgCgXAJgVQAAAAAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIACABIABAAQgDAVgEAVQgBABAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgCAAg");
	this.shape_90.setTransform(0.1,-5.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#C90102").s().p("AgGAUQgEgXAOgQIABgBIACACIABAAQgGASgDATQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgCAAg");
	this.shape_91.setTransform(0,-6.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#C90102").s().p("AgEAVQgDgVAHgTQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIADABIAAAAQgCAUgEASQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgCAAg");
	this.shape_92.setTransform(0,-5.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#AECCE7").s().p("AgDADQAAgFAFAAIACABIAAAAQgBAEgDAAIgDAAg");
	this.shape_93.setTransform(1.4,-5.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#AECCE7").s().p("AgCAEQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBgBABAAQAAgEAEAAQAMAHgMAAIgCAAg");
	this.shape_94.setTransform(1.3,-5.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#AECCE7").s().p("AgEAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAAAIADgBIAFACIAAAAQgDAFgCAAQgCAAgCgEg");
	this.shape_95.setTransform(1.3,-5.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#AECCE7").s().p("AgEACQgCgEAGgBQAMAHgOAAIgCgCg");
	this.shape_96.setTransform(1.3,-5.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#AECCE7").s().p("AgFAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBABAAIADgBIAFADIABAAQgEAEgCAAQgCAAgDgEg");
	this.shape_97.setTransform(1.4,-5.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#AECCE7").s().p("AgDAEQgBgGAGgBQAGAGgKABg");
	this.shape_98.setTransform(1.4,-4.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#AECCE7").s().p("AAAAGQgDgFgEgBQAAgEAEgCIACAAQAQAGgNAHIgBAAIgBgBg");
	this.shape_99.setTransform(1.5,-4.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#AECCE7").s().p("AgGAGQgIgHAAgJQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIABgBQANANALAMIgBABIgEABQgIAAgHgIg");
	this.shape_100.setTransform(1.2,-5.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#D4EBFF").s().p("AgDACQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAQACgCACgBIADABIABAAQAAAGgEAAQgBAAgDgCg");
	this.shape_101.setTransform(2.5,-5.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#D4EBFF").s().p("AgEAEQgBgFAFgCIACgBIADABIAAAAQgBAIgGAAIgCgBg");
	this.shape_102.setTransform(1.2,-6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#D4EBFF").s().p("AgDAEQgCgFAGgCIABgBQAHAHgLABg");
	this.shape_103.setTransform(1.6,-5.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#D4EBFF").s().p("AgFAEQgBgHAHgBQAJAEgIAFIgCAAIgFgBg");
	this.shape_104.setTransform(1.5,-6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#D4EBFF").s().p("AgDAFQgCgHAHgDQAHAIgLACg");
	this.shape_105.setTransform(1.3,-6.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#D4EBFF").s().p("AgDAEQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQABgFAFgBQAHAJgJAAIgDgBg");
	this.shape_106.setTransform(1.3,-6.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#D4EBFF").s().p("AgCAEQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBABgBQACgCADgBQAHAHgKAAIgBAAg");
	this.shape_107.setTransform(1.6,-6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#D4EBFF").s().p("AgFAEQAAgIAHgDIADABIABAAQABAMgKACQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_108.setTransform(1.1,-6.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#AECCE7").s().p("AgDAEQgBgFAFgBIABgBQAHAGgLABg");
	this.shape_109.setTransform(1,-6.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#AECCE7").s().p("AgDAKQgEgMAIgGIABAAQAIAMgNAGg");
	this.shape_110.setTransform(1,-5.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#AECCE7").s().p("AgDAMQgFgNAHgMQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAABAAQADAGACAIQABAHgEAFQgCADgBAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBgBAAgBg");
	this.shape_111.setTransform(1.4,-2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#AECCE7").s().p("AgDAIQgEgJAHgGIABAAQAKALgOAEg");
	this.shape_112.setTransform(1.6,-1.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#AECCE7").ss(0.1,1,1).p("AgBghQgDAjAHAg");
	this.shape_113.setTransform(1.1,-2.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#D4EBFF").s().p("AgHABQgDgCADgDQACgCADgBQACABAAAFQAFABAFADQgEAFgEAAQgEAAgFgHg");
	this.shape_114.setTransform(1.6,-6.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#AECCE7").s().p("AgDADQgHgFAKgCQAMAEgKAFIgCAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_115.setTransform(1.6,-4.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#AECCE7").s().p("AgFAAQAAgEACgFQACgDACgBIADABIABAAIABAXQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgBABQgJAAAAgOg");
	this.shape_116.setTransform(1.3,-4.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#AECCE7").s().p("AgCAJQgIgNALgHQADAHACAHQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQgCAEgCAAQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAgBgBAAg");
	this.shape_117.setTransform(1.6,-3.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#AECCE7").s().p("AADAOQgEgCgDgHQgCgGAAgGQAAgGAGAAQAJANgDAOIgBAAIgCAAg");
	this.shape_118.setTransform(2.1,-3.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#C90102").ss(3.1,1,1).p("AAMAAIgXAA");
	this.shape_119.setTransform(-0.9,-4.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#C90102").ss(0.1,1,1).p("AgBA4QgCg5AFg2");
	this.shape_120.setTransform(0.7,-8.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#C90102").ss(0.1,1,1).p("AgCAjQgCgjAIgi");
	this.shape_121.setTransform(0.8,-6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#C90102").s().p("AgGASQAAgXAIgTQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIACABIABAAIgGAzQAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAAAQgGgBAAgIg");
	this.shape_122.setTransform(0.3,-6.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#AECCE7").ss(1,1,1).p("AgDgYIAHAx");
	this.shape_123.setTransform(1.4,-2.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#D4EBFF").ss(1,1,1).p("AgHAdIAPg5");
	this.shape_124.setTransform(1.7,-9.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#C90102").s().p("AgDgKQABgIAIgCQgEASABASIAAAAQgDAEgFABQAAgQACgPg");
	this.shape_125.setTransform(0.6,-5.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#D4EBFF").s().p("AADgIQgBAHADAEIAAAAQgDAEgEACQgHgLAMgGg");
	this.shape_126.setTransform(1.3,-6.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#AECCE7").s().p("AgEAGIgBgEIAAgCIAHgFQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAIAAABIgEACIAAAAIADACQgFAEgDAAIgBAAg");
	this.shape_127.setTransform(0.8,-5.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#AECCE7").s().p("AADgFIAAAAQAAADACACIAAAAQgDAEgEACQgEgHAJgEg");
	this.shape_128.setTransform(1.2,-4.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#AECCE7").s().p("AAAAHQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAAAgBgBIAAgCIAAgCIAAAAIAAgDQAAgBABAAQAAAAAAAAQAAAAAAgBQABAAAAAAIACgBIACABQABABABAAQAAAAAAABQABAAAAAAQAAABAAAAIAAAEIgBACIAAABIgBABIgCABIgBAAg");
	this.shape_129.setTransform(5.9,-1.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#AECCE7").s().p("AAAAHQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBIgBgCIAAgBQgBgCABgCIAAgBIAAgBIAAAAQABgBAAAAQAAgBABAAQAAAAABAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABABIAAAAIABADIAAAAQABABgBAEQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAAAAAIgDABIgBAAg");
	this.shape_130.setTransform(5.9,-1.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#410000").s().p("AgDAEIgBgCIAAgCIAAgBIABgBIADgCIAAAAIADABIABACIABACIgBACIgBABQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgDgBg");
	this.shape_131.setTransform(6.8,-1.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#410000").s().p("AgDAEIgBgBIAAgBIgBgCIABgBIAAgBIABAAIACgCIABAAIADABIABABIAAABIABACIgBACIgBABIgDABQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_132.setTransform(6.9,-1.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#410000").s().p("AgDAEIgBgCIAAgCIAAgBIABgBIADgCIAAAAIADABIABACIABACIgBACIgBABQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgDgBg");
	this.shape_133.setTransform(6.9,-1.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#410000").s().p("AgDAEIgBgCIAAgCIAAgBIABgBIADgCIAAAAIADABIABACIABACIgBACIgBABQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgDgBg");
	this.shape_134.setTransform(6.9,-1.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#AECCE7").s().p("AgDAGIgCgDIABgDIAAgBQgBgEADgBIABgBQACgCADAEIABAAIAAACIABACIgBAHIgBAAIgBABQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAAAAAQgDgBAAgCg");
	this.shape_135.setTransform(5.9,-1.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#AECCE7").s().p("AAAAIIgCgBQgCgCAAgEIAAgCIAAgDIACgCIABgBQACgCADAEIAAAAQACACgBADIAAAAQABADgCADIAAAAIgBABIgCACIgBgBg");
	this.shape_136.setTransform(5.8,-1.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#AECCE7").s().p("AAAAIIgDgBIgBgDQgBgEACgEQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAAAAIACgCIADABIABACIAAAAIABAEIgBABIAAAEIgBACIgCABIgBAAg");
	this.shape_137.setTransform(5.8,-1.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#AECCE7").s().p("AAAAFQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBgBIAAgBIgBgCIABABIAAgBIABgCQADgCABABIADACIABACIAAgBIABADIgBAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABgBAAIgEABIAAAAg");
	this.shape_138.setTransform(5.8,-1.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#AECCE7").s().p("AgFADIAAgDIABgBIAAgBIABgBIABgBIADgBIADABIABACIABACIgCACIAAABQgBADgDAAQgEAAgBgDg");
	this.shape_139.setTransform(5.8,-1.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#410000").s().p("AgCAGIgCgDIAAgFIABAAIAAgCIABgBIACgBIADABQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAAAABIABACQAAAAAAABQAAAAAAAAQAAABAAABQAAAAAAABIgBACQgBAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAIgCgBg");
	this.shape_140.setTransform(16.4,9.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#410000").s().p("AgDAFIgBgCIAAgFIAAAAIAAgBIABAAIAAgBIADgCIADACIABABIAAACIABAAIAAAEQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgDgCg");
	this.shape_141.setTransform(16.3,9.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#410000").s().p("AgBAGIgDgDIAAgDIAAAAIABgDIABgBIACgCIADACIABABIAAAAIABACQABACgCACIAAABIgBABIgDABIAAAAIgBAAg");
	this.shape_142.setTransform(16.6,9.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#410000").s().p("AgDAEIAAgCIgBgCIAAgCIABgCIACgBIABgBIADACQAAAAAAABQABAAAAAAQAAABAAAAQABAAAAABIAAABQABACgCADIgBABIgDABQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBg");
	this.shape_143.setTransform(16.7,9.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#410000").s().p("AgGAEQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgBAAAAIABgBIACgBIABgBIACgBIADgBIADAAIACACIABADIgCACIgCACIgDACIgCABQgEAAgBgDg");
	this.shape_144.setTransform(16.4,9.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#410000").s().p("AgCAFIgDgDIAAgCQAAAAAAAAQgBgBABAAQAAgBAAAAQABgBAAAAIABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAIADABIADACIAAAAIAAADIgBACIgEACIgBABg");
	this.shape_145.setTransform(16.3,10);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#D4EBFF").s().p("AgCAHIgCgFIgBgDIgBAAIAAgCQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAIADgBQABgBADADQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABIABACIABACQABAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgBACQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAgBgBg");
	this.shape_146.setTransform(22.5,-12.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#D4EBFF").s().p("AgDAHIgCgFIAAgFQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAgBgBIACgBIADgCIABABIACACIABAEIABABIABACIAAAAIAAADIgBABQAAACgFAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_147.setTransform(22.7,-11.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#AECCE7").s().p("AAAAFIAAgBIAAAAIAAgCIgBgCIABgBIAAgBIAAgBIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABABIAAABIAAADIgBABIAAABIAAABIgBAAIAAAAg");
	this.shape_148.setTransform(23.4,-7.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#AECCE7").s().p("AAAAFIAAgBIAAgCIgBgCIABgBIAAgBIAAgBIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAIABABIAAABIAAADIgBABIAAABIAAABIgBAAIAAAAg");
	this.shape_149.setTransform(23.5,-7.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#AECCE7").s().p("AAAAGIAAgBIAAgBIgBgEIABAAIAAgDIAAgBIAAgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAgBAAQAAAAAAAAIABABIAAAGIgBABIAAABIAAABIgBAAIAAAAg");
	this.shape_150.setTransform(23.4,-7.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#AECCE7").s().p("AgBAFIgBgBIAAgCQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAIABAAIAAgCIAAgBIABgBIABAAIADABIAAAAIABABIAAACQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIAAABIgBABIAAABIAAAAIgCAAg");
	this.shape_151.setTransform(23.7,-7.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#AECCE7").s().p("AAAAGIgBgBIAAgEIAAgCQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIABgCQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBABIABgBIAAADIABABIAAAEIgBACIAAABIgBABg");
	this.shape_152.setTransform(23.5,-7.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#AECCE7").s().p("AACANIgCgEIAAgBIgEgPIABgEIABgBIABAAIABABIAAADIACAIIACAEQABAEgBAEIgBABIgBAAg");
	this.shape_153.setTransform(23.3,-8.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#6D0000").s().p("AgBACIgEgMQAAgDACgCIADADIABAKIAEALQABAEgCADQgDgDgCgLg");
	this.shape_154.setTransform(22.1,-10.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#6D0000").s().p("AAEAPQgCgBgBgDIAAgEIgEgIIAAgDIgCgDIAAgCIABgFIACAAIABABIAFAPQADAJgCAEIgBAAIAAAAg");
	this.shape_155.setTransform(21.8,-11.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#D4EBFF").s().p("AgIAJIAAgBIADgFIABgDQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIABgCIAAgBIABgCIAAgDQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAAAAAIABAAIAFAAQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIgBAEQAAAAgBAAQAAABAAAAQAAABAAAAQAAAAAAAAIgGAIQgBACgCAAIgCAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAAAg");
	this.shape_156.setTransform(23.4,-12.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#D4EBFF").s().p("AgGAGIgBgDIABgBIAAgCIABgCIADgBIABgCIADgBIABAAIACAAIACACQABAAAAABQAAAAAAAAQAAABgBAAQAAAAAAABIgCABIgCADIgBADIgBABIgDAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_157.setTransform(23.6,-12.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#AECCE7").s().p("AgIAPIgBgBIAKgHQgMAGABgDIABABIgBgCIACgCIAAgBIAAAAIACgDIACgBIAAgCIABAAIABgCIAAgBIAAgBIABgCIABgBIAAgCIAAAAIAAgCIACgCIAEgBIADABIABAAIABACIgBABIAAAAIAAABIgBABIgBAEIgBACIgBABIABABIgBAAIgBACIAAAAIgBABIAAABIgDADIAAABIgBAAQABAAAAABQAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABIAAABIgBAAIAAABIgCABIgDAAIgCAAg");
	this.shape_158.setTransform(23.8,-11.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#D4EBFF").s().p("AgEgCIAAAAIgBgBIAIgDIABABIAAABIABAAIABAEIAAACIAAABQgCABgEgBIADAEg");
	this.shape_159.setTransform(22.8,-10.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#D4EBFF").s().p("AgBAGIgCgBIAAgDIgBgBIgBgDQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAIABgBQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIAAgBIADACIABACIABABIABABIAAAEIAAABIgCABIgBAAIgCABIgCgBg");
	this.shape_160.setTransform(22.7,-11.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#6D0000").s().p("AACAPIgCgCQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAAAIAAgBIgBAAIAAgDIgBgBIAAgBIgBgBIAAgCIAAgDIgBAAIgBAAIAAgBIgBgCIgBgCIAAgBIAAgBIABgBIgBgBIgBgBIAAgBIgBgBQAAgBABAAQAAAAAAAAQAAgBAAAAQABAAAAAAIADAAIAEAAIAAAAIAAABIABACQABAAAAAAQABAAAAAAQAAAAAAABQgBAAAAAAIAAAAIAAACIACAAQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAABAAIAAABIABABIAAABIABABIAAABIAAACIAAABIAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIABACIABADIAAAAQABAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAIABABIAAACIgBABIgBABIgBAAIgCAAIgCAAg");
	this.shape_161.setTransform(21.8,-10.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#AECCE7").s().p("AgBAFIgDgBIAAgFIAAgCQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIADAAIAAgBIACABIADABIAAACIAAAFIgCABIgDABg");
	this.shape_162.setTransform(5.9,-1.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#410000").s().p("AgBADIgFgCIgCgCIgBgBIAAgCIAEAAIABAAIAEABIABACIAEACIAFABIAAABIgBABIgFABQgEAAgBgCg");
	this.shape_163.setTransform(7.3,-1.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#6D0000").s().p("AgGAFQgDgDABgDIABgCIABgBQAAgBABAAQAAAAABAAQAAgBABAAQAAABABAAIACABIADAAIADABIACACIAAABQABABAAAAQAAAAAAABQAAAAgBABQAAAAgBABQgDADgEgCQAAAAgBABQAAAAAAAAQgBAAAAAAQAAABgBAAIgDgCg");
	this.shape_164.setTransform(7.2,-2.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#AECCE7").s().p("AgGAKIgCgEQABgEACgCQAAgDADgCQgBgEAEgBQAEgCADAEQABADgBADIgBACIgDAGIgBACIgCACIgDACQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBg");
	this.shape_165.setTransform(24.3,-11.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#D4EBFF").s().p("AAAAHIgCgCIgDgEIgBgBIAAgBQgBgDACgCQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAABIABADIADACQACADgCADIgBABIgDACIgCgCg");
	this.shape_166.setTransform(23.2,-12.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#D4EBFF").s().p("AgGAMQgDgDAAgFQAAgDABgCIAFgFIADgFQADgCACAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAIABADIgBAGIgHAPQgBAAAAABQgBAAAAAAQAAABAAAAQgBAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_167.setTransform(23,-11.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#D4EBFF").s().p("AgEAMQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgDACgDIAFgJIACgEQAAAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAEABAAAEQAAADgCADIgCADQgBAEgEAEIgCABIgCAAg");
	this.shape_168.setTransform(23,-11.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#6D0000").ss(0.5,1,1).p("AgVAVQANAEAegu");
	this.shape_169.setTransform(20.1,-7.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#6D0000").ss(0.1,1,1).p("AhPBQQAAgCAAgCQgEg7ARgdAgKhOQBEgNAWBc");
	this.shape_170.setTransform(14.4,-10.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#410000").ss(0.1,1,1).p("AhUgbIAAAFQAQBqA9APIAAAAIAAAAQABABABAAQAEABACgBIALAAIAAAAQACgBACgBIgEACIAAAAIAAAAIAAAAQAAAAABAAAA+A3QAdgugIhdIgFgPAgHBjIAIABQACAAABgBQAFABADAAAgHBjIAAAAQAHAAAEAAAgFBkIgCgBAATBhIgCABIABgBIAAAAIABgBQgDACgEACAAQBiIACgBAAQBkQADgCAAgBQAFABAMgIQANgKANgZAARBiQgCABgDABAAPBkIACgCAASBhQgCABgEACAATBgIArgp");
	this.shape_171.setTransform(14.9,0.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#AECCE7").s().p("AhbBkQgqg8gChRIAAgPIABAPIAAgTIAHAGIACACIABAAQATARAUAIIAFACIAAAEIAAAEQAQBqA9AQIAAAAIADAAIAGABIAKAAIAAAAIAAAAIAAAAIABAAIABgBIABAAIABAAIAEgCQAEAAAMgIQANgJANgaQAdgugIhcIgFgQIgDAEQgLARgOAOIACgCIACgEIABgBIAFgHIABgBIADgFIABgBIADgEIAEgHQALgNADgHIABgBIABgDIAJgWIAAAAIACgEIAAgBIAAgBIAEgJIACgGIACAEIABACQAVAsABArIABADIAAAFIAAAQQABgZgDgXIACANIAAAFIABATIAAAHIAAAEQgBBPgmA7QgnA6g3ADIgEABQgzAAgng7gAhQgVIABgEIAEACIgCgBIgCADIgBAAg");
	this.shape_172.setTransform(14.5,0);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#D4EBFF").s().p("Ag9BrIgFgBQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABAAIAHAEIgFgCgAhIBoQgTgIgUgRIAAAAIgDgDIgGgFIgBgBIAAgHIAAAAQAEhAAhgyQApg8A5ADQA5ADAoA5IADAFIAFAHIAAABIABABIAAABIACADIAAABIAAABIgMgTIAAgBIALAUIABABIgBADIgEANIAAABIgBABIgEAJIgHAPIAAABIgBABIgBABIgEAJIgBACIAFgJQgCAGgLAOIAAAAIAAAAIABgCIADgDIgBgFQgXhchFAOIgBgDQgNgNgSAAQgSAAgNANQgMANAAASQAAASAMALIAJAHQgRAeADA8IgFgCg");
	this.shape_173.setTransform(13.1,-13.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#6D0000").s().p("AhNBLIADABIAFABIgHgEQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAgBAAIAAAEIAAgEQgEg8ARgdQAKAGAMAAQASAAANgNQANgMAAgSQAAgQgKgMQBEgOAWBdIABAEIgCADIgCACIAAAAIAAAAIgBACIgDAFIgEAEIAAABIgEAFIAAABIgFAHIgBABIgBABIgEAFIAAAAIgJAJIADgDIADgBIgGAEIgHAGIgDACQgjAaglAAQgUAAgUgIg");
	this.shape_174.setTransform(14.4,-10);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#410000").s().p("AAMBkIAFgCIgFACIAGgDIgBABIACgBIgDADIgBAAIACgCIgCACIgBAAIgBAAIgBAAgAAMBkIAAAAIAEgCIgEACIAAAAgAAQBiIgEACIAHgEIgBABIgCABIACgBIAAAAIgGADgAAMBkIAAAAIgIgBIgLAAIAAAAIAAAAIAAAAIAAAAQg9gPgQhqIAAgFIABABIABgEQA5AWA3gnIADgCIAIgGIAFgFIgCACIAFgFIABgBIAAgBQAOgNALgSIADgDIAFAPQAIBdgdAuIgrApIgHAEgAAMBkIAAAAgAASBhIAAAAIABgBIArgpQgNAZgNAKQgMAIgFgBIgCABgAA+A3IAAAAg");
	this.shape_175.setTransform(14.9,0.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgVAlIgJgHQgNgMAAgSQAAgRANgNQANgNARAAQASAAAMANIADADQAKAMABAPQgBASgNAMQgMANgSABQgLgBgKgGg");
	this.shape_176.setTransform(10,-15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).to({state:[]},14).wait(1));

	// Body
	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#C90102").s().p("AAEgIQABAGAAAGIAAAAQgEAEgEABQgDgMAKgFg");
	this.shape_177.setTransform(1.2,-5.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#CCCCCC").s().p("AgVAOIArgbQgUAQgWALIgBAAg");
	this.shape_178.setTransform(25.4,19.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#CCCCCC").s().p("AABgBIADgBIACAAIAAAAQgFADgEACIgCAAQADgDADgBg");
	this.shape_179.setTransform(26,19.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#CCCCCC").s().p("AgDACIAHgEQABAEgHAAIgBABIAAgBg");
	this.shape_180.setTransform(25.5,19.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#CCCCCC").s().p("AgGAFQAFgFAIgEIAAAAQgFAGgIADg");
	this.shape_181.setTransform(26.4,19);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AACgCIABAAIACABIAAAAQgEADgFABQADgDADgCg");
	this.shape_182.setTransform(26.7,18.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgDACIAGgDIABAAIgGADg");
	this.shape_183.setTransform(26.6,18.2);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AAAAAIACgBIADAAIAAAAQgFAEgEgBIAEgCg");
	this.shape_184.setTransform(27,18.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgDADIAHgFIAAAAIgHAFg");
	this.shape_185.setTransform(26.9,18.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgDAAIgBAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAABAAIAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABAAIAAAAQgCACgDAAIgDgCg");
	this.shape_186.setTransform(20.8,18.7);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgDAAIgBAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAIABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABAAIAAAAQgCACgDAAIgDgCg");
	this.shape_187.setTransform(16.4,19);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgEAAIAAAAQAAAAAAAAQAAAAABAAQAAgBABAAQAAAAABAAIABAAQADAAACABIAAAAQgCACgDAAIgEgCg");
	this.shape_188.setTransform(16.2,19);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AgDAAIgBAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAABAAIAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABAAIAAAAQgCACgDAAIgDgCg");
	this.shape_189.setTransform(15.9,19);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AgDAAIgBAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAIABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABAAIAAAAQgCACgDAAIgDgCg");
	this.shape_190.setTransform(15.2,19);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgEAAIAAAAQAAAAAAAAQAAAAABAAQAAgBABAAQAAAAABAAIABAAQADAAACABIAAAAQgCACgDAAIgEgCg");
	this.shape_191.setTransform(15.2,19.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AgEAAQAAAAAAAAQAAAAABAAQAAAAAAgBQABAAAAAAIACAAQADAAACABQgCACgDAAQgBAAgDgCg");
	this.shape_192.setTransform(14.6,19);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgEAAIAAAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAABAAIAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAAQgCACgDAAIgEgCg");
	this.shape_193.setTransform(14.8,19);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgDAAIgBAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAIABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAAQgCACgDAAIgDgCg");
	this.shape_194.setTransform(20.7,18.8);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgDAAIgBAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAIABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABAAIAAAAQgCACgDAAIgDgCg");
	this.shape_195.setTransform(14.2,19);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgkAFIgBAAQAjgGAjgDQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAIABABQgfAHgeAAIgNAAg");
	this.shape_196.setTransform(23.4,18.4);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgPACIAAAAQAMgFAOABQABAAAAAAQABAAABABQAAAAABAAQAAAAABABIAAAAQgJADgJAAIgNgBg");
	this.shape_197.setTransform(21.5,18.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AggACQAbgEAegBIACAAQADAAADACIAAAAQgVAFgVAAQgMAAgLgCg");
	this.shape_198.setTransform(17.5,18.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgXAAQATgDAUABQAEgBADACIABABQgMADgNAAQgKAAgMgDg");
	this.shape_199.setTransform(19.7,19.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgDAAIgBAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAIABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABAAIAAAAQgCACgDAAIgDgCg");
	this.shape_200.setTransform(19.1,19.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgEAAIAAAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAABAAIAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAAQgCACgDAAIgEgCg");
	this.shape_201.setTransform(19.2,19.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgDAAIgBAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAIABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABAAIAAAAQgCACgDAAIgDgCg");
	this.shape_202.setTransform(19.7,19.1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgEAAIAAAAQAAAAAAAAQAAAAABAAQAAgBABAAQABAAAAAAIABAAQADAAACABIAAAAQgCACgDAAIgEgCg");
	this.shape_203.setTransform(18.9,19.2);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgDAAIgBAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAABAAIAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABAAIAAAAQgCACgDAAIgDgCg");
	this.shape_204.setTransform(18.5,19.1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#C90102").s().p("AgUACIAhgEQADgBAEACIABABQgMAEgMAAQgIAAgJgCg");
	this.shape_205.setTransform(25.7,17.8);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#C90102").s().p("AgfAEIA5gIQADAAACACIABAAQgXAHgXAAIgRgBg");
	this.shape_206.setTransform(23.1,18.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#C90102").s().p("AgEAAIAAAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAIABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAAQgCACgDAAIgEgCg");
	this.shape_207.setTransform(-10.2,11.6);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#C90102").s().p("AgDAAIgBAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAIABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABAAIAAAAQgCACgDAAIgDgCg");
	this.shape_208.setTransform(-10.2,11.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#C90102").s().p("AgEAAIAAAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAABAAIAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAAQgCACgDAAIgEgCg");
	this.shape_209.setTransform(-10.1,11.5);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#C90102").s().p("AgEAAIAAAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAABAAIAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAAQgCACgDAAIgEgCg");
	this.shape_210.setTransform(-10.1,11.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#C90102").s().p("AgEAAIAAAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAABAAIAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAAQgCACgDAAIgEgCg");
	this.shape_211.setTransform(-10,11.8);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AgHgBQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAABAAIACgBQAGABAEAFIgGABQgFAAgEgFg");
	this.shape_212.setTransform(-10.5,12.2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AgKAAQgFgDgCgFQgBgDAEABQAQAJAQAMIAAAAIgDAAQgOAAgLgLg");
	this.shape_213.setTransform(-9.2,13);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AgEAAIAAAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAIABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAAQgCACgDAAIgEgCg");
	this.shape_214.setTransform(-10.8,13);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AgBgCIABgBQAFAAAAAFIAAABIgFABQgHAAAGgGg");
	this.shape_215.setTransform(-10.7,12.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AgDAAIgBAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAABAAIAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABAAIAAAAQgCACgDAAIgDgCg");
	this.shape_216.setTransform(-10.7,12.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgDAAIgBAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAABAAIAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABAAIAAAAQgCACgDAAIgDgCg");
	this.shape_217.setTransform(-10.7,12.8);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AgEAAIAAAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAIABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAAQgCACgDAAIgEgCg");
	this.shape_218.setTransform(-10.7,13);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AgEAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAABAAIABAAQADAAACABQgCACgDAAQgBAAgDgCg");
	this.shape_219.setTransform(-10.6,13.1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AgEABQAAgBAAAAQAAAAABgBQAAAAABAAQAAgBABAAIABAAQADAAACACIAAAAQgCADgDAAQgBAAgDgCg");
	this.shape_220.setTransform(-10.7,13.1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AgEAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIACAAQADAAACABQgCACgDAAQgBAAgDgCg");
	this.shape_221.setTransform(-10.8,12.7);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AgEABIAAgBQABgCADABQADgBACACIAAABQgCACgDAAQgCAAgCgCg");
	this.shape_222.setTransform(-10.8,12.5);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AgEABQAAgBAAAAQAAAAABgBQAAAAABAAQAAgBABAAIABAAQAEAAABACIAAAAQgCADgDAAQgBAAgDgCg");
	this.shape_223.setTransform(-10.8,12.3);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AgEAAIAAAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAABAAIAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAAQgCACgDAAIgEgCg");
	this.shape_224.setTransform(-10.8,11.8);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AgDAAIgBAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAIABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABAAIAAAAQgCACgDAAIgDgCg");
	this.shape_225.setTransform(-10.9,12.1);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AgEAAIAAAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAIABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAAQgCACgDAAIgEgCg");
	this.shape_226.setTransform(-10.8,12.3);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AgEAAIAAAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAIABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAAQgCACgDAAIgEgCg");
	this.shape_227.setTransform(-10.8,12.7);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AgEAAIAAAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAIABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAAQgCACgDAAIgEgCg");
	this.shape_228.setTransform(-19.3,16.9);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AgDAAIgBAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAIABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABAAIAAAAQgCACgDAAIgDgCg");
	this.shape_229.setTransform(-12.9,18.1);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AgEAAIAAAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAABAAIAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAAQgCACgDAAIgEgCg");
	this.shape_230.setTransform(-12.7,18.1);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AgEAAIAAAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAABAAIAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAAQgCACgDAAIgEgCg");
	this.shape_231.setTransform(-13.3,18);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AgEAAIAAAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAABAAIAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAAQgCACgDAAIgEgCg");
	this.shape_232.setTransform(-13.5,18);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AgEAAIAAAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAIABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAAQgCACgDAAIgEgCg");
	this.shape_233.setTransform(-12.9,18.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AgEAAIAAAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAABAAIAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAAQgCACgDAAIgEgCg");
	this.shape_234.setTransform(-13.1,18.1);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AgDAAIgBAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAIABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABAAIAAAAQgCACgDAAIgDgCg");
	this.shape_235.setTransform(-13.2,18.1);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#C90102").s().p("AgIgBQAAgDADgBQAFADAIgBIAAABIAAACIABAAIgBAFIgIABQgHAAgBgHg");
	this.shape_236.setTransform(-12.9,17.3);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#C90102").s().p("AgDgEIAAgBQAMgBgEALIAAAAIgDABQgKAAAFgKg");
	this.shape_237.setTransform(-11.4,17.4);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#C90102").s().p("AgDAFQgBgEABgDQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQAIADgEAIIAAAAIgBAAQgDAAgCgBg");
	this.shape_238.setTransform(-12.9,17.2);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#C90102").s().p("AAAgFIABAAQAFAFgGAGIAAAAQgFgGAFgFg");
	this.shape_239.setTransform(-12.9,17.2);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#C90102").s().p("AgHACQAAgCADgBIAEgCQADADAFgBIAAAAQgEAFgFAAIgGgCg");
	this.shape_240.setTransform(-11.2,17.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#C90102").s().p("AgKACQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAAAAIAFgDQAFADAJgBIgBAAQgFAFgGAAQgEAAgFgCg");
	this.shape_241.setTransform(-12.1,17.4);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#C90102").s().p("AgLACQABgCADgBIAAAAIAEgCQAFAEAKgBIgBAAQgGAEgGAAQgFAAgFgCg");
	this.shape_242.setTransform(-12,17.4);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#C90102").s().p("AgNACIABgCIABAAIACgCIAEgBQAHADAMAAIAAAAQgIAEgHAAQgGAAgGgCg");
	this.shape_243.setTransform(-11.7,17.4);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#C90102").s().p("AgMACIAAgBIAHgDIATAAIgBAAQgHAFgIAAQgFAAgFgBg");
	this.shape_244.setTransform(-13.2,17.4);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#C90102").s().p("AgNABIADgCIACgBIACgBQAKABAKACIAAAAQgHAEgHAAQgGAAgHgDg");
	this.shape_245.setTransform(-11.6,17.2);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#C90102").s().p("AgTABQAAAAAAgBQAAAAAAAAQAAAAABAAQAAgBABAAIABgBIACgBIABAAIACgBIAAABIABABQAOACAQAAQgJAFgLAAQgJAAgKgEg");
	this.shape_246.setTransform(-12.5,17.2);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#C90102").s().p("AgNABIAEgCIABgBIABAAIACgBQAIACALAAIAAABQgIAEgHAAQgGAAgGgDg");
	this.shape_247.setTransform(-13,17.1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AgHADQAGgFAHAAIADgBQgGAGgKAAg");
	this.shape_248.setTransform(-13.8,18.6);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AADgDIAAAAQAAABAAAAQAAAAAAAAQABABAAAAQAAAAAAAAQgEADgEACQACgFAFgCg");
	this.shape_249.setTransform(-14.7,18.8);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AgGAKQADgMAKgHIAAAAQgCAMgLAHg");
	this.shape_250.setTransform(-14.4,17.9);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AgEACIgBAAIAHgEIAEACIAAAAQgDADgDAAIgEgBg");
	this.shape_251.setTransform(-13.9,17.5);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AgFACIgBAAIAFgDIACgBIAGABIAAAAQgEAEgEAAIgEgBg");
	this.shape_252.setTransform(-13.6,17.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("AgIACIACgCIAFgCIABAAIAIABIABAAQgFAEgFAAQgDAAgEgBg");
	this.shape_253.setTransform(-12.6,17.6);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AAJgDQgFAGgMABQAIgFAJgCg");
	this.shape_254.setTransform(-11.7,17.9);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AAIgDIABAAQgGAGgKABQAHgGAIgBg");
	this.shape_255.setTransform(-12.3,18.1);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("AgFAFQAEgFAGgEQgCAGgGADIgCAAg");
	this.shape_256.setTransform(-14.6,18.7);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AADgCQgBAAAAABQAAAAABAAQAAAAABAAQABgBACAAQgEAFgJAAQAEgDAFgCg");
	this.shape_257.setTransform(-14.1,18.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AgIABQAGgCAGgBQADAAACACQgFADgEAAQgEAAgEgCg");
	this.shape_258.setTransform(-13.6,18.4);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AgHADQADgEAFgCIACgBQADAAACACIAAAAQgEAHgGAAIgFgCg");
	this.shape_259.setTransform(-14.1,18.4);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFFFF").s().p("AgJACQAGgDAIgBQADAAACACQgGADgFAAQgEAAgEgBg");
	this.shape_260.setTransform(-13,18.1);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFFFF").s().p("AgIAAIABgBQACgCADAAQAHgCAEAFIAAAAQgGAEgDAAQgFAAgDgEg");
	this.shape_261.setTransform(-13.7,18.2);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#C90102").s().p("AgEAAIAAAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAABAAIAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAAQgCACgDAAIgEgCg");
	this.shape_262.setTransform(-18.1,16.7);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#C90102").s().p("AgDAAIgBAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAIABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABAAIAAAAQgCACgDAAIgDgCg");
	this.shape_263.setTransform(-18.2,16.6);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#C90102").s().p("AgEAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIACAAQADAAACABQgCACgDAAQgBAAgDgCg");
	this.shape_264.setTransform(-18.5,16.6);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFFFFF").s().p("AgEAAIAAAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAABAAIAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAAQgCACgDAAIgEgCg");
	this.shape_265.setTransform(-18.6,16.9);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFFFF").s().p("AgDAAIgBAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAIABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABAAIAAAAQgCACgDAAIgDgCg");
	this.shape_266.setTransform(-18.7,16.9);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("AgEAAIAAAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAABAAIAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAAQgCACgDAAIgEgCg");
	this.shape_267.setTransform(-19.1,17.1);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFFFFF").s().p("AgEAAIAAAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAIABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAAQgCACgDAAIgEgCg");
	this.shape_268.setTransform(-18.8,16.9);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFFFFF").s().p("AgEAAIAAAAQABgCADAAQADAAACACIAAAAQgCADgDAAQgBAAgDgDg");
	this.shape_269.setTransform(-19.6,16.9);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFFFFF").s().p("AgGABQADgDAEAAQADAAACACIABAAQgEADgDAAQgCAAgEgCg");
	this.shape_270.setTransform(-19.2,17);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#CCCCCC").s().p("AgEAAIAAAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAABAAIAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAAQgCACgDAAIgEgCg");
	this.shape_271.setTransform(-22.3,17.9);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#CCCCCC").s().p("AgEAAIAAAAQAAAAAAAAQAAAAABAAQAAgBABAAQAAAAABAAIABAAQADAAACABIAAAAQgCACgDAAIgEgCg");
	this.shape_272.setTransform(-22,18.2);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#CCCCCC").s().p("AgEAAIAAAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAABAAIAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAAQgCACgDAAIgEgCg");
	this.shape_273.setTransform(-22.1,18.1);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#CCCCCC").s().p("AgDAAIgBAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAIABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABAAIAAAAQgCACgDAAIgDgCg");
	this.shape_274.setTransform(-22.2,18.1);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#CCCCCC").s().p("AgDAAIgBAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAIABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABAAIAAAAQgCACgDAAIgDgCg");
	this.shape_275.setTransform(-22.1,18.3);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#CCCCCC").s().p("AgEAAIAAAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAABAAIAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAAQgCACgDAAIgEgCg");
	this.shape_276.setTransform(-22.3,18);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#CCCCCC").s().p("AgDAAIgBAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAIABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABAAIAAAAQgCACgDAAIgDgCg");
	this.shape_277.setTransform(-22.2,18.2);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#CCCCCC").s().p("AgDAAIgBAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAIABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABAAIAAAAQgCACgDAAIgDgCg");
	this.shape_278.setTransform(-22.1,18.3);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#CCCCCC").s().p("AgPgIQgFgFAEgEIAhAbQACACgBAEIgBACQgRgMgPgOg");
	this.shape_279.setTransform(-23.7,16.7);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#CCCCCC").s().p("AAAgEIABgBQADAFgDAFIAAABQgEgFADgFg");
	this.shape_280.setTransform(-23.9,17.3);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#CCCCCC").s().p("AgDgHIABAAQAJAGgCAJIAAABQgMgEAEgMg");
	this.shape_281.setTransform(-24.3,16.8);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#CCCCCC").s().p("AgIgJQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAQAOAKABAPIAAABQgMgJgFgOg");
	this.shape_282.setTransform(-24.7,16.4);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#CCCCCC").s().p("AgCgFIAAgBQAIAEgCAIIAAABQgKgBAEgLg");
	this.shape_283.setTransform(-24.4,16.8);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#CCCCCC").s().p("AgIgOIABAAQAHAOAIAKQABAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQgSgIACgUg");
	this.shape_284.setTransform(-24.5,16.3);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#CCCCCC").s().p("AgJgJQgBgDACgCQALAMAHAOQAAAAABABQAAAAAAAAQAAABgBAAQAAABAAAAQgOgJgFgPg");
	this.shape_285.setTransform(-24.8,16.2);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#CCCCCC").s().p("AgMgKQAAgBAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQAOAMAJAPQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgRgKgIgQg");
	this.shape_286.setTransform(-24.9,16.5);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AgDADIgBgEQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQAKACgEAKIAAABQgDgDgEgBg");
	this.shape_287.setTransform(-25.2,15.6);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFFFFF").s().p("AgBgEIABAAQAGACgDAHIAAAAQgJgBAFgIg");
	this.shape_288.setTransform(-25.2,15.6);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AgLgCQgCgDADgCQAOACAIAJQAAABAAAAQABABAAAAQAAABAAAAQgBABAAAAQgPAAgIgKg");
	this.shape_289.setTransform(-24.3,15.8);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("AgLgCQAAAAAAgBQgBAAAAgBQAAAAAAgBQABgBAAAAIABgCQANADAIAIQADADgCADQgNgDgKgIg");
	this.shape_290.setTransform(-24.3,15.9);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#C90102").s().p("AgHgEQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAGAFAHAAIABABIABADIgBABIAAADIgGAAQgKAAABgLg");
	this.shape_291.setTransform(-24.5,14.6);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#C90102").s().p("AgFgGIABAAQAMADgCAKIAAAAQgOgBADgMg");
	this.shape_292.setTransform(-24.1,14.8);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#C90102").s().p("AgKgCQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQAOAAAFAJQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAIgGABQgKAAgFgJg");
	this.shape_293.setTransform(-24.2,14.6);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFFFFF").s().p("AgCAFIgBAAQgBgEABgCIAAgBQACgCAEAAQAFAJgJAAIgBAAg");
	this.shape_294.setTransform(-19.8,17.1);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFFFF").s().p("AgFgEIACgBQAMABgDAKIAAAAIgDAAQgLAAADgKg");
	this.shape_295.setTransform(-21.1,16.8);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FFFFFF").s().p("AgEgDQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAIAFABIABAAIABADIgBAFIgEAAQgGAAACgIg");
	this.shape_296.setTransform(-21.2,16.7);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFFFFF").s().p("AgJgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAIARACIAAABIABABIAAABIAAADIgBACIgIABQgHAAgDgHg");
	this.shape_297.setTransform(-20.5,16.9);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FFFFFF").s().p("AgIABQgDgDAEgEQAHAFAKgCIAAAAIAAADIABAAIgBAEQgFADgEAAQgFAAgEgGg");
	this.shape_298.setTransform(-21.2,17);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFFFFF").s().p("AgOgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQAAgBABAAQAPADANAGIABACIgBAEIgDAAQgPAAgLgJg");
	this.shape_299.setTransform(-22.2,16.4);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FFFFFF").s().p("AgQgCQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIABgCQAQAGARACIABAAIAAADIAAADIAAACIgFABQgQAAgNgLg");
	this.shape_300.setTransform(-21.8,16.6);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FFE054").s().p("AgTAGQACgGAIAAQAJgCAGgGIAOACIAAAAIgbANIgGACQgEAAgCgDg");
	this.shape_301.setTransform(-20.3,18.3);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FFFFFF").s().p("AgKACIAKgDQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAgBgBIAKABIAAABIAAACQgFAFgFAAQgFAAgFgDg");
	this.shape_302.setTransform(-20.9,17.6);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FFFFFF").s().p("AgNAFQgBgDACgCQAFgEAIgBIANACIAAAAQgDAFgKAAIgEABQgFACgFAAg");
	this.shape_303.setTransform(-20.3,17.4);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FFFFFF").s().p("AgFACIAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABgBIAJABIAAABIgBACIAAABIgKgBg");
	this.shape_304.setTransform(-20.8,17.6);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FFFFFF").s().p("AADADIgKAAIAAgBQAAgCADgCIAMABIAAAAQAAADgEABIgBAAg");
	this.shape_305.setTransform(-21.1,17.5);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFFFFF").s().p("AgEAEIgBgBIAAgCIAAgBIgBAAIgDAAIAAgBIAAgCIAAgBIAAAAQAJgBAJAEIAAABIAAABQABAAAAAAQAAABAAAAQgBAAAAABQAAAAAAAAIgBABIgHABQgCAAgDgBg");
	this.shape_306.setTransform(-20.3,17);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FFFFFF").s().p("AgKgBQAAgBAAgBQAAAAABgBQAAgBAAAAQABgBAAAAQAIADAJABIABABIAAACIAAABIABAAIgBAEIgHABQgKAAgDgIg");
	this.shape_307.setTransform(-22.1,16.6);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FFFFFF").s().p("AgFAEIgBAAIAAgBQgCgDADgEIAAAAIALAAIABABIAAAAQACADgCAEIAAABIgGAAIgGgBg");
	this.shape_308.setTransform(-21.6,16.9);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FFFFFF").s().p("AgGAGIgBgBQgBgCABgDIAAgBQAEgGAIAEQAHAEgIADQgEACgEAAIgCAAg");
	this.shape_309.setTransform(-21.1,17.2);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#CCCCCC").s().p("AgCAHQgEgIAHgEIABgBQAGAHgJAGg");
	this.shape_310.setTransform(27.6,18.3);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#CCCCCC").s().p("AgGAAQAGgCAGgFQAFgGAGgDQAHAKgRAJIgFADQgIAHgMAEQgDgNAPgEg");
	this.shape_311.setTransform(26.2,19.5);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#CCCCCC").s().p("AAAgEQAEgCAEgEQADgEAEgCQAGAKgOAIIgWAQQgDgRASgFg");
	this.shape_312.setTransform(26.3,19.6);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#CCCCCC").s().p("AgKABQASgGAPgNQADAQgSAGQgPAGgNAJQgHgMARgGg");
	this.shape_313.setTransform(26,19.6);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#C90102").s().p("AAAgQIAAAAQAEAQgCARIAAAAQgGgQAEgRg");
	this.shape_314.setTransform(27.8,-5.6);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#C90102").s().p("AAAgIIAAAAQAEAIgDAJIgBAAQgDgIADgJg");
	this.shape_315.setTransform(27.8,-5.1);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FFFFFF").s().p("AgEAIQgEgKAMgFIABAAQAEALgMAEg");
	this.shape_316.setTransform(27,18.5);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FFFFFF").s().p("AgEAGQgFgIAJgCIADgBQAKAIgQADIgBAAg");
	this.shape_317.setTransform(26.8,18.4);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FFFFFF").s().p("AgBgDIAEgBIALgGQAGALgRAGIgIADIgJABQgEgMARgCg");
	this.shape_318.setTransform(25.8,18.9);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FFFFFF").s().p("AgGADQABgDAFgDIAIgEQADALgPAEIgBAAQgEAAADgFg");
	this.shape_319.setTransform(25.1,18.9);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFFFFF").s().p("AAFgGQAHALgRACQgEgMAOgBg");
	this.shape_320.setTransform(24.3,18.7);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFFFFF").s().p("AgFAEQgBgDAAgCIABgCQADgEAFACQAIAFgIAEQgDACgBAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAg");
	this.shape_321.setTransform(23.9,18.7);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#C90102").s().p("AgUAJQgCgEABgDIAAgBIArgJIAAADIgJAJIgBABQgDAAgCACIAAAAIgbACg");
	this.shape_322.setTransform(26.9,17);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFFFFF").s().p("AgrANIAOgCQAsgJAkgaIAFgBQADAMgRAIIgIADQgoAVgwAHQgFgMAQgBg");
	this.shape_323.setTransform(19.2,21.2);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FFFFFF").s().p("AgGgCQAFACAGgCIABgBIAAgBIgFgCIAFAAIABAAQAFAMgQABIgCAAQgCgGACgDg");
	this.shape_324.setTransform(24.3,18.8);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFFFFF").s().p("AgBgEIABgBQAFAFgFAGIAAAAQgDgFACgFg");
	this.shape_325.setTransform(-11.5,22);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FFFFFF").s().p("AgGAEIgBAAIAAgGIACgCQAQgDgDAMIAAABIgDAAQgFAAgGgCg");
	this.shape_326.setTransform(-9.8,18.5);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FFFFFF").s().p("AAAgFIAEgMQAAgEADgBQABAXgNAVIgBAAQAAgNAGgOg");
	this.shape_327.setTransform(-11,20.4);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FFFFFF").s().p("AgDgLIAAgBQAJALgCANIAAABQgJgLACgNg");
	this.shape_328.setTransform(-10.8,12.4);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFFFFF").s().p("AgEgUIABgBIAJApIgBACQgNgUAEgWg");
	this.shape_329.setTransform(-10.6,14);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FFFFFF").s().p("AgBgMIABAAQADAMABANIAAABQgLgMAGgOg");
	this.shape_330.setTransform(-10.3,15.1);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FFFFFF").s().p("AgBgMIAAgBQAFANgBANIAAAAQgJgKAFgPg");
	this.shape_331.setTransform(-10,16.1);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FFFFFF").s().p("AgFgUIAAAAIALAmIAAAEQgOgUADgWg");
	this.shape_332.setTransform(-10.3,14.2);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FFFFFF").s().p("AgHgMIAAgBQAOALACAPIAAABQgRgKABgQg");
	this.shape_333.setTransform(-10.1,13);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFFFFF").s().p("AgBAEQgBAAgBAAQAAgBAAAAQgBgBAAAAQAAgBABgBQAAgCADgBQAKAHgKAAIgBAAg");
	this.shape_334.setTransform(-11.4,22);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFFFFF").s().p("AgEAEQgCgHAGgDQAMAJgNADIgBABQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_335.setTransform(-11.1,21.9);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FFFFFF").s().p("AgHAFQACgLAIgGQAIAIgGANQgCADgDABIgCAAQgGAAABgIg");
	this.shape_336.setTransform(-10.3,19.6);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("#FFFFFF").ss(1,1,1).p("ADVACIAtgbACDAhQgBABgBAAQiGAeh3gnQAAAAAAAAAkBguIAiAe");
	this.shape_337.setTransform(1,19.9);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FFFFFF").s().p("AhuA4IgKgBQgagEgWgLQgDADgCAAIgBgBQgBgBAAgEIABgDQAAgDABgDQADgHAFgFIAHgHQgEACgCgEQgDgFAEgCIABAAIACAAIAEAAIAAgBIAAgCQgCgGgBgGQgJgOADgQIgCgGIAAAAIgCgGQAAgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAIABAAIADADIABgBQAQALAQAKIAJAFQAPAIAQAHIAfAKIAQADIANACIAKACIAFABIACgBIALACIACABIAFAAIAbACIAIACIABgBIAEAAIATAAIADABIAAAAIACgBIALAAIAAABIACAAIABAAQAXgBAUADQAYgDAZgGIAAABIgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAABAAIACACQABAJgOAFIABACQABAKgQABIgHABQgbAOgcADIgCACIgCgBIAAAAIgCABIgBAAIgBgBIgCAAIABAAIAAgBIAAAAIAAgDQgGADgKACQgzAKgxAAQgkAAgkgFg");
	this.shape_338.setTransform(6,18.1);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FF0000").s().p("ADFDbQB5hfgkioQhFjHiYBAQhRA2gfBgIgSA4QAcBsA+BEQhdgehZhJIgWBqIiEglQglgtABg1QAChJBKhKQBKhKCpgvQCRgpBlAoQAMACAIAGIABAAIADACQAWAHAOARQBRBCgECSQACAFgBAHIgBAOQABAVgGAVQgBADgCADQABAFgDAHIgGAMQgHAQgNANIAAABQgJANgKAMQgxASgxAAIgBAAg");
	this.shape_339.setTransform(2.2,-6);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#C90102").s().p("ACEDeIgDgBIgBAAIgLAAIgFAAIgTgBIgNgBIgbgCIgIgBIgLgBIgRgDIgNgDQhPgTgxgvQgCAcASAnIABADQhIgDhQgZIgKgIQgVgRgPgSICEAlIAWhqQBZBJBdAeQg+hEgchsIASg4QAfhgBRg2QCYhABFDHQAkCoh5BfQAxAAAygSQgLAMgOALIgBAAIgBABIgWAHIgYAJQgEgBgFACIgBAAQgYAFgZADQgUgDgWACg");
	this.shape_340.setTransform(1.2,-3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177}]}).to({state:[]},14).wait(1));

	// Beak
	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("#FFE054").ss(1,1,1).p("AgfgBIADgnQAKgOASgNQARgBAQAmQACAPgDADQgYAIgnADgAAJAGQAWADgDAIIAAALQgDAKgDAHQgDAHgLANQgKANgfgoIACgnAgaAEQAWAAAMAB");
	this.shape_341.setTransform(41.1,1.4);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FFE054").s().p("AgBBBQgLACgOgWIgBgBIgBgCIAAAAIAAgEIAAAAQgIgHAJgRQADgGAIABQAMACALgEIABAAIABAAIARAHIABAAQACADgCAEIgDAEQAAAIgCAHQgBAMgKAEQgEAFgEACIgBADIgCABIgBgCgAgdgmQALgOARgOQARgBAQAmQADAQgEACQgYAJgmACg");
	this.shape_342.setTransform(41.2,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_342},{t:this.shape_341}]}).to({state:[]},14).wait(1));

	// Crest
	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FF0000").s().p("AgBAxIgygRQgFg1AHgVQAFgQANADQAVAFAHAIQAFAHgDAKQgIAUgGAUQAyghAMAMQAQAagUAkQgXgGgVgBg");
	this.shape_343.setTransform(26.2,-29.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_343).to({_off:true},14).wait(1));

	// Tail
	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#FF0000").s().p("AhFAdQgFgEADgPQAEgOAKgSQALgRAMgKQAMgKAFADQAIAFBSBsQiGgYgIgEg");
	this.shape_344.setTransform(-34.2,-7.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_344).to({_off:true},14).wait(1));

	// Feet
	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FFE054").s().p("AgIA5QgNgHgPgPQgOgPgHgOQgHgNAEgEQAGgFB1gsQgwBzgGAFQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQgEAAgIgEg");
	this.shape_345.setTransform(-19.9,21.4);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#E5C222").s().p("AADAwQgMgIgPgPQgPgPgIgMQgIgMAEgEQAFgEBkgfQgfBkgEAFIgDACQgFAAgIgGg");
	this.shape_346.setTransform(-15.9,23.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_346},{t:this.shape_345}]}).to({state:[]},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.5,-35.3,87.5,64.2);


(lib.Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Trees
	this.instance = new lib.Trees();
	this.instance.parent = this;
	this.instance.setTransform(162.1,344,1,1,0,0,0,162.1,344);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Clouds
	this.instance_1 = new lib.Clouds();
	this.instance_1.parent = this;
	this.instance_1.setTransform(162.7,309.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Sky
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#70C6CE").ss(1,1,1).p("A3b/PMAu3AAAMAAAA+fMgu3AAAg");
	this.shape.setTransform(150,200.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#56CCFF","#E7F7FF"],[0,1],0,-199.9,0,200).s().p("A3bfQMAAAg+fMAu3AAAMAAAA+fg");
	this.shape_1.setTransform(150,200.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Background, new cjs.Rectangle(-9.6,-0.9,342.9,402), null);


// stage content:
(lib.flappyHaley = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		function Bird()
		{
			this.mc = exportRoot.bird;
			this.initY= this.mc.y;
			this.state= Bird.DEAD;
			this.velocity= 0;
			this.setupCollisionPoints();
		}
		Bird.ALIVE= 0;
		Bird.DYING= 1;
		Bird.DEAD= 2;
		
		Bird.MAX_UP_ANGLE= -22.5;
		Bird.MAX_DOWN_ANGLE= 90;
		
		Bird.prototype.isAlive= function()
		{
			return(this.state==Bird.ALIVE);
		}
		
		Bird.prototype.isDead= function()
		{
			return(this.state==Bird.DEAD);
		}
		
		Bird.prototype.startFlying= function()
		{
			this.state= Bird.ALIVE;
			this.mc.y= this.initY;
			this.mc.play();
			this.velocity= 0;
			this.flap();
		}
		
		Bird.prototype.flap= function()
		{
		if(this.state==Bird.ALIVE&& this.mc.y>0)
		{
			this.velocity= Main.FLAP_IMPULSE;
		}
		}
		
		Bird.prototype.fallFromSky= function()
		{
			if(this.state== Bird.ALIVE)
			{
				this.state= Bird.DYING;
				this.velocity= 0;
			}
		}
		
		Bird.prototype.hitGround= function()
		{
			if(this.state== Bird.ALIVE)
			{
				createjs.Sound.play("hit");
			}
			this.state= Bird.DEAD;
			this.mc.stop();
		}
		
		
		Bird.prototype.update= function()
		{
			if(this.state== Bird.ALIVE|| this.state== Bird.DYING)
			{
				this.updateVelocity();
				this.updateRotation();
			}
		}
		
		Bird.prototype.updateVelocity= function()
		{
			this.velocity+= Main.GRAVITY;
			if(this.velocity > Main.MAX_VELOCITY)
			{
			this.velocity= Main.MAX_VELOCITY;
			}
			this.mc.y+= this.velocity;
		}
		
		Bird.prototype.setupCollisionPoints= function()
		{
			this.collisionPoints= [this.mc.hit0,this.mc.hit1,this.mc.hit2,this.mc.hit3,this.mc.hit4,this.mc.hit5,this.mc.hit6,this.mc.hit7,this.mc.hit8];
		for(var i= 0; i< this.collisionPoints.length; i++)
		{
			this.collisionPoints[i].visible= false;
		}
			}
			
			Bird.prototype.hitTest= function(target)
		{
		for(var i= 0; i< this.collisionPoints.length; i++)
		{
			var pt= this.collisionPoints[i].localToLocal(0,0,target);
			var collision= target.hitTest(pt.x, pt.y);
			if(collision==true)
			{
				return true;
			}
		}
		return false;
		}
		
		Bird.prototype.updateRotation= function()
		{
			if(this.velocity= 0)
			{
				var diff= Bird.MAX_DOWN_ANGLE - Bird.MAX_UP_ANGLE;
				var norm= this.velocity/Main.MAX_VELOCITY;
				this.mc.rotation= Bird.MAX_UP_ANGLE + (diff * norm);
			}
			else
			{
				this.mc.rotation= Bird.MAX_UP_ANGLE;
			}
		}
		
		Bird.prototype.getPosition= function()
		{
			return{x: this.mc.x, y: this.mc.y};
		}
		function Pipes()
		{
			this.scrolling = false;
			this.distanceBetweenPipes= exportRoot.pipe1.x - exportRoot.pipe0.x;
			this.leftBound= -exportRoot.pipe0.nominalBounds.width;
			this.maxPipeY= exportRoot.pipe0.y;
			this.minPipeY= exportRoot.pipe2.y;
			
			this.setupStartPosition();
		}
		Pipes.prototype.startScrolling= function()
		{
			this.scrolling= true;
			this.setupStartPosition();
			this.approachingPipe= this.pipes[0];
		}
		
		Pipes.prototype.setNextApproachingPipe= function()
		{
			for(var i= 0; i< this.pipes.length; i++)
			{
				if(this.pipes[i]== this.approachingPipe)
				{
					this.approachingPipe= this.pipes[i+1];
					return;
				}
			}
		}
		
		Pipes.prototype.hasBirdPassedApproachingPipe= function(bird)
		{
			var birdXPosition= bird.getPosition().x;
			if(birdXPosition> this.approachingPipe.x)
			{
				return true;
			}
			return false;
		}
		
		Pipes.prototype.stopScrolling= function()
		{
			this.scrolling= false;
		}
		Pipes.prototype.update= function()
		{
			if(this.scrolling == true)
			{
				this.updatePipePositions();
				this.checkLeftPipeIsOutsideScreen();
			}
		}
		Pipes.prototype.updatePipePositions= function()
		{
			for(var i= 0; i<this.pipes.length; i++)
			{
				var pipe= this.pipes[i];
				pipe.x -= Main.SCROLL_SPEED;
			}
		}
		Pipes.prototype.checkLeftPipeIsOutsideScreen= function()
		{
			var leftMostPipe= this.pipes[0];
			var rightMostPipe= this.pipes[2];
			if(leftMostPipe.x < this.leftBound)
			{
				leftMostPipe.x= rightMostPipe.x + this.distanceBetweenPipes;
				this.setRandomYPosition(leftMostPipe);
				this.pipes.shift();
				this.pipes.push(leftMostPipe);
			}
		}
		Pipes.prototype.setRandomYPosition= function(pipe)
		{
			var delta= this.minPipeY- this.maxPipeY;
			pipe.y= this.maxPipeY+ Math.round(Math.random()* delta);
		}
		Pipes.prototype.setupStartPosition= function()
		{
			this.pipes= [exportRoot.pipe0, exportRoot.pipe1, exportRoot.pipe2];
			for(var i= 0; i< this.pipes.length; i++)
			{
				var pipe= this.pipes[i];
				pipe.x= (lib.properties.width*1.5)+(i * this.distanceBetweenPipes);
				this.setRandomYPosition(pipe);
			}
		}
		
		Pipes.prototype.isBirdTouchingAPipe= function(bird)
		{
			for(var i= 0; i< this.pipes.length; i++)
			{
				if(bird.hitTest(this.pipes[i]))
				{
					return true;
				}
			}
			return false;
		}
		function Ground()
		{
			this.scrolling= false;
			this.slices= [exportRoot.ground0, exportRoot.ground1, exportRoot.ground2];
			this.sliceWidth= exportRoot.ground1.x - exportRoot.ground0.x;
			this.leftBound= exportRoot.ground0.x - this.sliceWidth;
		}
		
		Ground.prototype.update= function()
		{
			if(this.scrolling== true)
			{
				this.updateSlicePositions();
				this.checkLeftSliceIsOutsideScreen();
			}
		}
		
		Ground.prototype.checkLeftSliceIsOutsideScreen= function()
		{
			var firstSlice= this.slices[0];
			var lastSlice= this.slices[2];
			if(firstSlice.x<this.leftBound)
			{
				firstSlice.x= lastSlice.x+ this.sliceWidth;
				this.slices.shift();
				this.slices.push(firstSlice);
			}
		}
		
		Ground.prototype.startScrolling= function()
		{
			this.scrolling= true;
		}
		
		Ground.prototype.stopScrolling= function()
		{
			this.scrolling= false;
		}
		
		Ground.prototype.updateSlicePositions= function()
		{
		
			for(var i= 0; i<this.slices.length; i++)
			{
				var slice= this.slices[i];
				slice.x-= Main.SCROLL_SPEED;
			}
		}
		
		Ground.prototype.isBirdTouchingGround= function(bird)
		{
			for(var i = 0; i<this.slices.length; i++)
			{
				if(bird.hitTest(this.slices[i]))
				{
					return true;
				}
			}
			return false;
		}
		function UI()
		{
			this.scoreLabel= exportRoot.score;
			this.gameOverPrompt= exportRoot.gameOverPrompt;
			this.getReadyPrompt= exportRoot.getReadyPrompt;
			this.startInstructions= exportRoot.startInstructions;
			this.anyKeyPrompt= exportRoot.anyKeyPrompt;
			this.screenFlash= exportRoot.screenFlash;
			this.getReady();
		}
		
		UI.prototype.updateScore= function(score)
		{
			this.scoreLabel.text= score;
		}
		
		UI.prototype.getReady= function()
		{
			this.gameOverPrompt.visible= false;
			this.getReadyPrompt.visible= true;
			this.startInstructions.visible= true;
			this.screenFlash.visible= false;
		}
		
		UI.prototype.scoredPoint= function()
		{
			this.score++;
			this.ui.updateScore(this.score);
		}
		
		UI.prototype.gameStart= function()
		{
			exportRoot.gameOverPrompt.visible= false;
			exportRoot.getReadyPrompt.visible= false;
			exportRoot.startInstructions.visible= false;
			exportRoot.screenFlash.visible= false;
			this.updateScore(0);
		}
		
		UI.prototype.gameOver= function()
		{
			this.gameOverPrompt.visible= true;
			this.getReadyPrompt.visible= false;
			this.startInstructions.visible= true;
		}
		
		UI.prototype.triggerScreenFlash= function()
		{
			this.screenFlash.visible= true;
			this.screenFlash.alpha= 1;
			createjs.Tween.get(this.screenFlash).to({alpha:0}, 100);
		}
		function Main()
		{
			this.ground= new Ground();
			this.pipes= new Pipes();
			this.bird= new Bird();
			this.ui= new UI();
			
			this.score= 0;
			
			canvas.onmousedown= this.userPressed.bind(this);
			window.onkeydown= this.userPressed.bind(this);
			
			createjs.Ticker.addEventListener("tick", this.update.bind(this));
		}
		Main.SCROLL_SPEED= 3.0;
		Main.GRAVITY= 0.55;
		Main.FLAP_IMPULSE= -8.15;
		Main.MAX_VELOCITY= 15;
		
		Main.prototype.update= function(evt)
		{
			this.bird.update();
			this.ground.update();
			this.pipes.update();
			this.checkForBirdCollidingWithGround();
			this.checkForBirdCollidingWithPipes();
			this.checkForBirdPassingPipe();
		}
		
		Main.prototype.startGame= function()
		{
			this.score=0;
			this.ground.startScrolling();
			this.pipes.startScrolling();
			this.bird.startFlying();
			this.ui.gameStart();
		}
		
		Main.prototype.birdHitGround= function()
		{
			this.bird.hitGround();
			this.ground.stopScrolling();
			this.pipes.stopScrolling();
			this.ui.gameOver();
		}
		
		Main.prototype.birdHitPipe= function()
		{
			this.bird.fallFromSky();
			this.ground.stopScrolling();
			this.pipes.stopScrolling();
			this.ui.triggerScreenFlash();
		}
		
		Main.prototype.userPressed = function(evt)
		{
			if(this.bird.isDead())
			{
				this.startGame();
			}
			else
			{
				this.bird.flap();
			}
		}
		
		Main.prototype.checkForBirdCollidingWithGround= function()
		{
			if(this.bird.isDead()==false)
			{
				if(this.ground.isBirdTouchingGround(this.bird))
				{
					this.birdHitGround();
				}
			}
		}
		
		Main.prototype.checkForBirdCollidingWithPipes= function()
		{
			if(this.bird.isAlive())
			{
				if(this.pipes.isBirdTouchingAPipe(this.bird))
				{
					this.birdHitPipe();
				}
			}
		}
		
		Main.prototype.checkForBirdPassingPipe= function()
		{
			if(this.bird.isAlive())
			{
				if(this.pipes.hasBirdPassedApproachingPipe(this.bird))
				{
					this.pipes.setNextApproachingPipe();
					this.scoredPoint();
				}
			}
		}
		
		Main.prototype.scoredPoint= function()
		{
			console.log("We scored a point!");
			this.score++;
			this.ui.updateScore(this.score);
		}
		var main= new Main();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Screen Flash
	this.screenFlash = new lib.ScreenFlash();
	this.screenFlash.name = "screenFlash";
	this.screenFlash.parent = this;
	this.screenFlash.setTransform(230,280,1,1,0,0,0,80,80);
	this.screenFlash.visible = false;
	this.screenFlash.cache(-72,-122,304,404);

	this.timeline.addTween(cjs.Tween.get(this.screenFlash).wait(1));

	// Score
	this.score = new cjs.Text("0", "24px 'Arial'", "#FFFFFF");
	this.score.name = "score";
	this.score.textAlign = "center";
	this.score.lineHeight = 29;
	this.score.lineWidth = 121;
	this.score.parent = this;
	this.score.setTransform(150,9);

	this.timeline.addTween(cjs.Tween.get(this.score).wait(1));

	// Game Over
	this.gameOverPrompt = new lib.GameOver();
	this.gameOverPrompt.name = "gameOverPrompt";
	this.gameOverPrompt.parent = this;
	this.gameOverPrompt.setTransform(149.8,98.3,1,1,0,0,0,-1.2,12.3);
	this.gameOverPrompt.cache(-111,-9,220,42);

	this.timeline.addTween(cjs.Tween.get(this.gameOverPrompt).wait(1));

	// Get REady
	this.getReadyPrompt = new lib.GetReady();
	this.getReadyPrompt.name = "getReadyPrompt";
	this.getReadyPrompt.parent = this;
	this.getReadyPrompt.setTransform(149.9,98.2,1,1,0,0,0,-1.1,12.2);
	this.getReadyPrompt.cache(-109,-8,215,41);

	this.timeline.addTween(cjs.Tween.get(this.getReadyPrompt).wait(1));

	// Start Intructions
	this.startInstructions = new lib.StartInstructions();
	this.startInstructions.name = "startInstructions";
	this.startInstructions.parent = this;
	this.startInstructions.setTransform(150.5,246.6,1,1,0,0,0,-0.5,3.6);
	this.startInstructions.cache(-127,-8,253,24);

	this.timeline.addTween(cjs.Tween.get(this.startInstructions).wait(1));

	// Bird
	this.bird = new lib.Bird();
	this.bird.name = "bird";
	this.bird.parent = this;
	this.bird.setTransform(94.2,173.4,0.384,0.383,0,0,0,0.5,-4.2);

	this.timeline.addTween(cjs.Tween.get(this.bird).wait(1));

	// Ground
	this.ground0 = new lib.GroundSlice();
	this.ground0.name = "ground0";
	this.ground0.parent = this;
	this.ground0.setTransform(96.5,376,1,1,0,0,0,96.5,25);
	this.ground0.cache(-2,-2,197,54);

	this.ground2 = new lib.GroundSlice();
	this.ground2.name = "ground2";
	this.ground2.parent = this;
	this.ground2.setTransform(470.5,376,1,1,0,0,0,96.5,25);
	this.ground2.cache(-2,-2,197,54);

	this.ground1 = new lib.GroundSlice();
	this.ground1.name = "ground1";
	this.ground1.parent = this;
	this.ground1.setTransform(283.5,376,1,1,0,0,0,96.5,25);
	this.ground1.cache(-2,-2,197,54);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ground1},{t:this.ground2},{t:this.ground0}]}).wait(1));

	// Pipes
	this.pipe2 = new lib.Pipe();
	this.pipe2.name = "pipe2";
	this.pipe2.parent = this;
	this.pipe2.setTransform(361,250,1,1,0,0,0,58,0);
	this.pipe2.cache(-5,-254,64,508);

	this.pipe1 = new lib.Pipe();
	this.pipe1.name = "pipe1";
	this.pipe1.parent = this;
	this.pipe1.setTransform(181,200,1,1,0,0,0,58,0);
	this.pipe1.cache(-5,-254,64,508);

	this.pipe0 = new lib.Pipe();
	this.pipe0.name = "pipe0";
	this.pipe0.parent = this;
	this.pipe0.setTransform(-30,100,1,1,0,0,0,27,0);
	this.pipe0.cache(-5,-254,64,508);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pipe0},{t:this.pipe1},{t:this.pipe2}]}).wait(1));

	// Background
	this.instance = new lib.Background();
	this.instance.parent = this;
	this.instance.setTransform(161.8,200.1,1,1,0,0,0,161.8,200.1);
	this.instance.cache(-12,-3,347,406);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(90,48,627,654);
// library properties:
lib.properties = {
	id: '5F1F6707FD2EF34F9383A251E2FCB254',
	width: 300,
	height: 400,
	fps: 60,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['5F1F6707FD2EF34F9383A251E2FCB254'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;