var GetRandomByPattern = function()
{
	var PATTERN = [
		[0,0,0,1,0,0,1,0,0,1,0,0,0,0,0],
		[1,0,1,0,0,0],
		[0,0,0,1,0,0,1,0,0,0,0,0],
		[1,0,0,0,0,0,1,0,0,0,0,0],
		[0,1,0,1,0,0],
		[0,0,0,0,0,0]
	];
	
	var pattern_idx, element_idx, run_count = 0;

	var init = function(){
		initPattern();
		initElement();
	};
	var initPattern = function(){
		pattern_idx = Math.floor( Math.random() * PATTERN.length );
	};
	var initElement = function(){
		element_idx = 0;
	};
	var nextPattern = function(){
		initPattern();
		initElement();
		run_count += 1;
	}
	var nextElement = function(){

		var pid = pattern_idx,
			eid = element_idx;

		if (element_idx+1 < PATTERN[pattern_idx].length){
			element_idx += 1;
		} else {
			nextPattern();
		}
		return PATTERN[pid][eid];
	};

	var pid = function(){
		return pattern_idx;
	};
	var eid = function(){
		return element_idx;
	};
	var run_count = function(){
		return run_count;
	};
	var get = function(){
		return nextElement();
	};

	init();

	return {
		get: get,
		run_count: run_count
	};
};