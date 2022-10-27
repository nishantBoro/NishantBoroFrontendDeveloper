export const fieldNames = {
  status: 'status',
  serial: 'serial',
  type: 'type',
  reuseCount: 'reuseCount',
  waterLandings: 'waterLandings',
  landLandings: 'landLandings',
  lastUpdate: 'lastUpdate'
}

export const fieldPlaceholders = {
  [fieldNames.type]: "Select Type",
  [fieldNames.serial]: "Search by Serial No.",
  [fieldNames.status]: "Select Status",
}

export const SEARCH_API_URL = '/api/search';

export const dropdownItems = {
  [fieldNames.status]: {
    unknown: {
      text: 'unknown'
    },
    active: {
      text: 'active'
    },
    retired: {
      text: 'retired'
    },
    destroyed: {
      text: 'destroyed'
    }
  },
  [fieldNames.type]: {
    dragon1: {
      text: "Dragon 1.0"
    },
    dragon11: {
      text: "Dragon 1.1"
    },
    dragon2: {
      text: "Dragon 2.0"
    }
  }
}
