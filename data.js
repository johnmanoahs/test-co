var owner = [null, 'jtuck', 'samy'];
var state = ['Pending', 'Completed', 'Running', 'Accepted', 'Rejected'];


var data = [

{
  "id": "Tenrox-R1_1235",
  "owner": owner[0],
  "time_started" : "Thu Jun 16 2016 21:28:21 GMT+0530 (India Standard Time)",
  "state": state[0],
  "metrics": {
    //"state" : 0,
    //"running": 50,
    "test": 64,
    "maintainability": 53,
    "security": 64,
    "workmanship": 72,
  },
  "build": state[0],
  "unit_test": {
      "state": state[0],
      "passed": 142,
      "failed": 10,
      "code_covered": 76
    },
  "fn_test": {
      "state": state[0],
      "passed": 4321,
      "failed": 2145,
      "code_covered": 23
  },
  "Result": "Auto-Merged"
}

];