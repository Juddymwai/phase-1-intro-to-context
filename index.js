// Your code here
let createEmployeeRecord = (array) => {
    return {
      firstName: array[0],
      familyName: array[1],
      title: array[2],
      payPerHour: array[3],
      timeInEvents: [],
      timeOutEvents: []
    }
  
  }
  
  let createEmployeeRecords = (employeeRecords => {
    return employeeRecords.map(array => {
      return createEmployeeRecord(array)
    })
  })
  
  const createTimeInEvent = (employeeRecord, dateStamp) => {
    const [date, hour] = dateStamp.split(" ")
    employeeRecord.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date,
  
    })
    return employeeRecord
  }
  
  let createTimeOutEvent = (employeeRecord, dateStamp) => {
    const [date, hour] = dateStamp.split(" ")
    employeeRecord.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date,
  
  
    })
    return employeeRecord
  }
  
  const hoursWorkedOnDate = (employeeRecord, dateStamp) => {
    const timeIn = employeeRecord.timeInEvents.find((event) => {
      return event.date === dateStamp
  
    })
  
    const timeOut = employeeRecord.timeOutEvents.find((event) => {
      return event.date === dateStamp
    })
  
    const timeWorked = (timeOut.hour - timeIn.hour) / 100
    return timeWorked
    
  }
  
  
  const wagesEarnedOnDate = (employeeRecord, dateStamp) => {
    const wagesEarned = hoursWorkedOnDate (employeeRecord, dateStamp)
    const realWage = wagesEarned * employeeRecord.payPerHour
    return parseInt(realWage)
  
  }
  
  
  const allWagesFor = (employeeRecord) => {
    const dates = employeeRecord.timeInEvents.map(event => {
      return event.date
      //  return allWages.push(wagesEarnedOnDate(employeeRecord, event.date))
  
    }, 0)
  
    const datesToPay = dates.reduce ((total, d) => {
      return total + wagesEarnedOnDate(employeeRecord, d)
    }, 0)
  
    return datesToPay
  
  }
  
  
  
  const calculatePayroll = (employeeArray) => {
    return employeeArray.reduce((total, record) => {
      return total + allWagesFor(record)
    }, 0)
  
  }
