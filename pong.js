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


(lib.tennisball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AkdEeQh3h2AAioQAAinB3h2QB2h3CnAAQCoAAB2B3QB3B2AACnQAACoh3B2Qh2B3ioAAQinAAh2h3g");
	this.shape.setTransform(0,-3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.tennisball, new cjs.Rectangle(-40.5,-43.5,81,81), null);


(lib.paddle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9999FF").s().rr(-136,-24,272,48,24);
	this.shape.setTransform(1.4,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.paddle, new cjs.Rectangle(-134.5,-23.9,272,48), null);


(lib.info = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Game Over\nPlay Again", "italic 40px 'Comic Sans MS'", "#FF00CC");
	this.text.textAlign = "center";
	this.text.lineHeight = 58;
	this.text.lineWidth = 330;
	this.text.parent = this;
	this.text.setTransform(-19,-66.9);
	this.text.shadow = new cjs.Shadow("rgba(255,255,204,1)",3,3,4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33CC66").s().rr(-188,-89,376,178,37.4);
	this.shape.setTransform(-10,-4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.info, new cjs.Rectangle(-205.9,-100.9,399,201), null);


(lib.lives = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Actions
	this.ball_mc = new lib.tennisball();
	this.ball_mc.name = "ball_mc";
	this.ball_mc.parent = this;
	this.ball_mc.setTransform(139.2,12,0.358,0.358,0,0,0,40.6,0);

	this.timeline.addTween(cjs.Tween.get(this.ball_mc).wait(5));

	// Layer_1
	this.ball_mc_1 = new lib.tennisball();
	this.ball_mc_1.name = "ball_mc_1";
	this.ball_mc_1.parent = this;
	this.ball_mc_1.setTransform(124.4,13,0.346,0.346);

	this.ball_mc_2 = new lib.tennisball();
	this.ball_mc_2.name = "ball_mc_2";
	this.ball_mc_2.parent = this;
	this.ball_mc_2.setTransform(22.7,27,0.346,0.346,0,0,0,40.5,40.5);

	this.ball_mc_3 = new lib.tennisball();
	this.ball_mc_3.name = "ball_mc_3";
	this.ball_mc_3.parent = this;
	this.ball_mc_3.setTransform(87.4,13,0.346,0.346);

	this.ball_mc_4 = new lib.tennisball();
	this.ball_mc_4.name = "ball_mc_4";
	this.ball_mc_4.parent = this;
	this.ball_mc_4.setTransform(47.7,13,0.346,0.346);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ball_mc_4},{t:this.ball_mc_3,p:{x:87.4}},{t:this.ball_mc_2,p:{regX:40.5,regY:40.5,x:22.7,y:27}},{t:this.ball_mc_1,p:{x:124.4}}]}).to({state:[{t:this.ball_mc_3,p:{x:47.7}},{t:this.ball_mc_2,p:{regX:0,regY:0,x:87.4,y:13}},{t:this.ball_mc_1,p:{x:8.7}}]},1).to({state:[{t:this.ball_mc_2,p:{regX:0,regY:0,x:87.4,y:13}},{t:this.ball_mc_1,p:{x:50.4}}]},1).to({state:[{t:this.ball_mc_1,p:{x:87.4}}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-3.6,144.4,29.6);


// stage content:
(lib.pong = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// paddle
	this.bat_mc = new lib.paddle();
	this.bat_mc.name = "bat_mc";
	this.bat_mc.parent = this;
	this.bat_mc.setTransform(249,337.9,0.669,0.669,0,0,0,1.4,0.1);

	this.timeline.addTween(cjs.Tween.get(this.bat_mc).wait(1));

	// ball
	this.score_txt = new cjs.Text("000", "59px 'Comic Sans MS'", "#33CC66");
	this.score_txt.name = "score_txt";
	this.score_txt.lineHeight = 84;
	this.score_txt.lineWidth = 111;
	this.score_txt.parent = this;
	this.score_txt.setTransform(383,20.3);

	this.ball_mc = new lib.tennisball();
	this.ball_mc.name = "ball_mc";
	this.ball_mc.parent = this;
	this.ball_mc.setTransform(254,199.7,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ball_mc},{t:this.score_txt}]}).wait(1));

	// lives
	this.lives_mc = new lib.lives();
	this.lives_mc.name = "lives_mc";
	this.lives_mc.parent = this;
	this.lives_mc.setTransform(41.9,60.9,1,1,0,0,0,23,39);

	this.timeline.addTween(cjs.Tween.get(this.lives_mc).wait(1));

	// info
	this.info_mc = new lib.info();
	this.info_mc.name = "info_mc";
	this.info_mc.parent = this;
	this.info_mc.setTransform(270.3,241.2,0.532,0.532);
	this.info_mc.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.info_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(288.6,218.3,482.4,335.7);
// library properties:
lib.properties = {
	id: 'F96F7143B949B04C8B176CDD12455AAD',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
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
an.compositions['F96F7143B949B04C8B176CDD12455AAD'] = {
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