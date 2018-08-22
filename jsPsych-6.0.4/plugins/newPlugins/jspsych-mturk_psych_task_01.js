/*
 * social decision making plugin
 */
jsPsych.plugins["mturk_psych_task_01"] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'mturk_psych_task_01',
    description: '',
    parameters: {
      selfReward: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Self Reward',
        default: 0,
        description: 'Reward for participants'
      },
			otherReward: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Other Reward',
        default: 0,
        description: 'Reward for partners'
      },
      jittering: {
        type: jsPsych.plugins.parameterType.COMPLEX,
        pretty_name: 'Jitter Time',
        default: null,
        description: 'jittering time of fixation'
      }
    }
  }

  plugin.trial = function(display_element, trial) {
    display_element.offsetwidth = 960;
    // set functions to handle responses from ppts
    var pressBtn = function(info) {
      if(firstResponse.key == -1) {
        firstResponse = info;
      } else {
        secondResponse = info;
      }
      // kill another keyboard listeners
      jsPsych.pluginAPI.cancelAllKeyboardResponses();
    };
    // set function initiating the trial
    var initial = function() {
      // show fixation if first trial
      if (NofTrial == 0) {
        display_element.innerHTML = '';
        var fxtn = '<img src ="images/mturk_psych_task_01/fixation.jpg" class = "block-center">';
        display_element.innerHTML = fxtn;
        t0 = setTimeout(function() {
          choice();
        }, 1000);
        setTimeoutHandlers.push(t0);
      } 
      // show choice stimuli
      else {
        choice();
      }
    };
    var choice = function() {
      // show card choice
      display_element.innerHTML = '';
      var chc = '<img src ="images/mturk_psych_task_01/choice.jpg" class = "block-center">';
      display_element.innerHTML = chc;
      // run keyboard listners
      //keyboardListener_one;
      jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: pressBtn,
        valid_responses: [49],
        rt_method: 'date',
        persist: false,
        allow_held_key: false,
      });
      //keyboardListener_two;
      jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: pressBtn,
        valid_responses: [50],
        rt_method: 'date',
        persist: false,
        allow_held_key: false,
      });
      //keyboardListener_three;
      jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: pressBtn,
        valid_responses: [51],
        rt_method: 'date',
        persist: false,
        allow_held_key: false,
      });
      // wait for next stimulus
      var t1 = setTimeout(function() {
        responseCheck();
      }, holdTime["choice"]);
      setTimeoutHandlers.push(t1);
    };
    var responseCheck = function() {
      // show "no response" if no response
      if (firstResponse.key == -1) {
        display_element.innerHTML = '';
        var nrs = '<img src ="images/mturk_psych_task_01/nores.jpg" class = "block-center">';
        display_element.innerHTML = nrs;
        var t00 = setTimeout(function() {
          fixation4();
        }, holdTime["nores"]);
        setTimeoutHandlers.push(t00);
      } 
      // show fixation
      else {
        fixation1();
      };
    };
    var fixation1 = function() {
      display_element.innerHTML = '';
      var fxtn = '<img src ="images/mturk_psych_task_01/fixation.jpg" class = "block-center">';
      display_element.innerHTML = fxtn;
      var t2 = setTimeout(function() {
        showSelfOutcome();
      }, holdTime["fixation1"])
      setTimeoutHandlers.push(t2);
    }
    var showSelfOutcome = function() {
      display_element.innerHTML = '';
      var slfotcm = '<img src ="' + selfOutcome + '" class = "block-center">';
      display_element.innerHTML = slfotcm;
      var t3 = setTimeout(function() {
        fixation2();
      }, holdTime["selfOutcome"])
      setTimeoutHandlers.push(t3);
    }
    var fixation2 = function() {
      display_element.innerHTML = '';
      var fxtn = '<img src ="images/mturk_psych_task_01/fixation.jpg" class = "block-center">';
      display_element.innerHTML = fxtn;
      var t4 = setTimeout(function() {
        showOtherOutcome();
      }, holdTime["fixation2"])
      setTimeoutHandlers.push(t4);
    }
    var showOtherOutcome = function() {
      display_element.innerHTML = '';
      var othrotcm = '<img src ="' + otherOutcome + '" class = "block-center">';
      display_element.innerHTML = othrotcm;
      var t5 = setTimeout(function() {
        fixation3();
      }, holdTime["otherOutcome"])
      setTimeoutHandlers.push(t5);
    }
    var fixation3 = function() {
      display_element.innerHTML = '';
      var fxtn = '<img src ="images/mturk_psych_task_01/fixation.jpg" class = "block-center">';
      display_element.innerHTML = fxtn;
      var t6 = setTimeout(function() {
        decisionMaking();
      }, holdTime["fixation2"])
      setTimeoutHandlers.push(t6);
    }
    var decisionMaking = function() {
      display_element.innerHTML = '';
      var smmrotcm = '<img src ="' + summaryOutcome + '" class = "block-center">';
      display_element.innerHTML = smmrotcm;
      // run keyboard listners
      //keyboardListener_acc;
      jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: pressBtn,
        valid_responses: [49],
        rt_method: 'date',
        persist: false,
        allow_held_key: false,
      });
      //keyboardListener_rjc;
      jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: pressBtn,
        valid_responses: [50],
        rt_method: 'date',
        persist: false,
        allow_held_key: false,
      });
      var t7 = setTimeout(function() {
        showResult();
      }, holdTime["decisionMaking"])
      setTimeoutHandlers.push(t7);
    }
    // show result of decision
    var showResult = function() {
      display_element.innerHTML = '';
      var rslt = '<img src ="' + result[secondResponse.key] + '" class = "block-center">';
      display_element.innerHTML = rslt;
      var t8 = setTimeout(function() {
        fixation4();
      }, holdTime["result"]);
      setTimeoutHandlers.push(t8);
    }
    var fixation4 = function() {
      display_element.innerHTML = '';
      var fxtn = '<img src ="images/mturk_psych_task_01/fixation.jpg" class = "block-center">';
      display_element.innerHTML = fxtn;
      var t9 = setTimeout(function() {
        end_trial();
      }, jitteringTime)
      setTimeoutHandlers.push(t9);
    }
    // function to end trial when it is time
    var end_trial = function() {
      // kill any remaining setTimeout handlers
      for (var i = 0; i < setTimeoutHandlers.length; i++) {
        clearTimeout(setTimeoutHandlers[i]);
      }
      // kill keyboard listeners
      jsPsych.pluginAPI.cancelAllKeyboardResponses();
      // record save or reject (or no result)
      Save_Reject = secondResponse.key == 49 ? 1: 0;
      noResult = secondResponse.key == -1 ? 1: 0;
      // record no choice
      noChoice = firstResponse.key == -1 ? 1 : 0;
      // gather the data to store for the trial
      var trial_data = {};
      trial_data.selfReward = trial.selfReward; // self reward
      trial_data.otherReward = trial.otherReward; // other reward
      trial_data.Save_Reject = Save_Reject; // save(1) or reject(0) (or no result(0))
      trial_data.rt = secondResponse.rt; // RT
      trial_data.noChoice = noChoice; // no choice(1) or choice(0)
      trial_data.noResult = noResult; // no result(1) or result(0)
      // clear the display
      display_element.innerHTML = '';
      // increase # of trial and set 0 if 1 block was finished
      if (NofTrial < 49) {
        NofTrial++;
      } else {
        NofTrial = 0;
        $('body').css('background-color','')
      }
      // move on to the next trial
      jsPsych.finishTrial(trial_data);
    };
    // this array holds handlers from setTimeout calls
    // that need to be cleared if the trial ends early
    var setTimeoutHandlers = [];
    // store response
    var firstResponse = {
      rt: -1,
      key: -1,
    };
    var secondResponse = {
      rt: -1,
      key: -1,
    };
    var Save_Reject = -1;
    var noChoice = -1;
    var noResult = -1;
    // set stimuli addresses
    var selfOutcome = 'images/mturk_psych_task_01/s' + trial.selfReward + '.jpg';
    var otherOutcome = 'images/mturk_psych_task_01/o' + trial.otherReward + '.jpg';
    var summaryOutcome = 'images/mturk_psych_task_01/so' + trial.selfReward + '_' + trial.otherReward + '.jpg';
    var result = [];
    result[49] = 'images/mturk_psych_task_01/save.jpg'
    result[50] = 'images/mturk_psych_task_01/again.jpg'
    result[-1] = 'images/mturk_psych_task_01/nores.jpg'
    // set stimuli hold time
    var holdTime = [];
    holdTime["choice"] = 2000;
    holdTime["fixation1"] = 2000;
    holdTime["fixation2"] = 500;
    holdTime["selfOutcome"] = 3500;
    holdTime["otherOutcome"] = 3500;
    holdTime["decisionMaking"] = 3000;
    holdTime["result"] = 750;
    holdTime["nores"] = holdTime["fixation1"] + 2 * holdTime["fixation2"] + holdTime["selfOutcome"] + holdTime["otherOutcome"] + holdTime["decisionMaking"] + holdTime["result"];
    // set # of trial if first trial
    NofTrial = typeof NofTrial == 'undefined' ? 0 : NofTrial;
    // set jittering time if first trial
    jittering = typeof jittering == 'undefined' ? jsPsych.randomization.repeat(trial.jittering,1) : jittering
    jittering = typeof jittering[0] == 'undefined' ? jsPsych.randomization.repeat(trial.jittering,1) : jittering
    jitteringTime = jittering[0];
    jittering.splice(0,1)
    // change background color to black
    $('body').css('background-color','#000000')
    // start task
    initial();
  };

  return plugin;
})();