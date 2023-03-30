export const FILTER_ALL = 'FILTER_ALL';
export const FILTER_ACTIVE = 'FILTER_ACTIVE';
export const FILTER_COMPLETED = 'FILTER_COMPLETED';

export const actionTypes = {
    FILTER_ALL,
    FILTER_ACTIVE,
    FILTER_COMPLETED
  };


  export const filterAll = () => ({
    type: FILTER_ALL
  });

  export const filterActive = () => ({
    type: FILTER_ACTIVE
  });

  export const filterCompleted = () => ({
    type: FILTER_COMPLETED
  });
  
  export const actions = {

    filterAll,
    filterActive,
    filterCompleted
  };