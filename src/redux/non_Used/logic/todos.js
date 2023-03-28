import {
    TASKS_FETCH_ADD, TASKS_FETCH_CANCEL, tasksFetchFulfilled,
    tasksFetchRejected, TASKS_FETCH_REJECTED, TASKS_FETCH_FULFILLED
  } from '../../actions/todos';

  const inverterAlarmsFetchLogic = createLogic({
    type: TASKS_FETCH_ADD,
    cancelType:     TASKS_FETCH_CANCEL,
    latest: true, // take latest only
  
    processOptions: {
      dispatchReturn: true,
      successType: tasksFetchFulfilled, // INVERTER_ALARMS_FETCH_FULFILLED, //
      failType: tasksFetchRejected // INVERTER_ALARMS_FETCH_REJECTED //inverterAlarmsFetchRejecte
    },
  
    process({ httpClient, getState, action }, dispatch, done) {
      return httpClient.get(`http://${MICROCONTROLLER_ADRESS}/${INVERTER_ALARMS_ENDPOINT}`)   /////////////////////////////
        .then((resp) => {
          const lastUpdate = new Date(moment(resp.data.lastUpdate, 'DD/MM/YYYY HH:mm:ss').valueOf());
          const tasks = resp.data;
  
          return { data, lastUpdate };
        });
    }
  });
  
  export default [
    tasksFetchLogic
  ];