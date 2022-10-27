export const fieldNames = {
  status: 'status',
  serial: 'serial',
  type: 'type'
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
      text: 'Unknown'
    },
    active: {
      text: 'Active'
    },
    retired: {
      text: 'Retired'
    },
    destroyed: {
      text: 'Destroyed'
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
