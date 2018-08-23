/*
 * partner matching plugin
 */
jsPsych.plugins["mturk_psych_matching"] = (function() {

  var plugin = {};
	
  plugin.info = {
    name: 'mturk_psych_matching',
    description: '',
    parameters: {
    }
  }

  plugin.trial = function(display_element, trial) {
    // set function initiating the trial
    var initial = function() {
      display_element.innerHTML = '';
      var pptId = '<div class="block-center">'; 
      pptId += '<p>This is your participant ID (This ID is independent from your worker ID on MTurk)</p>';
      pptId += '<h1>' + participantId + '</h1>';
      pptId += '<p>Press SPACE bar to proceed matching with another participant</p>';
      pptId += '</div>';
      display_element.innerHTML = pptId;
      //keyboardListener_resume;
      jsPsych.pluginAPI.getKeyboardResponse({
				callback_function: matching,
				valid_responses: [32],
				rt_method: 'date',
				persist: false,
				allow_held_key: false,
			});
    };
    var matching = function() {
      display_element.innerHTML = '';
      // show waiting sign
      var waiting = '<div id="loading_img" class="block-center">';
      waiting += '<img src="images/loading.gif">';
      waiting += '</div>';
      // show searching
      waiting += '<div id="loading_msg" class="block-center">';
      waiting += '<p>Searching another participant...</p>';
      waiting += '</div>';
      display_element.innerHTML = waiting;
      // wait for next msg
      var t0 = setTimeout(matching_progress01, 5000 + 10000 * Math.random());
      setTimeoutHandlers.push(t0);
    };
    var matching_progress01 = function() {
      var display_msg = document.getElementById("loading_msg");
      // show progress 01
      display_msg.innerHTML = '';
      display_msg.innerHTML += '<p>Find your partner</p>';
      // wait for next msg
      var t1 = setTimeout(matching_progress02, 2000 + 3000 * Math.random());
      setTimeoutHandlers.push(t1);
    };
    var matching_progress02 = function() {
      var display_msg = document.getElementById("loading_msg");
      // show progress 02
      display_msg.innerHTML = '';
      display_msg.innerHTML += '<p>Finalizing the assignment of tasks</p>';
      // wait for next msg
      var t2 = setTimeout(matchingResult, 3000 + 7000 * Math.random());
      setTimeoutHandlers.push(t2);
    };
    var matchingResult = function() {
      display_element.innerHTML = '';
      // show participant ID and partner ID
      var IDresult = '<div class="block-center">';
      IDresult += '<p>Your participant ID</p>';
      IDresult += '<p>' + participantId + '</p>';
      IDresult += "<p>Your partner's participant ID</p>";
      IDresult += '<p>' + partnerId + '</p>';
      IDresult += "<p>Please check the box below after checking bothe your and your partner's participant ID</p>";
      IDresult += '<label><p><input type="checkbox" id="matching_checkbox" /> I understand that the partner and I conduct this experiment together.</p></label>';
      IDresult += '<p id="Tmatching">' + Tmatching + 's to go</p>';
      IDresult += '</div>'
      display_element.innerHTML = IDresult;
      var t3 = setTimeout(Tmatching_counting, 1000);
			setTimeoutHandlers.push(t3);
    };
    var Tmatching_counting = function() {
      var display_Tmatching = document.getElementById("Tmatching");
      if(Tmatching > 0) {
        Tmatching = Tmatching - 1;
        display_Tmatching.innerHTML = Tmatching + 's to go';
        var t3 = setTimeout(Tmatching_counting, 1000);
        setTimeoutHandlers.push(t3);
      } else {
        check_matching();
      }
    }
		var check_matching = function(elem) {
			if($('#matching_checkbox').is(':checked')) {
				end_trial();
			} else {
				window.alert('Restart matching because of no response from you. Press SPACE bar to proceed matching with another participant.');
				Nrepeat = Nrepeat + 1;
				Tmatching = 15;
				tmp_partnerId = partnerId;
				do {
					partnerId = jsPsych.randomization.randomID(8);
				} while (participantId == partnerId||tmp_partnerId == partnerId);
				initial();
			}
		}
    // function to end trial when it is time
    var end_trial = function() {
      // kill any remaining setTimeout handlers
      for (var i = 0; i < setTimeoutHandlers.length; i++) {
        clearTimeout(setTimeoutHandlers[i]);
      }
      // kill keyboard listeners
      jsPsych.pluginAPI.cancelAllKeyboardResponses();
      // gather the data to store for the trial
      var trial_data = {};
      trial_data.participantId = participantId; // participant ID
      trial_data.partnerId = partnerId; // partner ID
      trial_data.Nrepeat = Nrepeat; // # of repeating matching
      // clear the display
      display_element.innerHTML = '';
      // move on to the next trial
      jsPsych.finishTrial(trial_data);
    };
    // this array holds handlers from setTimeout calls
    // that need to be cleared if the trial ends early
    var setTimeoutHandlers = [];
    // set independent ID for each participant
    var participantId = jsPsych.randomization.randomID(8);
    var partnerId = undefined;
    do {
      partnerId = jsPsych.randomization.randomID(8);
    } while (participantId == partnerId);
		var Tmatching = 15;
		var Nrepeat = 0; 
    // start task
    initial();
  };

  return plugin;
})();