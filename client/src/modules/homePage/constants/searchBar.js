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
      text: 'Unknown',
      isSelected: false
    },
    active: {
      text: 'Active',
      isSelected: true
    },
    retired: {
      text: 'Retired',
      isSelected: false
    },
    destroyed: {
      text: 'Destroyed',
      isSelected: false
    }
  },
  [fieldNames.type]: {
    dragon1: {
      text: "Dragon 1.0",
      isSelected: true
    },
    dragon11: {
      text: "Dragon 1.1",
      isSelected: false
    },
    dragon2: {
      text: "Dragon 2.0",
      isSelected: false
    }
  }
}
