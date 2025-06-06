/********************** 
 * Visual_Search *
 **********************/


// store info about the experiment session:
let expName = 'visual_search';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([1.0, 1.0, 1.0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructions_tRoutineBegin());
flowScheduler.add(instructions_tRoutineEachFrame());
flowScheduler.add(instructions_tRoutineEnd());
flowScheduler.add(countdownRoutineBegin());
flowScheduler.add(countdownRoutineEachFrame());
flowScheduler.add(countdownRoutineEnd());
const trials_tLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_tLoopBegin(trials_tLoopScheduler));
flowScheduler.add(trials_tLoopScheduler);
flowScheduler.add(trials_tLoopEnd);




flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
flowScheduler.add(countdownRoutineBegin());
flowScheduler.add(countdownRoutineEachFrame());
flowScheduler.add(countdownRoutineEnd());
const trials_4LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_4LoopBegin(trials_4LoopScheduler));
flowScheduler.add(trials_4LoopScheduler);
flowScheduler.add(trials_4LoopEnd);




flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'conditions.csv', 'path': 'conditions.csv'},
    {'name': 'conditions.csv', 'path': 'conditions.csv'},
    {'name': 'Images/Yes.png', 'path': 'Images/Yes.png'},
    {'name': 'Images/No.png', 'path': 'Images/No.png'},
    {'name': 'Images/1.png', 'path': 'Images/1.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instructions_tClock;
var mouse_instructions_t;
var text_instructions_t;
var countdownClock;
var text_3;
var text_2;
var text_1;
var ISIClock;
var blank;
var visual_searchClock;
var square_t;
var instruct_t;
var mouse_t;
var target_t;
var C_t;
var InC_t;
var image_t;
var feedbackClock;
var fb;
var trial_counter;
var rts;
var n_round_t;
var FB;
var instructionsClock;
var text_instructions;
var mouse_instructions;
var visual_search_4Clock;
var square_4;
var instruct_4;
var mouse_4;
var target_4;
var C_4;
var InC_4;
var image_4;
var feedback_4Clock;
var fb_4;
var trial_counter_4;
var n_round_4;
var FB_4;
var endClock;
var text_end;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instructions_t"
  instructions_tClock = new util.Clock();
  mouse_instructions_t = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_instructions_t.mouseClock = new util.Clock();
  text_instructions_t = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instructions_t',
    text: 'คุณจะเห็นรูปทรงหลายรูปปรากฏบนหน้าจอในแต่ละรอบ\nคุณต้องหา "สามเหลี่ยม" เมื่อเจอให้กดปุ่มสึเขียว\nถ้าไม่มี "สามเหลี่ยม" ให้กดปุ่มสีแดง\nแตะเพื่อดำเนินการต่อ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "countdown"
  countdownClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '3',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '2',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_1',
    text: '1',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "ISI"
  ISIClock = new util.Clock();
  blank = new visual.TextStim({
    win: psychoJS.window,
    name: 'blank',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "visual_search"
  visual_searchClock = new util.Clock();
  square_t = new visual.Rect ({
    win: psychoJS.window, name: 'square_t', 
    width: [0.6, 0.6][0], height: [0.6, 0.6][1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  instruct_t = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruct_t',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  mouse_t = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_t.mouseClock = new util.Clock();
  target_t = new visual.ShapeStim ({
    win: psychoJS.window, name: 'target_t', 
    vertices: [[-[0.039, 0.035][0]/2.0, -[0.039, 0.035][1]/2.0], [+[0.039, 0.035][0]/2.0, -[0.039, 0.035][1]/2.0], [0, [0.039, 0.035][1]/2.0]],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    fillColor: new util.Color([(- 0.3255), 0.4118, 1.0]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -4, 
    interpolate: true, 
  });
  
  C_t = new visual.ImageStim({
    win : psychoJS.window,
    name : 'C_t', units : undefined, 
    image : 'Images/Yes.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.15, (- 0.4)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  InC_t = new visual.ImageStim({
    win : psychoJS.window,
    name : 'InC_t', units : undefined, 
    image : 'Images/No.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.15), (- 0.4)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  image_t = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_t', units : undefined, 
    image : 'Images/1.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.1, 0.395], 
    draggable: false,
    size : [0.07, 0.07],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  fb = new visual.TextStim({
    win: psychoJS.window,
    name: 'fb',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  trial_counter = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_counter',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Run 'Begin Experiment' code from track_rt
  rts = [];
  n_round_t = 0;
  
  FB = new visual.TextStim({
    win: psychoJS.window,
    name: 'FB',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.06], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  text_instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instructions',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouse_instructions = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_instructions.mouseClock = new util.Clock();
  // Initialize components for Routine "visual_search_4"
  visual_search_4Clock = new util.Clock();
  square_4 = new visual.Rect ({
    win: psychoJS.window, name: 'square_4', 
    width: [0.6, 0.6][0], height: [0.6, 0.6][1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    fillColor: new util.Color([1.0, 1.0, 1.0]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  instruct_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruct_4',
    text: 'มีสามเหลี่ยมสีฟ้า     หรือไม่',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  mouse_4 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_4.mouseClock = new util.Clock();
  target_4 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'target_4', 
    vertices: [[-[0.039, 0.035][0]/2.0, -[0.039, 0.035][1]/2.0], [+[0.039, 0.035][0]/2.0, -[0.039, 0.035][1]/2.0], [0, [0.039, 0.035][1]/2.0]],
    ori: 0.0, 
    pos: [10, 10], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([0.1608, (- 0.7412), 1.0]), 
    fillColor: new util.Color([(- 1.0), 0.2, 1.0]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -4, 
    interpolate: true, 
  });
  
  C_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'C_4', units : undefined, 
    image : 'Images/Yes.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.15, (- 0.4)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  InC_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'InC_4', units : undefined, 
    image : 'Images/No.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.15), (- 0.4)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  image_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_4', units : undefined, 
    image : 'Images/1.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.1, 0.395], 
    draggable: false,
    size : [0.07, 0.07],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  // Initialize components for Routine "feedback_4"
  feedback_4Clock = new util.Clock();
  fb_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fb_4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  trial_counter_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_counter_4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Run 'Begin Experiment' code from track_rt_4
  rts = [];
  n_round_4 = 0;
  
  FB_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'FB_4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.06], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  text_end = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_end',
    text: 'ขอบคุณสำหรับการเข้าร่วม',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var instructions_tMaxDurationReached;
var gotValidClick;
var instructions_tMaxDuration;
var instructions_tComponents;
function instructions_tRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions_t' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instructions_tClock.reset();
    routineTimer.reset();
    instructions_tMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_instructions_t
    gotValidClick = false; // until a click is received
    instructions_tMaxDuration = null
    // keep track of which components have finished
    instructions_tComponents = [];
    instructions_tComponents.push(mouse_instructions_t);
    instructions_tComponents.push(text_instructions_t);
    
    instructions_tComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function instructions_tRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions_t' ---
    // get current time
    t = instructions_tClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse_instructions_t* updates
    if (t >= 0.0 && mouse_instructions_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_instructions_t.tStart = t;  // (not accounting for frame time here)
      mouse_instructions_t.frameNStart = frameN;  // exact frame index
      
      mouse_instructions_t.status = PsychoJS.Status.STARTED;
      mouse_instructions_t.mouseClock.reset();
      prevButtonState = mouse_instructions_t.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_instructions_t.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_instructions_t.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *text_instructions_t* updates
    if (t >= 0.0 && text_instructions_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instructions_t.tStart = t;  // (not accounting for frame time here)
      text_instructions_t.frameNStart = frameN;  // exact frame index
      
      text_instructions_t.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructions_tComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions_tRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions_t' ---
    instructions_tComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "instructions_t" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var countdownMaxDurationReached;
var countdownMaxDuration;
var countdownComponents;
function countdownRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'countdown' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    countdownClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    countdownMaxDurationReached = false;
    // update component parameters for each repeat
    countdownMaxDuration = null
    // keep track of which components have finished
    countdownComponents = [];
    countdownComponents.push(text_3);
    countdownComponents.push(text_2);
    countdownComponents.push(text_1);
    
    countdownComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function countdownRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'countdown' ---
    // get current time
    t = countdownClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_3.setAutoDraw(false);
    }
    
    
    // *text_2* updates
    if (t >= 1.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    frameRemains = 1.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    
    
    // *text_1* updates
    if (t >= 2.0 && text_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_1.tStart = t;  // (not accounting for frame time here)
      text_1.frameNStart = frameN;  // exact frame index
      
      text_1.setAutoDraw(true);
    }
    
    frameRemains = 2.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_1.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    countdownComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function countdownRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'countdown' ---
    countdownComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if (countdownMaxDurationReached) {
        countdownClock.add(countdownMaxDuration);
    } else {
        countdownClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials_t;
function trials_tLoopBegin(trials_tLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_t = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions.csv',
      seed: undefined, name: 'trials_t'
    });
    psychoJS.experiment.addLoop(trials_t); // add the loop to the experiment
    currentLoop = trials_t;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_t.forEach(function() {
      snapshot = trials_t.getSnapshot();
    
      trials_tLoopScheduler.add(importConditions(snapshot));
      trials_tLoopScheduler.add(ISIRoutineBegin(snapshot));
      trials_tLoopScheduler.add(ISIRoutineEachFrame());
      trials_tLoopScheduler.add(ISIRoutineEnd(snapshot));
      trials_tLoopScheduler.add(visual_searchRoutineBegin(snapshot));
      trials_tLoopScheduler.add(visual_searchRoutineEachFrame());
      trials_tLoopScheduler.add(visual_searchRoutineEnd(snapshot));
      trials_tLoopScheduler.add(feedbackRoutineBegin(snapshot));
      trials_tLoopScheduler.add(feedbackRoutineEachFrame());
      trials_tLoopScheduler.add(feedbackRoutineEnd(snapshot));
      trials_tLoopScheduler.add(trials_tLoopEndIteration(trials_tLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_tLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_t);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_tLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_4;
function trials_4LoopBegin(trials_4LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_4 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions.csv',
      seed: undefined, name: 'trials_4'
    });
    psychoJS.experiment.addLoop(trials_4); // add the loop to the experiment
    currentLoop = trials_4;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_4.forEach(function() {
      snapshot = trials_4.getSnapshot();
    
      trials_4LoopScheduler.add(importConditions(snapshot));
      trials_4LoopScheduler.add(ISIRoutineBegin(snapshot));
      trials_4LoopScheduler.add(ISIRoutineEachFrame());
      trials_4LoopScheduler.add(ISIRoutineEnd(snapshot));
      trials_4LoopScheduler.add(visual_search_4RoutineBegin(snapshot));
      trials_4LoopScheduler.add(visual_search_4RoutineEachFrame());
      trials_4LoopScheduler.add(visual_search_4RoutineEnd(snapshot));
      trials_4LoopScheduler.add(feedback_4RoutineBegin(snapshot));
      trials_4LoopScheduler.add(feedback_4RoutineEachFrame());
      trials_4LoopScheduler.add(feedback_4RoutineEnd(snapshot));
      trials_4LoopScheduler.add(trials_4LoopEndIteration(trials_4LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_4LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_4);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_4LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var ISIMaxDurationReached;
var ISIMaxDuration;
var ISIComponents;
function ISIRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ISI' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    ISIClock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    ISIMaxDurationReached = false;
    // update component parameters for each repeat
    ISIMaxDuration = null
    // keep track of which components have finished
    ISIComponents = [];
    ISIComponents.push(blank);
    
    ISIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ISIRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ISI' ---
    // get current time
    t = ISIClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *blank* updates
    if (t >= 0.0 && blank.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blank.tStart = t;  // (not accounting for frame time here)
      blank.frameNStart = frameN;  // exact frame index
      
      blank.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (blank.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blank.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ISIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ISIRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ISI' ---
    ISIComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if (ISIMaxDurationReached) {
        ISIClock.add(ISIMaxDuration);
    } else {
        ISIClock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var visual_searchMaxDurationReached;
var n_distractors1;
var n_distractors2;
var n_target;
var distractors1;
var distractors2;
var targets;
var xys;
var count;
var positions;
var visual_searchMaxDuration;
var visual_searchComponents;
function visual_searchRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'visual_search' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    visual_searchClock.reset();
    routineTimer.reset();
    visual_searchMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_t
    n_distractors1 = decoy_1;
    n_distractors2 = decoy_2;
    n_target = tar;
    distractors1 = [];
    distractors2 = [];
    targets = [];
    xys = [[(- 0.25), (- 0.25)], [(- 0.194444), (- 0.25)], [(- 0.138889), (- 0.25)], [(- 0.083333), (- 0.25)], [(- 0.027778), (- 0.25)], [0.027778, (- 0.25)], [0.083333, (- 0.25)], [0.138889, (- 0.25)], [0.194444, (- 0.25)], [0.25, (- 0.25)], [(- 0.25), (- 0.194444)], [(- 0.194444), (- 0.194444)], [(- 0.138889), (- 0.194444)], [(- 0.083333), (- 0.194444)], [(- 0.027778), (- 0.194444)], [0.027778, (- 0.194444)], [0.083333, (- 0.194444)], [0.138889, (- 0.194444)], [0.194444, (- 0.194444)], [0.25, (- 0.194444)], [(- 0.25), (- 0.138889)], [(- 0.194444), (- 0.138889)], [(- 0.138889), (- 0.138889)], [(- 0.083333), (- 0.138889)], [(- 0.027778), (- 0.138889)], [0.027778, (- 0.138889)], [0.083333, (- 0.138889)], [0.138889, (- 0.138889)], [0.194444, (- 0.138889)], [0.25, (- 0.138889)], [(- 0.25), (- 0.083333)], [(- 0.194444), (- 0.083333)], [(- 0.138889), (- 0.083333)], [(- 0.083333), (- 0.083333)], [(- 0.027778), (- 0.083333)], [0.027778, (- 0.083333)], [0.083333, (- 0.083333)], [0.138889, (- 0.083333)], [0.194444, (- 0.083333)], [0.25, (- 0.083333)], [(- 0.25), (- 0.027778)], [(- 0.194444), (- 0.027778)], [(- 0.138889), (- 0.027778)], [(- 0.083333), (- 0.027778)], [(- 0.027778), (- 0.027778)], [0.027778, (- 0.027778)], [0.083333, (- 0.027778)], [0.138889, (- 0.027778)], [0.194444, (- 0.027778)], [0.25, (- 0.027778)], [(- 0.25), 0.027778], [(- 0.194444), 0.027778], [(- 0.138889), 0.027778], [(- 0.083333), 0.027778], [(- 0.027778), 0.027778], [0.027778, 0.027778], [0.083333, 0.027778], [0.138889, 0.027778], [0.194444, 0.027778], [0.25, 0.027778], [(- 0.25), 0.083333], [(- 0.194444), 0.083333], [(- 0.138889), 0.083333], [(- 0.083333), 0.083333], [(- 0.027778), 0.083333], [0.027778, 0.083333], [0.083333, 0.083333], [0.138889, 0.083333], [0.194444, 0.083333], [0.25, 0.083333], [(- 0.25), 0.138889], [(- 0.194444), 0.138889], [(- 0.138889), 0.138889], [(- 0.083333), 0.138889], [(- 0.027778), 0.138889], [0.027778, 0.138889], [0.083333, 0.138889], [0.138889, 0.138889], [0.194444, 0.138889], [0.25, 0.138889], [(- 0.25), 0.194444], [(- 0.194444), 0.194444], [(- 0.138889), 0.194444], [(- 0.083333), 0.194444], [(- 0.027778), 0.194444], [0.027778, 0.194444], [0.083333, 0.194444], [0.138889, 0.194444], [0.194444, 0.194444], [0.25, 0.194444], [(- 0.25), 0.25], [(- 0.194444), 0.25], [(- 0.138889), 0.25], [(- 0.083333), 0.25], [(- 0.027778), 0.25], [0.027778, 0.25], [0.083333, 0.25], [0.138889, 0.25], [0.194444, 0.25], [0.25, 0.25]];
    util.shuffle(xys);
    count = 0;
    positions = [];
    for (var i, _pj_c = 0, _pj_a = util.range(n_distractors1), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        distractor1 = new visual.Polygon({"win": psychoJS.window, "edges": 4, "size": 0.05, "pos": [xys[count][0], (xys[count][1] + 0.01)], "lineColor": [(- 1.0), 0.2, 1.0], "fillColor": [(- 1.0), 0.2, 1.0], "opacity": 1.0, "depth": (- 1.0)});
        distractors1.push(distractor1);
        positions.push(xys[count]);
        count += 1;
    }
    for (var i, _pj_c = 0, _pj_a = util.range(n_distractors2), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        distractor2 = new visual.Polygon({"win": psychoJS.window, "edges": 3, "size": 0.05, "pos": [xys[count][0], xys[count][1]], "lineColor": [0.1608, (- 0.7412), 1.0], "fillColor": [0.1608, (- 0.7412), 1.0], "opacity": 1.0, "depth": (- 1.0)});
        distractors2.push(distractor2);
        positions.push(xys[count]);
        count += 1;
    }
    for (var i, _pj_c = 0, _pj_a = util.range(n_target), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        target = new visual.Polygon({"win": psychoJS.window, "edges": 3, "size": 0.05, "pos": [xys[count][0], xys[count][1]], "lineColor": [(- 1.0), 0.2, 1.0], "fillColor": [(- 1.0), 0.2, 1.0], "opacity": 1.0, "depth": (- 1.0)});
        targets.push(target);
        positions.push(xys[count]);
    }
    for (var distractor1, _pj_c = 0, _pj_a = distractors1, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        distractor1 = _pj_a[_pj_c];
        distractor1.setAutoDraw(true);
    }
    for (var distractor2, _pj_c = 0, _pj_a = distractors2, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        distractor2 = _pj_a[_pj_c];
        distractor2.setAutoDraw(true);
    }
    for (var target, _pj_c = 0, _pj_a = targets, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        target = _pj_a[_pj_c];
        target.setAutoDraw(true);
    }
    
    instruct_t.setText('มีสามเหลี่ยมสีฟ้า     หรือไม่');
    // setup some python lists for storing info about the mouse_t
    // current position of the mouse:
    mouse_t.x = [];
    mouse_t.y = [];
    mouse_t.leftButton = [];
    mouse_t.midButton = [];
    mouse_t.rightButton = [];
    mouse_t.time = [];
    mouse_t.clicked_name = [];
    gotValidClick = false; // until a click is received
    target_t.setPos([10, 10]);
    visual_searchMaxDuration = null
    // keep track of which components have finished
    visual_searchComponents = [];
    visual_searchComponents.push(square_t);
    visual_searchComponents.push(instruct_t);
    visual_searchComponents.push(mouse_t);
    visual_searchComponents.push(target_t);
    visual_searchComponents.push(C_t);
    visual_searchComponents.push(InC_t);
    visual_searchComponents.push(image_t);
    
    visual_searchComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var _mouseXYs;
function visual_searchRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'visual_search' ---
    // get current time
    t = visual_searchClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *square_t* updates
    if (t >= 0.0 && square_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_t.tStart = t;  // (not accounting for frame time here)
      square_t.frameNStart = frameN;  // exact frame index
      
      square_t.setAutoDraw(true);
    }
    
    
    // *instruct_t* updates
    if (t >= 0.0 && instruct_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruct_t.tStart = t;  // (not accounting for frame time here)
      instruct_t.frameNStart = frameN;  // exact frame index
      
      instruct_t.setAutoDraw(true);
    }
    
    // *mouse_t* updates
    if (t >= 0.0 && mouse_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_t.tStart = t;  // (not accounting for frame time here)
      mouse_t.frameNStart = frameN;  // exact frame index
      
      mouse_t.status = PsychoJS.Status.STARTED;
      mouse_t.mouseClock.reset();
      prevButtonState = mouse_t.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_t.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_t.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_t.clickableObjects = eval([target_4, C_4, InC_4])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_t.clickableObjects)) {
              mouse_t.clickableObjects = [mouse_t.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_t.clickableObjects) {
              if (obj.contains(mouse_t)) {
                  gotValidClick = true;
                  mouse_t.clicked_name.push(obj.name);
              }
          }
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_t.clickableObjects = eval([target_4, C_4, InC_4])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_t.clickableObjects)) {
              mouse_t.clickableObjects = [mouse_t.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_t.clickableObjects) {
              if (obj.contains(mouse_t)) {
                  gotValidClick = true;
                  mouse_t.clicked_name.push(obj.name);
              }
          }
          if (gotValidClick === true) { 
            _mouseXYs = mouse_t.getPos();
            mouse_t.x.push(_mouseXYs[0]);
            mouse_t.y.push(_mouseXYs[1]);
            mouse_t.leftButton.push(_mouseButtons[0]);
            mouse_t.midButton.push(_mouseButtons[1]);
            mouse_t.rightButton.push(_mouseButtons[2]);
            mouse_t.time.push(mouse_t.mouseClock.getTime());
          }
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *target_t* updates
    if (t >= 0.0 && target_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target_t.tStart = t;  // (not accounting for frame time here)
      target_t.frameNStart = frameN;  // exact frame index
      
      target_t.setAutoDraw(true);
    }
    
    
    // *C_t* updates
    if (t >= 0.0 && C_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      C_t.tStart = t;  // (not accounting for frame time here)
      C_t.frameNStart = frameN;  // exact frame index
      
      C_t.setAutoDraw(true);
    }
    
    
    // *InC_t* updates
    if (t >= 0.0 && InC_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      InC_t.tStart = t;  // (not accounting for frame time here)
      InC_t.frameNStart = frameN;  // exact frame index
      
      InC_t.setAutoDraw(true);
    }
    
    
    // *image_t* updates
    if (t >= 0.0 && image_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_t.tStart = t;  // (not accounting for frame time here)
      image_t.frameNStart = frameN;  // exact frame index
      
      image_t.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    visual_searchComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var correct;
function visual_searchRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'visual_search' ---
    visual_searchComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Run 'End Routine' code from code_t
    if ((mouse_t.clicked_name.slice((- 1))[0] === corrAns_4)) {
        correct = 1;
    } else {
        correct = 0;
    }
    for (var distractor1, _pj_c = 0, _pj_a = distractors1, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        distractor1 = _pj_a[_pj_c];
        distractor1.setAutoDraw(false);
    }
    for (var distractor2, _pj_c = 0, _pj_a = distractors2, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        distractor2 = _pj_a[_pj_c];
        distractor2.setAutoDraw(false);
    }
    for (var target, _pj_c = 0, _pj_a = targets, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        target = _pj_a[_pj_c];
        target.setAutoDraw(false);
    }
    
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_t.x', mouse_t.x);
    psychoJS.experiment.addData('mouse_t.y', mouse_t.y);
    psychoJS.experiment.addData('mouse_t.leftButton', mouse_t.leftButton);
    psychoJS.experiment.addData('mouse_t.midButton', mouse_t.midButton);
    psychoJS.experiment.addData('mouse_t.rightButton', mouse_t.rightButton);
    psychoJS.experiment.addData('mouse_t.time', mouse_t.time);
    psychoJS.experiment.addData('mouse_t.clicked_name', mouse_t.clicked_name);
    
    // the Routine "visual_search" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedbackMaxDurationReached;
var feedback_text;
var feedbackMaxDuration;
var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    feedbackClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    feedbackMaxDurationReached = false;
    // update component parameters for each repeat
    fb.setText((("\u0e04\u0e38\u0e13\u0e1e\u0e1a\u0e40\u0e1b\u0e49\u0e32\u0e2b\u0e21\u0e32\u0e22\u0e43\u0e19 " + Number.parseInt((mouse_t.time.slice((- 1))[0] * 1000)).toString()) + "ms"));
    trial_counter.setText(((trials_t.thisN.toString() + "/") + trials_t.nTotal.toString()));
    // Run 'Begin Routine' code from track_rt
    if ((correct === 1)) {
        feedback_text = "ถูกต้อง!";
    } else {
        if ((correct === 0)) {
            feedback_text = "ผิด!";
        }
    }
    FB.setText(feedback_text);
    psychoJS.experiment.addData('feedback.started', globalClock.getTime());
    feedbackMaxDuration = null
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(fb);
    feedbackComponents.push(trial_counter);
    feedbackComponents.push(FB);
    
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback' ---
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fb* updates
    if (t >= 0.0 && fb.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fb.tStart = t;  // (not accounting for frame time here)
      fb.frameNStart = frameN;  // exact frame index
      
      fb.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fb.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fb.setAutoDraw(false);
    }
    
    
    // *trial_counter* updates
    if (t >= 0.0 && trial_counter.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_counter.tStart = t;  // (not accounting for frame time here)
      trial_counter.frameNStart = frameN;  // exact frame index
      
      trial_counter.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (trial_counter.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trial_counter.setAutoDraw(false);
    }
    
    
    // *FB* updates
    if (t >= 0.0 && FB.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FB.tStart = t;  // (not accounting for frame time here)
      FB.frameNStart = frameN;  // exact frame index
      
      FB.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (FB.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      FB.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback' ---
    feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('feedback.stopped', globalClock.getTime());
    // Run 'End Routine' code from track_rt
    rts.push(mouse_t.time.slice((- 1))[0]);
    n_round_t += 1;
    if ((n_round_t > 1)) {
        trials_t.finished = true;
    }
    
    if (feedbackMaxDurationReached) {
        feedbackClock.add(feedbackMaxDuration);
    } else {
        feedbackClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructionsMaxDurationReached;
var instructionsMaxDuration;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instructionsClock.reset();
    routineTimer.reset();
    instructionsMaxDurationReached = false;
    // update component parameters for each repeat
    text_instructions.setText('\nแตะหน้าจอเพื่อเริ่มเล่น');
    // setup some python lists for storing info about the mouse_instructions
    gotValidClick = false; // until a click is received
    instructionsMaxDuration = null
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(text_instructions);
    instructionsComponents.push(mouse_instructions);
    
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions' ---
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_instructions* updates
    if (t >= 0.0 && text_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instructions.tStart = t;  // (not accounting for frame time here)
      text_instructions.frameNStart = frameN;  // exact frame index
      
      text_instructions.setAutoDraw(true);
    }
    
    // *mouse_instructions* updates
    if (t >= 0.0 && mouse_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_instructions.tStart = t;  // (not accounting for frame time here)
      mouse_instructions.frameNStart = frameN;  // exact frame index
      
      mouse_instructions.status = PsychoJS.Status.STARTED;
      mouse_instructions.mouseClock.reset();
      prevButtonState = mouse_instructions.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_instructions.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_instructions.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions' ---
    instructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var visual_search_4MaxDurationReached;
var visual_search_4MaxDuration;
var visual_search_4Components;
function visual_search_4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'visual_search_4' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    visual_search_4Clock.reset();
    routineTimer.reset();
    visual_search_4MaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_4
    n_distractors1 = decoy_1;
    n_distractors2 = decoy_2;
    n_target = tar;
    distractors1 = [];
    distractors2 = [];
    targets = [];
    xys = [[(- 0.25), (- 0.25)], [(- 0.194444), (- 0.25)], [(- 0.138889), (- 0.25)], [(- 0.083333), (- 0.25)], [(- 0.027778), (- 0.25)], [0.027778, (- 0.25)], [0.083333, (- 0.25)], [0.138889, (- 0.25)], [0.194444, (- 0.25)], [0.25, (- 0.25)], [(- 0.25), (- 0.194444)], [(- 0.194444), (- 0.194444)], [(- 0.138889), (- 0.194444)], [(- 0.083333), (- 0.194444)], [(- 0.027778), (- 0.194444)], [0.027778, (- 0.194444)], [0.083333, (- 0.194444)], [0.138889, (- 0.194444)], [0.194444, (- 0.194444)], [0.25, (- 0.194444)], [(- 0.25), (- 0.138889)], [(- 0.194444), (- 0.138889)], [(- 0.138889), (- 0.138889)], [(- 0.083333), (- 0.138889)], [(- 0.027778), (- 0.138889)], [0.027778, (- 0.138889)], [0.083333, (- 0.138889)], [0.138889, (- 0.138889)], [0.194444, (- 0.138889)], [0.25, (- 0.138889)], [(- 0.25), (- 0.083333)], [(- 0.194444), (- 0.083333)], [(- 0.138889), (- 0.083333)], [(- 0.083333), (- 0.083333)], [(- 0.027778), (- 0.083333)], [0.027778, (- 0.083333)], [0.083333, (- 0.083333)], [0.138889, (- 0.083333)], [0.194444, (- 0.083333)], [0.25, (- 0.083333)], [(- 0.25), (- 0.027778)], [(- 0.194444), (- 0.027778)], [(- 0.138889), (- 0.027778)], [(- 0.083333), (- 0.027778)], [(- 0.027778), (- 0.027778)], [0.027778, (- 0.027778)], [0.083333, (- 0.027778)], [0.138889, (- 0.027778)], [0.194444, (- 0.027778)], [0.25, (- 0.027778)], [(- 0.25), 0.027778], [(- 0.194444), 0.027778], [(- 0.138889), 0.027778], [(- 0.083333), 0.027778], [(- 0.027778), 0.027778], [0.027778, 0.027778], [0.083333, 0.027778], [0.138889, 0.027778], [0.194444, 0.027778], [0.25, 0.027778], [(- 0.25), 0.083333], [(- 0.194444), 0.083333], [(- 0.138889), 0.083333], [(- 0.083333), 0.083333], [(- 0.027778), 0.083333], [0.027778, 0.083333], [0.083333, 0.083333], [0.138889, 0.083333], [0.194444, 0.083333], [0.25, 0.083333], [(- 0.25), 0.138889], [(- 0.194444), 0.138889], [(- 0.138889), 0.138889], [(- 0.083333), 0.138889], [(- 0.027778), 0.138889], [0.027778, 0.138889], [0.083333, 0.138889], [0.138889, 0.138889], [0.194444, 0.138889], [0.25, 0.138889], [(- 0.25), 0.194444], [(- 0.194444), 0.194444], [(- 0.138889), 0.194444], [(- 0.083333), 0.194444], [(- 0.027778), 0.194444], [0.027778, 0.194444], [0.083333, 0.194444], [0.138889, 0.194444], [0.194444, 0.194444], [0.25, 0.194444], [(- 0.25), 0.25], [(- 0.194444), 0.25], [(- 0.138889), 0.25], [(- 0.083333), 0.25], [(- 0.027778), 0.25], [0.027778, 0.25], [0.083333, 0.25], [0.138889, 0.25], [0.194444, 0.25], [0.25, 0.25]];
    util.shuffle(xys);
    count = 0;
    positions = [];
    for (var i, _pj_c = 0, _pj_a = util.range(n_distractors1), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        distractor1 = new visual.Polygon({"win": psychoJS.window, "edges": 4, "size": 0.05, "pos": [xys[count][0], (xys[count][1] + 0.01)], "lineColor": [(- 1.0), 0.2, 1.0], "fillColor": [(- 1.0), 0.2, 1.0], "opacity": 1.0, "depth": (- 1.0)});
        distractors1.push(distractor1);
        positions.push(xys[count]);
        count += 1;
    }
    for (var i, _pj_c = 0, _pj_a = util.range(n_distractors2), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        distractor2 = new visual.Polygon({"win": psychoJS.window, "edges": 3, "size": 0.05, "pos": [xys[count][0], xys[count][1]], "lineColor": [0.1608, (- 0.7412), 1.0], "fillColor": [0.1608, (- 0.7412), 1.0], "opacity": 1.0, "depth": (- 1.0)});
        distractors2.push(distractor2);
        positions.push(xys[count]);
        count += 1;
    }
    for (var i, _pj_c = 0, _pj_a = util.range(n_target), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        target = new visual.Polygon({"win": psychoJS.window, "edges": 3, "size": 0.05, "pos": [xys[count][0], xys[count][1]], "lineColor": [(- 1.0), 0.2, 1.0], "fillColor": [(- 1.0), 0.2, 1.0], "opacity": 1.0, "depth": (- 1.0)});
        targets.push(target);
        positions.push(xys[count]);
    }
    for (var distractor1, _pj_c = 0, _pj_a = distractors1, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        distractor1 = _pj_a[_pj_c];
        distractor1.setAutoDraw(true);
    }
    for (var distractor2, _pj_c = 0, _pj_a = distractors2, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        distractor2 = _pj_a[_pj_c];
        distractor2.setAutoDraw(true);
    }
    for (var target, _pj_c = 0, _pj_a = targets, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        target = _pj_a[_pj_c];
        target.setAutoDraw(true);
    }
    
    // setup some python lists for storing info about the mouse_4
    // current position of the mouse:
    mouse_4.x = [];
    mouse_4.y = [];
    mouse_4.leftButton = [];
    mouse_4.midButton = [];
    mouse_4.rightButton = [];
    mouse_4.time = [];
    mouse_4.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('visual_search_4.started', globalClock.getTime());
    visual_search_4MaxDuration = null
    // keep track of which components have finished
    visual_search_4Components = [];
    visual_search_4Components.push(square_4);
    visual_search_4Components.push(instruct_4);
    visual_search_4Components.push(mouse_4);
    visual_search_4Components.push(target_4);
    visual_search_4Components.push(C_4);
    visual_search_4Components.push(InC_4);
    visual_search_4Components.push(image_4);
    
    visual_search_4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function visual_search_4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'visual_search_4' ---
    // get current time
    t = visual_search_4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *square_4* updates
    if (t >= 0.0 && square_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_4.tStart = t;  // (not accounting for frame time here)
      square_4.frameNStart = frameN;  // exact frame index
      
      square_4.setAutoDraw(true);
    }
    
    
    // *instruct_4* updates
    if (t >= 0.0 && instruct_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruct_4.tStart = t;  // (not accounting for frame time here)
      instruct_4.frameNStart = frameN;  // exact frame index
      
      instruct_4.setAutoDraw(true);
    }
    
    // *mouse_4* updates
    if (t >= 0.0 && mouse_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_4.tStart = t;  // (not accounting for frame time here)
      mouse_4.frameNStart = frameN;  // exact frame index
      
      mouse_4.status = PsychoJS.Status.STARTED;
      mouse_4.mouseClock.reset();
      prevButtonState = mouse_4.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_4.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_4.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_4.clickableObjects = eval([target_4, C_4, InC_4])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_4.clickableObjects)) {
              mouse_4.clickableObjects = [mouse_4.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_4.clickableObjects) {
              if (obj.contains(mouse_4)) {
                  gotValidClick = true;
                  mouse_4.clicked_name.push(obj.name);
              }
          }
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_4.clickableObjects = eval([target_4, C_4, InC_4])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_4.clickableObjects)) {
              mouse_4.clickableObjects = [mouse_4.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_4.clickableObjects) {
              if (obj.contains(mouse_4)) {
                  gotValidClick = true;
                  mouse_4.clicked_name.push(obj.name);
              }
          }
          if (gotValidClick === true) { 
            _mouseXYs = mouse_4.getPos();
            mouse_4.x.push(_mouseXYs[0]);
            mouse_4.y.push(_mouseXYs[1]);
            mouse_4.leftButton.push(_mouseButtons[0]);
            mouse_4.midButton.push(_mouseButtons[1]);
            mouse_4.rightButton.push(_mouseButtons[2]);
            mouse_4.time.push(mouse_4.mouseClock.getTime());
          }
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *target_4* updates
    if (t >= 0.0 && target_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target_4.tStart = t;  // (not accounting for frame time here)
      target_4.frameNStart = frameN;  // exact frame index
      
      target_4.setAutoDraw(true);
    }
    
    
    // *C_4* updates
    if (t >= 0.0 && C_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      C_4.tStart = t;  // (not accounting for frame time here)
      C_4.frameNStart = frameN;  // exact frame index
      
      C_4.setAutoDraw(true);
    }
    
    
    // *InC_4* updates
    if (t >= 0.0 && InC_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      InC_4.tStart = t;  // (not accounting for frame time here)
      InC_4.frameNStart = frameN;  // exact frame index
      
      InC_4.setAutoDraw(true);
    }
    
    
    // *image_4* updates
    if (t >= 0.0 && image_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_4.tStart = t;  // (not accounting for frame time here)
      image_4.frameNStart = frameN;  // exact frame index
      
      image_4.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    visual_search_4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function visual_search_4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'visual_search_4' ---
    visual_search_4Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('visual_search_4.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_4
    if ((mouse_4.clicked_name.slice((- 1))[0] === corrAns_4)) {
        correct = 1;
    } else {
        correct = 0;
    }
    for (var distractor1, _pj_c = 0, _pj_a = distractors1, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        distractor1 = _pj_a[_pj_c];
        distractor1.setAutoDraw(false);
    }
    for (var distractor2, _pj_c = 0, _pj_a = distractors2, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        distractor2 = _pj_a[_pj_c];
        distractor2.setAutoDraw(false);
    }
    for (var target, _pj_c = 0, _pj_a = targets, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        target = _pj_a[_pj_c];
        target.setAutoDraw(false);
    }
    
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_4.x', mouse_4.x);
    psychoJS.experiment.addData('mouse_4.y', mouse_4.y);
    psychoJS.experiment.addData('mouse_4.leftButton', mouse_4.leftButton);
    psychoJS.experiment.addData('mouse_4.midButton', mouse_4.midButton);
    psychoJS.experiment.addData('mouse_4.rightButton', mouse_4.rightButton);
    psychoJS.experiment.addData('mouse_4.time', mouse_4.time);
    psychoJS.experiment.addData('mouse_4.clicked_name', mouse_4.clicked_name);
    
    // the Routine "visual_search_4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedback_4MaxDurationReached;
var feedback_4MaxDuration;
var feedback_4Components;
function feedback_4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback_4' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    feedback_4Clock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    feedback_4MaxDurationReached = false;
    // update component parameters for each repeat
    fb_4.setText((("\u0e04\u0e38\u0e13\u0e1e\u0e1a\u0e40\u0e1b\u0e49\u0e32\u0e2b\u0e21\u0e32\u0e22\u0e43\u0e19 " + Number.parseInt((mouse_4.time.slice((- 1))[0] * 1000)).toString()) + "ms"));
    trial_counter_4.setText(((trials_4.thisN.toString() + "/") + trials_4.nTotal.toString()));
    // Run 'Begin Routine' code from track_rt_4
    if ((correct === 1)) {
        feedback_text = "ถูกต้อง!";
    } else {
        if ((correct === 0)) {
            feedback_text = "ผิด!";
        }
    }
    FB_4.setText(feedback_text);
    psychoJS.experiment.addData('feedback_4.started', globalClock.getTime());
    feedback_4MaxDuration = null
    // keep track of which components have finished
    feedback_4Components = [];
    feedback_4Components.push(fb_4);
    feedback_4Components.push(trial_counter_4);
    feedback_4Components.push(FB_4);
    
    feedback_4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedback_4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback_4' ---
    // get current time
    t = feedback_4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fb_4* updates
    if (t >= 0.0 && fb_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fb_4.tStart = t;  // (not accounting for frame time here)
      fb_4.frameNStart = frameN;  // exact frame index
      
      fb_4.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fb_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fb_4.setAutoDraw(false);
    }
    
    
    // *trial_counter_4* updates
    if (t >= 0.0 && trial_counter_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_counter_4.tStart = t;  // (not accounting for frame time here)
      trial_counter_4.frameNStart = frameN;  // exact frame index
      
      trial_counter_4.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (trial_counter_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trial_counter_4.setAutoDraw(false);
    }
    
    
    // *FB_4* updates
    if (t >= 0.0 && FB_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FB_4.tStart = t;  // (not accounting for frame time here)
      FB_4.frameNStart = frameN;  // exact frame index
      
      FB_4.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (FB_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      FB_4.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedback_4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback_4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback_4' ---
    feedback_4Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('feedback_4.stopped', globalClock.getTime());
    // Run 'End Routine' code from track_rt_4
    rts.push(mouse_4.time.slice((- 1))[0]);
    n_round_4 += 1;
    if ((n_round_4 > 100)) {
        trials_4.finished = true;
    }
    
    if (feedback_4MaxDurationReached) {
        feedback_4Clock.add(feedback_4MaxDuration);
    } else {
        feedback_4Clock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var endMaxDurationReached;
var endMaxDuration;
var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    endClock.reset();
    routineTimer.reset();
    endMaxDurationReached = false;
    // update component parameters for each repeat
    // Disable downloading results to browser
    psychoJS._saveResults = 0; 
    
    // Generate filename for results
    let filename = psychoJS._experiment._experimentName + '' + psychoJS._experiment._datetime + '.csv';
    
    // Extract data object from experiment
    let dataObj = psychoJS._experiment._trialsData;
    
    // Convert data object to CSV
    // let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
    //     console.log(dataObj)
    //     return Object.values(it).toString()
    // }).join('\n')
    
    // Extract all unique keys from the JSON objects
    const allKeys = [...new Set(dataObj.flatMap(obj => Object.keys(obj)))];
    
    // Convert JSON to CSV format
    const csvRows = [];
    
    // Add header row
    csvRows.push(allKeys.join(','));  
    
    // Add data rows
    for (const obj of dataObj) {
        const row = allKeys.map(key => obj[key] !== undefined ? `"${obj[key]}"` : ''); 
        csvRows.push(row.join(','));
    }
    
    // Change to CSV file
    const data = csvRows.join('\n');
    
    // Send data to OSF via DataPipe
    console.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: '/',
        },
        body: JSON.stringify({
            experimentID: 'uGOyExId5WEs', // ⭑ UPDATE WITH YOUR DATAPIPE EXPERIMENT ID ⭑
            filename: filename,
            data: data,
        }),
    }).then(response => response.json()).then(data => {
        // Log response and force experiment end
        console.log(data);
        quitPsychoJS();
    })
    endMaxDuration = null
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(text_end);
    
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end' ---
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_end* updates
    if (t >= 0.0 && text_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_end.tStart = t;  // (not accounting for frame time here)
      text_end.frameNStart = frameN;  // exact frame index
      
      text_end.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end' ---
    endComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
