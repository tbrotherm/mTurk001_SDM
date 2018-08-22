/* the script for mturk_psych_task_01 */

var psycExp = function(){
  // set the date when participating
  var participatedDate = new Date();

  // set comprehension check function
  var compre_alart = '';
  var comprehension_check = function(elem) {
    if ($('#comprehension_checkbox').is(':checked')) {
      return true;
    }
    else {
      alert(compre_alart);
      return false;
    }
    return false;
  };
  // determine trial set
  var trialSet = [
    {selfReward:200, otherReward:200},
    {selfReward:200, otherReward:100},
    {selfReward:200, otherReward:0},
    {selfReward:200, otherReward:-100},
    {selfReward:200, otherReward:-200},
    {selfReward:100, otherReward:200},
    {selfReward:100, otherReward:100},
    {selfReward:100, otherReward:0},
    {selfReward:100, otherReward:-100},
    {selfReward:100, otherReward:-200},
    {selfReward:0, otherReward:200},
    {selfReward:0, otherReward:100},
    {selfReward:0, otherReward:0},
    {selfReward:0, otherReward:-100},
    {selfReward:0, otherReward:-200},
    {selfReward:-100, otherReward:200},
    {selfReward:-100, otherReward:100},
    {selfReward:-100, otherReward:0},
    {selfReward:-100, otherReward:-100},
    {selfReward:-100, otherReward:-200},
    {selfReward:-200, otherReward:200},
    {selfReward:-200, otherReward:100},
    {selfReward:-200, otherReward:0},
    {selfReward:-200, otherReward:-100},
    {selfReward:-200, otherReward:-200},
  ];
  // determine jittering set
  var jitteringSet = [
    3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000,
    4000,4000,4000,4000,4000,4000,4000,4000,4000,4000,4000,4000,4000,
    5000,5000,5000,5000,5000,5000,
    6000,6000,6000,
    7000,7000,
    8000,
  ];
  // set trial orders
  var trialOrder1 = jsPsych.randomization.repeat(trialSet,2);
  var trialOrder2 = jsPsych.randomization.repeat(trialSet,2);
  // set post questionnaire
  var preamble01 = 'This is a questionnaire that measures a variety of feelings and behaviors in various situations. Listed below are a number of statements. Read each one as if it referred to you. Beside each statement circle the number that best matches your agreement or disagreement. Please respond to every statement.';
  var prompts01 = [
    'I enjoy being unique and different from others in many respects.',
    'I can talk openly with a person who I meet for the first time, even when this person is much older than I am.',
    'Even when I strongly disagree with group members, I avoid an argument.',
    'I have respect for the authority figures with whom I interact.',
    'I do my own thing, regardless of what others think.',
    'I respect people who are modest about themselves.',
    'I feel it is important for me to act as an independent person.',
    'I will sacrifice my self interest for the benefit of the group I am in.',
    "I'd rather say 'No' directly, than risk being misunderstood.",
    'Having a lively imagination is important to me.',
    "I should take into consideration my parents' advice when making education/career plans.",
    'I feel my fate is intertwined with the fate of those around me.',
    "I prefer to be direct and forthright when dealing with people I've just met.",
    'I feel good when I cooperate with others.',
    'I am comfortable with being singled out for praise or rewards.',
    'If my brother or sister fails, I feel responsible.',
    'I often have the feeling that my relationships with others are more important than my own accomplishments.',
    'Speaking up during a class (or a meeting) is not a problem for me.',
    'I would offer my seat in a bus to my professor (or my boss).',
    'I act the same way no matter who I am with.',
    'My happiness depends on the happiness of those around me.',
    'I value being in good health above everything.',
    'I will stay in a group if they need me, even when I am not happy with the group.',
    'I try to do what is best for me, regardless of how that might affect others.',
    'Being able to take care of myself is a primary concern for me.',
    'It is important to me to respect decisions made by the group.',
    'My personal identity, independent of others, is very important to me.',
    'It is important for me to maintain harmony within my group.',
    'I act the same way at home that I do at school (or work).',
    'I usually go along with what others want to do, even when I would rather do something different.'
  ];
  var Lickert_7 = ['Strongly disagree', 'Disagree', 'Somewhat disagree', 'Neither agree nor disagree', 'Somewhat agree', 'Agree', 'Strongly agree']
  var questions01 = [];
  for (var i = 0; i < prompts01.length; i++) {
    questions01[i] = {prompt: prompts01[i], scale: Lickert_7};
  }
  var preamble02 = 'Lastly, we’d like to ask you for some details about yourself. Please leave textboxes default value if you do not want to answer questions';
  var prompts02 = [
//    'Sex', 
    'Age', 
    'Home state', 
//    'Have you ever lived in a country other than US? (more than one year)', 
//    'Please choose one option that best matches situation where you are now'
  ];
  var default_values02 = 'I do not want to answer';
  var questions02 = [];
  for (var i = 0; i < prompts02.length; i++) {
    questions02[i] = {prompt: prompts02[i], value: default_values02};
  }
  var preamble03 = 'Lastly, we’d like to ask you for some details about yourself.';
  var prompts03 = [
    'Sex', 
//    'Age', 
//    'Home state', 
    'Have you ever lived in a country other than US? (more than one year)', 
    'Please choose one option that best matches situation where you are now'
  ];
  var options03 = [
    ['I do not want to answer', 'Male', 'Female', 'other'], 
//    ['I do not want to answer', '10s', '20s', '30s', '40s', '50s', '60s'], 
//    ['I do not want to answer', "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"], 
    ['I do not want to answer', 'Yes', 'No'], 
    ['I do not want to answer', 'Personal space (e.g., Your own room)', 'Shared space (e.g., Living room)', 'Public space (e.g., library)', 'Other']
  ];
  var required03 = [true, /*true, true, */true, true]
  var questions03 = [];
  for (var i = 0; i < prompts03.length; i++) {
    questions03[i] = {prompt: prompts03[i], options: options03[i], required: required03[i]};
  }
  // determine task structures
  var facePage = {
    type: 'external-html',
    url: 'external_html/facesheet_consent_en_mturk_psych_task_01.html',
    cont_key: [32],
    check_fn: comprehension_check,
    force_refresh: true,
    on_start: function() {
      compre_alart = 'Please check the box in bottom if you agree to participate this study.';
    },
  }
  var matching = {
    type: 'mturk_psych_matching',
  }
  var instPage = {
    type: 'external-html',
    url: 'external_html/instruction_en_mturk_psych_task_01.html',
    cont_key: [32],
    check_fn: comprehension_check,
    force_refresh: true,
    on_start: function() {
      compre_alart = 'Please check the box in bottom if you understood the procedure of this task.';
    },
  }
  var mturk_psych_task_01_block1 = {
    type: 'mturk_psych_task_01',
    jittering: jitteringSet,
    timeline: trialOrder1,
  };
  var rest_block1 = {
    type: 'html-keyboard-response',
    choices: [32],
    stimulus: feedback01,
		on_start: function() {
			resultFirstBlock = getFinalOutcome();
			feedback01 = '<p>This is the end of first block. Thank you for your participation</p>' + 
      '<p>You gain<b>' + resultFirstBlock.selfOutcome + 'dollors</b> in this block (lose if the number is negative)，<br>' + 
      'your partner gains<b>' + resultFirstBlock.otherOutcome + 'dollors</b> in this block (lose if the number is negative)</p>' + 
      '<p>Press space key to resume the second block.</p>';
		},
  };
  var mturk_psych_task_01_block2 = {
    type: 'mturk_psych_task_01',
    jittering: jitteringSet,
    timeline: trialOrder2,
  };
  var rest_block2 = {
    type: 'html-keyboard-response',
    choices: [32],
    stimulus: feedback02,
		on_start: function() {
      resultSecondBlock = getFinalOutcome();
      resultSecondBlock.selfOutcome = resultSecondBlock.selfOutcome - resultFirstBlock.selfOutcome;
      resultSecondBlock.otherOutcome = resultSecondBlock.otherOutcome - resultFirstBlock.otherOutcome;
			feedback02 = '<p>This is the end of second block. Thank you for your participation</p>' + 
      '<p>You gain<b>' + resultSecondBlock.selfOutcome + 'dollors</b> in this block (lose if the number is negative)，<br>' + 
      'your partner gains<b>' + resultSecondBlock.otherOutcome + 'dollors</b> in this block (lose if the number is negative)</p>' + 
      '<p>Press space key to resume the survey block.</p>';
		},
  };
  var survey_block01 = {
    type: 'survey-likert',
    preamble: preamble01,
    questions: questions01,
  };
  var survey_block02 = {
    type: 'survey-text',
    preamble: preamble02,
    questions: questions02,
  };
  var survey_block03 = {
    type: 'survey-multi-choice',
    preamble: preamble03,
    questions: questions03,
  };

  // determine timeline
  var timeline = [];
  timeline.push(facePage);
  timeline.push(matching);
  timeline.push(instPage);
  timeline.push(mturk_psych_task_01_block1);
  timeline.push(rest_block1);
  timeline.push(mturk_psych_task_01_block2);
  timeline.push(rest_block2);
  timeline.push(survey_block01);
  timeline.push(survey_block02);
  timeline.push(survey_block03);

  // push the additional data
  jsPsych.data.addProperties({workerId: workerId, finish_code: finish_code, dateStarted: participatedDate});

  // preload the image used in the experiment
  var images = [
    'images/loading.gif',
    'images/mturk_psych_task_01/flow_example.jpg',
    'images/mturk_psych_task_01/fixation.jpg',
    'images/mturk_psych_task_01/choice.jpg',
    'images/mturk_psych_task_01/save.jpg',
    'images/mturk_psych_task_01/again.jpg',
    'images/mturk_psych_task_01/nores.jpg',
    'images/mturk_psych_task_01/s0.jpg',
    'images/mturk_psych_task_01/s100.jpg',
    'images/mturk_psych_task_01/s200.jpg',
    'images/mturk_psych_task_01/s-100.jpg',
    'images/mturk_psych_task_01/s-200.jpg',
    'images/mturk_psych_task_01/o0.jpg',
    'images/mturk_psych_task_01/o100.jpg',
    'images/mturk_psych_task_01/o200.jpg',
    'images/mturk_psych_task_01/o-100.jpg',
    'images/mturk_psych_task_01/o-200.jpg',
    'images/mturk_psych_task_01/so0_0.jpg',
    'images/mturk_psych_task_01/so0_100.jpg',
    'images/mturk_psych_task_01/so0_200.jpg',
    'images/mturk_psych_task_01/so0_-100.jpg',
    'images/mturk_psych_task_01/so0_-200.jpg',
    'images/mturk_psych_task_01/so100_0.jpg',
    'images/mturk_psych_task_01/so100_100.jpg',
    'images/mturk_psych_task_01/so100_200.jpg',
    'images/mturk_psych_task_01/so100_-100.jpg',
    'images/mturk_psych_task_01/so100_-200.jpg',
    'images/mturk_psych_task_01/so200_0.jpg',
    'images/mturk_psych_task_01/so200_100.jpg',
    'images/mturk_psych_task_01/so200_200.jpg',
    'images/mturk_psych_task_01/so200_-100.jpg',
    'images/mturk_psych_task_01/so200_-200.jpg',
    'images/mturk_psych_task_01/so-100_0.jpg',
    'images/mturk_psych_task_01/so-100_100.jpg',
    'images/mturk_psych_task_01/so-100_200.jpg',
    'images/mturk_psych_task_01/so-100_-100.jpg',
    'images/mturk_psych_task_01/so-100_-200.jpg',
    'images/mturk_psych_task_01/so-200_0.jpg',
    'images/mturk_psych_task_01/so-200_100.jpg',
    'images/mturk_psych_task_01/so-200_200.jpg',
    'images/mturk_psych_task_01/so-200_-100.jpg',
    'images/mturk_psych_task_01/so-200_-200.jpg',
  ];
  // initialize the experiment order
  if (typeof workerId == 'undefined') {
    $('#jspsych-target').html('<p>The task will start only if you access this page from Amazon Mechanical Turk (MTurk).</p>');
  } else {
    jsPsych.init({
      timeline: timeline,
      on_finish: function() {
        // save the data at the end of the experiment
        save_data(jsPsych.data.getData());
        jsPsych.data.displayData();
        // display the debriefing page
        $('#jspsych-target').load('external_html/debriefing_mturk_psych_task_01.html')
      },
			preload_images: images,
    });
  }
}
// get worker ID for each participant
var workerId = jsPsych.data.getURLVariable('mtwID');
// set independent finish-code for each participant
var finish_code = jsPsych.randomization.randomID(10);
// set boxes to record final outcome
var resultFirstBlock = {};
var resultSecondBlock = {};
var feedback01 = '';
var feedback02 = '';
// set function to assess final outcomes of blocks
var getFinalOutcome = function() {
  var trials = jsPsych.data.getTrialsOfType('mturk_psych_task_01');
  var selfOutcome = 0; 
  var otherOutcome = 0;
  for (var i = 0; i < trials.length; i++) {
    selfOutcome += trials[i].selfReward * trials[i].Save_Reject;
    otherOutcome += trials[i].otherReward * trials[i].Save_Reject;
  }
  return {
    selfOutcome: selfOutcome,
    otherOutcome: otherOutcome,
  }
}